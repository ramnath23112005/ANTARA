// src/pages/Ecosystem.tsx
// Developer: Aditya Sarkar (pages 18-21)
import PageWrapper from "@/components/layout/PageWrapper";
import EcosystemFlow from "@/sections/ecosystem/EcosystemFlow";
import EcosystemLoop from "@/sections/ecosystem/EcosystemLoop";
import EcosystemCards from "@/sections/ecosystem/EcosystemCards";
import CTASection from "@/sections/common/CTASection";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { ECOSYSTEM_HIGHLIGHT } from "@/data/antara";

export default function Ecosystem() {
  return (
    <PageWrapper>
      <EcosystemFlow />
      <EcosystemLoop />
      <EcosystemCards />

      {/* Highlight Section */}
      <SectionWrapper dark>
        <SectionHeader
          heading={ECOSYSTEM_HIGHLIGHT.heading}
          subtext={ECOSYSTEM_HIGHLIGHT.text}
        />
      </SectionWrapper>

      <CTASection
        heading="Become Part Of The Antara Ecosystem"
        subtext="Get access to knowledge, strategy, connections, and growth opportunities."
        primaryLabel="Join The Ecosystem"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </PageWrapper>
  );
}
