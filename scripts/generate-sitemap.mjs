/**
 * Generiše public/sitemap.xml iz jedinog izvora istine — src/seo/pages.ts.
 * Pokreće se automatski prije svakog builda (npm "prebuild").
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(resolve(root, "src/seo/pages.ts"), "utf8");

const BASE = "https://www.derdiedascentar.com";
const paths = [...source.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);

if (paths.length === 0) {
  console.error("sitemap: nijedna ruta nije pronađena u src/seo/pages.ts");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths
    .map(
      (p) =>
        `  <url>\n` +
        `    <loc>${BASE}${p === "/" ? "/" : p}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <priority>${p === "/" ? "1.0" : "0.8"}</priority>\n` +
        `  </url>`,
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml: ${paths.length} ruta`);
