// src/pages/Positioning.tsx
// Positioning & Roadmap — Lokesh's work integrated
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HeroSection from "@/components/positioning/HeroSection";
import WhoWeAre from "@/components/positioning/WhoWeAre";
import VisionMission from "@/components/positioning/VisionMission";
import PhilosophySection from "@/components/positioning/PhilosophySection";
import GrowthFramework from "@/components/positioning/GrowthFramework";
import ServicesSection from "@/components/positioning/ServicesSection";
import FutureRoadmap from "@/components/positioning/FutureRoadmap";
import ResourcesSection from "@/components/positioning/ResourcesSection";
import BrandClosingCTA from "@/components/positioning/BrandClosingCTA";
import ContactSection from "@/components/positioning/ContactSection";

export default function Positioning() {
  return (
    <PageWrapper noTopPad>
      {/* Gradient divider - top */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)' }}></div>

      <HeroSection />
      <WhoWeAre />
      <VisionMission />
      <PhilosophySection />
      <GrowthFramework />
      <ServicesSection />
      <FutureRoadmap />
      <ResourcesSection />
      <BrandClosingCTA />
      <ContactSection />

      {/* Gradient divider - bottom */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)' }}></div>
    </PageWrapper>
  );
}
