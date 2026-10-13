import { site } from "../config/site";
import type { FaqItem } from "../data/osdFaq";

/**
 * JSON-LD za Google. Bez ovoga u rezultatima pretrage nema ni adrese,
 * ni radnog vremena, ni prikaza pitanja i odgovora.
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LanguageSchool",
  "@id": `${site.url}/#organizacija`,
  name: `${site.name} — ${site.tagline}`,
  description:
    "Specijalizovani centar za njemački jezik u Banjoj Luci. Kursevi za djecu i odrasle, individualni časovi uživo i online, priprema za ÖSD i Goethe ispit.",
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Banja Luka" },
    { "@type": "Country", name: "Bosna i Hercegovina" },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
  foundingDate: "2018",
  knowsLanguage: ["de", "bs"],
};

export function courseSchema(input: {
  name: string;
  description: string;
  url: string;
  mode: "Uživo" | "Online" | "Uživo i online";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: `${site.url}${input.url}`,
    inLanguage: "bs",
    teaches: "Njemački jezik",
    provider: {
      "@type": "LanguageSchool",
      "@id": `${site.url}/#organizacija`,
      name: site.name,
      url: site.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: input.mode === "Online" ? "Online" : "Onsite",
      location: {
        "@type": "Place",
        name: `${site.name} ${site.address.city}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressCountry: site.address.country,
        },
      },
    },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Besplatni test znanja. Označen je kao Quiz koji je dio ponude škole —
 * Google tako zna da je u pitanju alat, a ne još jedna stranica kursa.
 */
export const testSchema = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "Besplatni test znanja njemačkog jezika",
  description:
    "Online test njemačkog jezika sa 24 pitanja koji procjenjuje nivo od A1 do B2 i preporučuje odgovarajući program.",
  url: `${site.url}/test-znanja`,
  educationalLevel: "A1, A2, B1, B2",
  isAccessibleForFree: true,
  inLanguage: "bs",
  about: { "@type": "Thing", name: "Njemački jezik" },
  provider: {
    "@type": "LanguageSchool",
    name: `${site.name} — ${site.tagline}`,
    url: site.url,
  },
};
