// src/components/animations/FadeIn.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn, viewportOnce } from "@/lib/animations";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, delay, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
}
