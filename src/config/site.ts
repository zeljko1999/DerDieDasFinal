/**
 * Jedno mjesto za sve kontakt podatke i linkove.
 * Ako se promijeni broj telefona ili adresa, mijenja se samo ovdje.
 */

export const site = {
  name: "Der Die Das",
  tagline: "Centar za njemački jezik",
  url: "https://www.derdiedascentar.com",

  phone: "+387 65 909 845",
  phoneRaw: "+38765909845",
  phoneDigits: "38765909845",
  email: "derdiedas.centar@gmail.com",

  address: {
    street: "Slavka Rodića 1",
    city: "Banja Luka",
    postalCode: "78000",
    country: "BA",
  },

  social: {
    instagram: "https://www.instagram.com/derdiedas.banjaluka",
    facebook:
      "https://www.facebook.com/p/Der-Die-Das-Centar-Za-Njema%C4%8Dki-Jezik-61558461462657/",
  },
} as const;

export const contactLinks = {
  tel: `tel:${site.phoneRaw}`,
  mail: `mailto:${site.email}`,
  whatsapp: `https://wa.me/${site.phoneDigits}`,
  viber: `viber://chat?number=${site.phoneRaw}`,
} as const;

/** Ponuda — koristi se u padajućem meniju forme i kasnije za structured data. */
export const courses = [
  { value: "kursevi-za-odrasle", label: "Kursevi za odrasle" },
  { value: "kursevi-za-djecu", label: "Kursevi za djecu (6–9. razred)" },
  { value: "individualni-odrasli", label: "Individualni časovi za odrasle" },
  { value: "individualni-djeca", label: "Individualni časovi za djecu" },
  { value: "individualni-online", label: "Individualni časovi online" },
  { value: "osd", label: "Priprema za ÖSD ispit" },
  { value: "goethe", label: "Priprema za Goethe ispit" },
  { value: "nisam-siguran", label: "Nisam siguran/na — trebam savjet" },
] as const;

export const courseLabel = (value: string) =>
  courses.find((c) => c.value === value)?.label ?? value;
