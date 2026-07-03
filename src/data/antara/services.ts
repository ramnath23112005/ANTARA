// src/data/antara/services.ts
// Services / What We Do data — Antara Global
// Developer: Selvan (pages 5-11)

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [];

// ─── Section metadata ─────────────────────────────────────────────────────────
export const SERVICES_META = {
  heading: "What We Do",
  subheading: "Our Services",
  description:
    "Antara Global provides a comprehensive suite of advisory, readiness, and growth services designed to help businesses at every stage unlock their full potential.",
} as const;
