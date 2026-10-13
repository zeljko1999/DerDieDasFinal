import Seo from "../components/Seo";
import Img from "../components/Img";
import { pageMeta } from "../seo/pages";
import { courseSchema } from "../seo/structuredData";
import { BookOpenText, CalendarCheck, HandCoins, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ContactCta from "../components/ContactCta";

const KurseviZaDjecu = () => (
  <div className="min-h-screen bg-white">
    <Seo
      meta={pageMeta.kurseviZaDjecu}
      schemas={[
        courseSchema({
          name: "Kursevi njemačkog jezika za djecu",
          description: pageMeta.kurseviZaDjecu.description,
          url: pageMeta.kurseviZaDjecu.path,
          mode: "Uživo",
        }),
      ]}
    />
    <Navbar />
    <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      <Img
        name="heroKurseviDjeca"
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-20">
        <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Kursevi za djecu</h1>
          <p className="max-w-3xl text-lg leading-relaxed">
            Otkrijte svijet njemačkog jezika uz nas – od prvih školskih lekcija!
          </p>
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
              Kursevi njemačkog jezika za djecu
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p className="mb-6">
                Naši kursevi za djecu odvijaju se uživo u učionicama u Banjoj
                Luci i prate školski program njemačkog jezika (Sprachpuzzle). To
                znači da djeca, prelazeći gradivo koje istovremeno rade u školi,
                lagano usvajaju osnove njemačkog jezika, ali i popravljaju
                trenutne ocjene.
              </p>
              <ul className="list-disc list-inside space-y-4 mb-6">
                <li>
                  <span className="font-semibold">Nastava za osnovce: </span>
                  Program uključuje osnovce od 6. do 9. razreda, kao i učenike
                  nižih razreda (4. i 5. razred) koji žele lagani uvod u osnove
                  njemačkog jezika prije redovne nastave u školi.
                </li>
                <li>
                  <span className="font-semibold">Male grupe: </span>Grupe su
                  male – do 6 učenika, što omogućava maksimalnu posvećenost i
                  osigurava najbolje rezultate učenja.
                </li>
                <li>
                  <span className="font-semibold">Fleksibilni termini: </span>
                  Termini su potpuno fleksibilni i prilagođavaju se potrebama
                  učenika i roditelja (obično subotom ili tokom radne sedmice
                  prije i poslije podne, u skladu sa smjenama u školi).
                </li>
                <li>
                  <span className="font-semibold">
                    Svi materijali uključeni:{" "}
                  </span>
                  Kao osnovna literatura koristi se zvanični školski udžbenici
                  Sprachpuzzle (knjiga i radni list), a svi dodatni materijali
                  obezbijeđeni su od strane škole i uključeni u cijenu.
                </li>
                <li>
                  <span className="font-semibold">Plaćanje: </span>Plaćanje je
                  moguće u mjesečnim ratama, bez dodatnih troškova.
                </li>
              </ul>
              <p className="font-semibold text-center mt-8">
                Ne čekajte da njemački jezik postane problem u školi! Pomozite
                svom djetetu da zavoli njemački jezik i unaprijedi školski
                uspjeh. Kontaktirajte nas i rezervišite mjesto u grupi već
                danas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-8 lg:gap-12 py-10">
          <div className="relative flex-shrink-0">
            <Img
              name="cardKurseviDjeca"
              className="w-full max-w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-2xl"
              alt="Students learning together"
            />
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-black text-white px-3 py-2 lg:px-5 lg:py-3 rounded-2xl shadow-xl max-w-[240px] lg:max-w-[280px]">
              <p className="font-bold text-sm lg:text-lg leading-tight">
                Kurs njemačkog jezika za osnovce uživo u učionici
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-auto">
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <BookOpenText className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Školski program
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Školski program
                </p>
                <p className="leading-tight">
                  Program za osnovce od 6. do 9. razreda koji prati njihov
                  školski program
                </p>
              </div>
            </div>
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <CalendarCheck className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Fleksibilni termini
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Fleksibilni termini
                </p>
                <p className="leading-tight">
                  Termini prilagođeni smjenama u školi (subotom ili radnim
                  danima prije i poslije podne)
                </p>
              </div>
            </div>
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <Users className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Male grupe
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Male grupe
                </p>
                <p className="leading-tight">
                  Maksimalno 6 učenika u grupi za najbolje rezultate u učenju
                </p>
              </div>
            </div>
            <div className="relative group bg-[#2D2F3D] hover:bg-gray-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-lg min-w-[200px] sm:min-w-[230px] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <HandCoins className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-yellow-500 mb-2 lg:mb-3" />
                <span className="font-semibold text-white text-sm sm:text-base">
                  Plaćanje u ratama
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 text-xs sm:text-sm z-10 px-2">
                <p className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  Plaćanje u ratama
                </p>
                <p className="leading-tight">
                  Mogućnost plaćanja kursa u mjesečnim ratama bez dodatnih
                  troškova
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactCta course="kursevi-za-djecu" />
    <Footer />
    <FloatingContact />
  </div>
);

export default KurseviZaDjecu;
