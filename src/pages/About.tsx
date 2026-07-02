// src/pages/About.tsx
// Developer: Rama Krishna (pages 2-4)
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/sections/common/CTASection";
import { COMPANY_DESCRIPTION, CLOSING_BRAND, WHO_WE_ARE } from "@/data/antara";

const TEAM = [
  { name: "Rama Krishna",   role: "Co-Founder" },
  { name: "Selvan",         role: "Services Lead" },
  { name: "Aditya Sarkar",  role: "Ecosystem Lead" },
  { name: "Ram Nath G K",   role: "Strategy Lead" },
];

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <SectionWrapper dark>
        <SectionHeader
          eyebrow="About Us"
          heading={COMPANY_DESCRIPTION.heading}
          subtext={COMPANY_DESCRIPTION.content}
        />
      </SectionWrapper>

      {/* Who We Are */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideUp>
            <h2 className="text-3xl font-bold text-antara-white mb-4">{WHO_WE_ARE.heading}</h2>
            <p className="text-antara-muted leading-relaxed mb-6">{WHO_WE_ARE.content}</p>
            <ul className="space-y-2">
              {WHO_WE_ARE.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-antara-text text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-antara-gold flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </SlideUp>
          <SlideUp delay={0.2}>
            <GlassCard className="p-8 text-center">
              <p className="text-antara-gold font-bold text-xl leading-relaxed">
                "{CLOSING_BRAND.banner}"
              </p>
              <p className="mt-4 text-antara-muted text-sm">{CLOSING_BRAND.supporting}</p>
            </GlassCard>
          </SlideUp>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper dark>
        <SectionHeader eyebrow="Our Team" heading="The People Behind Antara Global" />
        <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <GlassCard className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-antara-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-antara-gold">
                    {member.name[0]}
                  </span>
                </div>
                <p className="text-antara-white font-semibold">{member.name}</p>
                <p className="text-antara-muted text-sm mt-1">{member.role}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <CTASection
        heading="Partner With Antara Global"
        subtext="Let's build your growth journey together."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </PageWrapper>
  );
}
