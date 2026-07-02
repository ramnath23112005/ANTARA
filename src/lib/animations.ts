// src/lib/animations.ts
// Shared Framer Motion animation variants for Antara Global

import type { Variants } from "framer-motion";

// ─── Fade in ─────────────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Slide up ────────────────────────────────────────────────────────────────
export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Slide down ──────────────────────────────────────────────────────────────
export const slideDown: Variants = {
  hidden:  { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Stagger container ───────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren:   0.1,
    },
  },
};

// ─── Stagger container — fast ────────────────────────────────────────────────
export const staggerFast: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren:   0.05,
    },
  },
};

// ─── Scale in ────────────────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Slide in from left ──────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Slide in from right ─────────────────────────────────────────────────────
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Card hover ──────────────────────────────────────────────────────────────
export const cardHover = {
  rest:  { scale: 1,    y: 0,  transition: { duration: 0.2, ease: "easeOut" } },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.2, ease: "easeOut" } },
};

// ─── Viewport defaults ───────────────────────────────────────────────────────
export const viewportOnce = { once: true, margin: "-80px" } as const;
