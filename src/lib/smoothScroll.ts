// src/lib/smoothScroll.ts
// Smooth scroll utilities for Antara Global

/**
 * Scroll to a section by element ID with optional offset for fixed navbar.
 */
export function scrollToSection(id: string, offset = 80): void {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Scroll back to the very top of the page.
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Returns true if the current scroll position is past `threshold` pixels.
 */
export function isPastThreshold(threshold = 100): boolean {
  return window.scrollY > threshold;
}
