// src/pages/Careers.tsx
import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { submitApplication } from "@/lib/api";

const OPEN_ROLES = [
  { id: "1", title: "Business Development Associate", type: "Full-time", location: "Remote" },
  { id: "2", title: "Strategic Advisory Intern",      type: "Internship", location: "Hybrid" },
  { id: "3", title: "Ecosystem Partnerships Manager", type: "Full-time", location: "Remote" },
];

export default function Careers() {
  const [applying, setApplying] = useState<string | null>(null);

  return (
    <PageWrapper>
      <SectionWrapper>
        <SectionHeader
          eyebrow="Join Us"
          heading="Build The Future With Antara Global"
          subtext="We're looking for passionate people who believe in democratizing business knowledge and enabling sustainable growth."
        />

        {/* Open roles */}
        <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-6">
          {OPEN_ROLES.map((role) => (
            <StaggerItem key={role.id}>
              <GlassCard className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium text-antara-gold uppercase tracking-wide px-2 py-1 rounded bg-antara-gold/10 border border-antara-gold/20">
                    {role.type}
                  </span>
                  <span className="text-xs text-antara-muted">{role.location}</span>
                </div>
                <h3 className="text-antara-white font-semibold text-lg mb-4">{role.title}</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setApplying(role.id)}
                  className="w-full"
                >
                  Apply Now
                </Button>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quick apply notice */}
        {applying && (
          <div className="mt-8 p-6 rounded-2xl bg-antara-surface border border-antara-border text-center">
            <p className="text-antara-white font-semibold mb-2">Application form coming soon.</p>
            <p className="text-antara-muted text-sm">
              Send your CV and cover letter to{" "}
              <a href="mailto:careers@antaraglobal.com" className="text-antara-gold hover:underline">
                careers@antaraglobal.com
              </a>
            </p>
            <button
              onClick={() => setApplying(null)}
              className="mt-4 text-antara-muted text-sm hover:text-antara-text"
            >
              Close
            </button>
          </div>
        )}
      </SectionWrapper>
    </PageWrapper>
  );
}
