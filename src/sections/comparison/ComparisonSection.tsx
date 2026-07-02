// src/sections/comparison/ComparisonSection.tsx
// What Makes Antara Global Different — full comparison section

import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import {
  COMPARISON_HERO,
  WHAT_WE_ARE_NOT,
  WHAT_WE_ARE,
  COMPARISON_BRAND,
} from "@/data/antara";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

// Map pillar title to a subtle accent color
const PILLAR_COLORS: Record<string, { border: string; badge: string; text: string }> = {
  Prepare: {
    border: "border-antara-gold/40",
    badge: "gold" as const,
    text: "text-antara-gold",
  },
  Connect: {
    border: "border-blue-500/40",
    badge: "startup" as const,
    text: "text-blue-400",
  },
  Grow: {
    border: "border-emerald-500/40",
    badge: "msme" as const,
    text: "text-emerald-400",
  },
};

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative bg-antara-navy py-20 lg:py-28 overflow-hidden"
      aria-label="What Makes Antara Global Different"
    >
      {/* Subtle radial background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[700px] h-[500px] rounded-full bg-antara-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Hero ───────────────────────────────────────────────── */}
        <SectionHeader
          eyebrow="Why Antara Global"
          heading={COMPARISON_HERO.heading}
          subtext={COMPARISON_HERO.subtext}
          align="center"
          className="mb-16"
        />

        {/* ── Two-Column Comparison ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ── LEFT: We Are NOT ─────────────────────────────────────────── */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 border border-red-500/30">
                  <XCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-antara-white">We Are Not</h3>
              </div>

              <StaggerContainer className="flex flex-col gap-4">
                {WHAT_WE_ARE_NOT.map((item) => (
                  <StaggerItem key={item.title}>
                    <GlassCard
                      hover={false}
                      className="flex items-start gap-4 px-5 py-4 border-red-500/20 hover:border-red-500/40 transition-colors duration-200"
                    >
                      <XCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-antara-white text-sm">{item.title}</p>
                        <p className="mt-1 text-antara-muted text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </GlassCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* ── RIGHT: We ARE ────────────────────────────────────────────── */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-antara-gold/15 border border-antara-gold/30">
                  <CheckCircle2
                    className="h-5 w-5 text-antara-gold"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-antara-white">We Are</h3>
              </div>

              {/* Highlight Card */}
              <SlideUp delay={0.25}>
                <GlassCard className="mb-4 border-antara-gold/40 bg-antara-gold/5 px-5 py-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-antara-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <Badge variant="gold" className="mb-2">
                        Our Identity
                      </Badge>
                      <p className="text-antara-white font-semibold text-sm leading-relaxed">
                        {WHAT_WE_ARE.highlight}
                      </p>
                      <p className="mt-2 text-antara-muted text-sm">
                        {WHAT_WE_ARE.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </SlideUp>

              {/* 3 Pillar Cards */}
              <StaggerContainer className="flex flex-col gap-4">
                {WHAT_WE_ARE.pillars.map((pillar, idx) => {
                  const colors = PILLAR_COLORS[pillar.title] ?? {
                    border: "border-antara-border",
                    badge: "default" as const,
                    text: "text-antara-white",
                  };
                  return (
                    <StaggerItem key={pillar.title}>
                      <GlassCard
                        className={`px-5 py-4 ${colors.border}`}
                        hover
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant={colors.badge as "gold" | "startup" | "msme" | "default"}>
                            {pillar.title}
                          </Badge>
                          <span className="text-antara-muted text-xs">— through</span>
                        </div>
                        <ul className="flex flex-col gap-1.5" role="list">
                          {pillar.through.map((point) => (
                            <li key={point} className="flex items-center gap-2">
                              <ArrowRight
                                className={`h-3.5 w-3.5 shrink-0 ${colors.text}`}
                                aria-hidden="true"
                              />
                              <span className="text-antara-muted text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>

        {/* ── Brand Statement Banner ──────────────────────────────────────── */}
        <SlideUp delay={0.4}>
          <div className="mt-16 rounded-2xl border border-antara-gold/30 bg-gradient-to-r from-antara-gold/10 via-antara-surface/60 to-antara-gold/10 px-8 py-8 text-center">
            <p className="text-2xl sm:text-3xl font-bold tracking-wide text-antara-gold">
              {COMPARISON_BRAND.highlight}
            </p>
            <p className="mt-3 text-antara-muted text-base max-w-2xl mx-auto leading-relaxed">
              {COMPARISON_BRAND.supporting}
            </p>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
