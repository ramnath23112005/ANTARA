// src/lib/api.ts
// ────────────────────────────────────────────────────────────────────────────
// CRITICAL RULE: ALL frontend → Supabase calls go through this file ONLY.
// Never call supabase.from() directly from a component or page.
//
// Usage:
//   import { submitContact, bookCall } from "@/lib/api";
// ────────────────────────────────────────────────────────────────────────────

export { submitContact, type ContactPayload }   from "./contact";
export { submitApplication, type ApplicationPayload } from "./careers";
export { bookCall, type BookCallPayload }        from "./contact";
export { getEvents, submitEventInterest }        from "./events";
