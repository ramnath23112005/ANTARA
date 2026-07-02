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
export const SERVICES: Service[] = [
  {
    id: "strategic-advisory",
    title: "Strategic Business Advisory",
    tagline: "Build stronger foundations",
    description:
      "Expert strategic guidance to help businesses build strong foundations, identify growth opportunities, and navigate complex market environments.",
    features: [
      "Business strategy development",
      "Market analysis & positioning",
      "Growth planning",
      "Business model optimisation",
      "Operational improvement",
    ],
    icon: "Target",
    color: "#6366F1",
  },
  {
    id: "venture-readiness",
    title: "Venture Readiness",
    tagline: "Prepare for investment",
    description:
      "Comprehensive support to prepare businesses for fundraising, investment opportunities, and partnerships.",
    features: [
      "Investor readiness assessment",
      "Business documentation support",
      "Pitch preparation guidance",
      "Financial planning support",
      "Due diligence preparation",
    ],
    icon: "Briefcase",
    color: "#3B82F6",
  },
  {
    id: "fundraising-support",
    title: "Fundraising Support",
    tagline: "Connect with capital",
    description:
      "Strategic support for businesses navigating the fundraising journey, from preparation to investor engagement.",
    features: [
      "Fundraising strategy",
      "Investor network access",
      "Capital readiness planning",
      "Deal structuring guidance",
      "Investor communication support",
    ],
    icon: "DollarSign",
    color: "#F59E0B",
  },
  {
    id: "ecosystem-access",
    title: "Ecosystem & Network Access",
    tagline: "Unlock the right connections",
    description:
      "Access to a curated network of advisors, investors, industry experts, and strategic partners.",
    features: [
      "Advisor connections",
      "Investor introductions",
      "Industry expert access",
      "Strategic partner matching",
      "Ecosystem collaboration",
    ],
    icon: "Network",
    color: "#06B6D4",
  },
  {
    id: "knowledge-education",
    title: "Knowledge & Education",
    tagline: "Learn. Grow. Decide.",
    description:
      "Workshops, webinars, and founder sessions designed to improve business and financial knowledge.",
    features: [
      "Business workshops",
      "Financial knowledge sessions",
      "Founder webinars",
      "Industry insights",
      "Growth frameworks",
    ],
    icon: "BookOpen",
    color: "#10B981",
  },
  {
    id: "growth-support",
    title: "Growth & Expansion Support",
    tagline: "Scale sustainably",
    description:
      "End-to-end support for businesses scaling operations, entering new markets, and achieving long-term growth.",
    features: [
      "Scaling strategy",
      "Market expansion planning",
      "Partnership development",
      "Long-term growth roadmap",
      "Value creation support",
    ],
    icon: "TrendingUp",
    color: "#0D9488",
  },
];

// ─── Section metadata ─────────────────────────────────────────────────────────
export const SERVICES_META = {
  heading: "What We Do",
  subheading: "Our Services",
  description:
    "Antara Global provides a comprehensive suite of advisory, readiness, and growth services designed to help businesses at every stage unlock their full potential.",
} as const;
