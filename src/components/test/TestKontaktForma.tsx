import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Loader2, Lock, Mail, Phone } from "lucide-react";
import type { TestLead, TestSubmitResult } from "../../lib/testSubmit";
import { trackEvent } from "../../lib/analytics";

interface Props {
  onPosalji: (podaci: TestLead) => void;
  salje: boolean;
  /** Kad backend nije podešen — gotovi linkovi da polaznik sam pošalje rezultat. */
  fallback: Extract<TestSubmitResult, { kind: "fallback" }> | null;
  onPreskoci: () => void;
}

const PRAZNO: TestLead = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

const polje =
  "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 " +
  "focus:ring-yellow-500 focus:border-yellow-500 disabled:opacity-60";

const TestKontaktForma = ({ onPosalji, salje, fallback, onPreskoci }: Props) => {
  const [podaci, setPodaci] = useState<TestLead>(PRAZNO);

  const promjena = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setPodaci((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const posalji = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPosalji(podaci);
  };

  if (fallback) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#10375C] mb-3">Još jedan klik</h2>
        <p className="text-gray-600 mb-7">
          Rezultat ti je spreman. Pošalji nam ga jednim klikom da ti se profesor javi sa
          preporukom — poruka je već popunjena.
        </p>

        <div className="space-y-3 mb-7">
          <a
            href={fallback.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { from: "test" })}
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-3.5 px-4
                       rounded-xl font-semibold hover:bg-[#20bd59] transition min-h-[48px]"
          >
            Pošalji preko WhatsApp-a
          </a>
          <a
            href={fallback.mailto}
            onClick={() => trackEvent("email_click", { from: "test" })}
            className="flex items-center justify-center gap-3 w-full bg-[#10375c] text-white py-3.5 px-4
                       rounded-xl font-semibold hover:bg-[#1e2d47] transition min-h-[48px]"
          >
            <Mail className="w-5 h-5" />
            Pošalji e-mailom
          </a>
          <a
            href={fallback.viber}
            onClick={() => trackEvent("viber_click", { from: "test" })}
            className="flex items-center justify-center gap-3 w-full bg-[#7360F2] text-white py-3.5 px-4
                       rounded-xl font-semibold hover:bg-[#6351d3] transition min-h-[48px]"
          >
            <Phone className="w-5 h-5" />
            Pošalji preko Viber-a
          </a>
        </div>

        <button
          type="button"
          onClick={onPreskoci}
          className="text-[#10375C] font-semibold underline underline-offset-4 hover:text-yellow-600 transition"
        >
          Prikaži mi rezultat bez slanja
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#10375C] mb-3">Test je gotov!</h2>
        <p className="text-gray-600 leading-relaxed">
          Ostavi kontakt i odmah ti prikazujemo procjenu nivoa. Zatim ti se javlja profesor sa
          preporukom programa koji ti stvarno odgovara — bez obaveze da se upišeš.
        </p>
      </div>

      <form
        onSubmit={posalji}
        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">Ime</label>
            <input id="firstName" name="firstName" type="text" required autoComplete="given-name"
              value={podaci.firstName} onChange={promjena} disabled={salje} className={polje} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Prezime</label>
            <input id="lastName" name="lastName" type="text" required autoComplete="family-name"
              value={podaci.lastName} onChange={promjena} disabled={salje} className={polje} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" inputMode="email"
            value={podaci.email} onChange={promjena} disabled={salje} className={polje} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Broj telefona <span className="text-gray-400 font-normal">— nije obavezno</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel"
            value={podaci.phone} onChange={promjena} disabled={salje} className={polje} />
          <p className="text-xs text-gray-400 mt-1.5">
            Ostavi ga samo ako ti je lakše da te pozovemo nego da pišemo.
          </p>
        </div>

        <label className="flex items-start gap-3 pt-2 cursor-pointer">
          <input type="checkbox" name="consent" required checked={podaci.consent} onChange={promjena}
            disabled={salje}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 shrink-0" />
          <span className="text-sm text-gray-600 leading-snug">
            Slažem se da me Der Die Das kontaktira povodom rezultata testa i ponude kurseva.
          </span>
        </label>

        <button
          type="submit"
          disabled={salje}
          className="w-full inline-flex items-center justify-center gap-2 bg-yellow-500 text-black py-4 px-4
                     rounded-xl font-semibold text-lg hover:bg-yellow-400 transition min-h-[48px]
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {salje ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Šaljem...
            </>
          ) : (
            "Prikaži moj rezultat"
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <Lock className="w-3.5 h-3.5" />
          Podatke ne dijelimo ni sa kim i koristimo ih samo za kontakt.
        </p>
      </form>
    </div>
  );
};

export default TestKontaktForma;
