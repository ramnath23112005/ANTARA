// src/sections/audience/AudienceTabs.tsx
// Tabbed interface for the three audience segments
// Data-driven from AUDIENCE_SEGMENTS — active tab shows subsegment cards

"use client";

import { useState } from "react";
import { Rocket, Building2, TrendingUp, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AUDIENCE_SEGMENTS } from "@/data/antara";
import type { AudienceSegment, AudienceSubsegment } from "@/data/antara";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Rocket:     Rocket,
  Building2:  Building2,
  TrendingUp: TrendingUp,
};

// ─── Tab color config ─────────────────────────────────────────────────────────
const TAB_COLORS: Record<AudienceSegment["color"], {
  active:     string;
  tag:        string;
  dot:        string;
  badgeVar:   "startup" | "msme" | "emerging";
}> = {
  startup: {
    active:   "border-indigo-500 text-indigo-400 bg-indigo-500/10",
    tag:      "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    dot:      "bg-indigo-400",
    badgeVar: "startup",
  },
  msme: {
    active:   "border-emerald-500 text-emerald-400 bg-emerald-500/10",
    tag:      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    dot:      "bg-emerald-400",
    badgeVar: "msme",
  },
  emerging: {
    active:   "border-amber-500 text-amber-400 bg-amber-500/10",
    tag:      "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    dot:      "bg-amber-400",
    badgeVar: "emerging",
  },
};

// ─── Subsegment card ──────────────────────────────────────────────────────────
function SubsegmentCard({
  sub,
  color,
}: {
  sub: AudienceSubsegment;
  color: AudienceSegment["color"];
}) {
  const colors = TAB_COLORS[color];
  return (
    <GlassCard className="flex flex-col gap-4 p-5">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
        <h4 className="text-sm font-semibold text-antara-white">{sub.title}</h4>
      </div>
      {sub.description && sub.description !== "Support areas:" && (
        <p className="text-antara-muted text-xs leading-relaxed">{sub.description}</p>
      )}
      {/* Focus area tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {sub.focusAreas.map((area) => (
          <span
            key={area}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${colors.tag}`}
          >
            <Tag className="w-2.5 h-2.5" />
            {area}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function AudienceTabs() {
  const [activeId, setActiveId] = useState<string>(AUDIENCE_SEGMENTS[0].id);

  const activeSegment = AUDIENCE_SEGMENTS.find((s) => s.id === activeId)!;
  const activeColors  = TAB_COLORS[activeSegment.color];
  const ActiveIcon    = ICON_MAP[activeSegment.icon] ?? Rocket;

  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

        {/* ── Tab bar ── */}
        <SlideUp>
          <div
            className="flex flex-col sm:flex-row gap-3 bg-antara-surface/60 border border-antara-border rounded-2xl p-2"
            role="tablist"
            aria-label="Audience segments"
          >
            {AUDIENCE_SEGMENTS.map((segment) => {
              const Icon     = ICON_MAP[segment.icon] ?? Rocket;
              const isActive = segment.id === activeId;
              const colors   = TAB_COLORS[segment.color];

              return (
                <button
                  key={segment.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${segment.id}`}
                  onClick={() => setActiveId(segment.id)}
                  className={[
                    "flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium border transition-all duration-200",
                    isActive
                      ? colors.active
                      : "border-transparent text-antara-muted hover:text-antara-text",
                  ].join(" ")}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {segment.title}
                  <Badge
                    variant={isActive ? colors.badgeVar : "default"}
                    className="ml-auto text-[10px] px-2 py-0.5"
                  >
                    {segment.subsegments.length}
                  </Badge>
                </button>
              );
            })}
          </div>
        </SlideUp>

        {/* ── Active tab header ── */}
        <FadeIn key={activeId}>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${activeColors.active}`}>
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-antara-white">{activeSegment.title}</h2>
              <p className="text-antara-muted text-sm mt-1 max-w-2xl">
                {activeSegment.description}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Subsegment cards grid ── */}
        <div
          id={`tab-panel-${activeSegment.id}`}
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activeSegment.subsegments.map((sub, i) => (
            <FadeIn key={sub.title} delay={i * 0.07}>
              <SubsegmentCard sub={sub} color={activeSegment.color} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
