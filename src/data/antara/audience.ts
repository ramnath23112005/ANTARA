// src/data/antara/audience.ts
// Target Audience data — Antara Global
// Developer: (unassigned — pages 12-17)

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  color: "startup" | "msme" | "emerging";
  icon: string;
  subsegments: AudienceSubsegment[];
}

export interface AudienceSubsegment {
  title: string;
  description: string;
  focusAreas: string[];
}

export interface GrowthStage {
  stage: number;
  label: string;
  description: string;
}

// ─── Hero ───────────────────────────────────────────────────────────────────
export const AUDIENCE_HERO = {
  heading: "Empowering Businesses At Every Growth Stage",
  subtext:
    "Antara Global works with startups, MSMEs, entrepreneurs, and emerging businesses by providing strategic guidance, venture readiness support, financial knowledge, and access to growth opportunities.",
  cta: {
    primary: { label: "Explore Our Solutions", href: "/services" },
    secondary: { label: "Book Consultation",  href: "/contact" },
  },
  visualStages: ["Idea", "Startup", "Growth", "Expansion", "Scale"],
} as const;

// ─── Overview ────────────────────────────────────────────────────────────────
export const AUDIENCE_OVERVIEW = {
  heading: "Who We Empower",
  description:
    "Every business journey is different. Antara Global supports organizations at different stages by providing the right combination of strategy, knowledge, partnerships, and ecosystem access.",
} as const;

// ─── Audience Segments ───────────────────────────────────────────────────────
export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: "startups",
    title: "Startups",
    description:
      "Supporting founders and innovation-driven businesses with strategic direction, business readiness, and growth preparation.",
    color: "startup",
    icon: "Rocket",
    subsegments: [
      {
        title: "Early-Stage Ventures",
        description: "Support for businesses building their foundation.",
        focusAreas: [
          "Business strategy",
          "Market validation",
          "Business structure",
          "Growth planning",
          "Readiness assessment",
        ],
      },
      {
        title: "Growth-Stage Startups",
        description:
          "Supporting startups preparing for expansion and investment opportunities.",
        focusAreas: [
          "Scaling strategy",
          "Investor readiness",
          "Financial planning",
          "Fundraising preparation",
          "Strategic partnerships",
        ],
      },
      {
        title: "Innovation-Led Businesses",
        description:
          "Supporting businesses building new solutions and market opportunities.",
        focusAreas: [
          "Innovation strategy",
          "Ecosystem connections",
          "Growth opportunities",
          "Market positioning",
        ],
      },
    ],
  },
  {
    id: "msmes",
    title: "MSMEs",
    description:
      "Helping established businesses strengthen operations, improve financial preparedness, and unlock sustainable growth opportunities.",
    color: "msme",
    icon: "Building2",
    subsegments: [
      {
        title: "Manufacturing Businesses",
        description: "Support areas:",
        focusAreas: [
          "Growth strategy",
          "Operational improvement",
          "Expansion planning",
          "Business transformation",
        ],
      },
      {
        title: "Service Enterprises",
        description: "Support areas:",
        focusAreas: [
          "Market positioning",
          "Process improvement",
          "Scaling strategy",
          "Business optimization",
        ],
      },
      {
        title: "Family-Owned Businesses",
        description: "Support areas:",
        focusAreas: [
          "Business restructuring",
          "Governance improvement",
          "Succession planning",
          "Long-term growth",
        ],
      },
      {
        title: "Export-Oriented Enterprises",
        description: "Support areas:",
        focusAreas: [
          "Expansion planning",
          "Market opportunities",
          "Strategic connections",
          "Growth readiness",
        ],
      },
    ],
  },
  {
    id: "emerging",
    title: "Emerging Businesses",
    description:
      "Supporting new-age businesses across industries with strategic advisory, ecosystem access, and growth support.",
    color: "emerging",
    icon: "TrendingUp",
    subsegments: [
      {
        title: "Healthcare Ventures",
        description: "",
        focusAreas: [
          "Growth planning",
          "Business strategy",
          "Ecosystem connections",
        ],
      },
      {
        title: "Technology Companies",
        description: "",
        focusAreas: [
          "Scaling strategy",
          "Innovation support",
          "Strategic partnerships",
        ],
      },
      {
        title: "SaaS Businesses",
        description: "",
        focusAreas: [
          "Growth systems",
          "Market positioning",
          "Investment readiness",
        ],
      },
      {
        title: "EdTech Organizations",
        description: "",
        focusAreas: [
          "Business expansion",
          "Strategic planning",
          "Partnership opportunities",
        ],
      },
      {
        title: "D2C Brands",
        description: "",
        focusAreas: [
          "Brand growth",
          "Market positioning",
          "Business scalability",
        ],
      },
      {
        title: "Social Enterprises",
        description: "",
        focusAreas: [
          "Sustainable growth",
          "Impact strategy",
          "Ecosystem collaboration",
        ],
      },
    ],
  },
];

// ─── Growth Journey ───────────────────────────────────────────────────────────
export const GROWTH_JOURNEY = {
  heading: "From Foundation To Scale",
  stages: [
    {
      stage: 1,
      label: "Foundation",
      description: "For early businesses building structure and direction.",
    },
    {
      stage: 2,
      label: "Growth",
      description: "For businesses improving operations and market position.",
    },
    {
      stage: 3,
      label: "Investment Readiness",
      description: "For businesses preparing for capital opportunities.",
    },
    {
      stage: 4,
      label: "Expansion",
      description:
        "For businesses scaling through partnerships and ecosystems.",
    },
  ] satisfies GrowthStage[],
} as const;
