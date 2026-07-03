// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Company: [
    { label: "About",     href: "/about" },
    { label: "Services",  href: "/services" },
    { label: "Works",     href: "/works" },
    { label: "Careers",   href: "/careers" },
    { label: "Contact",   href: "/contact" },
  ],
  Ecosystem: [
    { label: "Audience",  href: "/audience" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Values",    href: "/values" },
    { label: "Blogs",     href: "/blogs" },
  ],
};

const SOCIAL = [
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail,      href: "mailto:hello@antaraglobal.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-antara-navy border-t border-antara-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-antara-white">
              Antara<span className="text-antara-gold"> Global</span>
            </Link>
            <p className="mt-4 text-antara-muted text-sm leading-relaxed max-w-xs">
              Strategic Business Advisory, Venture Readiness &amp; Capital Connectivity Ecosystem.
            </p>
            <p className="mt-3 text-antara-gold text-sm font-semibold tracking-wide">
              Prepare. Connect. Capitalize. Scale.
            </p>
            {/* Socials */}
            <div className="mt-6 flex gap-4">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-antara-surface border border-antara-border text-antara-muted hover:text-antara-gold hover:border-antara-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-antara-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="text-antara-muted text-sm hover:text-antara-text transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-antara-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-antara-muted">
          <p>© {new Date().getFullYear()} Antara Global. All rights reserved.</p>
          <p>Democratizing Business Knowledge. Connecting Opportunities. Enabling Growth.</p>
        </div>
      </div>
    </footer>
  );
}
