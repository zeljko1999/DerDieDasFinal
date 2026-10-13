/*
# Create contact_requests table for form submissions

1. New Tables
- `contact_requests`
  - `id` (uuid, primary key)
  - `first_name` (text, not null) — submitter's first name
  - `last_name` (text, not null) — submitter's last name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, not null) — submitter's phone number
  - `created_at` (timestamptz, default now()) — when the request was submitted

2. Security
- RLS enabled on `contact_requests`.
- No anon/authenticated policies are added: this table stores sensitive
  personal data (names, emails, phone numbers) and must NOT be readable
  or writable from the browser. All access goes through the
  `send-contact-email` edge function, which runs with the service role
  key and bypasses RLS. This keeps submissions private to the school.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;