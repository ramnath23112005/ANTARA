// src/lib/admin-api.ts
// Admin-only Supabase calls — used only by admin/* pages

import { supabase, TABLES } from "./supabase";

// ─── Fetch all contacts ───────────────────────────────────────────────────────
export async function getContacts() {
  const { data, error } = await supabase
    .from(TABLES.CONTACTS)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
}

// ─── Fetch all book-call requests ────────────────────────────────────────────
export async function getBookCalls() {
  const { data, error } = await supabase
    .from(TABLES.BOOK_CALLS)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
}

// ─── Fetch all career applications ───────────────────────────────────────────
export async function getApplications() {
  const { data, error } = await supabase
    .from(TABLES.CAREER_APPLICATIONS)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
}

// ─── Fetch all leads ─────────────────────────────────────────────────────────
export async function getLeads() {
  const { data, error } = await supabase
    .from(TABLES.LEADS)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
}

// ─── Admin sign in ────────────────────────────────────────────────────────────
export async function adminSignIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  return data;
}

// ─── Admin sign out ───────────────────────────────────────────────────────────
export async function adminSignOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// ─── Get current session ─────────────────────────────────────────────────────
export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}
