import Seo from "../components/Seo";
import Img from "../components/Img";
import { pageMeta } from "../seo/pages";
import { courseSchema } from "../seo/structuredData";
import {
  BookOpen,
  CalendarCheck,
  Hourglass,
  MessageSquareText,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ContactCta from "../components/ContactCta";

const IndividualniCasoviDjeca = () => (
  <div className="min-h-screen bg-white font-sans">
    <Seo
      meta={pageMeta.individualniDjeca}
      schemas={[
        courseSchema({
          name: "Individualni časovi njemačkog jezika za djecu",
          description: pageMeta.individualniDjeca.description,
          url: pageMeta.individualniDjeca.path,
          mode: "Uživo",
        }),
      ]}
    />
    <Navbar />
    <div className="relative">
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <Img
          name="heroIndividualniDjeca"
          className="absolute inset-0 w-full h-full object-cover object-top"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-20">
          <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
            <h1 className="text-5xl font-bold mb-4">
              Individualni časovi za djecu
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed">
              Izaberite najbolji put učenja njemačkog jezika za vaše dijete –
              kroz individualne časove!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white" />
    </div>
    <div className="bg-white">
      <div className="flex justify-center space-x-2 my-6 ">
        <div className="relative w-4/5 pr-12 pl-12 pb-6">
          <div className="absolute top-0 left-0 h-[5px] w-[80px] sm:h-[5px] w-[120px] sm:w-1/5 shadow-[0px_4px_0_0_#F59E0B,_0px_8px_0_0_#F59E0B,_0px_12px_0_0_#F59E0B] rounded-tr-sm" />
          <div className="absolute top-0 left-0 w-[5px] sm:w-[5px] h-[168px] sm:h-1/5 shadow-[4px_0px_0_0_#F59E0B,_8px_0px_0_0_#F59E0B,_12px_0px_0_0_#F59E0B] rounded-tr-sm" />
          <div className="absolute top-0 right-0 h-[5px] w-[80px] sm:h-[5px] w-[120px] sm:w-1/5 shadow-[0px_4px_0_0_#F59E0B,_0px_8px_0_0_#F59E0B,_0px_12px_0_0_#F59E0B] rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-[5px] sm:w-[5px] h-[168px] sm:h-1/5 shadow-[-4px_0px_0_0_#F59E0B,_-8px_0px_0_0_#F59E0B,_-12px_0px_0_0_#F59E0B] rounded-tl-sm" />
          <div className="absolute bottom-0 left-0 h-[5px] w-[80px] sm:h-[5px] w-[120px] sm:w-1/5 shadow-[0px_-4px_0_0_#F59E0B,_0px_-8px_0_0_#F59E0B,_0px_-12px_0_0_#F59E0B] rounded-br-sm" />
          <div className="absolute bottom-0 left-0 w-[5px] sm:w-[5px] h-[168px] sm:h-1/5 shadow-[4px_0px_0_0_#F59E0B,_8px_0px_0_0_#F59E0B,_12px_0px_0_0_#F59E0B] rounded-br-sm" />
          <div className="absolute bottom-0 right-0 h-[5px] w-[80px] sm:h-[5px] w-[120px] sm:w-1/5 shadow-[0px_-4px_0_0_#F59E0B,_0px_-8px_0_0_#F59E0B,_0px_-12px_0_0_#F59E0B] rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-[5px] sm:w-[5px] h-[168px] sm:h-1/5 shadow-[-4px_0px_0_0_#F59E0B,_-8px_0px_0_0_#F59E0B,_-12px_0px_0_0_#F59E0B] rounded-bl-sm" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[12px] h-[320px] bg-[#F59E0B] sm:hidden" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[12px] h-[320px] bg-[#F59E0B] sm:hidden" />
          <div className="flex flex-col items-center mt-10 p-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Individualni časovi za djecu
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p className="mb-6">
                Ukoliko vaše dijete više voli da uči samostalno, vlastitim
                tempom i bez pritiska većeg broja učenika u grupi – individualni
                časovi su odličan izbor.
              </p>
              <ul className="list-disc list-inside space-y-4 mb-6">
                <li>
                  <span className="font-semibold">
                    Prilagođen plan učenja:{" "}
                  </span>
                  Fokus može biti na savladavanju redovnog školskog gradiva
                  (pismene i usmene provjere u školi, pomoć u izradi domaćih
                  zadatak i slično), ali i na naprednijim sadržajima van
                  redovnog školskog programa, posebno za djecu koja pokazuju
                  pojačano interesovanje za njemački jezik.
                </li>
                <li>
                  <span className="font-semibold">Potpuna fleksibilnost: </span>
                  Termini su potpuno prilagođeni sedmičnom rasporedu i obavezama
                  djeteta - u toku radne sedmice (prije/poslije škole) ili
                  subotom.
                </li>
                <li>
                  <span className="font-semibold">
                    Prilagođen tempo učenja:{" "}
                  </span>
                  Časovi se mogu održavati jednom, dva ili više puta sedmično,
                  prema potrebama djeteta. Možete birati između individualnih (1
                  na 1) ili poluindividualnih časova (2 do najviše 3 djece),
                  uživo u učionicama u Banjoj Luci ili online putem Zoom-a ili
                  druge aplikacije po izboru roditelja ili djeteta.
                </li>
                <li>
                  <span className="font-semibold">Izvještaji o napretku: </span>
                  Naš nastavnik pažljivo prati proces učenja i na kraju mjeseca
                  roditeljima dostavlja jasan izvještaj o ostvarenim
                  rezultatima, napretku djeteta i preporukama za dalje.
                </li>
              </ul>
              <p className="font-semibold text-center mt-8">
                Prijavite se već danas i omogućite svom djetetu personalizovano
                učenje njemačkog jezika koje će mu pomoći da postigne željene
                rezultate u školi i van nje!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 py-8 sm:py-10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-8 lg:gap-12">
          <div className="relative flex-shrink-0 mb-8 lg:mb-0">
            <Img
              name="cardIndividualniDjeca"
              className="w-full max-w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
              alt="Students learning together"
            />
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-black text-white px-3 py-2 lg:px-5 lg:py-3 rounded-2xl shadow-xl max-w-[240px] lg:max-w-[280px]">
              <p className="font-bold text-sm lg:text-lg leading-tight">
                Individualni časovi njemačkog jezika za djecu uživo u učionici
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-auto">
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <CalendarCheck className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Fleksibilni termini
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Fleksibilni termini
                </p>
                <p className="leading-tight">
                  Organizaciju termina u potpunosti prilagođavamo sedmičnom
                  rasporedu djeteta
                </p>
              </div>
            </div>
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <BookOpen className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Školski program
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Školski program
                </p>
                <p className="leading-tight">
                  Dodatna pomoć u savladavanju školskog gradiva (domaći zadaci,
                  pismene i usmene provjere i slično)
                </p>
              </div>
            </div>
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Hourglass className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Fleksibilan tempo učenja
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Fleksibilan tempo učenja
                </p>
                <p className="leading-tight">
                  Mogućnost izbora dinamike rada (1, 2 ili više sedmičnih
                  termina)
                </p>
              </div>
            </div>
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <MessageSquareText className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Povratne informacije roditeljima
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Povratne informacije roditeljima
                </p>
                <p className="leading-tight">
                  Mjesečni izvještaj o napretku djeteta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactCta course="individualni-djeca" />
    <Footer />
    <FloatingContact />
  </div>
);

export default IndividualniCasoviDjeca;
