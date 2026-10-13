import { Link } from "react-router-dom";
import Img from "./Img";
import type { ImageKey } from "../config/images";
import { scrollToTop } from "../utils/scrollToTop";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Kursevi za odrasle",
      image: "cardKurseviOdrasle" as ImageKey,
      path: "/kursevi-za-odrasle",
      description: "Kursevi njemačkog jezika za sve nivoe",
    },
    {
      title: "Kursevi za djecu",
      image: "cardKurseviDjeca" as ImageKey,
      path: "/kursevi-za-djecu",
      description: "Kursevi njemačkog jezika za osnovce",
    },
    {
      title: "Individualni časovi za odrasle",
      image: "cardIndividualniOdrasli" as ImageKey,
      path: "/individualni-casovi-odrasli",
      description: "Individualni časovi za najbolje rezultate",
    },
    {
      title: "Individualni časovi za djecu",
      image: "cardIndividualniDjeca" as ImageKey,
      path: "/individualni-casovi-djeca",
      description: "Individualna pažnja za najbolje rezultate",
    },
  ];
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Naši kursevi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((t, n) => (
            <div
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              key={n}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Img
                  name={t.image}
                  alt={t.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{t.description}</p>
                  <Link
                    to={t.path}
                    onClick={scrollToTop}
                    className={`inline-flex items-center min-h-[44px] bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold 
                             hover:bg-yellow-400 transition-colors duration-300`}
                  >
                    Više informacija
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
