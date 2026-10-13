import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { goetheFaq } from "../data/goetheFaq";

const GoetheFaq = () => {
  const [openItems, setOpenItems] = useState<number[]>([]),
    toggleItem = (id: number) => {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
      );
    },
    faqs = goetheFaq;
  return (
    <section className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#16243A] mb-4">
            Sve bitno o ÖSD ispitu
          </h2>
          <p className="text-lg text-[#16243A] max-w-2xl mx-auto">
            Odgovori na najčešća pitanja o ÖSD ispitu
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((r) => (
            <div
              className="bg-[#16243A] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              key={r.id}
            >
              <button
                onClick={() => toggleItem(r.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-[#1e2d47] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset"
                aria-expanded={openItems.includes(r.id)}
                aria-controls={`faq-answer-${r.id}`}
              >
                <span className="text-lg font-medium pr-4">
                  {openItems.includes(r.id) ? "−" : "+"} {r.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(r.id) ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
              </button>
              <div
                id={`faq-answer-${r.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(r.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="bg-white rounded-lg p-4 shadow-inner">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {r.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoetheFaq;
