// src/lib/events.ts
// Fetch and register interest in events / workshops

import { supabase, TABLES } from "./supabase";

export interface AntaraEvent {
  id:          string;
  title:       string;
  description: string;
  date:        string;
  location?:   string;
  type:        "workshop" | "webinar" | "founder-session" | "other";
  registrationOpen: boolean;
}

export async function getEvents(): Promise<AntaraEvent[]> {
  const { data, error } = await supabase
    .from(TABLES.EVENTS)
    .select("*")
    .order("date", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as AntaraEvent[];
}

export async function submitEventInterest(eventId: string, email: string): Promise<void> {
  const { error } = await supabase
    .from(TABLES.LEADS)
    .insert([{ event_id: eventId, email, created_at: new Date().toISOString() }]);

  if (error) throw new Error(error.message);
}
