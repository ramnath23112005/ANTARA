// src/sections/roadmap/RoadmapTimeline.tsx
// Full roadmap section with vertical timeline of phases

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROADMAP_PHASES, ROADMAP_CTA } from "@/data/antara";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import RoadmapPhaseCard from "./RoadmapPhase";

const CONNECTOR_COLOR: Record<string, string> = {
  active:   "bg-antara-gold",
  upcoming: "bg-blue-500",
  future:   "bg-antara-muted/40",
};

export default function RoadmapTimeline() {
  return (
    <section
      id="roadmap"
      className="relative bg-antara-navy py-20 lg:py-28 overflow-hidden"
      aria-label="Roadmap"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-3xl rounded-full"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Roadmap"
          heading="Building The Future Business Ecosystem"
          subtext="A phased approach to creating a world-class ecosystem for startups and MSMEs."
          align="center"
          className="mb-16"
        />

        <StaggerContainer className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-antara-border"
          />

          {ROADMAP_PHASES.map((phase, index) => (
            <StaggerItem key={phase.phase}>
              <div className="relative flex gap-6 sm:gap-8 pb-10 last:pb-0">
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`mt-7 h-3 w-3 rounded-full border-2 border-antara-navy ${CONNECTOR_COLOR[phase.status]}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <FadeIn delay={index * 0.15}>
                    <RoadmapPhaseCard phase={phase} />
                  </FadeIn>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SlideUp delay={0.5}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={ROADMAP_CTA.cta.primary.href}>
              <Button variant="primary" size="lg">
                {ROADMAP_CTA.cta.primary.label}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to={ROADMAP_CTA.cta.secondary.href}>
              <Button variant="outline" size="lg">
                {ROADMAP_CTA.cta.secondary.label}
              </Button>
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
