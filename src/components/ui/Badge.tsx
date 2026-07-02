// src/components/ui/Badge.tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "startup" | "msme" | "emerging" | "gold";

const VARIANTS: Record<BadgeVariant, string> = {
  default:  "bg-antara-surface border-antara-border text-antara-muted",
  startup:  "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
  msme:     "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  emerging: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  gold:     "bg-antara-gold/10 border-antara-gold/30 text-antara-gold",
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
