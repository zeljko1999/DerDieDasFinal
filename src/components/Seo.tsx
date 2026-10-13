import { Helmet } from "react-helmet";
import { site } from "../config/site";
import type { PageMeta } from "../seo/pages";

interface SeoProps {
  meta: PageMeta;
  /**
   * Ručni preload hero slike. Gotovo nikad nije potreban: <Img priority> već
   * šalje `fetchpriority="high"`, a prerenderovani HTML ima <img> tag odmah,
   * pa ga preload scanner nađe bez ovoga. Ranije je ovdje stajao imgur URL koji
   * stranica više ne koristi — svaka posjeta je povlačila jednu suvišnu sliku.
   */
  preloadImage?: string;
  /** JSON-LD blokovi za ovu stranicu. */
  schemas?: unknown[];
}

/**
 * Sve što ide u <head> na jednom mjestu: naslov, opis, canonical,
 * Open Graph (Facebook, Viber, WhatsApp), Twitter i structured data.
 */
const Seo = ({ meta, preloadImage, schemas = [] }: SeoProps) => {
  const canonical = `${site.url}${meta.path}`;

  return (
    <Helmet>
      <html lang="bs" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={`${site.name} — ${site.tagline}`}
      />
      <meta property="og:locale" content="bs_BA" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
