import { BookOpen, Clock, GraduationCap } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "FOKUS NA NJEMAČKI JEZIK",
      description:
        "Jedini centar u BiH posvećen isključivo njemačkom jeziku. Naši predavači, kao i ÖSD i Goethe licencirani ispitivači su vrhunski eksperti za njemački jezik, što osigurava najviši kvalitet nastave i najbolje rezultate.",
      bgColor: "bg-[#10375c]",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "FLEKSIBILNI TERMINI",
      description:
        "Prilagođavamo termine vašem sedmičnom rasporedu, posebno kada se radi o organizaciji individualnih (1 na 1) i poluindiviudalnih (2 ili 3 na 1) časova. Nudimo prijepodnevne i večernje termine, kao i vikend kurseve.",
      bgColor: "bg-[#10375c]",
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "ŠKOLSKI PROGRAM",
      description:
        "Posebno prilagođen program za učenike od 6. do 9. razreda koji prati njihov školski plan i program. Na taj način učenici paralelno uče njemački jezik i prate svoje školsko gradivo, pa im kurs pomaže i u napretku jezika i u uspješnijem usvajanju gradiva koje trenutno rade u školi.",
      bgColor: "bg-[#10375c]",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-8">Zašto mi?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((t, n) => (
            <div
              className={`${t.bgColor} rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center`}
              key={n}
            >
              <div className="relative -top-8">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-yellow-500">
                  <div className="text-yellow-500">{t.icon}</div>
                </div>
              </div>
              <div className="px-8 pb-8 -mt-4 text-center w-full">
                <h3 className="text-xl font-bold mb-4 tracking-wide text-white">
                  {t.title}
                </h3>
                <p className="text-white mb-6">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
