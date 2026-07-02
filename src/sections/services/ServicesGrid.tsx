// src/sections/services/ServicesGrid.tsx
// Full services section — 3-column grid of service cards

import { SERVICES, SERVICES_META } from "@/data/antara";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative bg-antara-navy py-20 lg:py-28 overflow-hidden"
      aria-label="Our Services"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-antara-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <SectionHeader
          eyebrow={SERVICES_META.subheading}
          heading={SERVICES_META.heading}
          subtext={SERVICES_META.description}
          align="center"
          className="mb-14"
        />

        {/* ── Services Grid ──────────────────────────────────────────────── */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} className="flex">
              <div className="w-full">
                <ServiceCard service={service} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
