import { ExternalLink, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ViberIcon, WhatsAppIcon } from "./FloatingContact";
import { site, contactLinks } from "../config/site";
import { trackEvent } from "../lib/analytics";

const MAPS_URL =
  "https://www.google.com/maps/place/Der+Die+Das+-+Centar+Za+Njema%C4%8Dki+Jezik/@44.7652355,17.1844566,17z/data=!3m1!4b1!4m6!3m5!1s0x475e03b23a8d4a17:0xe22d2d58a238b141!8m2!3d44.7652317!4d17.1870315";

const MAPA_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.3681896114394!2d17.18730867670282!3d44.77267997107249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03246a46b759%3A0x9c7c1f8a6b5f7a9a!2sSlavka%20Rodi%C4%87a%201%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1716316800000!5m2!1sen!2sba";

const stavke = [
  { Icon: Phone, label: "Telefon", value: site.phone, href: contactLinks.tel, event: "call_click" },
  { Icon: Mail, label: "Email", value: site.email, href: contactLinks.mail, event: "email_click" },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "derdiedas.banjaluka",
    href: site.social.instagram,
    external: true,
  },
  {
    Icon: Facebook,
    label: "Facebook",
    value: "Der Die Das – Škola",
    href: site.social.facebook,
    external: true,
  },
] as const;

/**
 * Kontakt sekcija — prepravljena po primjedbama klijenta:
 *  - uklonjen isprekidani okvir oko teksta,
 *  - tekst skraćen sa dva pasusa na dvije rečenice,
 *  - sve ikonice u istom okviru od 40px (ranije su bile 32px i 36px izmiješano),
 *  - adresa izdvojena IZNAD mape, a ne zakopana na dnu liste,
 *  - kontakt podaci su kartice koje se odmah uočavaju.
 */
const ContactSection = () => (
  <section className="py-16 sm:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-yellow-600 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          Javi nam se
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#10375C]">Kontakt</h2>
        <div className="w-16 h-1 bg-yellow-500 rounded-full mx-auto mt-4 mb-6" />
        <p className="text-gray-600 leading-relaxed">
          Trebaju ti informacije o terminima, pomoć pri odabiru programa ili uvodni razgovor
          sa profesorom? Piši nam ili nas pozovi — odgovaramo u najkraćem roku.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Lijevo: kontakt podaci */}
        <div className="flex flex-col gap-4 h-full">
          <div className="grid grid-cols-1 gap-3.5 flex-grow content-start">
            {stavke.map(({ Icon, label, value, href, ...rest }) => {
              const external = "external" in rest && rest.external;
              return (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() =>
                    "event" in rest && rest.event
                      ? trackEvent(rest.event, { from: "contact" })
                      : undefined
                  }
                  className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4
                             shadow-sm hover:shadow-md hover:border-yellow-300 transition-all min-h-[64px]"
                >
                  <span
                    className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-[#10375C]
                               group-hover:bg-yellow-500 transition-colors"
                    aria-hidden="true"
                  >
                    <Icon
                      className="w-5 h-5 text-white group-hover:text-[#10375C] transition-colors"
                      strokeWidth={1.9}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {label}
                    </span>
                    <span className="block text-[15px] font-medium text-[#10375C] leading-snug">
                      {value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={contactLinks.viber}
              onClick={() => trackEvent("viber_click", { from: "contact" })}
              className="flex items-center justify-center gap-2.5 bg-[#7360F2] text-white py-3.5 px-4
                         rounded-xl font-semibold hover:bg-[#6351d3] transition-colors shadow-sm min-h-[48px]"
            >
              <ViberIcon className="w-5 h-5" />
              Viber
            </a>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { from: "contact" })}
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3.5 px-4
                         rounded-xl font-semibold hover:bg-[#20bd59] transition-colors shadow-sm min-h-[48px]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Desno: adresa IZNAD mape */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <span
              className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-[#10375C]
                         group-hover:bg-yellow-500 transition-colors"
              aria-hidden="true"
            >
              <MapPin
                className="w-5 h-5 text-white group-hover:text-[#10375C] transition-colors"
                strokeWidth={1.9}
              />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Adresa
              </span>
              <span className="flex items-center gap-1.5 text-[15px] font-medium text-[#10375C]">
                {site.address.street}, {site.address.city}
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </span>
            </span>
          </a>

          <iframe
            title="Lokacija centra Der Die Das na mapi"
            src={MAPA_EMBED}
            className="w-full h-[300px] sm:h-[340px] lg:h-[calc(100%-84px)] lg:min-h-[300px] block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
