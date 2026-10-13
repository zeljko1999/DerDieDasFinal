import { Link } from "react-router-dom";
import { ArrowRight, Award, Check, ScrollText } from "lucide-react";
import { scrollToTop } from "../utils/scrollToTop";

/**
 * "Pripremna nastava" — namjerno drugačiji vizuelni jezik od sekcije "Zašto mi?".
 *
 * Ranije su obje bile tamne kartice sa istim žutim krugom na vrhu, pa je klijent
 * s pravom rekao da druga izgleda "šablonski, isto kao prva". Sada su ovo svijetle
 * kartice sa žutom linijom na vrhu, ikonicom u zaobljenom kvadratu i lijevo
 * poravnatim sadržajem sa listom stavki.
 */
const ispiti = [
  {
    Icon: Award,
    title: "ÖSD ISPIT",
    description:
      "Intenzivna priprema za sve (A1–C1) nivoe ÖSD ispita. Naš program pripreme kombinuje vježbe čitanja, pisanja, slušanja i pričanja, uz realnu simulaciju ispita.",
    stavke: ["Licencirani ÖSD ispitivači", "Simulacija ispita", "Svi nivoi A1–C1"],
    link: "/osd",
  },
  {
    Icon: ScrollText,
    title: "GOETHE ISPIT",
    description:
      "Intenzivna priprema za sve (A1–C1) nivoe Goethe ispita. Naš program pripreme kombinuje vježbe čitanja, pisanja, slušanja i pričanja, uz realnu simulaciju ispita.",
    stavke: ["Licencirani Goethe ispitivači", "Simulacija ispita", "Svi nivoi A1–C1"],
    link: "/goethe",
  },
];

const ExamPrepSection = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block text-yellow-600 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          Međunarodni certifikati
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#10375C]">Pripremna nastava</h2>
        <div className="w-16 h-1 bg-yellow-500 rounded-full mx-auto mt-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {ispiti.map(({ Icon, title, description, stavke, link }) => (
          <article
            key={title}
            className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden
                       flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl
                       hover:border-yellow-300"
          >
            <span className="block h-1.5 w-full bg-yellow-500" aria-hidden="true" />

            <div className="p-7 sm:p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="flex items-center justify-center shrink-0 w-16 h-16 rounded-2xl bg-[#10375C]"
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7 text-yellow-500" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-bold tracking-wide text-[#10375C]">{title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-5">{description}</p>

              <ul className="space-y-2 mb-7">
                {stavke.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[15px] text-gray-700">
                    <span
                      className="flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-yellow-500/20"
                      aria-hidden="true"
                    >
                      <Check className="w-3.5 h-3.5 text-yellow-600" strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <Link
                to={link}
                onClick={scrollToTop}
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#10375C] text-white
                           px-6 py-3 rounded-xl font-semibold hover:bg-[#164a7c] transition-colors min-h-[48px]"
              >
                Saznajte više
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExamPrepSection;
