// src/sections/audience/AudienceHero.tsx
// Hero section for the Audience / Who We Serve page
// Data-driven from AUDIENCE_HERO — heading, subtext, CTAs, stage indicator

import { ArrowRight, ChevronRight } from "lucide-react";
import { AUDIENCE_HERO } from "@/data/antara";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

// ─── Component ───────────────────────────────────────────────────────────────
export default function AudienceHero() {
  const { heading, subtext, cta, visualStages } = AUDIENCE_HERO;

  return (
    <section className="relative overflow-hidden bg-antara-navy pt-28 pb-20">

      {/* ── Background glow ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-antara-gold/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center gap-8">

        {/* Eyebrow badge */}
        <FadeIn delay={0}>
          <Badge variant="gold" className="uppercase tracking-widest text-xs px-4 py-1.5">
            ✦ Who We Serve
          </Badge>
        </FadeIn>

        {/* Heading */}
        <SlideUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl font-bold text-antara-white leading-tight max-w-3xl">
            {heading}
          </h1>
        </SlideUp>

        {/* Subtext */}
        <SlideUp delay={0.2}>
          <p className="text-antara-muted text-lg leading-relaxed max-w-2xl">
            {subtext}
          </p>
        </SlideUp>

        {/* CTA buttons */}
        <SlideUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href={cta.primary.href}>
              <Button variant="primary" size="lg" className="gap-2">
                {cta.primary.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={cta.secondary.href}>
              <Button variant="outline" size="lg">
                {cta.secondary.label}
              </Button>
            </a>
          </div>
        </SlideUp>

        {/* ── Stage indicator ── */}
        <FadeIn delay={0.5}>
          <div className="mt-6 flex items-center gap-0 flex-wrap justify-center">
            {visualStages.map((stage, index) => (
              <div key={stage} className="flex items-center">
                {/* Stage pill */}
                <div className={[
                  "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                  index === 0
                    ? "bg-antara-gold/15 border-antara-gold/40 text-antara-gold"
                    : "bg-antara-surface/60 border-antara-border text-antara-muted",
                ].join(" ")}>
                  {stage}
                </div>
                {/* Arrow connector — not after last item */}
                {index < visualStages.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-antara-border mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-antara-muted/60 text-xs">
            We support businesses at every stage of this journey
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
