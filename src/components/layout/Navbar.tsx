// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { isPastThreshold } from "@/lib/smoothScroll";

const NAV_LINKS = [
  { label: "Home",       href: "/", scroll: false },
  { label: "About",      href: "/about", scroll: false },
  { label: "Services",   href: "/#services", scroll: true },
  { label: "Audience",   href: "/#audience", scroll: true },
  { label: "Ecosystem",  href: "/#ecosystem", scroll: true },
  { label: "Values",     href: "/#values", scroll: true },
  { label: "Works",      href: "/works", scroll: false },
  { label: "Blogs",      href: "/blogs", scroll: false },
  { label: "Careers",    href: "/careers", scroll: false },
  { label: "Contact",    href: "/contact", scroll: false },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(isPastThreshold(60));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Scroll to section if hash is present
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, scroll: boolean) => {
    if (scroll) {
      e.preventDefault();
      const [path, sectionId] = href.split('#');
      
      if (pathname !== path) {
        // Navigate to home first, then scroll
        navigate(href);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      setMenuOpen(false);
    }
  };

  const isActive = (href: string, scroll: boolean) => {
    if (scroll) {
      const sectionId = href.split('#')[1];
      return pathname === '/' && hash === `#${sectionId}`;
    }
    return pathname === href;
  };

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
          {NAV_LINKS.map(({ label, href, scroll }) => (
            <li key={href}>
              <Link
                to={href}
                onClick={(e) => handleNavClick(e, href, scroll)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(href, scroll)
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
            {NAV_LINKS.map(({ label, href, scroll }) => (
              <li key={href}>
                <Link
                  to={href}
                  onClick={(e) => handleNavClick(e, href, scroll)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    isActive(href, scroll) ? "text-antara-gold" : "text-antara-muted hover:text-antara-text"
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
