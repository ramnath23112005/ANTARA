// src/pages/Blogs.tsx
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/sections/common/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

// Placeholder data — to be replaced by Supabase fetch
const PLACEHOLDER_POSTS = [
  { id: "1", title: "How Startups Can Prepare For Fundraising", date: "2026-06-01", category: "Venture Readiness" },
  { id: "2", title: "The MSME Growth Framework: Foundation To Scale", date: "2026-05-15", category: "Growth Strategy" },
  { id: "3", title: "Understanding Capital Readiness For Your Business", date: "2026-05-01", category: "Financial Knowledge" },
];

export default function Blogs() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <SectionHeader
          eyebrow="Insights"
          heading="Knowledge Hub"
          subtext="Business insights, growth frameworks, and ecosystem updates from Antara Global."
        />
        <StaggerContainer className="mt-12 grid md:grid-cols-3 gap-6">
          {PLACEHOLDER_POSTS.map((post) => (
            <StaggerItem key={post.id}>
              <GlassCard className="p-6 cursor-pointer">
                <span className="text-xs font-medium text-antara-gold uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-antara-white font-semibold mt-3 mb-4 leading-snug">
                  {post.title}
                </h3>
                <p className="text-antara-muted text-xs">{post.date}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>
    </PageWrapper>
  );
}
