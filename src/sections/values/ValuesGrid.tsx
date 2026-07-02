// src/sections/values/ValuesGrid.tsx
// 3×2 grid of core value cards — Antara Global

import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { CORE_VALUES, VALUES_HERO } from "@/data/antara";
import ValueCard from "./ValueCard";

export default function ValuesGrid() {
  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <SectionHeader
            eyebrow="What Drives Us"
            heading={VALUES_HERO.heading}
            subtext={VALUES_HERO.subtext}
            align="center"
          />
        </div>

        {/* 3×2 grid of value cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((value) => (
            <StaggerItem key={value.id} className="flex">
              <div className="w-full">
                <ValueCard value={value} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
