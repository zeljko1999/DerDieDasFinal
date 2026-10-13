import { site, contactLinks, courseLabel } from "../config/site";

export interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}

export type ContactResult =
  | { kind: "sent" }
  | { kind: "fallback"; whatsapp: string; viber: string; mailto: string };

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Da li je backend uopšte podešen. Prazan string i doslovni "undefined" se ne računaju. */
export const isBackendConfigured = Boolean(
  supabaseUrl &&
  supabaseKey &&
  supabaseUrl !== "undefined" &&
  supabaseKey !== "undefined",
);

/** Tekst prijave koji ide u WhatsApp / Viber / e-mail kad backend nije podešen. */
export function formatRequest(data: ContactRequest): string {
  const lines = [
    "Prijava sa sajta – besplatan uvodni razgovor",
    "",
    `Ime i prezime: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Telefon: ${data.phone}`,
  ];
  if (data.courseInterest)
    lines.push(`Zanima me: ${courseLabel(data.courseInterest)}`);
  if (data.message.trim()) lines.push("", `Poruka: ${data.message.trim()}`);
  return lines.join("\n");
}

/**
 * Šalje prijavu. Ako backend nije podešen (ili padne), ne gubi se lead —
 * vraća se `fallback` sa gotovim linkovima za WhatsApp, Viber i e-mail.
 */
export async function submitContactRequest(
  data: ContactRequest,
): Promise<ContactResult> {
  const text = formatRequest(data);
  const fallback: ContactResult = {
    kind: "fallback",
    whatsapp: `${contactLinks.whatsapp}?text=${encodeURIComponent(text)}`,
    viber: contactLinks.viber,
    mailto:
      `mailto:${site.email}` +
      `?subject=${encodeURIComponent("Prijava sa sajta – uvodni razgovor")}` +
      `&body=${encodeURIComponent(text)}`,
  };

  if (!isBackendConfigured) return fallback;

  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/send-contact-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return { kind: "sent" };
  } catch {
    // Backend je podešen ali ne radi — korisnik i dalje ima način da se javi.
    return fallback;
  }
}
