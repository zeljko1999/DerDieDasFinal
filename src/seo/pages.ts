/**
 * Meta podaci po stranici.
 *
 * og:image pokazuje na LOKALNU sliku (apsolutni URL) — ranije je pokazivao na
 * imgur, pa je pregled linka na Viberu i Facebooku zavisio od tuđeg servera.
 *
 * Original je imao isti <title> na svih 8 stranica, bez ijednog opisa i bez
 * Open Graph tagova — pa je link dijeljen na Viberu ili Facebooku bio gola
 * linija teksta, a Google je sve stranice vidio pod istim naslovom.
 */

import { absoluteImageUrl } from "../config/images";
import { site } from "../config/site";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
}

export const pageMeta = {
  home: {
    path: "/",
    title: "Njemački jezik Banja Luka | Der Die Das centar",
    description:
      "Jedini specijalizovani centar za njemački jezik u BiH, od 2018. u Banjoj Luci. Kursevi za djecu i odrasle, individualni časovi uživo i online, priprema za ÖSD i Goethe ispit.",
    image: absoluteImageUrl("hero1", site.url),
  },
  kurseviZaOdrasle: {
    path: "/kursevi-za-odrasle",
    title: "Kursevi njemačkog za odrasle — Banja Luka | Der Die Das",
    description:
      "Standardni (2x sedmično) i intenzivni (3x sedmično) kursevi njemačkog jezika u Banjoj Luci. Grupe do 12 polaznika, nivoi A1 do C1, materijali uključeni u cijenu.",
    image: absoluteImageUrl("heroKurseviOdrasle", site.url),
  },
  kurseviZaDjecu: {
    path: "/kursevi-za-djecu",
    title: "Kurs njemačkog za djecu i osnovce | Der Die Das",
    description:
      "Kurs njemačkog jezika koji prati školski program (Sprachpuzzle) za osnovce od 6. do 9. razreda, uz uvodni program za 4. i 5. razred. Grupe do 6 učenika, uživo u Banjoj Luci.",
    image: absoluteImageUrl("heroKurseviDjeca", site.url),
  },
  individualniOdrasli: {
    path: "/individualni-casovi-odrasli",
    title: "Individualni časovi njemačkog za odrasle | Der Die Das",
    description:
      "Časovi 1 na 1 sa punom pažnjom profesora, u terminima prilagođenim vašem sedmičnom rasporedu. Idealno za rad u smjenama i za brz napredak kroz nivoe.",
    image: absoluteImageUrl("heroIndividualniOdrasli", site.url),
  },
  individualniDjeca: {
    path: "/individualni-casovi-djeca",
    title: "Individualni časovi njemačkog za djecu | Der Die Das",
    description:
      "Časovi prilagođeni tempu djeteta — od pomoći sa školskim gradivom i provjerama do naprednijih sadržaja van redovnog programa. Termini po rasporedu djeteta.",
    image: absoluteImageUrl("heroIndividualniDjeca", site.url),
  },
  individualniOnline: {
    path: "/individualni-casovi-online",
    title: "Online časovi njemačkog jezika | Der Die Das",
    description:
      "Individualni časovi njemačkog jezika online, za polaznike van Banje Luke i za sve sa nepredvidivim rasporedom. Ista posvećenost profesora kao uživo.",
    image: absoluteImageUrl("heroIndividualniOnline", site.url),
  },
  osd: {
    path: "/osd",
    title: "Priprema za ÖSD ispit u Banjoj Luci | Der Die Das",
    description:
      "Intenzivna priprema za sve nivoe ÖSD ispita (A1–C1) sa licenciranim ÖSD ispitivačima. Simulacija ispita kroz sva četiri modula: čitanje, pisanje, slušanje i razgovor.",
    image: absoluteImageUrl("heroOsd", site.url),
  },
  goethe: {
    path: "/goethe",
    title: "Priprema za Goethe ispit u Banjoj Luci | Der Die Das",
    description:
      "Intenzivna priprema za sve nivoe Goethe ispita (A1–C1) sa licenciranim Goethe ispitivačima. Simulacija ispita kroz sva četiri modula i strategije za polaganje.",
    image: absoluteImageUrl("heroGoethe", site.url),
  },
  testZnanja: {
    path: "/test-znanja",
    title: "Besplatni test znanja njemačkog (A1–B2) | Der Die Das",
    description:
      "Besplatan online test njemačkog jezika. Za pet minuta saznaj svoj nivo od A1 do B2 i koji ti kurs odgovara. Bez obaveze, rezultat odmah, uz objašnjenja tačnih odgovora.",
    image: absoluteImageUrl("hero1", site.url),
  },
} satisfies Record<string, PageMeta>;

export const allPages = Object.values(pageMeta) as PageMeta[];
