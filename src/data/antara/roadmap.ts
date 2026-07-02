// src/data/antara/roadmap.ts
// Positioning & Roadmap data — Antara Global
// Section: Roadmap phases only (Positioning page is Coming Soon)

export interface RoadmapPhase {
  phase: number;
  title: string;
  description: string;
  features: string[];
  status: "active" | "upcoming" | "future";
}

export interface PositioningPillar {
  title: string;
  description: string;
  icon: string;
}

// ─── Positioning Hero ─────────────────────────────────────────────────────────
export const POSITIONING_HERO = {
  heading: "Building Growth-Ready & Investment-Ready Businesses",
  subtext:
    "Antara Global helps startups and MSMEs strengthen business foundations, improve funding readiness, connect with investors, and unlock strategic growth opportunities through advisory, innovation, partnerships, and capital ecosystems.",
} as const;

// ─── Who We Are Statement ────────────────────────────────────────────────────
export const WHO_WE_ARE = {
  heading: "Who We Are",
  content:
    "Antara Global is a strategic business advisory and venture readiness ecosystem helping startups and MSMEs prepare for growth, fundraising, and long-term success through:",
  points: [
    "Expert guidance",
    "Financial knowledge",
    "Capital connectivity",
    "Strategic partnerships",
    "Growth opportunities",
  ],
} as const;

// ─── Growth Framework Pillars ─────────────────────────────────────────────────
export const POSITIONING_PILLARS: PositioningPillar[] = [
  {
    title: "Strategy",
    description:
      "Helping businesses build strong foundations through structured planning, business advisory, and growth strategies.",
    icon: "Target",
  },
  {
    title: "Readiness",
    description:
      "Preparing businesses for investment, partnerships, and expansion opportunities.",
    icon: "CheckCircle",
  },
  {
    title: "Connectivity",
    description:
      "Creating meaningful connections between businesses, investors, advisors, and ecosystem partners.",
    icon: "Network",
  },
  {
    title: "Scale",
    description:
      "Supporting sustainable growth and long-term business value creation.",
    icon: "TrendingUp",
  },
];

// ─── Roadmap Phases ───────────────────────────────────────────────────────────
export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Foundation & Advisory Ecosystem",
    description:
      "Building the foundation by helping businesses become structured, prepared, and growth-ready.",
    features: [
      "Advisory Services",
      "Funding Readiness Assessments",
      "Fundraising Support",
      "Workshops & Events",
      "Knowledge Hub",
      "Partner Network Development",
    ],
    status: "active",
  },
  {
    phase: 2,
    title: "Digital Ecosystem Expansion",
    description:
      "Creating technology-enabled tools to improve business collaboration and ecosystem access.",
    features: [
      "Founder Dashboard",
      "Investor Engagement Portal",
      "Advisory Progress Tracking",
      "Document Management System",
      "Ecosystem Marketplace",
    ],
    status: "upcoming",
  },
  {
    phase: 3,
    title: "Global Growth Network",
    description:
      "Building a global platform connecting businesses, knowledge, innovation, and capital.",
    features: [
      "Venture Readiness Platform",
      "Global Strategic Partnerships",
      "Innovation & Capital Network Expansion",
      "Technology-Enabled Ecosystem Services",
    ],
    status: "future",
  },
];

// ─── Company Description ─────────────────────────────────────────────────────
export const COMPANY_DESCRIPTION = {
  heading: "Antara Global",
  content:
    "Antara Global is a strategic business advisory, venture readiness, and capital connectivity ecosystem helping startups and MSMEs become growth-ready and investment-ready. Through expert guidance, financial knowledge, fundraising support, strategic partnerships, and investor connectivity, Antara Global empowers businesses to unlock sustainable growth opportunities.",
} as const;

// ─── Closing Brand Statement ─────────────────────────────────────────────────
export const CLOSING_BRAND = {
  banner:
    "Democratizing Business Knowledge. Connecting Opportunities. Enabling Growth.",
  supporting:
    "Antara Global exists to democratize business and financial knowledge, strengthen entrepreneurial ecosystems, and create meaningful connections between businesses, advisors, investors, and opportunities.",
} as const;

// ─── CTA ─────────────────────────────────────────────────────────────────────
export const ROADMAP_CTA = {
  heading: "Build Your Future With Antara Global",
  cta: {
    primary:   { label: "Partner With Us",       href: "/contact" },
    secondary: { label: "Explore Our Ecosystem", href: "/ecosystem" },
  },
} as const;
