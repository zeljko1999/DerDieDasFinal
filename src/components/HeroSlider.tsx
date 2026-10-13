import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ContactModal from "./ContactModal";
import Img from "./Img";
import { trackEvent } from "../lib/analytics";

/**
 * Hero sekcija.
 *
 * Ranije je ovo bio Swiper sa dvije slike. Promijenjeno je iz tri razloga:
 *  1. obje slike su se povlačile odmah, a posjetilac vidi samo prvu;
 *  2. Swiper na wrapper stavlja `transform` i `overflow-hidden`, što je lomilo
 *     modal i plutajuću dugmad koji su bili unutar slajda (na telefonu je
 *     ispadalo da CTA dugme ne radi);
 *  3. sam slajder je tražio `swiper/css/effect-fade` i Autoplay modul koje
 *     početna sada ne mora učitati zbog hero sekcije.
 *
 * Druga slika (`hero2`) ostaje u registru slika — nije obrisana, samo se više
 * ne učitava na prvom ekranu.
 */
const HeroSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden min-h-[560px] h-[calc(100svh-5rem)] sm:h-[600px] md:h-[680px] lg:h-[760px]">
      <Img
        name="hero1"
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
      />

      {/* Zatamnjenje je jače pri dnu, da prelaz u sljedeću sekciju bude mirniji. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />

      <div className="container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl text-white pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-wide drop-shadow-sm">
            Nauči njemački uživo u Banjaluci ili online!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto text-white/90">
            Ti biraš — individualni (1 na 1) časovi uživo ili online, ili kursevi
            njemačkog za djecu i odrasle uživo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <button
              type="button"
              onClick={() => {
                trackEvent("cta_open", { from: "hero" });
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center bg-yellow-500 text-black px-7 py-3.5 rounded-xl
                         font-semibold shadow-lg shadow-black/20 hover:bg-yellow-400 active:scale-[0.98]
                         transition min-h-[48px] focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              Zakaži besplatni uvodni razgovor
            </button>

            <Link
              to="/test-znanja"
              onClick={() => trackEvent("test_open", { from: "hero" })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/40
                         backdrop-blur-sm px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20
                         active:scale-[0.98] transition min-h-[48px] focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-white"
            >
              <Sparkles className="w-5 h-5" />
              Provjeri svoj nivo
            </Link>
          </div>
        </div>
      </div>

      {/* Prelaz ka tekstualnoj sekciji ispod — gradijent plus zakrivljeni
          razdjelnik, umjesto dosadašnjeg naglog reza. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="h-16 sm:h-20 bg-gradient-to-b from-transparent via-white/25 to-white/70" />
        <svg
          className="block w-full h-[52px] sm:h-[70px] -mb-px text-white"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,70 L0,34 C240,74 480,4 720,14 C960,24 1200,64 1440,30 L1440,70 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSlider;
