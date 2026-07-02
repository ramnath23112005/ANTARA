// src/components/ui/GlassCard.tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children:  ReactNode;
  className?: string;
  hover?:     boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-antara-surface/80 backdrop-blur-md border border-antara-border shadow-glass",
        hover && "transition-all duration-300 hover:border-antara-gold/40 hover:-translate-y-1 hover:shadow-gold",
        className
      )}
    >
      {children}
    </div>
  );
}
