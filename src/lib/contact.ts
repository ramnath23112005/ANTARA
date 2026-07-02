// src/lib/contact.ts
// Contact form & book-a-call submissions

import { supabase, TABLES } from "./supabase";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ContactPayload {
  name:    string;
  email:   string;
  phone?:  string;
  company?: string;
  message: string;
  source?: string;     // which page the form was on
}

export interface BookCallPayload {
  name:        string;
  email:       string;
  phone?:      string;
  company?:    string;
  preferredDate?: string;
  message?:    string;
}

// ─── Submit contact enquiry ───────────────────────────────────────────────────
export async function submitContact(payload: ContactPayload): Promise<void> {
  const { error } = await supabase
    .from(TABLES.CONTACTS)
    .insert([{ ...payload, created_at: new Date().toISOString() }]);

  if (error) throw new Error(error.message);
}

// ─── Book a call ─────────────────────────────────────────────────────────────
export async function bookCall(payload: BookCallPayload): Promise<void> {
  const { error } = await supabase
    .from(TABLES.BOOK_CALLS)
    .insert([{ ...payload, created_at: new Date().toISOString() }]);

  if (error) throw new Error(error.message);
}
