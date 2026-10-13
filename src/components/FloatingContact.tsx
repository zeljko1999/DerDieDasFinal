import { Phone } from "lucide-react";
import { contactLinks, site } from "../config/site";
import { trackEvent } from "../lib/analytics";

export const ViberIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="m20.19 2.337c-.595-.545-3.005-2.297-8.372-2.32 0 0-6.333-.379-9.418 2.452-1.716 1.716-2.317 4.229-2.386 7.346s-.146 8.959 5.485 10.547h.005l-.005 2.419s-.037.98.607 1.177c.778.244 1.238-.502 1.983-1.304.408-.441.97-1.087 1.397-1.58.6.059 1.296.092 2.001.092 1.827 0 3.602-.225 5.298-.649l-.15.032c.778-.253 5.18-.816 5.892-6.657.744-6.03-.354-9.834-2.337-11.555zm.652 11.115c-.607 4.875-4.173 5.185-4.829 5.395-1.432.364-3.076.572-4.769.572-.486 0-.968-.017-1.445-.051l.064.004s-2.438 2.939-3.197 3.703c-.248.248-.521.228-.516-.267 0-.323.019-4.018.019-4.018-4.767-1.322-4.491-6.298-4.435-8.897s.544-4.735 1.997-6.169c2.612-2.367 7.989-2.016 7.989-2.016 4.543.019 6.718 1.388 7.224 1.847 1.674 1.435 2.527 4.867 1.898 9.896zm-6.511-3.788v.014c0 .168-.136.304-.304.304-.163 0-.296-.128-.303-.289v-.001c.004-.042.007-.092.007-.141 0-.801-.649-1.45-1.45-1.45-.03 0-.06.001-.089.003h.004c-.161-.009-.288-.141-.288-.303 0-.168.136-.304.304-.304h.017-.001c.02-.001.045-.001.069-.001 1.126 0 2.038.912 2.038 2.038 0 .046-.002.092-.005.137v-.006zm.951.531c.047-1.988-1.195-3.544-3.553-3.718-.159-.011-.283-.143-.283-.303 0-.168.136-.304.304-.304.007 0 .015 0 .022.001h-.001.017c2.267 0 4.106 1.838 4.106 4.106 0 .081-.002.162-.007.242l.001-.011c-.004.165-.138.296-.303.296-.168 0-.304-.136-.304-.304 0-.003 0-.005 0-.008zm2.2.629v.002c0 .168-.136.304-.304.304s-.302-.135-.303-.301c-.024-3.822-2.573-5.903-5.662-5.925-.168 0-.303-.136-.303-.303s.136-.303.303-.303c3.459.024 6.239 2.411 6.267 6.525zm-.525 4.598v.009c-.506.891-1.453 1.875-2.428 1.561l-.009-.014c-1.832-.684-3.416-1.578-4.831-2.679l.041.03c-.743-.592-1.396-1.245-1.969-1.963l-.019-.025c-.509-.638-.986-1.352-1.402-2.106l-.04-.079c-.457-.746-.87-1.608-1.193-2.513l-.03-.098c-.314-.975.665-1.922 1.561-2.428h.009c.13-.083.288-.133.458-.133.267 0 .505.123.662.314l.001.002s.581.693.83 1.036c.234.319.549.83.712 1.115.094.147.149.327.149.52 0 .288-.124.547-.322.726l-.001.001-.562.45c-.155.15-.251.36-.251.592 0 .023.001.045.003.067v-.003c.579 1.903 2.048 3.372 3.91 3.941l.042.011c.019.002.042.003.064.003.232 0 .442-.096.592-.25l.45-.562c.18-.199.439-.323.727-.323.193 0 .372.056.524.152l-.004-.002c.813.463 1.516.972 2.157 1.549l-.011-.01c.192.154.313.389.313.652 0 .169-.05.326-.137.458l.002-.003z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/**
 * Plutajuća kontakt dugmad.
 *
 * Ranije su stajala UNUTAR <SwiperSlide> u HeroSlider-u. Swiper na svoj wrapper
 * stavlja `transform`, a `transform` predak lomi `position: fixed` — dugmad su
 * zato bila zakucana za hero umjesto da prate skrol, duplirana po slajdu, i
 * nevidljiva na svim stranicama osim početne. Sada idu kroz portal direktno u
 * <body>, tačno jednom po stranici.
 *
 * Sva tri dugmeta imaju isti okvir (48px) i istu veličinu ikonice (22px);
 * dugme za poziv je u brend plavoj, jer se žuta stapala sa glavnim CTA dugmetom.
 *
 * NAMJERNO BEZ PORTALA: `npm run build:prerender` upisuje gotov HTML u dist/,
 * pa bi portal u <body> ostao i poslije `createRoot().render()` — React briše
 * samo sadržaj #root diva. Rezultat su bila dva kompleta dugmadi jedan preko
 * drugog. Ovdje portal ionako ništa ne rješava: komponenta se renderuje na
 * nivou stranice, gdje nema `transform` pretka koji bi slomio `position: fixed`.
 */
const FloatingContact = () => {
  const base =
    "flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ring-1 ring-black/5 " +
    "transition-transform duration-200 hover:scale-110 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500";

  return (
    <div
      className="fixed z-[60] flex flex-col gap-3 right-4 bottom-4 sm:right-6 sm:bottom-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={contactLinks.viber}
        className={`${base} bg-[#7360F2] hover:bg-[#6351d3]`}
        onClick={() => trackEvent("viber_click", { from: "float" })}
        aria-label={`Viber — ${site.name}`}
      >
        <ViberIcon className="w-[22px] h-[22px]" />
      </a>

      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] hover:bg-[#20bd59]`}
        onClick={() => trackEvent("whatsapp_click", { from: "float" })}
        aria-label={`WhatsApp — ${site.name}`}
      >
        <WhatsAppIcon className="w-[22px] h-[22px]" />
      </a>

      <a
        href={contactLinks.tel}
        className={`${base} bg-[#10375C] hover:bg-[#164a7c]`}
        onClick={() => trackEvent("call_click", { from: "float" })}
        aria-label={`Pozovi ${site.phone}`}
      >
        <Phone className="w-[22px] h-[22px]" strokeWidth={2.25} />
      </a>
    </div>
  );
};

export default FloatingContact;
