import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** Izbor iz padajućeg menija "Šta vas zanima" — opciono. */
  courseInterest?: string;
  /** Slobodan tekst polaznika — opciono. */
  message?: string;
}

/** Vrijednosti iz forme u čitljiv tekst za e-mail. */
const PROGRAMI: Record<string, string> = {
  "kursevi-za-odrasle": "Kursevi za odrasle",
  "kursevi-za-djecu": "Kursevi za djecu (6–9. razred)",
  "individualni-odrasli": "Individualni časovi za odrasle",
  "individualni-djeca": "Individualni časovi za djecu",
  "individualni-online": "Individualni časovi online",
  osd: "Priprema za ÖSD ispit",
  goethe: "Priprema za Goethe ispit",
  "nisam-siguran": "Nije siguran/na — treba savjet",
};
const programLabel = (v?: string) => (v ? PROGRAMI[v] ?? v : "nije izabrano");

const DESTINATION_EMAIL = "derdiedas.centar@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as ContactPayload;

    if (!body?.firstName || !body?.lastName || !body?.email || !body?.phone) {
      return new Response(
        JSON.stringify({ error: "Sva polja su obavezna." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    // Persist the submission (service role bypasses RLS).
    const { error: insertError } = await supabase
      .from("contact_requests")
      .insert({
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email,
        phone: body.phone,
        course_interest: body.courseInterest || null,
        message: body.message || null,
      });

    if (insertError) {
      return new Response(
        JSON.stringify({ error: "Greška pri čuvanju prijave." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Send the notification email via Resend if an API key is configured.
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const emailText = `Nova prijava za besplatni uvodni razgovor:

Ime: ${body.firstName} ${body.lastName}
Email: ${body.email}
Telefon: ${body.phone}
Zanima ga/je: ${programLabel(body.courseInterest)}${
        body.message ? `\n\nPoruka: ${body.message}` : ""
      }

Odgovorite na ovaj email ili pozovite polaznika na navedeni broj telefona.`;

      const emailHtml = `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
        <h2 style="color: #16243A;">Nova prijava za besplatni uvodni razgovor</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold; width: 120px;">Ime:</td><td style="padding: 8px;">${body.firstName} ${body.lastName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Telefon:</td><td style="padding: 8px;">${body.phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; background: #f5f8fb;">Zanima ga/je:</td><td style="padding: 8px; background: #f5f8fb;"><strong>${programLabel(body.courseInterest)}</strong></td></tr>
          ${body.message ? `<tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Poruka:</td><td style="padding: 8px; white-space: pre-wrap;">${body.message}</td></tr>` : ""}
        </table>
        <p style="margin-top: 16px; color: #666; font-size: 13px;">Odgovorite na ovaj email ili pozovite polaznika na navedeni broj telefona.</p>
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
          subject: `Nova prijava: ${body.firstName} ${body.lastName}`,
          text: emailText,
          html: emailHtml,
          reply_to: body.email,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Resend email failed:", errBody);
        return new Response(
          JSON.stringify({ error: "Email nije poslan. " + errBody }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    } else {
      console.warn("RESEND_API_KEY not set — submission saved but no email sent.");
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY nije konfigurisan." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: "Došlo je do greške. Pokušajte ponovo." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
