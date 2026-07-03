// src/pages/Home.tsx
// Developer: (assigned per team structure)
import PageWrapper from "@/components/layout/PageWrapper";
import HeroAnimated from "@/sections/hero/HeroAnimated";
import ServicesGrid from "@/sections/services/ServicesGrid";
import SectionHeader from "@/components/ui/SectionHeader";

// Reusable Coming Soon Section Component
function ComingSoonSection({ id, heading }: { id: string; heading: string }) {
  return (
    <section
      id={id}
      className="relative bg-antara-navy overflow-hidden"
      aria-label={heading}
    >
      {/* Gradient divider - top */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)', marginBottom: '0px' }}></div>

      <div className="py-20 lg:py-28">
        {/* Subtle background accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-antara-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={heading}
            subtext="Coming Soon"
            align="center"
            className="mb-14"
          />
          
          {/* Blank space */}
          <div className="min-h-[300px]"></div>
        </div>
      </div>

      {/* Gradient divider - bottom */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)', marginBottom: '0px' }}></div>
    </section>
  );
}

export default function Home() {
  return (
    <PageWrapper noTopPad>
      <HeroAnimated />
      
      {/* Services Section */}
      <ServicesGrid />
      
      {/* Audience Section */}
      <ComingSoonSection id="audience" heading="Audience" />
      
      {/* Ecosystem Model Section */}
      <ComingSoonSection id="ecosystem" heading="Ecosystem Model" />
      
      {/* How Antara is Different Section */}
      <ComingSoonSection id="difference" heading="How Antara is Different" />
      
      {/* Core Values Section */}
      <ComingSoonSection id="values" heading="Core Values" />
    </PageWrapper>
  );
}
