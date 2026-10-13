import type { ImageKey } from "../config/images";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: ImageKey;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marija Poletan",
    role: "Polaznica individualnih časova uživo",
    text: "Išla sam na individualne časovi uživo na A1 i A2 u cilju spajanja sa porodicom u Austriji. Zbog rada u smjenama bilo mi je važno što su termini skroz fleksibilni i mogu da kažem da su mi maksimalno izašli u susret. Profesor je opušten, pristupačan i objašnjava tako da sve bude jasno kao dan. 😀 Sve preporuke!",
    image: "avatarMarija",
  },
  {
    name: "Tamara Savičić",
    role: "Roditelj učenika 6. razreda",
    text: "Od poznanika smo čuli za školu Der Die Das i program njemačkog jezika koji prati školsko gradivo. Upisali smo ga početkom 6. razreda i nismo pogriješili. Dijete je oduševljeno nastavnikom i drugarima, a atmosfera je fantastična. Pošto prate isto gradivo kao u školi, dovoljno je samo malo da ponovi pred usmene i pismene provjere. Definitivno preporučujem roditeljima!",
    image: "avatarTamara",
  },
  {
    name: "Duško Klašnja",
    role: "Polaznik ÖSD pripremne nastave",
    text: "Iako prethodno nisam bio njihov učenik, prijavom na pripremnu nastavu su mi otklonili sve greške koje su mi stvarale problem sa ranijih nivoa. Zatim sam vježbao sa profesrom kroz stvarne ÖSD testove, dočekao ispit potpuno spreman i položio iz prve! 😀 Zahvaljujem se na odličnoj pripremi za ÖSD ispit!",
    image: "avatarDusko",
  },
  {
    name: "Mirko Danojević",
    role: "Polaznik online individualnih časova",
    text: "Posto nisam iz Banjaluke, fizička udaljenost mi nije dozvoljavala da dolazim uživo, pa sam se odlučio za online individualne časove. Individualni časovi su mi odgovarali i zato što su bili fleksiblni, prilagođeni mojim smjenama na poslu. Uzeo sam pakete časova od A1 do B2 nivoa, a zatim i pripremnu nastavu za polaganje ispita. Iskustvo za svaku preporuku!",
    image: "avatarMirko",
  },
  {
    name: "Vanja Mitrović",
    role: "Polaznik B1 kursa uživo",
    text: "Išla sam na grupni kurs od A1 do B1 nivoa i mogu reći da je bilo savršeno! Odlična profesorica, opuštena atmosfera, super ekipa – svaki čas mi je tako brzo prolazio. 😄 Nakon kursa sam izašla na Goethe ispit B1 koji mi je bio potreban za život i posao u Njemačkoj i položila sam iz prvog puta. Preporučujem svima koji žele da uče njemački u opuštenoj, a efikasnoj atmosferi! ",
    image: "avatarVanja",
  },
];
