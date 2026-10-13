export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const goetheFaq: FaqItem[] = [
  {
    id: 1,
    question: "Šta je Goethe certifikat?",
    answer:
      "Goethe certifikat je medjunarodno priznat dokument kojim se potvrđuje nivo poznavanja njemačkog kao stranog jezika. Posjedovanje ovog certifikata preduslov je za sticanje radne dozvole u zemljama njemačkog govornog područja, olakšava profesionalno ili akademsko usavršavanje  i preduslov je za upis na većinu austrijskih i njemačkih univerziteta",
  },
  {
    id: 2,
    question: "Ko može izdati Goethe certifikat?",
    answer:
      "Goethe certifikat ne može izdavati nijedna škola jezika na nivou Bosne i Hercegovine. Goethe certifikat djeluje nezavisno od bilo koje škole jezika u BiH i predstavlja zvaničnu diplomu koja se izdaje isključivo od strane njemačkog Goethe-Instituta, međunarodnog jezičkog instituta sa sjedištem u Minhenu, Njemačka. Čak i kada neke škole ili centri u Bosni i Hercegovini služe kao centri za polaganje, oni su samo lokalni organizatori ispita — oni ne izdaju certifikate, niti su u vlasništvu Goethe Instituta. Svaka diploma je pečatirana i ovjerena u Njemačkoj i ima međunarodnu validnost",
  },
  {
    id: 3,
    question: "Koliko su vremenski važeći Goethe certifikati?",
    answer:
      "Goethe diplome važe neograničeno. Međutim, određene institucije i firme zahtijevaju certifikate koji nisu stariji od 2 godine.",
  },
  {
    id: 4,
    question: "Koliko se vremenski čekaju rezultati Goethe ispita?",
    answer:
      "Rezultati Goethe ispita čekaju se do 4 sedmice od datuma polaganja ispita",
  },
  {
    id: 5,
    question: "Kako izgleda Goethe ispit?",
    answer: `Ispit se sastoji od četiri modula: čitanje (razumijevanje pročitanog), slušanje (razumijevanje odslušanog), pisanje (pismeno izražavanje) i pričanje (usmeno izražavanje/vještine konverzacije). 
*Više o izgledu Goethe ispita na vrhu stranice (Pripremna nastava za Goethe ispit)`,
  },
  {
    id: 6,
    question: "Koji su termini polaganja Goethe ispita?",
    answer:
      "Aktuelne termine Goethe ispita mozes pronaci na linku: https://www.goethe.de/ins/ba/bs/spr/prf/inf/prt.html",
  },
  {
    id: 7,
    question: "Gdje mogu polagati Goethe ispit?",
    answer:
      "Na nivou Bosne i Hercegovine, Goethe ispit mozes polagati u Banjaluci, Sarajevu i Tuzli.",
  },
  {
    id: 8,
    question: "Koji nivo Goethe ispita (A1 – C1) mi je potreban?",
    answer: `A1 – Osnovna komunikacije i snalaženje. Potreban za spajanje porodice i dobijanje viza za supružnike. A2 – Jednostavna svakodnevna komunikacija. Potreban kod privremenih radnih dozvola, kao i za nastavak procesa integracije u njemačkom govornom području. 
B1 – Srednji nivo znanja. Potreban za dobijanje stalne boravišne dozvole (Niederlassungsbewilligung), za stalni boravak i sticanje državljanstva.
B2 – Viši srednji nivo. Potreban za upis na većinu fakulteta u Austriji i Njemačkoj, profesije u zdravstvu, obrazovanju i javnim službama, kao i za nostrifikaciju diploma.
C1 – Napredno znanje. Potreban za studiranje na prestižnim univerzitetima, rad u akademskim i naučnim institucijama, te za pozicije koje zahtijevaju visok nivo stručne komunikacije.`,
  },
];
