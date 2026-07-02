// src/hooks/useScrollPosition.ts
import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scrollY;
}

export function useScrolledPast(threshold = 80) {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}
