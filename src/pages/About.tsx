// src/pages/About.tsx
// Developer: Rama Krishna (pages 2-4)
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/sections/common/CTASection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { CLOSING_BRAND, WHO_WE_ARE } from "@/data/antara";
import { ArrowRight, TrendingUp, Shield, Layers } from "lucide-react";

const ABOUT_STATS = [
  { icon: TrendingUp, value: "500+",     label: "Businesses Supported" },
  { icon: Shield,     value: "Phase 1",  label: "Currently Active" },
  { icon: Layers,     value: "3 Stages", label: "Growth Pathways" },
] as const;

const TEAM = [
  { name: "Rama Krishna",   role: "Co-Founder" },
  { name: "Selvan",         role: "Services Lead" },
  { name: "Aditya Sarkar",  role: "Ecosystem Lead" },
  { name: "Ram Nath G K",   role: "Strategy Lead" },
];

export default function About() {
  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-antara-navy">

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-antara-gold/5 blur-3xl" />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-8 pt-24 pb-16">

          <FadeIn delay={0}>
            <Badge variant="gold" className="gap-1.5 px-4 py-1.5 text-xs tracking-widest uppercase">
              ✦ About Antara Global
            </Badge>
          </FadeIn>

          <SlideUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-antara-white leading-tight max-w-4xl">
              Building{" "}
              <span className="text-antara-gold">Growth-Ready</span> &amp;{" "}
              <span className="text-antara-gold">Investment-Ready</span>{" "}
              Businesses
            </h1>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p className="text-antara-muted text-lg sm:text-xl leading-relaxed max-w-2xl">
              Antara Global is a strategic business advisory firm empowering
              startups, MSMEs, and emerging businesses with the direction,
              knowledge, and ecosystem access they need to grow, scale, and
              become investment-ready.
            </p>
          </SlideUp>

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

          <FadeIn delay={0.45}>
            <p className="text-antara-muted/60 text-sm">
              Trusted by founders, MSMEs &amp; entrepreneurs across industries
            </p>
          </FadeIn>
        </div>

        {/* Stats row */}
        <div className="relative z-10 w-full border-t border-antara-border/50 mt-auto">
          <FadeIn delay={0.5}>
            <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-antara-border/40">
              {ABOUT_STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 py-4 sm:py-0 sm:px-8">
                  <Icon className="w-5 h-5 text-antara-gold mb-1" />
                  <span className="text-2xl font-bold text-antara-white">{value}</span>
                  <span className="text-antara-muted text-sm">
                    {label}
                    {label === "Growth Pathways" && (
                      <span className="ml-1 text-antara-gold/70 text-xs">(coming soon)</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideUp>
            <h2 className="text-3xl font-bold text-antara-white mb-4">{WHO_WE_ARE.heading}</h2>
            <p className="text-antara-muted leading-relaxed mb-6">{WHO_WE_ARE.content}</p>
            <ul className="space-y-2">
              {WHO_WE_ARE.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-antara-text text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-antara-gold flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </SlideUp>
          <SlideUp delay={0.2}>
            <GlassCard className="p-8 text-center">
              <p className="text-antara-gold font-bold text-xl leading-relaxed">
                "{CLOSING_BRAND.banner}"
              </p>
              <p className="mt-4 text-antara-muted text-sm">{CLOSING_BRAND.supporting}</p>
            </GlassCard>
          </SlideUp>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper dark>
        <SectionHeader eyebrow="Our Team" heading="The People Behind Antara Global" />
        <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <GlassCard className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-antara-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-antara-gold">
                    {member.name[0]}
                  </span>
                </div>
                <p className="text-antara-white font-semibold">{member.name}</p>
                <p className="text-antara-muted text-sm mt-1">{member.role}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <CTASection
        heading="Partner With Antara Global"
        subtext="Let's build your growth journey together."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </PageWrapper>
  );
}
