// src/sections/common/SectionWrapper.tsx
// Reusable section wrapper — consistent padding, max-width container, and optional dark variant

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  /** HTML id attribute for anchor linking */
  id?: string;
  /** Extra Tailwind classes applied to the outer <section> */
  className?: string;
  /** When true, applies a slightly darker bg-antara-surface background */
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        dark ? "bg-antara-surface" : "bg-antara-navy",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
