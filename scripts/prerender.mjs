/**
 * Prerender: upisuje gotov HTML svake rute u dist/, da ga vide oni koji ne
 * pokreću JavaScript.
 *
 * Zašto je ovo bitno:
 *  - Facebook, Viber i WhatsApp NE izvršavaju JS kad prave pregled linka.
 *    Bez ovoga, dijeljen link na bilo koju podstranicu nema ni naslov ni sliku,
 *    jer te tagove postavlja react-helmet tek nakon što se React pokrene.
 *  - Google izvršava JS, ali sporije i nepouzdanije nego gotov HTML.
 *
 * Pokretanje:  npm run build:prerender
 *
 * Traži `playwright`. Ako nije instaliran, skripta se uredno preskače i build
 * ostaje ispravan — samo bez statičkog HTML-a.
 *   npm i -D playwright && npx playwright install chromium
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, extname } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.log(
    "\nprerender: playwright nije instaliran — preskačem.\n" +
      "  npm i -D playwright && npx playwright install chromium\n",
  );
  process.exit(0);
}

const paths = [
  ...readFileSync(resolve(root, "src/seo/pages.ts"), "utf8").matchAll(
    /path:\s*"([^"]+)"/g,
  ),
].map((m) => m[1]);

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

// Čisti Vite-ov index.html se čita JEDNOM, prije nego što ga prerender prepiše.
// Bez ovoga bi druga ruta dobila HTML prve — zajedno sa njenim <link
// rel="modulepreload"> tagovima — pa bi svaka stranica vukla i tuđe chunkove.
const template = readFileSync(join(dist, "index.html"));

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const file = join(dist, urlPath);
  const isAsset = Boolean(extname(urlPath)) && existsSync(file);
  res.setHeader(
    "Content-Type",
    isAsset ? (MIME[extname(file)] ?? "application/octet-stream") : "text/html",
  );
  res.end(isAsset ? readFileSync(file) : template);
});

const PORT = 4321;
await new Promise((r) => server.listen(PORT, r));

// PRERENDER_CHROMIUM dozvoljava sistemski Chromium (npr. u CI-u) umjesto onog
// koji playwright sam skida.
const browser = await chromium.launch(
  process.env.PRERENDER_CHROMIUM
    ? { executablePath: process.env.PRERENDER_CHROMIUM, args: ["--no-sandbox"] }
    : {},
);
const context = await browser.newContext();

// Slike nisu potrebne za HTML izlaz i samo usporavaju prerender.
await context.route("**/*.{png,jpg,jpeg,webp,gif,svg,woff,woff2}", (r) =>
  r.abort(),
);

let count = 0;
const results = [];
for (const path of paths) {
  const page = await context.newPage();
  try {
    await page.goto(`http://localhost:${PORT}${path}`, {
      waitUntil: "domcontentloaded",
    });
    await page.waitForSelector("#root h1", { timeout: 10000 });
    await page.waitForTimeout(400);

    // Skupljamo pa upisujemo tek na kraju, da prerenderovan HTML jedne rute
    // nikad ne posluži drugoj.
    results.push({ path, html: "<!doctype html>\n" + (await page.content()) });
    count++;
    console.log(`prerender: ${path}`);
  } catch (error) {
    console.error(`prerender: ${path} nije uspio — ${error.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

for (const { path, html } of results) {
  const outDir = path === "/" ? dist : join(dist, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
}
console.log(`prerender: ${count}/${paths.length} ruta upisano u dist/\n`);
