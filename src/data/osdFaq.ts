export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const osdFaq: FaqItem[] = [
  {
    id: 1,
    question: "Šta je ÖSD certifikat?",
    answer:
      "ÖSD (Österreichisches Sprachdiplom Deutsch) certifikat je međunarodno priznat dokument kojim se potvrđuje nivo poznavanja njemačkog kao stranog jezika. Posjedovanje ovog certifikata preduslov je za sticanje radne dozvole u zemljama njemačkog govornog područja, olakšava profesionalno ili akademsko usavršavanje  i preduslov je za upis na većinu austrijskih i njemačkih univerziteta",
  },
  {
    id: 2,
    question: "Ko može izdati ÖSD certifikat?",
    answer:
      "ÖSD certifikat ne može izdavati nijedna škola jezika na nivou Bosne i Hercegovine. ÖSD certifikat djeluje nezavisno od bilo koje škole jezika u BiH i predstavlja zvaničnu diplomu koja se izdaje od strane austrijskog ÖSD instituta (Österreichisches Sprachdiplom Deutsch) sa sjedištem u Austriji. Čak i kada neke škole ili centri u Bosni i Hercegovini služe kao centri za polaganje, oni su samo lokalni organizatori ispita — oni ne izdaju certifikate, niti su u vlasništvu ÖSD instituta. Svaka diploma je pečatirana i ovjerena u Austriji i ima međunarodnu validnost",
  },
  {
    id: 3,
    question: "Koliko su vremenski važeći ÖSD certifikati?",
    answer:
      "ÖSD diplome vrijede doživotno. Međutim, ambasade zahtijevaju da dokumenti ne budu stariji od određenog vremenskog perioda (šest mjeseci ili godinu dana). Diplome koje su starije od šest mjeseci ili godinu dana ne mogu se produžavati, te se ispit mora ponovo polagati.",
  },
  {
    id: 4,
    question: "Koliko se vremenski čekaju rezultati ÖSD ispita?",
    answer:
      "Rezultati ÖSD ispita čekaju se između 2 i 4 sedmice od datuma polaganja ispita.",
  },
  {
    id: 5,
    question: "Kako izgleda ÖSD ispit?",
    answer: `Ispit se sastoji od četiri modula: čitanje (razumijevanje pročitanog), slušanje (razumijevanje odslušanog), pisanje (pismeno izražavanje) i pričanje (usmeno izražavanje/vještine konverzacije). 
*Više o izgledu ÖSD ispita na vrhu stranice (Pripremna nastava za ÖSD ispit).`,
  },
  {
    id: 6,
    question: "Koji su termini polaganja ÖSD ispita?",
    answer:
      "Aktuelne termine ÖSD ispita možeš pronaći na linku: https://dialog-group.eu/hrv/aktualni-termini/",
  },
  {
    id: 7,
    question: "Gdje mogu polagati ÖSD ispit?",
    answer:
      "Na nivou Bosne i Hercegovine, ÖSD ispit možeš polagati u Banjaluci, Doboju i Brčkom.",
  },
  {
    id: 8,
    question: "Koji nivo ÖSD ispita (A1 – C1) mi je potreban?",
    answer: `A1 – Osnovna komunikacije i snalaženje. Potreban za spajanje porodice i dobijanje viza za supružnike. A2 – Jednostavna svakodnevna komunikacija. Potreban kod privremenih radnih dozvola, kao i za nastavak procesa integracije u njemačkom govornom području. 
B1 – Srednji nivo znanja. Potreban za dobijanje stalne boravišne dozvole (Niederlassungsbewilligung), za stalni boravak i sticanje državljanstva.
B2 – Viši srednji nivo. Potreban za upis na većinu fakulteta u Austriji i Njemačkoj, profesije u zdravstvu, obrazovanju i javnim službama, kao i za nostrifikaciju diploma.
C1 – Napredno znanje. Potreban za studiranje na prestižnim univerzitetima, rad u akademskim i naučnim institucijama, te za pozicije koje zahtijevaju visok nivo stručne komunikacije.`,
  },
];
