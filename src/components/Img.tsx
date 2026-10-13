import { resolveImage } from "../config/images";
import type { ImageKey } from "../config/images";

interface ImgProps {
  name: ImageKey;
  className?: string;
  /** Prepiši `alt` iz registra kad kontekst traži drugačiji opis. */
  alt?: string;
  /** Slike iznad pregiba: bez lazy-a i sa visokim prioritetom. */
  priority?: boolean;
  /** `sizes` za srcset — koliko prostora slika zauzima na ekranu. */
  sizes?: string;
}

/**
 * Jedna slika, servirana najbolje što se može:
 *  - WebP sa srcset-om kad je slika prošla kroz `npm run images`
 *  - originalni format kao fallback
 *  - `loading="lazy"` i `decoding="async"` za sve osim hero slika
 *
 * `<picture>` ima `display: contents` da ne pomjera nijedan postojeći layout —
 * sve Tailwind klase i dalje djeluju direktno na <img>.
 */
const Img = ({
  name,
  className,
  alt,
  priority = false,
  sizes = "100vw",
}: ImgProps) => {
  const image = resolveImage(name);

  const img = (
    <img
      src={image.src}
      alt={alt ?? image.alt}
      className={className}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  if (!image.webpSrcSet) return img;

  return (
    <picture className="contents">
      <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
      {img}
    </picture>
  );
};

export default Img;
