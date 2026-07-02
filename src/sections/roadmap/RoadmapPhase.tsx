// src/sections/roadmap/RoadmapPhase.tsx
// Single roadmap phase card — used by RoadmapTimeline

import { CheckCircle2 } from "lucide-react";
import type { RoadmapPhase } from "@/data/antara";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

// ─── Status display config ────────────────────────────────────────────────────
const STATUS_CONFIG: Record<
  RoadmapPhase["status"],
  {
    label: string;
    badgeVariant: "gold" | "startup" | "default";
    circleClass: string;
    numberClass: string;
  }
> = {
  active: {
    label: "Active Now",
    badgeVariant: "gold",
    circleClass: "bg-antara-gold/20 border-antara-gold ring-4 ring-antara-gold/20",
    numberClass: "text-antara-gold",
  },
  upcoming: {
    label: "Coming Soon",
    badgeVariant: "startup",
    circleClass: "bg-blue-500/20 border-blue-500 ring-4 ring-blue-500/20",
    numberClass: "text-blue-400",
  },
  future: {
    label: "Future",
    badgeVariant: "default",
    circleClass: "bg-antara-surface border-antara-border",
    numberClass: "text-antara-muted",
  },
};

interface RoadmapPhaseProps {
  phase: RoadmapPhase;
}

export default function RoadmapPhaseCard({ phase }: RoadmapPhaseProps) {
  const config = STATUS_CONFIG[phase.status];

  return (
    <GlassCard className="w-full p-6 sm:p-8" hover>
      {/* ── Header row ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
        {/* Phase number circle */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${config.circleClass}`}
          aria-label={`Phase ${phase.phase}`}
        >
          <span className={`text-lg font-bold ${config.numberClass}`}>
            {phase.phase}
          </span>
        </div>

        {/* Title + badge */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge variant={config.badgeVariant}>{config.label}</Badge>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-antara-white leading-snug">
            {phase.title}
          </h3>
        </div>
      </div>

      {/* ── Description ────────────────────────────────────────────────────── */}
      <p className="text-antara-muted text-sm sm:text-base leading-relaxed mb-5">
        {phase.description}
      </p>

      {/* ── Feature list ───────────────────────────────────────────────────── */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
        {phase.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-antara-gold"
              aria-hidden="true"
            />
            <span className="text-antara-muted text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
