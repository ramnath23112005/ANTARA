// src/sections/values/CoreCenter.tsx
// Decorative center visual — 'Antara Global Core' surrounded by 6 value names
// Pure CSS + Tailwind, no external dependencies beyond FadeIn

import FadeIn from "@/components/animations/FadeIn";
import { CORE_VALUES } from "@/data/antara";

// Pre-computed positions for the 6 value nodes arranged in a hexagon
// Values are in degrees from top (0°), going clockwise
// 0° top, 60° top-right, 120° bottom-right, 180° bottom, 240° bottom-left, 300° top-left
const POSITIONS: { top: string; left: string; origin: string }[] = [
  { top: "0%",    left: "50%",   origin: "bottom center" }, // 0° — top
  { top: "25%",   left: "93%",   origin: "center left"   }, // 60° — top-right
  { top: "75%",   left: "93%",   origin: "center left"   }, // 120° — bottom-right
  { top: "100%",  left: "50%",   origin: "top center"    }, // 180° — bottom
  { top: "75%",   left: "7%",    origin: "center right"  }, // 240° — bottom-left
  { top: "25%",   left: "7%",    origin: "center right"  }, // 300° — top-left
];

export default function CoreCenter() {
  return (
    <section className="py-20 bg-antara-navy overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-antara-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Our Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-antara-white">
            Built Around One Core
          </h2>
        </FadeIn>

        {/* Hexagon layout container */}
        <FadeIn delay={0.2}>
          <div className="relative mx-auto" style={{ width: "100%", maxWidth: 480, aspectRatio: "1 / 1" }}>
            {/* ── SVG connecting lines ── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 480 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Center of SVG is 240, 240 */}
              {/* Lines from center to each node position (mirroring CSS percentages → px at 480px) */}
              {/* top   */ }
              <line x1="240" y1="240" x2="240" y2="24"  stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 6" />
              {/* top-right */}
              <line x1="240" y1="240" x2="446" y2="120" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 6" />
              {/* bottom-right */}
              <line x1="240" y1="240" x2="446" y2="360" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 6" />
              {/* bottom */}
              <line x1="240" y1="240" x2="240" y2="456" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 6" />
              {/* bottom-left */}
              <line x1="240" y1="240" x2="34"  y2="360" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 6" />
              {/* top-left */}
              <line x1="240" y1="240" x2="34"  y2="120" stroke="#D4AF37" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 6" />

              {/* Outer circle guide */}
              <circle cx="240" cy="240" r="210" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="1" />
              <circle cx="240" cy="240" r="60"  stroke="#D4AF37" strokeOpacity="0.15" strokeWidth="1" />
            </svg>

            {/* ── Center label ── */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl bg-antara-navy border border-antara-gold/50 px-5 py-4 text-center shadow-gold z-10">
                <p className="text-antara-gold text-xs font-bold uppercase tracking-widest leading-tight">
                  Antara Global
                </p>
                <p className="text-antara-white font-bold text-sm mt-0.5">
                  Core
                </p>
              </div>
            </div>

            {/* ── Value nodes ── */}
            {CORE_VALUES.map((value, index) => {
              const pos = POSITIONS[index];
              return (
                <div
                  key={value.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <div
                    className="rounded-xl border px-3 py-2 text-center whitespace-nowrap transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
                    style={{
                      backgroundColor: `${value.color}11`,
                      borderColor: `${value.color}40`,
                    }}
                  >
                    {/* Colored dot */}
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: value.color }}
                      />
                      <span
                        className="text-xs font-bold"
                        style={{ color: value.color }}
                      >
                        {value.number}
                      </span>
                    </div>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: value.color }}
                    >
                      {value.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Legend below on mobile (nodes overlap on small screens) */}
        <div className="mt-8 sm:hidden flex flex-wrap justify-center gap-3">
          {CORE_VALUES.map((value) => (
            <span
              key={value.id}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{
                color: value.color,
                borderColor: `${value.color}40`,
                backgroundColor: `${value.color}11`,
              }}
            >
              {value.number} {value.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
