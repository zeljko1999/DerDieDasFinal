/*
# Create test_results table for the free placement test

1. New Tables
- `test_results`
  - `id` (uuid, primary key)
  - `first_name` (text, not null) — polaznikovo ime
  - `last_name` (text, not null) — polaznikovo prezime
  - `email` (text, not null) — email na koji se šalje rezultat
  - `phone` (text) — opcion; ostavlja se samo ako polaznik želi poziv
  - `level` (text, not null) — procijenjeni nivo (npr. 'A2', 'ispod A1', 'C1')
  - `score` (integer, not null) — ukupno tačnih odgovora
  - `total` (integer, not null) — ukupan broj pitanja u testu
  - `level_scores` (jsonb, not null) — broj tačnih po nivou, npr. {"A1":6,"A2":4,"B1":2,"B2":0}
  - `answers` (jsonb) — odabrani odgovori, radi kasnije analize težine pitanja
  - `consent` (boolean, not null) — izričita saglasnost za kontakt
  - `created_at` (timestamptz, default now())

2. Security
- RLS je uključen na `test_results`.
- Namjerno NEMA anon/authenticated politika: tabela sadrži lične podatke
  (ime, email, telefon) i ne smije biti čitljiva ni upisiva iz browsera.
  Sav pristup ide kroz `send-test-result` edge funkciju koja radi sa
  service role ključem i zaobilazi RLS. Isti princip kao kod
  `contact_requests`.

3. Notes
- `consent` se čuva jer polaznik ostavlja podatke radi kontakta; bez
  izričite saglasnosti zapis se ne kreira (provjera je u edge funkciji).
- Index po `created_at` jer se lista uvijek gleda hronološki.
*/

CREATE TABLE IF NOT EXISTS test_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  level text NOT NULL,
  score integer NOT NULL,
  total integer NOT NULL,
  level_scores jsonb NOT NULL DEFAULT '{}'::jsonb,
  answers jsonb,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS test_results_created_at_idx
  ON test_results (created_at DESC);
