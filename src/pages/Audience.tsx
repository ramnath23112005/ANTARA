// src/pages/Audience.tsx
// Developer: (unassigned — pages 12-17)
import PageWrapper from "@/components/layout/PageWrapper";
import AudienceHero from "@/sections/audience/AudienceHero";
import AudienceGrid from "@/sections/audience/AudienceGrid";
import AudienceTabs from "@/sections/audience/AudienceTabs";
import GrowthJourney from "@/sections/audience/GrowthJourney";
import CTASection from "@/sections/common/CTASection";

export default function Audience() {
  return (
    <PageWrapper noTopPad>
      <AudienceHero />
      <AudienceGrid />
      <AudienceTabs />
      <GrowthJourney />
      <CTASection
        heading="Find Your Growth Path With Antara Global"
        subtext="Whether you're a startup, MSME, or emerging business — we have the right support for your stage."
        primaryLabel="Explore Our Solutions"
        primaryHref="/services"
        secondaryLabel="Book Consultation"
        secondaryHref="/contact"
      />
    </PageWrapper>
  );
}
