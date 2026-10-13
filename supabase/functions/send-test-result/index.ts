import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TestPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  level: string;
  score: number;
  total: number;
  levelScores: Record<string, number>;
  answers?: Record<string, number>;
  consent: boolean;
}

const DESTINATION_EMAIL = "derdiedas.centar@gmail.com";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as TestPayload;

    if (!body?.firstName || !body?.lastName || !body?.email || !body?.level) {
      return json({ error: "Ime, prezime i email su obavezni." }, 400);
    }
    if (!body.consent) {
      // Bez izricite saglasnosti se ne cuva nista - podaci su licni.
      return json({ error: "Potrebna je saglasnost za kontakt." }, 400);
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
      return json({ error: "Email adresa nije ispravna." }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );

    const { error: insertError } = await supabase.from("test_results").insert({
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone || null,
      level: body.level,
      score: body.score,
      total: body.total,
      level_scores: body.levelScores ?? {},
      answers: body.answers ?? null,
      consent: body.consent,
    });

    if (insertError) {
      console.error("insert test_results failed:", insertError);
      return json({ error: "Greška pri čuvanju rezultata." }, 500);
    }

    // Rezultat se polazniku prikazuje odmah na stranici, pa neuspjeh emaila
    // ne smije oboriti zahtjev - lead je vec sacuvan u bazi.
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY nije postavljen — rezultat sačuvan, email nije poslan.");
      return json({ success: true, emailed: false });
    }

    const poNivou = Object.entries(body.levelScores ?? {})
      .map(([nivo, broj]) => `${nivo}: ${broj}/6`)
      .join(" · ");

    const emailText = `Novi rezultat besplatnog testa znanja

Ime: ${body.firstName} ${body.lastName}
Email: ${body.email}
Telefon: ${body.phone || "nije ostavljen"}

Procijenjeni nivo: ${body.level}
Ukupan rezultat: ${body.score}/${body.total}
Po nivoima: ${poNivou}

Ovo je osoba koja se aktivno zanima za učenje njemačkog — vrijedi je kontaktirati u roku od dan-dva.`;

    const emailHtml = `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
      <h2 style="color: #10375C; margin-bottom: 4px;">Novi rezultat besplatnog testa znanja</h2>
      <p style="color: #666; margin-top: 0; font-size: 13px;">Osoba je sama zatražila procjenu nivoa — topao kontakt.</p>
      <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 150px;">Ime:</td><td style="padding: 8px;">${body.firstName} ${body.lastName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Telefon:</td><td style="padding: 8px;">${body.phone || "<i>nije ostavljen</i>"}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; background: #f5f8fb;">Procijenjeni nivo:</td><td style="padding: 8px; background: #f5f8fb;"><strong style="color: #10375C; font-size: 18px;">${body.level}</strong></td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Ukupno:</td><td style="padding: 8px;">${body.score}/${body.total} tačnih</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Po nivoima:</td><td style="padding: 8px;">${poNivou}</td></tr>
      </table>
    </div>`;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Der Die Das <onboarding@resend.dev>",
        to: DESTINATION_EMAIL,
        subject: `Test znanja: ${body.firstName} ${body.lastName} — nivo ${body.level}`,
        text: emailText,
        html: emailHtml,
        reply_to: body.email,
      }),
    });

    if (!emailRes.ok) {
      console.error("Resend email failed:", await emailRes.text());
      return json({ success: true, emailed: false });
    }

    return json({ success: true, emailed: true });
  } catch (err) {
    console.error("send-test-result error:", err);
    return json({ error: "Došlo je do greške. Pokušajte ponovo." }, 500);
  }
});
