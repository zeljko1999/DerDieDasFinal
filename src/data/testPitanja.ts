export type Nivo = 'A1' | 'A2' | 'B1' | 'B2';

export interface Pitanje {
  id: number;
  nivo: Nivo;
  tekst: string;
  /** recenica sa prazninom, prikazuje se iznad odgovora kad postoji */
  recenica?: string;
  opcije: string[];
  /** indeks tacnog odgovora u `opcije` */
  tacan: number;
  /** kratko objasnjenje - prikazuje se u pregledu odgovora na kraju */
  objasnjenje: string;
}

/**
 * 24 pitanja, po 6 za svaki nivo (A1–B2).
 * Redoslijed je namjerno od lakseg ka tezem: polaznik prvo dobije pitanja
 * koja moze rijesiti, pa test ne djeluje obeshrabrujuce vec od prvog ekrana.
 */
export const PITANJA: Pitanje[] = [
  // ---------------------------------------------------------------- A1
  {
    id: 1, nivo: 'A1',
    tekst: 'Dopuni pitanje.',
    recenica: 'Wie ___ du? – Ich heiße Marko.',
    opcije: ['heißt', 'heiße', 'heißen', 'heißt ihr'],
    tacan: 0,
    objasnjenje: 'U 2. licu jednine glagol "heißen" glasi "du heißt".',
  },
  {
    id: 2, nivo: 'A1',
    tekst: 'Koji član nedostaje?',
    recenica: 'Das ist ___ Buch.',
    opcije: ['ein', 'eine', 'einen', 'einem'],
    tacan: 0,
    objasnjenje: '"das Buch" je srednjeg roda, pa je neodređeni član u nominativu "ein".',
  },
  {
    id: 3, nivo: 'A1',
    tekst: 'Dopuni rečenicu.',
    recenica: 'Ich ___ aus Bosnien.',
    opcije: ['komme', 'kommt', 'kommen', 'kommst'],
    tacan: 0,
    objasnjenje: 'Uz "ich" glagol dobija nastavak -e: "ich komme".',
  },
  {
    id: 4, nivo: 'A1',
    tekst: 'Koja upitna riječ nedostaje?',
    recenica: '___ alt bist du? – Ich bin 25.',
    opcije: ['Wie', 'Was', 'Wer', 'Wo'],
    tacan: 0,
    objasnjenje: 'Za godine se pita "Wie alt...?" – doslovno "koliko star".',
  },
  {
    id: 5, nivo: 'A1',
    tekst: 'Kako glasi množina od "der Tisch"?',
    opcije: ['die Tische', 'die Tischen', 'die Tischer', 'die Tisch'],
    tacan: 0,
    objasnjenje: '"der Tisch" u množini dobija nastavak -e: "die Tische".',
  },
  {
    id: 6, nivo: 'A1',
    tekst: 'Dopuni rečenicu.',
    recenica: 'Am Montag ___ ich Deutsch.',
    opcije: ['lerne', 'lernst', 'lernen', 'gelernt'],
    tacan: 0,
    objasnjenje: 'Iako rečenica počinje priloškom odredbom, glagol se slaže sa "ich": "lerne".',
  },

  // ---------------------------------------------------------------- A2
  {
    id: 7, nivo: 'A2',
    tekst: 'Koji pomoćni glagol ide uz "gehen" u perfektu?',
    recenica: 'Gestern ___ ich ins Kino gegangen.',
    opcije: ['bin', 'habe', 'war', 'hatte'],
    tacan: 0,
    objasnjenje: 'Glagoli kretanja (gehen, fahren, kommen) grade perfekt sa "sein".',
  },
  {
    id: 8, nivo: 'A2',
    tekst: 'Dopuni rečenicu.',
    recenica: 'Ich fahre ___ Bus zur Arbeit.',
    opcije: ['mit dem', 'mit der', 'mit den', 'mit das'],
    tacan: 0,
    objasnjenje: 'Predlog "mit" traži dativ, a "der Bus" u dativu glasi "dem Bus".',
  },
  {
    id: 9, nivo: 'A2',
    tekst: 'Koja riječ nedostaje u poređenju?',
    recenica: 'Er ist größer ___ ich.',
    opcije: ['als', 'wie', 'wenn', 'dass'],
    tacan: 0,
    objasnjenje: 'Uz komparativ ide "als"; "wie" se koristi samo kod jednakosti (so groß wie).',
  },
  {
    id: 10, nivo: 'A2',
    tekst: 'Koji oblik člana je tačan?',
    recenica: 'Ich helfe ___ Frau.',
    opcije: ['der', 'die', 'den', 'dem'],
    tacan: 0,
    objasnjenje: 'Glagol "helfen" traži dativ, a "die Frau" u dativu glasi "der Frau".',
  },
  {
    id: 11, nivo: 'A2',
    tekst: 'Dopuni zavisnu rečenicu.',
    recenica: 'Wenn es morgen regnet, ___ wir zu Hause.',
    opcije: ['bleiben', 'bleibt', 'blieben', 'geblieben'],
    tacan: 0,
    objasnjenje: 'Uz "wir" glagol ima nastavak -en, a u glavnoj rečenici stoji odmah iza zareza.',
  },
  {
    id: 12, nivo: 'A2',
    tekst: 'Koji predlog ide uz "sich interessieren"?',
    recenica: 'Ich interessiere mich ___ Musik.',
    opcije: ['für', 'auf', 'an', 'über'],
    tacan: 0,
    objasnjenje: '"sich interessieren für + akuzativ" je fiksna konstrukcija.',
  },

  // ---------------------------------------------------------------- B1
  {
    id: 13, nivo: 'B1',
    tekst: 'Dopuni kondicional (Konjunktiv II).',
    recenica: 'Wenn ich Zeit ___, würde ich mitkommen.',
    opcije: ['hätte', 'habe', 'hatte', 'haben'],
    tacan: 0,
    objasnjenje: 'Nestvarni uslov traži Konjunktiv II: "hätte", ne prošlo vrijeme "hatte".',
  },
  {
    id: 14, nivo: 'B1',
    tekst: 'Koja relativna zamjenica nedostaje?',
    recenica: 'Das ist der Mann, ___ mir geholfen hat.',
    opcije: ['der', 'den', 'dem', 'dessen'],
    tacan: 0,
    objasnjenje: 'Zamjenica je subjekt zavisne rečenice, pa ide nominativ: "der".',
  },
  {
    id: 15, nivo: 'B1',
    tekst: 'Dopuni pasiv u prošlom vremenu.',
    recenica: 'Das Haus ___ 1990 gebaut.',
    opcije: ['wurde', 'wurden', 'hat', 'ist'],
    tacan: 0,
    objasnjenje: 'Pasiv u preteritu: "werden" u obliku "wurde" + particip "gebaut".',
  },
  {
    id: 16, nivo: 'B1',
    tekst: 'Dopuni rečenicu.',
    recenica: 'Obwohl er müde war, ___ er weiter.',
    opcije: ['arbeitete', 'arbeiten', 'gearbeitet', 'zu arbeiten'],
    tacan: 0,
    objasnjenje: 'Poslije zavisne rečenice glagol glavne dolazi odmah, u istom vremenu: "arbeitete".',
  },
  {
    id: 17, nivo: 'B1',
    tekst: 'Koji predlog izražava radovanje nečemu što tek dolazi?',
    recenica: 'Ich freue mich ___ die Reise nächste Woche.',
    opcije: ['auf', 'über', 'für', 'an'],
    tacan: 0,
    objasnjenje: '"sich freuen auf" = radovati se unaprijed; "sich freuen über" = radovati se nečemu što se već desilo.',
  },
  {
    id: 18, nivo: 'B1',
    tekst: 'Koji je tačan genitiv?',
    recenica: 'Wegen ___ Wetters bleiben wir zu Hause.',
    opcije: ['des schlechten', 'dem schlechten', 'das schlechte', 'der schlechte'],
    tacan: 0,
    objasnjenje: 'Predlog "wegen" traži genitiv: "des schlechten Wetters".',
  },

  // ---------------------------------------------------------------- B2
  {
    id: 19, nivo: 'B2',
    tekst: 'Dopuni poredbenu rečenicu.',
    recenica: 'Er tut so, als ___ er alles wüsste.',
    opcije: ['ob', 'wenn', 'dass', 'wie'],
    tacan: 0,
    objasnjenje: '"als ob" + Konjunktiv II izražava nešto što samo izgleda tako.',
  },
  {
    id: 20, nivo: 'B2',
    tekst: 'Koji je tačan particip kao pridjev (od "lachen")?',
    recenica: 'Die ___ Kinder spielten im Garten.',
    opcije: ['lachenden', 'gelachten', 'lachend', 'gelacht'],
    tacan: 0,
    objasnjenje: 'Particip prezenta kao pridjev se deklinira: "die lachenden Kinder".',
  },
  {
    id: 21, nivo: 'B2',
    tekst: 'Šta znači "Es ist nicht auszuschließen, dass..."?',
    opcije: ['Moguće je da...', 'Isključeno je da...', 'Sigurno je da...', 'Zabranjeno je da...'],
    tacan: 0,
    objasnjenje: 'Dvostruka negacija: "nije isključeno" znači da je nešto moguće.',
  },
  {
    id: 22, nivo: 'B2',
    tekst: 'Dopuni indirektni govor (Konjunktiv I).',
    recenica: 'Er sagte, er ___ krank.',
    opcije: ['sei', 'ist', 'war', 'wäre gewesen'],
    tacan: 0,
    objasnjenje: 'U indirektnom govoru se koristi Konjunktiv I: "er sei".',
  },
  {
    id: 23, nivo: 'B2',
    tekst: 'Dopuni konstrukciju.',
    recenica: 'Je mehr er lernte, ___ besser wurden seine Noten.',
    opcije: ['desto', 'als', 'wie', 'so'],
    tacan: 0,
    objasnjenje: 'Konstrukcija glasi "je ... desto ..." (što više ... to bolje ...).',
  },
  {
    id: 24, nivo: 'B2',
    tekst: 'Šta znači izraz "sich mit etwas abfinden"?',
    opcije: ['pomiriti se s nečim', 'posvađati se oko nečega', 'dogovoriti sastanak', 'završiti posao'],
    tacan: 0,
    objasnjenje: '"sich abfinden mit" znači prihvatiti nešto što se ne može promijeniti.',
  },
];

export const NIVOI: Nivo[] = ['A1', 'A2', 'B1', 'B2'];
export const PITANJA_PO_NIVOU = 6;
/** koliko tacnih odgovora po nivou znaci da je nivo savladan */
export const PRAG = 4;
