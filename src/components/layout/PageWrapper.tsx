// src/components/layout/PageWrapper.tsx
// Wraps every page with Navbar + Footer + top padding for fixed nav
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageWrapperProps {
  children: ReactNode;
  /** Remove default top padding (e.g. for hero sections that handle their own) */
  noTopPad?: boolean;
}

export default function PageWrapper({ children, noTopPad = false }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col bg-antara-navy text-antara-text">
      <Navbar />
      <main className={`flex-1 ${noTopPad ? "" : "pt-16"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
