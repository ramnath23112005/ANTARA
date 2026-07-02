// src/data/antara/values.ts
// Core Values data — Antara Global
// Developer: (unassigned — pages 26-30)

export interface CoreValue {
  id: string;
  number: string;
  title: string;
  description: string;
  focusPoints: string[];
  icon: string;
  color: string;
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const VALUES_HERO = {
  heading: "Our Core Values",
  subtext:
    "Our values define how we build relationships, support businesses, and create meaningful growth opportunities through trust, knowledge, collaboration, and excellence.",
} as const;

// ─── Values Grid ─────────────────────────────────────────────────────────────
export const CORE_VALUES: CoreValue[] = [
  {
    id: "integrity",
    number: "01",
    title: "Integrity",
    description:
      "Building relationships based on trust, transparency, and ethical business practices.",
    focusPoints: [
      "Honest communication",
      "Transparent approach",
      "Trust-based partnerships",
    ],
    icon: "Shield",
    color: "#6366F1",
  },
  {
    id: "knowledge",
    number: "02",
    title: "Knowledge",
    description:
      "Empowering informed decision-making through financial awareness and business understanding.",
    focusPoints: [
      "Business education",
      "Financial awareness",
      "Better decision-making",
    ],
    icon: "BookOpen",
    color: "#3B82F6",
  },
  {
    id: "innovation",
    number: "03",
    title: "Innovation",
    description:
      "Encouraging forward-thinking ideas, modern solutions, and progressive business growth.",
    focusPoints: [
      "New opportunities",
      "Creative thinking",
      "Future-focused approach",
    ],
    icon: "Rocket",
    color: "#8B5CF6",
  },
  {
    id: "collaboration",
    number: "04",
    title: "Collaboration",
    description:
      "Creating meaningful opportunities through partnerships, networks, and ecosystem connections.",
    focusPoints: [
      "Strategic partnerships",
      "Expert networks",
      "Shared growth",
    ],
    icon: "Users",
    color: "#06B6D4",
  },
  {
    id: "excellence",
    number: "05",
    title: "Excellence",
    description:
      "Delivering structured, professional, and value-driven support to businesses.",
    focusPoints: [
      "Quality execution",
      "Professional approach",
      "Continuous improvement",
    ],
    icon: "Award",
    color: "#F59E0B",
  },
  {
    id: "growth",
    number: "06",
    title: "Growth",
    description:
      "Enabling sustainable and scalable business success through strategic support.",
    focusPoints: [
      "Long-term value creation",
      "Business expansion",
      "Sustainable progress",
    ],
    icon: "TrendingUp",
    color: "#10B981",
  },
];

// ─── Brand Statement ─────────────────────────────────────────────────────────
export const VALUES_BRAND_STATEMENT = {
  heading: "Values That Build Stronger Businesses",
  text: "At Antara Global, growth is not only measured by scale but by the strength of relationships, knowledge, partnerships, and sustainable impact created along the journey.",
} as const;

// ─── CTA Section ─────────────────────────────────────────────────────────────
export const VALUES_CTA = {
  heading: "Grow With A Trusted Business Ecosystem",
  cta: {
    primary:   { label: "Connect With Us",    href: "/contact" },
    secondary: { label: "Start Your Journey", href: "/services" },
  },
} as const;
