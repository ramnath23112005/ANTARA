// src/lib/careers.ts
// Career application submissions

import { supabase, TABLES } from "./supabase";

export interface ApplicationPayload {
  name:       string;
  email:      string;
  phone?:     string;
  role:       string;
  linkedin?:  string;
  portfolio?: string;
  coverLetter?: string;
}

export async function submitApplication(payload: ApplicationPayload): Promise<void> {
  const { error } = await supabase
    .from(TABLES.CAREER_APPLICATIONS)
    .insert([{ ...payload, created_at: new Date().toISOString() }]);

  if (error) throw new Error(error.message);
}
