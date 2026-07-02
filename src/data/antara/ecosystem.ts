// src/data/antara/ecosystem.ts
// Ecosystem Model data — Antara Global
// Developer: Aditya Sarkar (pages 18-21)

export interface EcosystemStep {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
  color: string;
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const ECOSYSTEM_HERO = {
  heading: "Our Ecosystem Model",
  subtext:
    "Antara Global follows a structured ecosystem approach that helps businesses gain knowledge, build strategic foundations, access opportunities, and achieve sustainable growth.",
} as const;

// ─── 4-Step Ecosystem Flow ────────────────────────────────────────────────────
export const ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    id: "educate",
    number: "01",
    title: "Educate",
    description:
      "Building awareness and knowledge that enables entrepreneurs and businesses to make informed decisions.",
    points: ["Workshops", "Webinars", "Founder Sessions", "Business Resources"],
    icon: "BookOpen",
    color: "#6366F1",
  },
  {
    id: "advise",
    number: "02",
    title: "Advise",
    description:
      "Providing strategic guidance and business readiness support to strengthen business foundations.",
    points: ["Strategic guidance", "Business readiness support"],
    icon: "Target",
    color: "#3B82F6",
  },
  {
    id: "connect",
    number: "03",
    title: "Connect",
    description:
      "Creating meaningful connections between businesses and relevant ecosystem participants.",
    points: ["Advisors", "Investors", "Partners", "Growth Opportunities"],
    icon: "Network",
    color: "#06B6D4",
  },
  {
    id: "grow",
    number: "04",
    title: "Grow",
    description:
      "Supporting businesses in achieving sustainable expansion and long-term value creation.",
    points: [
      "Long-term value creation",
      "Sustainable business expansion",
    ],
    icon: "TrendingUp",
    color: "#10B981",
  },
];

// ─── Highlight Section ───────────────────────────────────────────────────────
export const ECOSYSTEM_HIGHLIGHT = {
  heading: "Beyond Consulting. Building Ecosystems.",
  text: "Antara Global connects knowledge, strategy, capital, and opportunities to help businesses become growth-ready, investment-ready, and future-ready.",
} as const;

// ─── Loop visualization data ─────────────────────────────────────────────────
export const ECOSYSTEM_LOOP_LABELS = [
  "Educate",
  "Advise",
  "Connect",
  "Grow",
] as const;
