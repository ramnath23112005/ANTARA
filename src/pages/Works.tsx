// src/pages/Works.tsx
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const CASE_STUDIES = [
  {
    id: "1",
    title: "Early-Stage Startup Strategy Support",
    category: "startup",
    outcome: "Business structured and growth-ready in 3 months",
    tags: ["Strategy", "Business Planning"],
  },
  {
    id: "2",
    title: "MSME Expansion Planning",
    category: "msme",
    outcome: "Identified 2 new market opportunities",
    tags: ["Market Analysis", "Expansion"],
  },
  {
    id: "3",
    title: "Fundraising Readiness Programme",
    category: "startup",
    outcome: "Investor deck & financial model prepared",
    tags: ["Venture Readiness", "Investor Prep"],
  },
] as const;

export default function Works() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <SectionHeader
          eyebrow="Our Work"
          heading="Real Businesses. Real Growth."
          subtext="A selection of the businesses Antara Global has supported across stages and industries."
        />
        <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <StaggerItem key={cs.id}>
              <GlassCard className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {cs.tags.map((t) => (
                    <Badge key={t} variant="gold">{t}</Badge>
                  ))}
                </div>
                <h3 className="text-antara-white font-semibold text-lg mb-3">{cs.title}</h3>
                <p className="text-antara-muted text-sm">
                  <span className="text-antara-gold font-medium">Outcome: </span>
                  {cs.outcome}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>
    </PageWrapper>
  );
}
