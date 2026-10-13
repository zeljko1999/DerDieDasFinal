import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ChangeEvent, FormEvent } from "react";
import { X, Check, Mail, Phone } from "lucide-react";
import { courses } from "../config/site";
import { submitContactRequest } from "../lib/contact";
import type { ContactResult } from "../lib/contact";
import { trackEvent } from "../lib/analytics";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Predizabrani kurs kad se modal otvara sa stranice konkretnog kursa. */
  defaultCourse?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "fallback";

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  courseInterest: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-60";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

const ContactModal = ({
  isOpen,
  onClose,
  defaultCourse,
}: ContactModalProps) => {
  const [formData, setFormData] = useState({
    ...EMPTY,
    courseInterest: defaultCourse ?? "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fallback, setFallback] = useState<Extract<
    ContactResult,
    { kind: "fallback" }
  > | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);

  const close = () => {
    onClose();
    setStatus("idle");
    setFallback(null);
  };

  // Zatvaranje na ESC i zaključan skrol pozadine dok je modal otvoren.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "submitting") close();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const result = await submitContactRequest(formData);

    if (result.kind === "sent") {
      trackEvent("form_submit", { course: formData.courseInterest });
      setStatus("success");
      setFormData({ ...EMPTY, courseInterest: defaultCourse ?? "" });
      setTimeout(close, 2500);
    } else {
      // Backend nije podešen ili ne odgovara — nudimo direktne kanale.
      trackEvent("form_fallback", { course: formData.courseInterest });
      setFallback(result);
      setStatus("fallback");
    }
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  /*
   * Modal se renderuje kroz portal u <body>.
   *
   * Prije je bio dijete <Swiper> komponente u HeroSlider-u. Swiper na wrapper
   * stavlja `transform`, što `position: fixed` pretvara u pozicioniranje u
   * odnosu na taj element, a `overflow-hidden` na slajderu ga je onda
   * odsijecao. Na desktopu se još naziralo, na telefonu je ispadalo da dugme
   * "Zakaži besplatni uvodni razgovor" uopšte ne radi.
   */
  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[100] flex items-center justify-center overflow-y-auto py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget && status !== "submitting") close();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 relative animate-fadeIn my-auto outline-none"
      >
        <button
          onClick={close}
          aria-label="Zatvori"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors p-2 -m-2"
          disabled={status === "submitting"}
        >
          <X className="w-6 h-6" />
        </button>

        {status === "success" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 id="contact-modal-title" className="text-2xl font-bold mb-2">
              Hvala!
            </h2>
            <p className="text-gray-600">
              Vaša prijava je uspješno poslana. Kontaktiraćemo vas uskoro.
            </p>
          </div>
        )}

        {status === "fallback" && fallback && (
          <div className="py-4">
            <h2 id="contact-modal-title" className="text-2xl font-bold mb-2">
              Još jedan klik
            </h2>
            <p className="text-gray-600 mb-6">
              Podaci su spremni — izaberite kako želite da nam ih pošaljete.
              Poruka je već popunjena.
            </p>
            <div className="space-y-3">
              <a
                href={fallback.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { from: "form" })}
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#20bd59] transition"
              >
                Pošalji preko WhatsApp-a
              </a>
              <a
                href={fallback.mailto}
                onClick={() => trackEvent("email_click", { from: "form" })}
                className="flex items-center justify-center gap-3 w-full bg-[#10375c] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#1e2d47] transition"
              >
                <Mail className="w-5 h-5" />
                Pošalji e-mailom
              </a>
              <a
                href={fallback.viber}
                onClick={() => trackEvent("viber_click", { from: "form" })}
                className="flex items-center justify-center gap-3 w-full bg-[#7360F2] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#6351d3] transition"
              >
                <Phone className="w-5 h-5" />
                Pošalji preko Viber-a
              </a>
            </div>
          </div>
        )}

        {(status === "idle" || status === "submitting") && (
          <>
            <h2 id="contact-modal-title" className="text-2xl font-bold mb-6">
              Zakaži besplatan uvodni razgovor
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    Ime
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    disabled={status === "submitting"}
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Prezime
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    disabled={status === "submitting"}
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  disabled={status === "submitting"}
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Broj telefona
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  disabled={status === "submitting"}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="courseInterest" className={labelClass}>
                  Šta vas zanima
                </label>
                <select
                  id="courseInterest"
                  name="courseInterest"
                  disabled={status === "submitting"}
                  value={formData.courseInterest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">— izaberite —</option>
                  {courses.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Poruka <span className="text-gray-400">(opciono)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  disabled={status === "submitting"}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-yellow-500 text-black py-3 px-4 rounded-md font-semibold hover:bg-yellow-400 transition mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Slanje..." : "Pošalji"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default ContactModal;
