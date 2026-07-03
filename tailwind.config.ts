import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Antara Global Brand Colors
        antara: {
          navy:    "#FFFFFF",  // white - primary bg
          dark:    "#F9FAFB",  // light gray section bg
          surface: "#FFFFFF",  // white card bg
          border:  "#E5E7EB",  // light borders / dividers
          gold:    "#1A606C",  // teal accent (was gold)
          amber:   "#F59E0B",  // warm accent
          blue:    "#3B82F6",  // link / cta
          cyan:    "#06B6D4",  // ecosystem / tech accent
          teal:    "#0D9488",  // growth accent
          muted:   "#6B7280",  // secondary text (darker for white bg)
          text:    "#111827",  // dark primary text
          white:   "#000000",  // dark headings
        },
        // Audience category colors
        startup:  { DEFAULT: "#6366F1", light: "#818CF8" },
        msme:     { DEFAULT: "#10B981", light: "#34D399" },
        emerging: { DEFAULT: "#F59E0B", light: "#FCD34D" },
        // Lokesh positioning color tokens
        "deep-navy":       "#0F1E36",
        "deep-navy-light": "#1E3A8A",
        "deep-navy-dark":  "#0A1324",
        "emerald":         "#0D9488",
        "emerald-light":   "#14B8A6",
        "emerald-dark":    "#0F766E",
        "gold":            "#B88A2B",
        "gold-light":      "#CEA041",
        "gold-dark":       "#8C6A1D",
        "light-gray":      "#F8FAFC",
        "border-gray":     "#E2E8F0",
        "medium-gray":     "#475569",
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial":       "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":         "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #F3F4F6 100%)",
        "card-gradient":         "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.8) 100%)",
        "gold-gradient":         "linear-gradient(135deg, #1A606C 0%, #F59E0B 100%)",
        "blue-gradient":         "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
        "green-gradient":        "linear-gradient(135deg, #10B981 0%, #0D9488 100%)",
      },
      boxShadow: {
        "glass":   "0 4px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "gold":    "0 0 24px rgba(26,96,108,0.25), 0 4px 16px rgba(0,0,0,0.3)",
        "glow-blue": "0 0 32px rgba(59,130,246,0.3)",
        "glow-teal": "0 0 32px rgba(13,148,136,0.3)",
      },
      animation: {
        "fade-in":     "fadeIn 0.6s ease-out",
        "slide-up":    "slideUp 0.6s ease-out",
        "slide-down":  "slideDown 0.6s ease-out",
        "float":       "float 6s ease-in-out infinite",
        "pulse-slow":  "pulse 4s ease-in-out infinite",
        "spin-slow":   "spin 8s linear infinite",
        "pulse-glow":  "pulseGlow 3s ease-in-out infinite",
        "float-slow":  "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)",    opacity: "1" },
        },
        slideDown: {
          "0%":   { transform: "translateY(-24px)", opacity: "0" },
          "100%": { transform: "translateY(0)",     opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.8", transform: "scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-10px) rotate(1deg)" },
          "66%":      { transform: "translateY(5px) rotate(-1deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
