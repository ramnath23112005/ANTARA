// src/sections/hero/Hero.tsx
// Homepage hero section — Antara Global
// Full-width dark gradient hero with headline, CTAs, and stats row

import { ArrowRight, TrendingUp, Shield, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { icon: TrendingUp, value: "500+",        label: "Businesses Supported" },
  { icon: Shield,     value: "Phase 1",     label: "Currently Active" },
  { icon: Layers,     value: "3 Stages",    label: "Growth Pathways" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-antara-navy">

      {/* ── Background radial glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Centre radial glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-antara-gold/5 blur-3xl" />
        {/* Top-left accent */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
        {/* Bottom-right accent */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-8 pt-24 pb-16">

        {/* Animated badge */}
        <FadeIn delay={0}>
          <Badge variant="gold" className="gap-1.5 px-4 py-1.5 text-xs tracking-widest uppercase">
            ✦ Strategic Business Advisory
          </Badge>
        </FadeIn>

        {/* Main headline */}
        <SlideUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-antara-white leading-tight max-w-4xl">
            Building{" "}
            <span className="text-antara-gold">Growth-Ready</span> &amp;{" "}
            <span className="text-antara-gold">Investment-Ready</span>{" "}
            Businesses
          </h1>
        </SlideUp>

        {/* Subtext */}
        <SlideUp delay={0.2}>
          <p className="text-antara-muted text-lg sm:text-xl leading-relaxed max-w-2xl">
            Antara Global is a strategic business advisory firm empowering
            startups, MSMEs, and emerging businesses with the direction,
            knowledge, and ecosystem access they need to grow, scale, and
            become investment-ready.
          </p>
        </SlideUp>

        {/* CTA buttons */}
        <SlideUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/ecosystem">
              <Button variant="primary" size="lg" className="gap-2">
                Explore Ecosystem
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">
                Book a Consultation
              </Button>
            </a>
          </div>
        </SlideUp>

        {/* Trust line */}
        <FadeIn delay={0.45}>
          <p className="text-antara-muted/60 text-sm">
            Trusted by founders, MSMEs &amp; entrepreneurs across industries
          </p>
        </FadeIn>
      </div>

      {/* ── Stats row ── */}
      <div className="relative z-10 w-full border-t border-antara-border/50 mt-auto">
        <FadeIn delay={0.5}>
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-antara-border/40">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 py-4 sm:py-0 sm:px-8"
              >
                <Icon className="w-5 h-5 text-antara-gold mb-1" />
                <span className="text-2xl font-bold text-antara-white">{value}</span>
                <span className="text-antara-muted text-sm">{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
