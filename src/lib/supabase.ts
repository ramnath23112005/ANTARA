// src/lib/supabase.ts
// Supabase client initialisation
// RULE: Never import this directly from components — use lib/api.ts instead

import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string | undefined;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const PLACEHOLDER_URL  = "https://placeholder.supabase.co";
const PLACEHOLDER_KEY  = "placeholder-anon-key";

if (!supabaseUrl || !supabaseAnon) {
  console.warn(
    "[Antara] Supabase env vars not set. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to a .env file. " +
    "Forms and admin features will not work until this is configured."
  );
}

// Use placeholder values so the client initialises without throwing.
// All actual calls will fail gracefully with a network error until real keys are added.
export const supabase = createClient(
  supabaseUrl  ?? PLACEHOLDER_URL,
  supabaseAnon ?? PLACEHOLDER_KEY
);

// ─── Database table names (single source of truth) ───────────────────────────
export const TABLES = {
  CONTACTS:            "contacts",
  BOOK_CALLS:          "book_calls",
  CAREER_APPLICATIONS: "career_applications",
  LEADS:               "leads",
  EVENTS:              "events",
} as const;

export type TableName = (typeof TABLES)[keyof typeof TABLES];
