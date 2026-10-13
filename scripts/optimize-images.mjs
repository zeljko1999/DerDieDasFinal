/**
 * Skida slike sa udaljenih domena, optimizuje ih i upisuje u public/images/.
 *
 * Zašto: sve slike sajta su bile hotlinkovane sa i.imgur.com i još tri tuđa
 * domena, u punoj rezoluciji — 4.19 MB samo na početnoj. Ako neko od tih izvora
 * obriše fajl ili blokira hotlinking, slika nestaje sa sajta.
 *
 * Pokretanje:  npm run images
 *
 * Za svaku sliku pravi:
 *   public/images/<kljuc>-<sirina>.webp   (400 / 800 / 1200 / 1600 px)
 *   public/images/<kljuc>.<jpg|png>       (fallback za stare browsere)
 * i upisuje dimenzije u src/config/imageManifest.json, odakle ih čita <Img>.
 *
 * Slika koja se ne može skinuti se preskače — ostaje na `remote` URL-u i sajt
 * radi normalno. Skripta se može pokretati više puta; već obrađene preskače.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/images");
const manifestPath = join(root, "src/config/imageManifest.json");
const rawDir = join(root, "raw-images");

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error("\nTreba `sharp`:  npm i -D sharp\n");
  process.exit(1);
}

// Čitamo TS fajl regexom da izbjegnemo build korak samo za listu slika.
const source = readFileSync(join(root, "src/config/imageSources.ts"), "utf8");
const entries = [
  ...source.matchAll(
    /(\w+):\s*\{\s*remote:\s*\n?\s*"([^"]+)"/g,
  ),
].map(([, key, remote]) => ({ key, remote }));

if (!entries.length) {
  console.error("Nijedna slika nije pronađena u src/config/imageSources.ts");
  process.exit(1);
}

const WIDTHS = [400, 800, 1200, 1600];
mkdirSync(outDir, { recursive: true });

const manifest = existsSync(manifestPath)
  ? JSON.parse(readFileSync(manifestPath, "utf8"))
  : {};

const force = process.argv.includes("--force");
let done = 0,
  skipped = 0,
  failed = 0;

for (const { key, remote } of entries) {
  if (manifest[key] && !force) {
    skipped++;
    continue;
  }

  let input;
  // Ako postoji lokalna kopija u raw-images/, koristi nju (radi i bez interneta).
  const localCandidate = [".jpg", ".jpeg", ".png", ".webp"]
    .map((ext) => join(rawDir, key + ext))
    .find((p) => existsSync(p));

  if (localCandidate) {
    input = readFileSync(localCandidate);
  } else {
    try {
      const response = await fetch(remote);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      input = Buffer.from(await response.arrayBuffer());
    } catch (error) {
      console.error(`  preskočeno  ${key} — ${error.message}`);
      failed++;
      continue;
    }
  }

  const image = sharp(input);
  const { width, height, format } = await image.metadata();
  const fallbackFormat = format === "png" ? "png" : "jpg";

  const widths = WIDTHS.filter((w) => w <= width);
  if (widths.length === 0) widths.push(width);

  for (const w of widths) {
    await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(join(outDir, `${key}-${w}.webp`));
  }

  const fallbackWidth = Math.min(width, 1600);
  const pipeline = sharp(input).resize({
    width: fallbackWidth,
    withoutEnlargement: true,
  });
  await (fallbackFormat === "png"
    ? pipeline.png({ compressionLevel: 9, palette: true })
    : pipeline.jpeg({ quality: 80, mozjpeg: true })
  ).toFile(join(outDir, `${key}.${fallbackFormat}`));

  manifest[key] = {
    width,
    height,
    widths,
    format: fallbackFormat,
    fallbackWidth,
  };
  done++;
  console.log(`  ${key.padEnd(26)} ${width}×${height}  ->  ${widths.join(", ")} px webp`);
}

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(
  `\nslike: ${done} obrađeno, ${skipped} već postojalo, ${failed} preskočeno` +
    (failed ? " (ostaju na udaljenom URL-u)" : "") +
    "\n",
);
