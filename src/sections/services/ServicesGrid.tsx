// src/sections/services/ServicesGrid.tsx
// Full services section — cleared, content removed

import SectionHeader from "@/components/ui/SectionHeader";

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
        {/* Our Services - Coming Soon */}
        <SectionHeader
          heading="Our Services"
          subtext="Coming Soon"
          align="center"
          className="mb-14"
        />
        
        {/* Blank space */}
        <div className="min-h-[300px]"></div>
      </div>
    </section>
  );
}
