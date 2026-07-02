// src/components/animations/Stagger.tsx
// Wraps children in a stagger container — child items animate in sequence
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, slideUp, viewportOnce } from "@/lib/animations";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay between children in seconds */
  stagger?: number;
}

export function StaggerContainer({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={slideUp}>
      {children}
    </motion.div>
  );
}
