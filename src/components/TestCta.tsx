import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackEvent } from "../lib/analytics";

/**
 * Poziv na besplatni test znanja — glavni način da se dođe do kontakata ljudi
 * koji tek razmišljaju o upisu, prije nego se odluče da zovu.
 */
const TestCta = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div
        className="relative overflow-hidden rounded-3xl bg-[#10375C] text-white px-7 py-10 sm:px-12
                   sm:py-14 max-w-5xl mx-auto shadow-xl"
      >
        <div
          className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-yellow-500/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-yellow-500/5"
          aria-hidden="true"
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex-grow">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-3">
              <Sparkles className="w-4 h-4" />
              Besplatno
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ne znaš od kog nivoa da kreneš?
            </h2>
            <p className="text-white/80 leading-relaxed max-w-xl">
              Uradi kratak test od 24 pitanja i za pet minuta saznaj svoj nivo njemačkog,
              zajedno sa preporukom programa koji ti stvarno odgovara. Bez obaveze.
            </p>
          </div>

          <Link
            to="/test-znanja"
            onClick={() => trackEvent("test_open", { from: "banner" })}
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-yellow-500 text-black px-7 py-4
                       rounded-xl font-semibold shadow-lg hover:bg-yellow-400 active:scale-[0.98] transition
                       min-h-[48px] group"
          >
            Provjeri svoj nivo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default TestCta;
