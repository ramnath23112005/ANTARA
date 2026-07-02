// src/sections/hero/HeroAnimated.tsx
// Framer-motion animated version of the homepage hero
// Entrance animations: staggered heading words, subtext, CTAs, stats

"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadePlain = {
  hidden:  { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const staggerParent = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const staggerChild = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { icon: TrendingUp, value: "500+",     label: "Businesses Supported" },
  { icon: Shield,     value: "Phase 1",  label: "Currently Active" },
  { icon: Layers,     value: "3 Stages", label: "Growth Pathways" },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────
export default function HeroAnimated() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-antara-navy">

      {/* ── Background glow (non-animated, pure CSS) ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-antara-gold/5 blur-3xl" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-8 pt-24 pb-16">

        {/* Badge */}
        <motion.div
          variants={fadePlain}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Badge variant="gold" className="gap-1.5 px-4 py-1.5 text-xs tracking-widest uppercase">
            ✦ Strategic Business Advisory
          </Badge>
        </motion.div>

        {/* Headline — word-level stagger */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-antara-white leading-tight max-w-4xl"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          {["Building", "Growth-Ready", "&", "Investment-Ready", "Businesses"].map(
            (word, i) => (
              <motion.span
                key={i}
                variants={staggerChild}
                className={
                  word === "Growth-Ready" || word === "Investment-Ready"
                    ? "text-antara-gold inline-block mx-1"
                    : "inline-block mx-1"
                }
              >
                {word}
              </motion.span>
            )
          )}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-antara-muted text-lg sm:text-xl leading-relaxed max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          Antara Global is a strategic business advisory firm empowering
          startups, MSMEs, and emerging businesses with the direction,
          knowledge, and ecosystem access they need to grow, scale, and become
          investment-ready.
        </motion.p>

        {/* CTA buttons — staggered */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerChild}>
            <a href="/ecosystem">
              <Button variant="primary" size="lg" className="gap-2">
                Explore Ecosystem
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
          <motion.div variants={staggerChild}>
            <a href="/contact">
              <Button variant="outline" size="lg">
                Book a Consultation
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="text-antara-muted/60 text-sm"
          variants={fadePlain}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          Trusted by founders, MSMEs &amp; entrepreneurs across industries
        </motion.p>
      </div>

      {/* ── Stats row ── */}
      <motion.div
        className="relative z-10 w-full border-t border-antara-border/50 mt-auto"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.0}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-antara-border/40">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-1 py-4 sm:py-0 sm:px-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1.1 + i * 0.1}
            >
              <Icon className="w-5 h-5 text-antara-gold mb-1" />
              <span className="text-2xl font-bold text-antara-white">{value}</span>
              <span className="text-antara-muted text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
