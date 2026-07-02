// src/sections/ecosystem/EcosystemFlow.tsx
// 4-step horizontal ecosystem flow — Antara Global

import { BookOpen, Target, Network, TrendingUp, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import SectionHeader from "@/components/ui/SectionHeader";
import { ECOSYSTEM_STEPS, ECOSYSTEM_HERO } from "@/data/antara";
import type { EcosystemStep } from "@/data/antara";

// Map icon string names → Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Target,
  Network,
  TrendingUp,
};

function StepCard({ step, isLast }: { step: EcosystemStep; isLast: boolean }) {
  const Icon = ICON_MAP[step.icon] ?? BookOpen;

  return (
    <div className="flex items-start gap-4 flex-1 min-w-0">
      {/* Card */}
      <div className="flex-1 min-w-0 rounded-2xl bg-antara-surface/80 backdrop-blur-md border border-antara-border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-antara-gold/40 hover:-translate-y-1 hover:shadow-gold">
        {/* Number circle + icon */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: step.color }}
          >
            {step.number}
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${step.color}22` }}
          >
            <Icon className="w-5 h-5" style={{ color: step.color }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-antara-white font-semibold text-lg leading-snug">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-antara-muted text-sm leading-relaxed">
          {step.description}
        </p>

        {/* Bullet points */}
        <ul className="mt-auto space-y-1.5">
          {step.points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-xs text-antara-muted">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: step.color }}
              />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow connector — hidden after last step */}
      {!isLast && (
        <div className="hidden lg:flex items-center justify-center self-center pt-2 flex-shrink-0">
          <ArrowRight className="w-6 h-6 text-antara-gold opacity-70" />
        </div>
      )}
    </div>
  );
}

export default function EcosystemFlow() {
  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <SectionHeader
            eyebrow="How We Work"
            heading={ECOSYSTEM_HERO.heading}
            subtext={ECOSYSTEM_HERO.subtext}
            align="center"
          />
        </div>

        {/* 4-step flow */}
        <StaggerContainer className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-stretch">
          {ECOSYSTEM_STEPS.map((step, index) => (
            <StaggerItem key={step.id} className="flex-1 flex">
              <StepCard step={step} isLast={index === ECOSYSTEM_STEPS.length - 1} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Step labels — mobile connector */}
        <div className="flex lg:hidden justify-center mt-6">
          <div className="flex items-center gap-2 text-antara-muted text-xs">
            {ECOSYSTEM_STEPS.map((step, index) => (
              <span key={step.id} className="flex items-center gap-2">
                <span className="font-semibold" style={{ color: step.color }}>
                  {step.number} {step.title}
                </span>
                {index < ECOSYSTEM_STEPS.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-antara-gold" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
