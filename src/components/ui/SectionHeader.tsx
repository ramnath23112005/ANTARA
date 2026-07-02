// src/components/ui/SectionHeader.tsx
import { cn } from "@/lib/utils";
import SlideUp from "@/components/animations/SlideUp";

interface SectionHeaderProps {
  eyebrow?:    string;
  heading:     string;
  subtext?:    string;
  align?:      "left" | "center";
  className?:  string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <SlideUp className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <p className="text-antara-gold text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-antara-white leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className={cn(
          "mt-4 text-antara-muted text-lg leading-relaxed",
          align === "center" && "max-w-2xl mx-auto"
        )}>
          {subtext}
        </p>
      )}
    </SlideUp>
  );
}
