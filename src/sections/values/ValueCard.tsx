// src/sections/values/ValueCard.tsx
// Reusable value card component — used by ValuesGrid

import {
  Shield,
  BookOpen,
  Rocket,
  Users,
  Award,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import type { CoreValue } from "@/data/antara";

// Icon lookup map
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Shield,
  BookOpen,
  Rocket,
  Users,
  Award,
  TrendingUp,
};

interface ValueCardProps {
  value: CoreValue;
}

export default function ValueCard({ value }: ValueCardProps) {
  const Icon = ICON_MAP[value.icon] ?? Shield;

  return (
    <GlassCard
      className={`
        p-6 flex flex-col gap-4 h-full group relative overflow-hidden
        before:absolute before:inset-0 before:rounded-2xl before:opacity-0
        before:transition-opacity before:duration-300
        hover:before:opacity-100
      `}
    >
      {/* Gradient border glow on hover — decorative pseudo-element substitute */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${value.color}22 0%, transparent 60%)`,
        }}
      />

      {/* Content (above the glow layer) */}
      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Header: icon + number */}
        <div className="flex items-start justify-between gap-2">
          {/* Icon area */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${value.color}1A`,
              border: `1px solid ${value.color}40`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: value.color }} />
          </div>

          {/* Value number */}
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full border"
            style={{
              color: value.color,
              borderColor: `${value.color}40`,
              backgroundColor: `${value.color}0D`,
            }}
          >
            {value.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-lg text-antara-white leading-snug group-hover:text-antara-gold transition-colors duration-300"
        >
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-antara-muted text-sm leading-relaxed flex-1">
          {value.description}
        </p>

        {/* Focus point tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-antara-border">
          {value.focusPoints.map((point) => (
            <span
              key={point}
              className="text-xs px-2.5 py-1 rounded-full border font-medium transition-colors duration-200"
              style={{
                color: value.color,
                borderColor: `${value.color}40`,
                backgroundColor: `${value.color}0D`,
              }}
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
