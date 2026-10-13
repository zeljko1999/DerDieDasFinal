import Seo from "../components/Seo";
import Img from "../components/Img";
import { pageMeta } from "../seo/pages";
import { courseSchema } from "../seo/structuredData";
import { CalendarCheck, Hourglass, TrendingUp, UserSearch } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ContactCta from "../components/ContactCta";

const IndividualniCasoviOnline = () => (
  <div className="min-h-screen bg-white font-sans">
    <Seo
      meta={pageMeta.individualniOnline}
      schemas={[
        courseSchema({
          name: "Individualni online časovi njemačkog jezika",
          description: pageMeta.individualniOnline.description,
          url: pageMeta.individualniOnline.path,
          mode: "Online",
        }),
      ]}
    />
    <Navbar />
    <div className="relative">
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <Img
          name="heroIndividualniOnline"
          className="absolute inset-0 w-full h-full object-cover object-top"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-20">
          <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
            <h1 className="text-5xl font-bold mb-4">
              Individualni časovi online
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed">
              Uvjeri se koliko brzo možeš postići vidjljive rezultate u učenju
              kroz individualne online časove njemačkog jezika i punu pažnju
              profesora
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white" />
    </div>
    <div className="bg-white">
      <div className="flex justify-center space-x-2 my-6 p-4">
        <div className="relative w-4/5 p-12 pt-4">
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
              Individualni online časovi njemačkog jezika
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p className="mb-6">
                Individualni online časovi predstavljaju savršen izbor za
                polaznike koji zbog fizičke udaljenosti nisu u mogućnosti da
                nastavu prate uživo, za one koji imaju fleksibilan raspored (rad
                u smjenama, različite smjene u školi i slično), te im fiksno
                određeni termini grupnih kurseva tokom sedmice ne odgovaraju ili
                žele maksimalno posvećen pristup profesora, bez pritiska rada u
                većoj grupi.
              </p>
              <ul className="list-disc list-inside space-y-4 mb-6">
                <li>
                  <span className="font-semibold">Potpuna fleksibilnost: </span>
                  Termini časova su potpuno prilagođeni vašem sedmičnom
                  rasporedu. Dogovarate ih jednom sedmično, dva puta ili više u
                  zavisnosti od vašeg raspoloživog vremena i dogovorene dinamike
                  rada.
                </li>
                <li>
                  <span className="font-semibold">
                    Individualno ili poluindividualno učenje:{" "}
                  </span>
                  Nastavu je moguće organizovati individualno (1 na 1) ili
                  poluindividualno (2 do najviše 3 polaznika) online putem
                  Zooma-a ili druge aplikacije po izboru polaznika.
                </li>
                <li>
                  <span className="font-semibold">
                    Brz i efikasan napredak:{" "}
                  </span>
                  Zahvaljujući maksimalnoj posvećenosti profesora i prilagođenom
                  planu rada, individualni časovi omogućavaju brži i konkretniji
                  napredak, čak i uz manji font časova. Rezultati su vidljivi
                  već nakon nekoliko sedmica!
                </li>
              </ul>
              <p className="font-semibold text-center mt-8">
                Ne odgađajte svoj uspjeh! Kontaktirajte nas već danas i zajedno
                ćemo osmisliti plan online nastave koji je u potpunosti
                prilagođen vama!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 py-8 sm:py-10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-8 lg:gap-12">
          <div className="relative flex-shrink-0">
            <Img
              name="onlineSecondary"
              className="w-full max-w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
              alt="Students learning together"
            />
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-black text-white px-3 py-2 lg:px-5 lg:py-3 rounded-2xl shadow-xl max-w-[240px] lg:max-w-[280px]">
              <p className="font-bold text-sm lg:text-lg leading-tight">
                Individualni (1 na 1) časovi njemačkog jezika online
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-auto">
            <div
              className={`relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 
              rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] 
              flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95`}
            >
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
                  Organizaciju termina u potpunosti prilagođavamo vašem
                  sedmičnom rasporedu
                </p>
              </div>
            </div>
            <div
              className={`relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 
              rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] 
              flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95`}
            >
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
                  Mogućnost samostalnog izbora dinamike rada (1, 2 ili više
                  sedmičnih termina)
                </p>
              </div>
            </div>
            <div
              className={`relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 
              rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] 
              flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <UserSearch className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Puna posvećenost profesora
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Puna posvećenost profesora
                </p>
                <p className="leading-tight">
                  Profesor je maksimalno posvećen vašem ličnom napretku
                </p>
              </div>
            </div>
            <div
              className={`relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 
              rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] 
              flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <TrendingUp className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Brži napredak
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Brži napredak
                </p>
                <p className="leading-tight">
                  Posvećenost samo vama ubrzava proces učenja, skraćuje ukupan
                  fond časova i ima za rezultat brži i vidljiviji napredak
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactCta course="individualni-online" />
    <Footer />
    <FloatingContact />
  </div>
);

export default IndividualniCasoviOnline;
