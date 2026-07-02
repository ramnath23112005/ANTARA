// src/sections/common/CTASection.tsx
// Reusable full-width CTA banner with gradient background and 1-2 action buttons

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
}

export default function CTASection({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  id,
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="relative bg-antara-navy py-20 lg:py-28 overflow-hidden"
      aria-label={heading}
    >
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-antara-gold/10 via-transparent to-blue-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-antara-gold/5 rounded-full blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-antara-gold/40 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-antara-gold/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <SlideUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-antara-white leading-tight">
            {heading}
          </h2>
        </SlideUp>

        {subtext && (
          <FadeIn delay={0.15}>
            <p className="mt-5 text-antara-muted text-lg leading-relaxed max-w-xl mx-auto">
              {subtext}
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.25}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryHref}>
              <Button variant="primary" size="lg">
                {primaryLabel}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link to={secondaryHref}>
                <Button variant="outline" size="lg">
                  {secondaryLabel}
                </Button>
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
