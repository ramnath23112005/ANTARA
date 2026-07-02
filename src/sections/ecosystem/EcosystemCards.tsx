// src/sections/ecosystem/EcosystemCards.tsx
// 4 GlassCards for ecosystem steps — 2-column grid on desktop

import { BookOpen, Target, Network, TrendingUp, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { ECOSYSTEM_STEPS } from "@/data/antara";
import type { EcosystemStep } from "@/data/antara";

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Target,
  Network,
  TrendingUp,
};

function EcosystemCard({ step }: { step: EcosystemStep }) {
  const Icon = ICON_MAP[step.icon] ?? BookOpen;

  return (
    <GlassCard className="p-6 flex flex-col gap-5 h-full">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        {/* Icon circle */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${step.color}22`, border: `1px solid ${step.color}44` }}
        >
          <Icon className="w-6 h-6" style={{ color: step.color }} />
        </div>

        {/* Step number badge */}
        <Badge variant="gold" className="flex-shrink-0">
          Step {step.number}
        </Badge>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-antara-white font-bold text-xl mb-2">{step.title}</h3>
        <p className="text-antara-muted text-sm leading-relaxed">{step.description}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-antara-border" />

      {/* Bullet points */}
      <ul className="space-y-2 mt-auto">
        {step.points.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-sm text-antara-muted">
            <CheckCircle2
              className="w-4 h-4 flex-shrink-0"
              style={{ color: step.color }}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Bottom color accent */}
      <div
        className="h-1 w-full rounded-full mt-1 opacity-60"
        style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
      />
    </GlassCard>
  );
}

export default function EcosystemCards() {
  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ECOSYSTEM_STEPS.map((step) => (
            <StaggerItem key={step.id}>
              <EcosystemCard step={step} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
