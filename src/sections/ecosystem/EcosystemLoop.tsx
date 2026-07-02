// src/sections/ecosystem/EcosystemLoop.tsx
// Circular loop visual — 4 steps as a continuous cycle

import { BookOpen, Target, Network, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import { ECOSYSTEM_LOOP_LABELS, ECOSYSTEM_STEPS } from "@/data/antara";

// Color & icon per position index
const STEP_META = [
  { icon: BookOpen, color: "#6366F1", bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400" },
  { icon: Target,   color: "#3B82F6", bg: "bg-blue-500/10",   border: "border-blue-500/30",   text: "text-blue-400" },
  { icon: Network,  color: "#06B6D4", bg: "bg-cyan-500/10",   border: "border-cyan-500/30",   text: "text-cyan-400" },
  { icon: TrendingUp, color: "#10B981", bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
] as const;

// Which arrow to show after each card in reading order (TL → TR → BL → BR)
// TL→TR: right arrow | TR→BR: down arrow | BR→BL: left (reversed right) | BL→TL: up (reversed down)
const ARROW_MAP = [
  { dir: "right", col: "col-start-2 row-start-1", rotate: "" },      // between TL and TR
  { dir: "down",  col: "col-start-3 row-start-1", rotate: "" },      // between TR and BR (right column going down)
  { dir: "right", col: "col-start-1 row-start-2", rotate: "rotate-180" }, // between BR and BL (reversed)
  { dir: "down",  col: "col-start-1 row-start-1", rotate: "rotate-180" }, // between BL and TL (reversed up)
];

function LoopCard({
  label,
  index,
  delay,
}: {
  label: string;
  index: number;
  delay: number;
}) {
  const meta = STEP_META[index];
  const Icon = meta.icon;
  const step = ECOSYSTEM_STEPS[index];

  return (
    <SlideUp delay={delay}>
      <div
        className={`rounded-2xl border ${meta.border} ${meta.bg} p-5 flex flex-col gap-3 h-full
          transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
      >
        {/* Number badge */}
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full border ${meta.border} ${meta.text}`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-xl ${meta.bg} border ${meta.border} flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${meta.text}`} />
        </div>

        {/* Label */}
        <p className={`font-semibold text-base ${meta.text}`}>{label}</p>

        {/* Short description */}
        {step && (
          <p className="text-antara-muted text-xs leading-relaxed line-clamp-3">
            {step.description}
          </p>
        )}
      </div>
    </SlideUp>
  );
}

export default function EcosystemLoop() {
  const labels = [...ECOSYSTEM_LOOP_LABELS]; // ["Educate","Advise","Connect","Grow"]

  return (
    <section className="py-20 bg-antara-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <FadeIn className="text-center mb-12">
          <p className="text-antara-gold text-sm font-semibold uppercase tracking-widest mb-2">
            The Cycle
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-antara-white">
            A Continuous Growth Loop
          </h2>
          <p className="mt-4 text-antara-muted text-lg max-w-xl mx-auto">
            Each stage feeds into the next — creating an ever-strengthening cycle of growth.
          </p>
        </FadeIn>

        {/* 2×2 grid with center label */}
        <div className="relative">
          {/* Outer grid: 2 cols × 2 rows for the 4 cards */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Top-left: Educate */}
            <LoopCard label={labels[0]} index={0} delay={0} />

            {/* Top-right: Advise */}
            <LoopCard label={labels[1]} index={1} delay={0.1} />

            {/* Bottom-left: Grow */}
            <LoopCard label={labels[3]} index={3} delay={0.3} />

            {/* Bottom-right: Connect */}
            <LoopCard label={labels[2]} index={2} delay={0.2} />
          </div>

          {/* ── Center label overlay ── */}
          <FadeIn
            delay={0.4}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="rounded-2xl bg-antara-navy border border-antara-gold/40 px-5 py-4 text-center shadow-gold">
              <p className="text-antara-gold text-xs font-bold uppercase tracking-widest mb-1">
                Antara
              </p>
              <p className="text-antara-white font-bold text-sm leading-tight">
                Ecosystem
              </p>
            </div>
          </FadeIn>

          {/* ── Cycle arrows (absolute, decorative) ── */}
          {/* Top arrow: Educate → Advise */}
          <div className="hidden sm:flex absolute top-[calc(50%-80px)] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <ArrowRight className="w-5 h-5 text-antara-gold opacity-50" />
          </div>

          {/* Right arrow: Advise → Connect */}
          <div className="hidden sm:flex absolute top-1/2 right-[-18px] -translate-y-1/2 rotate-90 pointer-events-none">
            <ArrowDown className="w-5 h-5 text-antara-gold opacity-50" />
          </div>

          {/* Bottom arrow: Connect → Grow */}
          <div className="hidden sm:flex absolute bottom-[calc(50%-80px)] left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none">
            <ArrowRight className="w-5 h-5 text-antara-gold opacity-50 rotate-180" />
          </div>

          {/* Left arrow: Grow → Educate */}
          <div className="hidden sm:flex absolute top-1/2 left-[-18px] -translate-y-1/2 -rotate-90 pointer-events-none">
            <ArrowDown className="w-5 h-5 text-antara-gold opacity-50" />
          </div>
        </div>

        {/* Mobile linear flow fallback */}
        <div className="sm:hidden mt-8 flex items-center justify-center gap-2 flex-wrap">
          {labels.map((label, i) => (
            <span key={label} className="flex items-center gap-2 text-sm">
              <span className="text-antara-white font-medium">{label}</span>
              {i < labels.length - 1 && (
                <ArrowRight className="w-4 h-4 text-antara-gold" />
              )}
            </span>
          ))}
          <ArrowRight className="w-4 h-4 text-antara-gold rotate-180 ml-1 opacity-50" />
        </div>
      </div>
    </section>
  );
}
