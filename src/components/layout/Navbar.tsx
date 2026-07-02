// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { isPastThreshold } from "@/lib/smoothScroll";

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Audience",   href: "/audience" },
  { label: "Ecosystem",  href: "/ecosystem" },
  { label: "Values",     href: "/values" },
  { label: "Works",      href: "/works" },
  { label: "Blogs",      href: "/blogs" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(isPastThreshold(60));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-antara-navy/95 backdrop-blur-md border-b border-antara-border shadow-glass"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold text-antara-white tracking-tight">
            Antara
            <span className="text-antara-gold"> Global</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === href
                    ? "text-antara-gold"
                    : "text-antara-muted hover:text-antara-text"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-antara-gold text-antara-navy text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-antara-text"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-antara-dark border-t border-antara-border px-4 pb-6">
          <ul className="flex flex-col gap-1 mt-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    pathname === href ? "text-antara-gold" : "text-antara-muted hover:text-antara-text"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link
                to="/contact"
                className="block text-center px-4 py-2 rounded-lg bg-antara-gold text-antara-navy text-sm font-semibold"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
