import { site, contactLinks } from "../config/site";
import { isBackendConfigured } from "./contact";
import type { Rezultat } from "./test";

export interface TestLead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

export type TestSubmitResult =
  | { kind: "sent" }
  | { kind: "fallback"; whatsapp: string; viber: string; mailto: string };

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Tekst koji ide u WhatsApp / Viber / e-mail kad backend nije podešen. */
export function formatTestLead(lead: TestLead, rezultat: Rezultat): string {
  const poNivou = Object.entries(rezultat.poNivou)
    .map(([nivo, broj]) => `${nivo} ${broj}/6`)
    .join(", ");

  return [
    "Rezultat besplatnog testa znanja sa sajta",
    "",
    `Ime i prezime: ${lead.firstName} ${lead.lastName}`,
    `Email: ${lead.email}`,
    `Telefon: ${lead.phone || "nije ostavljen"}`,
    "",
    `Procijenjeni nivo: ${rezultat.nivo}`,
    `Ukupno: ${rezultat.ukupno}/${rezultat.maksimum}`,
    `Po nivoima: ${poNivou}`,
  ].join("\n");
}

/**
 * Šalje rezultat testa.
 *
 * Isti princip kao kod kontakt forme: ako Supabase nije podešen ili ne
 * odgovara, lead se ne gubi — polaznik dobije gotove linkove da ga pošalje
 * sam, a rezultat mu se u svakom slučaju prikaže na stranici.
 */
export async function submitTestResult(
  lead: TestLead,
  rezultat: Rezultat,
  odgovori: Record<number, number>,
): Promise<TestSubmitResult> {
  const text = formatTestLead(lead, rezultat);
  const fallback: TestSubmitResult = {
    kind: "fallback",
    whatsapp: `${contactLinks.whatsapp}?text=${encodeURIComponent(text)}`,
    viber: contactLinks.viber,
    mailto:
      `mailto:${site.email}` +
      `?subject=${encodeURIComponent(`Test znanja — nivo ${rezultat.nivo}`)}` +
      `&body=${encodeURIComponent(text)}`,
  };

  if (!isBackendConfigured) return fallback;

  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/send-test-result`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
        },
        body: JSON.stringify({
          firstName: lead.firstName,
          lastName: lead.lastName,
          email: lead.email,
          phone: lead.phone,
          consent: lead.consent,
          level: rezultat.nivo,
          score: rezultat.ukupno,
          total: rezultat.maksimum,
          levelScores: rezultat.poNivou,
          answers: odgovori,
        }),
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return { kind: "sent" };
  } catch {
    return fallback;
  }
}
