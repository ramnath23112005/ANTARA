// src/sections/audience/GrowthJourney.tsx
// Horizontal timeline showing the 4 growth stages
// Data-driven from GROWTH_JOURNEY

import { GROWTH_JOURNEY } from "@/data/antara";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import FadeIn from "@/components/animations/FadeIn";

// ─── Stage colors (one per stage index) ──────────────────────────────────────
const STAGE_COLORS = [
  {
    numberBg:    "bg-indigo-500/20 border-indigo-500/40",
    numberText:  "text-indigo-400",
    cardAccent:  "border-t-indigo-500/40",
    lineBg:      "bg-indigo-500/30",
  },
  {
    numberBg:    "bg-emerald-500/20 border-emerald-500/40",
    numberText:  "text-emerald-400",
    cardAccent:  "border-t-emerald-500/40",
    lineBg:      "bg-emerald-500/30",
  },
  {
    numberBg:    "bg-antara-gold/20 border-antara-gold/40",
    numberText:  "text-antara-gold",
    cardAccent:  "border-t-antara-gold/40",
    lineBg:      "bg-antara-gold/30",
  },
  {
    numberBg:    "bg-amber-500/20 border-amber-500/40",
    numberText:  "text-amber-400",
    cardAccent:  "border-t-amber-500/40",
    lineBg:      "bg-amber-500/30",
  },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────
export default function GrowthJourney() {
  const { heading, stages } = GROWTH_JOURNEY;

  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col gap-14">

        {/* Section header */}
        <SectionHeader
          eyebrow="Growth Pathway"
          heading={heading}
          subtext="A structured pathway that guides businesses from their early foundation to full-scale expansion."
          align="center"
        />

        {/* ── Timeline wrapper ── */}
        <div className="relative">

          {/* Horizontal connecting line (desktop) */}
          <FadeIn delay={0.2}>
            <div
              className="hidden lg:block absolute top-[38px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-antara-border/60"
              aria-hidden="true"
            />
          </FadeIn>

          {/* Stage cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, i) => {
              const colors = STAGE_COLORS[i] ?? STAGE_COLORS[0];

              return (
                <StaggerItem key={stage.stage}>
                  <div
                    className={[
                      "relative flex flex-col items-center text-center gap-4 p-6",
                      "rounded-2xl bg-antara-surface/80 backdrop-blur-md",
                      "border border-antara-border border-t-2",
                      colors.cardAccent,
                      "shadow-glass transition-all duration-300",
                      "hover:border-antara-border/80 hover:-translate-y-1",
                    ].join(" ")}
                  >
                    {/* Stage number bubble */}
                    <div
                      className={[
                        "w-12 h-12 rounded-full border-2 flex items-center justify-center",
                        "text-lg font-bold z-10 bg-antara-navy",
                        colors.numberBg,
                        colors.numberText,
                      ].join(" ")}
                    >
                      {stage.stage}
                    </div>

                    {/* Label */}
                    <h3 className="text-base font-semibold text-antara-white leading-snug">
                      {stage.label}
                    </h3>

                    {/* Description */}
                    <p className="text-antara-muted text-sm leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Connector arrow between cards (mobile/tablet vertical) */}
                    {i < stages.length - 1 && (
                      <div
                        className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-antara-border/50"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ── Bottom note ── */}
        <FadeIn delay={0.6}>
          <p className="text-center text-antara-muted/60 text-sm max-w-xl mx-auto">
            Antara Global meets you wherever you are on this journey and helps
            you move to the next stage with confidence.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
