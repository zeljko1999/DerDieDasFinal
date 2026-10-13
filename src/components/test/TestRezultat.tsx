import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, X, CalendarCheck } from 'lucide-react';
import { Rezultat, OPIS_NIVOA, promijesaj } from '../../lib/test';
import { PITANJA, NIVOI, PITANJA_PO_NIVOU } from '../../data/testPitanja';
import { trackEvent } from '../../lib/analytics';

interface Props {
  rezultat: Rezultat;
  odgovori: Record<number, number>;
  ime: string;
  onZakazi: () => void;
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

const TestRezultat = ({ rezultat, odgovori, ime, onZakazi }: Props) => {
  const [pregled, setPregled] = useState(false);
  const { nivo, ukupno, maksimum, poNivou, preporuka } = rezultat;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Nivo */}
      <div className="text-center mb-10">
        <p className="text-gray-500 mb-2">{ime}, evo tvoje procjene:</p>
        <div className="inline-flex flex-col items-center bg-[#10375C] text-white rounded-3xl px-10 py-8 shadow-xl">
          <span className="text-xs uppercase tracking-[0.2em] text-yellow-400 mb-2">Procijenjeni nivo</span>
          <span className="text-5xl sm:text-6xl font-bold leading-none">{nivo}</span>
          <span className="text-white/70 text-sm mt-3">{ukupno} od {maksimum} tačnih odgovora</span>
        </div>
        <p className="text-gray-600 mt-5 max-w-md mx-auto">{OPIS_NIVOA[nivo]}</p>
      </div>

      {/* Rezultat po nivoima */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-7 mb-6">
        <h3 className="font-bold text-[#10375C] mb-5">Kako si prošao/la po nivoima</h3>
        <div className="space-y-4">
          {NIVOI.map((n) => {
            const broj = poNivou[n];
            const procenat = (broj / PITANJA_PO_NIVOU) * 100;
            return (
              <div key={n}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-[#10375C]">{n}</span>
                  <span className="text-gray-500">{broj}/{PITANJA_PO_NIVOU}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-[width] duration-700 ${
                      procenat >= 67 ? 'bg-yellow-500' : procenat >= 34 ? 'bg-yellow-500/50' : 'bg-gray-300'
                    }`}
                    style={{ width: `${procenat}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-400 mt-5 leading-relaxed">
          Ovo je orijentaciona procjena na osnovu gramatike i vokabulara. Tačan nivo se utvrđuje na
          uvodnom razgovoru, gdje se provjerava i govor i razumijevanje.
        </p>
      </div>

      {/* Preporuka */}
      <div className="bg-[#f3f7fb] rounded-2xl border-2 border-yellow-500/30 p-6 sm:p-8 mb-6">
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-yellow-600 mb-2">
          Naša preporuka
        </span>
        <h3 className="text-xl font-bold text-[#10375C] mb-3">{preporuka.naslov}</h3>
        <p className="text-gray-700 leading-relaxed mb-6">{preporuka.tekst}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              trackEvent('cta_open', { from: 'test_rezultat' });
              onZakazi();
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-yellow-500 text-black px-6 py-3.5
                       rounded-xl font-semibold hover:bg-yellow-400 transition min-h-[48px]"
          >
            <CalendarCheck className="w-5 h-5" />
            Zakaži besplatni uvodni razgovor
          </button>
          <Link
            to={preporuka.putanja}
            onClick={scrollToTop}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#10375C] border
                       border-gray-300 px-6 py-3.5 rounded-xl font-semibold hover:border-[#10375C] transition"
          >
            {preporuka.dugme}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Pregled odgovora */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setPregled((p) => !p)}
          className="flex items-center justify-between w-full p-5 font-semibold text-[#10375C] hover:bg-gray-50 transition"
          aria-expanded={pregled}
        >
          Pogledaj tačne odgovore i objašnjenja
          <ChevronDown className={`w-5 h-5 transition-transform ${pregled ? 'rotate-180' : ''}`} />
        </button>

        {pregled && (
          <ul className="divide-y divide-gray-100 border-t border-gray-100">
            {PITANJA.map((p) => {
              const pm = promijesaj(p);
              const moj = odgovori[p.id];
              const tacno = moj === pm.tacan;
              return (
                <li key={p.id} className="p-5">
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5 ${
                        tacno ? 'bg-green-100' : 'bg-red-100'
                      }`}
                      aria-hidden="true"
                    >
                      {tacno
                        ? <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                        : <X className="w-4 h-4 text-red-600" strokeWidth={3} />}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500 mb-1">
                        {p.nivo} · {p.tekst}
                      </p>
                      {p.recenica && (
                        <p className="text-[15px] text-[#10375C] font-medium mb-2" lang="de">{p.recenica}</p>
                      )}
                      <p className="text-sm">
                        <span className="text-gray-500">Tačno: </span>
                        <span className="font-medium text-green-700" lang="de">{pm.opcije[pm.tacan]}</span>
                        {!tacno && moj !== undefined && (
                          <>
                            <span className="text-gray-500"> · Tvoj odgovor: </span>
                            <span className="text-red-600 line-through" lang="de">{pm.opcije[moj]}</span>
                          </>
                        )}
                      </p>
                      <p className="text-sm text-gray-500 mt-1.5">{p.objasnjenje}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TestRezultat;
