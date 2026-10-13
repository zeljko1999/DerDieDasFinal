import { imageSources } from "./imageSources";
import type { ImageKey } from "./imageSources";
import manifest from "./imageManifest.json";

export type { ImageKey };

interface ManifestEntry {
  width: number;
  height: number;
  widths: number[];
  format: "jpg" | "png";
  fallbackWidth: number;
}

const optimized = manifest as Record<string, ManifestEntry>;

export interface ResolvedImage {
  /** URL za `src` — lokalni ako je slika obrađena, inače originalni udaljeni. */
  src: string;
  /** srcset za WebP verzije; prazno dok slika nije obrađena. */
  webpSrcSet: string;
  alt: string;
  width?: number;
  height?: number;
  isLocal: boolean;
}

export function resolveImage(key: ImageKey): ResolvedImage {
  const source = imageSources[key];
  const entry = optimized[key];

  if (!entry) {
    // Još nije prošla kroz `npm run images` — koristi originalni URL.
    return {
      src: source.remote,
      webpSrcSet: "",
      alt: source.alt,
      isLocal: false,
    };
  }

  return {
    src: `/images/${key}.${entry.format}`,
    webpSrcSet: entry.widths
      .map((w) => `/images/${key}-${w}.webp ${w}w`)
      .join(", "),
    alt: source.alt,
    width: entry.width,
    height: entry.height,
    isLocal: true,
  };
}

/** Apsolutni URL slike za Open Graph — social scraperi ne prihvataju relativne. */
export function absoluteImageUrl(key: ImageKey, siteUrl: string): string {
  const entry = optimized[key];
  return entry
    ? `${siteUrl}/images/${key}.${entry.format}`
    : imageSources[key].remote;
}
