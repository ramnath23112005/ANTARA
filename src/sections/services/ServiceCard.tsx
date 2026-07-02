// src/sections/services/ServiceCard.tsx
// Single service card — used by ServicesGrid

import {
  Target,
  Briefcase,
  DollarSign,
  Network,
  BookOpen,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/antara";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

// ─── Icon registry keyed on the string names used in data ────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  Briefcase,
  DollarSign,
  Network,
  BookOpen,
  TrendingUp,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Target;

  return (
    <GlassCard
      hover
      className="flex flex-col h-full p-6"
      // Subtle colored top border via inline style since Tailwind can't interpolate arbitrary hex
    >
      {/* ── Icon area ──────────────────────────────────────────────────────── */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${service.color}1A`, // ~10 % opacity hex
          border: `1px solid ${service.color}40`,
        }}
        aria-hidden="true"
      >
        <Icon
          className="h-6 w-6"
          style={{ color: service.color }}
          aria-hidden="true"
        />
      </div>

      {/* ── Title + tagline ────────────────────────────────────────────────── */}
      <div className="mb-3">
        <Badge variant="gold" className="mb-2">
          {service.tagline}
        </Badge>
        <h3 className="text-lg font-bold text-antara-white leading-snug">
          {service.title}
        </h3>
      </div>

      {/* ── Description ────────────────────────────────────────────────────── */}
      <p className="text-antara-muted text-sm leading-relaxed mb-5 flex-1">
        {service.description}
      </p>

      {/* ── Feature list ───────────────────────────────────────────────────── */}
      <ul className="flex flex-col gap-2 border-t border-antara-border pt-4" role="list">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: service.color }}
              aria-hidden="true"
            />
            <span className="text-antara-muted text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
