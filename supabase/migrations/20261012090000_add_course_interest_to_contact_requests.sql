/*
# Dodaje courseInterest i message u contact_requests

Kontakt forma na sajtu šalje i izbor programa ("Šta vas zanima") i opcionu
poruku, ali ih tabela nije imala — pa su se tiho gubili na upisu. To je
najkorisniji dio prijave jer odmah kaže koji program osobu zanima.

1. Promjene
- `course_interest` (text) — vrijednost iz padajućeg menija, npr. "osd".
  Nullable jer je polje opciono i jer postojeći redovi nemaju tu vrijednost.
- `message` (text) — slobodan tekst polaznika, takođe opcion.

2. Sigurnost
- RLS ostaje uključen bez anon politika; pristup i dalje ide isključivo kroz
  `send-contact-email` edge funkciju sa service role ključem.
*/

ALTER TABLE contact_requests
  ADD COLUMN IF NOT EXISTS course_interest text,
  ADD COLUMN IF NOT EXISTS message text;
