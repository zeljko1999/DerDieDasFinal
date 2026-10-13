import { Pitanje, Nivo, NIVOI, PITANJA_PO_NIVOU, PRAG } from '../data/testPitanja';

/* -------------------------------------------------------------------------
   Mijesanje ponudjenih odgovora

   U bazi pitanja je tacan odgovor uvijek prvi - tako je lakse odrzavati.
   Ovdje se opcije promijesaju deterministicki (na osnovu id-a pitanja), pa
   je raspored uvijek isti za sve polaznike, ali bez prepoznatljivog sablona.
   ------------------------------------------------------------------------- */

/** mali determinististicki generator - isti seed daje isti niz */
function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export interface PromijesanoPitanje extends Omit<Pitanje, 'opcije' | 'tacan'> {
  opcije: string[];
  tacan: number;
}

export function promijesaj(p: Pitanje): PromijesanoPitanje {
  const rand = rng(p.id + 7);
  const indeksi = p.opcije.map((_, i) => i);

  // Fisher–Yates
  for (let i = indeksi.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indeksi[i], indeksi[j]] = [indeksi[j], indeksi[i]];
  }

  return {
    ...p,
    opcije: indeksi.map((i) => p.opcije[i]),
    tacan: indeksi.indexOf(p.tacan),
  };
}

/* -------------------------------------------------------------------------
   Bodovanje
   ------------------------------------------------------------------------- */

export interface Rezultat {
  /** broj tacnih po nivou, npr. { A1: 6, A2: 4, B1: 2, B2: 0 } */
  poNivou: Record<Nivo, number>;
  ukupno: number;
  maksimum: number;
  /** procijenjeni nivo koji polaznik vec ima */
  nivo: Nivo | 'ispod A1' | 'C1';
  /** nivo koji je logican sljedeci korak */
  preporuka: Preporuka;
}

export interface Preporuka {
  naslov: string;
  tekst: string;
  /** stranica na koju vodi dugme */
  putanja: string;
  dugme: string;
}

const PREPORUKE: Record<string, Preporuka> = {
  'ispod A1': {
    naslov: 'Kreni od početka – nivo A1',
    tekst:
      'Nemaš predznanja ili je ostalo vrlo malo od ranijeg učenja, što je sasvim uobičajeno. Preporučujemo kurs od A1 nivoa, gdje se gradivo gradi postepeno i bez pretpostavki o predznanju.',
    putanja: '/kursevi-za-odrasle',
    dugme: 'Pogledaj kurseve za odrasle',
  },
  A1: {
    naslov: 'Nastavi na nivou A2',
    tekst:
      'Osnove su ti tu – sadašnje vrijeme, članovi i osnovni vokabular. Sljedeći korak je A2, gdje se uvode prošlo vrijeme, dativ i složenije rečenice.',
    putanja: '/kursevi-za-odrasle',
    dugme: 'Pogledaj kurseve za odrasle',
  },
  A2: {
    naslov: 'Spreman/na si za nivo B1',
    tekst:
      'Solidno vladaš osnovnom gramatikom i svakodnevnim temama. Na B1 nivou se radi na samostalnom izražavanju, konjunktivu i složenijim rečenicama – to je i nivo koji se najčešće traži za posao i boravak.',
    putanja: '/kursevi-za-odrasle',
    dugme: 'Pogledaj kurseve za odrasle',
  },
  B1: {
    naslov: 'Sljedeći korak je B2',
    tekst:
      'Snalaziš se u složenijim strukturama. B2 nivo donosi precizniji jezik, apstraktnije teme i pripremu za zahtjevnije ispite. Ako ti treba certifikat, sada je pravi trenutak za pripremnu nastavu.',
    putanja: '/osd',
    dugme: 'Pogledaj pripremu za ÖSD ispit',
  },
  B2: {
    naslov: 'Vrijeme je za certifikat',
    tekst:
      'Rezultat je vrlo dobar na svim nivoima. Ono što ti sada najviše koristi jeste ciljana priprema za ÖSD ili Goethe ispit – rad na formatu ispita, strategiji i preciznosti, uz simulaciju pravog testa.',
    putanja: '/goethe',
    dugme: 'Pogledaj pripremu za Goethe ispit',
  },
  C1: {
    naslov: 'Vrijeme je za certifikat',
    tekst:
      'Rezultat je vrlo dobar na svim nivoima. Ono što ti sada najviše koristi jeste ciljana priprema za ÖSD ili Goethe ispit – rad na formatu ispita, strategiji i preciznosti, uz simulaciju pravog testa.',
    putanja: '/goethe',
    dugme: 'Pogledaj pripremu za Goethe ispit',
  },
};

/**
 * Nivo se odredjuje kao najvisi nivo koji je savladan, uz uslov da su
 * savladani i svi nizi. Time se sprjecava da neko ko pogodi par tezih
 * pitanja, a ne zna osnove, dobije previsoku procjenu.
 */
export function ocijeni(pitanja: Pitanje[], odgovori: Record<number, number>): Rezultat {
  const poNivou = { A1: 0, A2: 0, B1: 0, B2: 0 } as Record<Nivo, number>;

  pitanja.forEach((p) => {
    const promijesano = promijesaj(p);
    if (odgovori[p.id] === promijesano.tacan) poNivou[p.nivo] += 1;
  });

  let nivo: Rezultat['nivo'] = 'ispod A1';
  for (const n of NIVOI) {
    if (poNivou[n] >= PRAG) nivo = n;
    else break;
  }
  if (nivo === 'B2' && poNivou.B2 === PITANJA_PO_NIVOU) nivo = 'C1';

  const ukupno = NIVOI.reduce((zbir, n) => zbir + poNivou[n], 0);

  return {
    poNivou,
    ukupno,
    maksimum: pitanja.length,
    nivo,
    preporuka: PREPORUKE[nivo],
  };
}

/** kratak opis nivoa za prikaz na rezultatu */
export const OPIS_NIVOA: Record<string, string> = {
  'ispod A1': 'Početnik bez predznanja',
  A1: 'Osnovni nivo – jednostavne fraze i svakodnevne situacije',
  A2: 'Osnovni nivo – snalaženje u poznatim temama',
  B1: 'Samostalni korisnik – razgovor o poznatim temama bez većih problema',
  B2: 'Samostalni korisnik – tečno izražavanje i složenije teme',
  C1: 'Napredni korisnik – jezik u struci i apstraktne teme',
};
