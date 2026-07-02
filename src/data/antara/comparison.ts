// src/data/antara/comparison.ts
// What Makes Antara Global Different — comparison data
// Developer: Ram Nath G K (pages 22-25)

export interface NotItem {
  title: string;
  description: string;
}

export interface FeaturePillar {
  title: string;
  through: string[];
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const COMPARISON_HERO = {
  heading: "More Than Consulting. A Complete Growth Ecosystem.",
  subtext:
    "Antara Global goes beyond traditional business support by combining strategy, knowledge, partnerships, venture readiness, and capital connectivity to help businesses prepare, connect, and grow.",
} as const;

// ─── What We Are NOT ─────────────────────────────────────────────────────────
export const WHAT_WE_ARE_NOT: NotItem[] = [
  {
    title: "Loan Agency",
    description: "Not focused on only providing financial products.",
  },
  {
    title: "Funding Broker",
    description: "We do not promise or sell funding opportunities.",
  },
  {
    title: "Training Institute",
    description:
      "We focus on practical business readiness, not only learning sessions.",
  },
  {
    title: "Investment Guarantee Platform",
    description:
      "We do not guarantee investments, funding, or capital commitments.",
  },
  {
    title: "Generic Consultancy",
    description:
      "We provide ecosystem-driven strategic support beyond standard consulting.",
  },
];

// ─── What We ARE ─────────────────────────────────────────────────────────────
export const WHAT_WE_ARE = {
  highlight:
    "Strategic Business Advisory, Venture Readiness, Fundraising Support & Capital Connectivity Ecosystem",
  description:
    "Antara Global helps businesses become growth-ready and investment-ready through:",
  pillars: [
    {
      title: "Prepare",
      through: [
        "Strategic guidance",
        "Business readiness support",
        "Financial knowledge",
        "Growth planning",
      ],
    },
    {
      title: "Connect",
      through: [
        "Advisors",
        "Investors",
        "Industry experts",
        "Strategic partners",
        "Ecosystem networks",
      ],
    },
    {
      title: "Grow",
      through: [
        "Opportunities",
        "Partnerships",
        "Long-term value creation",
        "Sustainable business development",
      ],
    },
  ] satisfies FeaturePillar[],
} as const;

// ─── Brand Statement ─────────────────────────────────────────────────────────
export const COMPARISON_BRAND = {
  highlight: "Prepare. Connect. Capitalize. Scale.",
  supporting:
    "We bridge the gap between businesses, knowledge, capital, and opportunities to create sustainable growth journeys.",
} as const;

// ─── Visual icons (Lucide names) ─────────────────────────────────────────────
export const COMPARISON_ICONS = {
  trust:       "Shield",
  strategy:    "Target",
  connections: "Network",
  capital:     "Coins",
} as const;
