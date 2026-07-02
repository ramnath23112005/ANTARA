// src/pages/Values.tsx
// Developer: (unassigned — pages 26-30)
import PageWrapper from "@/components/layout/PageWrapper";
import ValuesGrid from "@/sections/values/ValuesGrid";
import CoreCenter from "@/sections/values/CoreCenter";
import CTASection from "@/sections/common/CTASection";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { VALUES_BRAND_STATEMENT, VALUES_CTA } from "@/data/antara";

export default function Values() {
  return (
    <PageWrapper>
      <ValuesGrid />
      <CoreCenter />

      {/* Brand Statement */}
      <SectionWrapper dark>
        <SectionHeader
          heading={VALUES_BRAND_STATEMENT.heading}
          subtext={VALUES_BRAND_STATEMENT.text}
        />
      </SectionWrapper>

      <CTASection
        heading={VALUES_CTA.heading}
        primaryLabel={VALUES_CTA.cta.primary.label}
        primaryHref={VALUES_CTA.cta.primary.href}
        secondaryLabel={VALUES_CTA.cta.secondary.label}
        secondaryHref={VALUES_CTA.cta.secondary.href}
      />
    </PageWrapper>
  );
}
