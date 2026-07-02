// src/pages/Positioning.tsx
// Positioning & Roadmap — COMING SOON
// Content reserved — do not add content here yet.
import PageWrapper from "@/components/layout/PageWrapper";
import { POSITIONING_COMING_SOON } from "@/data/antara";
import { Clock } from "lucide-react";

export default function Positioning() {
  return (
    <PageWrapper>
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-antara-surface border border-antara-border mb-8">
          <Clock size={14} className="text-antara-gold" />
          <span className="text-antara-muted text-sm">In Progress</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-antara-white mb-4">
          {POSITIONING_COMING_SOON.title}
        </h1>

        <p className="text-6xl sm:text-8xl font-black text-gradient-gold my-6">
          {POSITIONING_COMING_SOON.message}
        </p>

        <p className="text-antara-muted text-lg max-w-md">
          {POSITIONING_COMING_SOON.subtext}
        </p>
      </section>
    </PageWrapper>
  );
}
