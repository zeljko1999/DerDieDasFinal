/**
 * Sve slike sajta na jednom mjestu.
 *
 * `remote` je URL sa kojeg je slika originalno hotlinkovana. Cilj je da nijedna
 * slika ne ostane na tuđem domenu — `npm run images` ih skida, optimizuje i
 * upisuje u public/images/, a komponenta <Img> ih onda servira lokalno.
 * Dok slika nije lokalizovana, <Img> koristi `remote` i sajt radi normalno.
 */

export interface ImageSource {
  remote: string;
  /** Kratak opis za `alt`. Prazno samo za čisto dekorativne slike. */
  alt: string;
}

export const imageSources = {
  logo: {
    remote: "https://i.imgur.com/02Xxtpy.png",
    alt: "Der Die Das — centar za njemački jezik",
  },
  logoFooter: {
    remote: "https://i.imgur.com/aH0heQ0.png",
    alt: "Der Die Das — centar za njemački jezik",
  },

  hero1: {
    remote: "https://i.imgur.com/B7kfVaD.jpeg",
    alt: "Čas njemačkog jezika u centru Der Die Das",
  },
  hero2: {
    remote:
      "https://i0.wp.com/corwin-connect.com/wp-content/uploads/2023/10/iStock-1674037398.jpg?fit=1200%2C800&ssl=1",
    alt: "Polaznici na času njemačkog jezika",
  },
  about: {
    remote:
      "https://www.residenciasarria.com/blog/wp-content/uploads/2021/02/AdobeStock_215521574-1024x683.jpeg",
    alt: "Polaznica na kursu njemačkog jezika",
  },

  cardKurseviOdrasle: {
    remote: "https://i.imgur.com/cCOyYGg.jpeg",
    alt: "Kursevi njemačkog jezika za odrasle",
  },
  cardKurseviDjeca: {
    remote: "https://i.imgur.com/8ZS8trq.jpeg",
    alt: "Kursevi njemačkog jezika za djecu",
  },
  cardIndividualniOdrasli: {
    remote: "https://i.imgur.com/7QxcvTI.jpeg",
    alt: "Individualni časovi njemačkog jezika za odrasle",
  },
  cardIndividualniDjeca: {
    remote: "https://i.imgur.com/zNG9YZO.jpeg",
    alt: "Individualni časovi njemačkog jezika za djecu",
  },

  heroKurseviOdrasle: {
    remote: "https://i.imgur.com/41ThCbT.jpeg",
    alt: "Kursevi njemačkog jezika za odrasle u Banjoj Luci",
  },
  heroKurseviDjeca: {
    remote: "https://i.imgur.com/Dt7Q9og.jpeg",
    alt: "Kursevi njemačkog jezika za djecu u Banjoj Luci",
  },
  heroIndividualniOdrasli: {
    remote: "https://i.imgur.com/vFf1Fk5.jpeg",
    alt: "Individualni časovi njemačkog jezika za odrasle",
  },
  heroIndividualniDjeca: {
    remote: "https://i.imgur.com/p08j8IB.jpeg",
    alt: "Individualni časovi njemačkog jezika za djecu",
  },
  heroIndividualniOnline: {
    remote: "https://i.imgur.com/gFv18ZQ.jpeg",
    alt: "Individualni online časovi njemačkog jezika",
  },
  heroOsd: {
    remote: "https://i.imgur.com/cnpC0t3.png",
    alt: "Pripremna nastava za ÖSD ispit",
  },
  heroGoethe: {
    remote: "https://i.imgur.com/pUh7HDI.png",
    alt: "Pripremna nastava za Goethe ispit",
  },

  osdSecondary: {
    remote: "https://i.imgur.com/hy789o6.jpeg",
    alt: "Simulacija ÖSD ispita na pripremnoj nastavi",
  },
  onlineSecondary: {
    remote: "https://i.imgur.com/YS9TCz6.jpeg",
    alt: "Online čas njemačkog jezika",
  },
  goetheSecondary: {
    remote:
      "https://this.deakin.edu.au/wp-content/uploads/2024/07/young-woman-studying-while-attending-a-class-in-le-2023-11-27-04-50-36-utc-scaled.jpg",
    alt: "Priprema za Goethe ispit",
  },

  avatarMarija: {
    remote: "https://i.imgur.com/2abFOdd.jpeg",
    alt: "Marija Poletan",
  },
  avatarTamara: {
    remote: "https://i.imgur.com/hJP1qqB.jpeg",
    alt: "Tamara Savičić",
  },
  avatarDusko: {
    remote: "https://i.imgur.com/G3GSssP.jpeg",
    alt: "Duško Klašnja",
  },
  avatarMirko: {
    remote: "https://i.imgur.com/Bx6ZCHe.jpeg",
    alt: "Mirko Danojević",
  },
  avatarVanja: {
    remote: "https://i.imgur.com/CXyHfya.jpeg",
    alt: "Vanja Mitrović",
  },
} satisfies Record<string, ImageSource>;

export type ImageKey = keyof typeof imageSources;
