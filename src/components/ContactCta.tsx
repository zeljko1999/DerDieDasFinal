import { useState } from "react";
import { Phone, Mail, MessageSquareText } from "lucide-react";
import ContactModal from "./ContactModal";
import { contactLinks, site } from "../config/site";
import { trackEvent } from "../lib/analytics";

interface ContactCtaProps {
  /** Kurs koji se predizabira u formi — obično stranica na kojoj CTA stoji. */
  course?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Poziv na akciju za dno svake podstranice.
 * Prije ovoga jedini CTA na sajtu je bio u slajderu na početnoj stranici.
 */
const ContactCta = ({
  course,
  title = "Zainteresovani ste?",
  subtitle = "Zakažite besplatan uvodni razgovor — dogovorimo nivo, termine i tempo koji vama odgovara.",
}: ContactCtaProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    trackEvent("cta_open", { course: course ?? "none" });
    setIsModalOpen(true);
  };

  return (
    <section id="prijava" className="py-16 bg-[#10375c]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-base sm:text-lg text-gray-200 mb-8">{subtitle}</p>

          <button
            onClick={openModal}
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition text-base sm:text-lg"
          >
            Zakaži besplatan uvodni razgovor
          </button>

          <p className="mt-8 mb-4 text-sm text-gray-300">
            Ili nam se javite direktno:
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={contactLinks.tel}
              onClick={() => trackEvent("call_click", { from: "cta" })}
              className="flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium"
            >
              <Phone className="w-5 h-5" />
              {site.phone}
            </a>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { from: "cta" })}
              className="flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-lg bg-[#25D366] hover:bg-[#20bd59] transition font-medium"
            >
              <MessageSquareText className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={contactLinks.mail}
              onClick={() => trackEvent("email_click", { from: "cta" })}
              className="flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium"
            >
              <Mail className="w-5 h-5" />
              E-mail
            </a>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={course}
      />
    </section>
  );
};

export default ContactCta;
