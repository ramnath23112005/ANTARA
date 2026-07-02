// src/pages/Services.tsx
// Developer: Selvan (pages 5-11)
import PageWrapper from "@/components/layout/PageWrapper";
import ServicesGrid from "@/sections/services/ServicesGrid";
import ComparisonSection from "@/sections/comparison/ComparisonSection";
import CTASection from "@/sections/common/CTASection";

export default function Services() {
  return (
    <PageWrapper>
      <ServicesGrid />
      <ComparisonSection />
      <CTASection
        heading="Start Your Growth Journey Today"
        subtext="Antara Global is ready to support your business at every stage."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Learn About Ecosystem"
        secondaryHref="/ecosystem"
      />
    </PageWrapper>
  );
}
