import { Clock, ListChecks, ShieldCheck, Target } from "lucide-react";

interface Props {
  brojPitanja: number;
  onStart: () => void;
}

const stavke = [
  { Icon: ListChecks, tekst: "pitanja iz gramatike i vokabulara, od nivoa A1 do B2" },
  { Icon: Clock, tekst: "traje oko 5 minuta, bez vremenskog ograničenja po pitanju" },
  { Icon: Target, tekst: "na kraju ostavljaš kontakt i dobijaš procjenu nivoa i preporuku programa" },
  { Icon: ShieldCheck, tekst: "podatke koristimo samo da ti se javimo — ne dijelimo ih ni sa kim" },
];

const TestIntro = ({ brojPitanja, onStart }: Props) => (
  <div className="max-w-2xl mx-auto text-center">
    <span className="inline-block text-yellow-600 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
      Besplatno i bez obaveze
    </span>
    <h1 className="text-3xl sm:text-4xl font-bold text-[#10375C] mb-4">
      Provjeri svoj nivo njemačkog
    </h1>
    <div className="w-16 h-1 bg-yellow-500 rounded-full mx-auto mb-6" />
    <p className="text-gray-600 leading-relaxed mb-10">
      Kratak test koji ti pokazuje gdje si trenutno i koji program ti ima smisla upisati.
      Nema pripreme ni pravog i pogrešnog razloga da ga radiš — samo iskren rezultat.
    </p>

    <ul className="text-left space-y-4 mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-7">
      {stavke.map(({ Icon, tekst }, i) => (
        <li key={i} className="flex items-start gap-4">
          <span
            className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-[#10375C]"
            aria-hidden="true"
          >
            <Icon className="w-5 h-5 text-yellow-500" strokeWidth={1.9} />
          </span>
          <span className="text-gray-700 pt-2 text-[15px] leading-snug">
            {i === 0 ? (
              <>
                <strong className="text-[#10375C]">{brojPitanja}</strong> {tekst}
              </>
            ) : (
              tekst
            )}
          </span>
        </li>
      ))}
    </ul>

    <button
      type="button"
      onClick={onStart}
      className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-500 text-black px-8 py-4
                 rounded-xl font-semibold text-lg shadow-lg shadow-yellow-500/20 hover:bg-yellow-400
                 active:scale-[0.98] transition min-h-[48px] focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2"
    >
      Započni test
    </button>
    <p className="text-sm text-gray-400 mt-4">Rezultat vidiš odmah, ništa se ne naplaćuje.</p>
  </div>
);

export default TestIntro;
