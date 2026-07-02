// src/sections/audience/AudienceGrid.tsx
// 3-column audience segment cards with colored badges
// Data-driven from AUDIENCE_SEGMENTS

import { Rocket, Building2, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AUDIENCE_SEGMENTS, AUDIENCE_OVERVIEW } from "@/data/antara";
import type { AudienceSegment } from "@/data/antara";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Rocket:     Rocket,
  Building2:  Building2,
  TrendingUp: TrendingUp,
};

// ─── Color config per segment ─────────────────────────────────────────────────
const COLOR_CONFIG = {
  startup:  {
    badge:      "startup" as const,
    iconBg:     "bg-indigo-500/10",
    iconColor:  "text-indigo-400",
    accent:     "border-t-indigo-500/40",
    dot:        "bg-indigo-400",
  },
  msme: {
    badge:      "msme" as const,
    iconBg:     "bg-emerald-500/10",
    iconColor:  "text-emerald-400",
    accent:     "border-t-emerald-500/40",
    dot:        "bg-emerald-400",
  },
  emerging: {
    badge:      "emerging" as const,
    iconBg:     "bg-amber-500/10",
    iconColor:  "text-amber-400",
    accent:     "border-t-amber-500/40",
    dot:        "bg-amber-400",
  },
} as const;

// ─── Single segment card ──────────────────────────────────────────────────────
function SegmentCard({ segment }: { segment: AudienceSegment }) {
  const Icon   = ICON_MAP[segment.icon] ?? Rocket;
  const colors = COLOR_CONFIG[segment.color];

  return (
    <GlassCard className={`flex flex-col gap-5 p-6 border-t-2 ${colors.accent}`}>
      {/* Icon + badge row */}
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
          <Icon className={`w-6 h-6 ${colors.iconColor}`} />
        </div>
        <Badge variant={colors.badge}>
          {segment.title}
        </Badge>
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-antara-white">{segment.title}</h3>
        <p className="text-antara-muted text-sm leading-relaxed">{segment.description}</p>
      </div>

      {/* Subsegment count + list */}
      <div className="mt-auto pt-4 border-t border-antara-border/50">
        <p className="text-xs text-antara-muted/70 mb-3 uppercase tracking-wider font-medium">
          {segment.subsegments.length} Sub-segments
        </p>
        <ul className="flex flex-col gap-1.5">
          {segment.subsegments.map((sub) => (
            <li key={sub.title} className="flex items-center gap-2 text-sm text-antara-text">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
              {sub.title}
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function AudienceGrid() {
  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col gap-14">

        {/* Section header */}
        <SectionHeader
          eyebrow="Audience"
          heading={AUDIENCE_OVERVIEW.heading}
          subtext={AUDIENCE_OVERVIEW.description}
          align="center"
        />

        {/* 3-column stagger grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE_SEGMENTS.map((segment) => (
            <StaggerItem key={segment.id}>
              <SegmentCard segment={segment} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
