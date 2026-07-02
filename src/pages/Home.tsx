// src/pages/Home.tsx
// Developer: (assigned per team structure)
import PageWrapper from "@/components/layout/PageWrapper";
import HeroAnimated from "@/sections/hero/HeroAnimated";
import ServicesGrid from "@/sections/services/ServicesGrid";
import EcosystemFlow from "@/sections/ecosystem/EcosystemFlow";
import ValuesGrid from "@/sections/values/ValuesGrid";
import CTASection from "@/sections/common/CTASection";

export default function Home() {
  return (
    <PageWrapper noTopPad>
      <HeroAnimated />
      <ServicesGrid />
      <EcosystemFlow />
      <ValuesGrid />
      <CTASection
        heading="Ready To Build Your Future With Antara Global?"
        subtext="Join startups, MSMEs, and emerging businesses on a structured growth journey."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Ecosystem"
        secondaryHref="/ecosystem"
      />
    </PageWrapper>
  );
}
