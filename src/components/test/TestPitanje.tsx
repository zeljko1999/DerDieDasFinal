import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PromijesanoPitanje } from '../../lib/test';

interface Props {
  pitanje: PromijesanoPitanje;
  izabrano: number | undefined;
  onIzbor: (indeks: number) => void;
  onNazad: () => void;
  onDalje: () => void;
  jePrvo: boolean;
  jePosljednje: boolean;
}

const TestPitanje = ({
  pitanje, izabrano, onIzbor, onNazad, onDalje, jePrvo, jePosljednje,
}: Props) => (
  <div>
    <div className="mb-6">
      <span className="inline-block text-xs font-semibold tracking-wider text-yellow-600 uppercase mb-2">
        Nivo {pitanje.nivo}
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#10375C] leading-snug">{pitanje.tekst}</h2>

      {pitanje.recenica && (
        <p
          className="mt-5 text-lg sm:text-xl text-[#10375C] bg-[#f3f7fb] border-l-4 border-yellow-500
                     rounded-r-xl px-5 py-4 font-medium"
          lang="de"
        >
          {pitanje.recenica}
        </p>
      )}
    </div>

    <fieldset className="space-y-3">
      <legend className="sr-only">Izaberi odgovor</legend>
      {pitanje.opcije.map((opcija, i) => {
        const aktivno = izabrano === i;
        return (
          <label
            key={i}
            className={`flex items-center gap-4 w-full p-4 rounded-xl border-2 cursor-pointer transition-all
              ${aktivno
                ? 'border-yellow-500 bg-yellow-50 shadow-sm'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}
          >
            <input
              type="radio"
              name={`pitanje-${pitanje.id}`}
              checked={aktivno}
              onChange={() => onIzbor(i)}
              className="sr-only"
            />
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 transition-colors
                ${aktivno ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-500'}`}
              aria-hidden="true"
            >
              {String.fromCharCode(65 + i)}
            </span>
            <span className={`text-[15px] sm:text-base ${aktivno ? 'text-[#10375C] font-medium' : 'text-gray-700'}`} lang="de">
              {opcija}
            </span>
          </label>
        );
      })}
    </fieldset>

    <div className="flex items-center justify-between gap-4 mt-8">
      <button
        type="button"
        onClick={onNazad}
        disabled={jePrvo}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-gray-600
                   hover:text-[#10375C] hover:bg-gray-100 transition disabled:opacity-0 disabled:pointer-events-none"
      >
        <ArrowLeft className="w-4 h-4" />
        Nazad
      </button>

      <button
        type="button"
        onClick={onDalje}
        disabled={izabrano === undefined}
        className="inline-flex items-center gap-2 bg-[#10375C] text-white px-7 py-3 rounded-xl font-semibold min-h-[48px]
                   hover:bg-[#164a7c] active:scale-[0.98] transition disabled:opacity-40
                   disabled:cursor-not-allowed disabled:active:scale-100"
      >
        {jePosljednje ? 'Završi test' : 'Dalje'}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>

    {izabrano === undefined && (
      <p className="text-sm text-gray-400 text-right mt-3">Izaberi jedan odgovor da nastaviš.</p>
    )}
  </div>
);

export default TestPitanje;
