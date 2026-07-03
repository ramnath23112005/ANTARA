import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Instagram, Mail, MapPin, Sparkles } from 'lucide-react'

const FOOTER_LINKS = {
  Company: [
    { label: 'About',     href: '/about' },
    { label: 'Services',  href: '/services' },
    { label: 'Positioning', href: '/positioning' },
    { label: 'Works',     href: '/works' },
    { label: 'Careers',   href: '/careers' },
    { label: 'Contact',   href: '/contact' },
  ],
  Ecosystem: [
    { label: 'Audience',  href: '/audience' },
    { label: 'Ecosystem', href: '/ecosystem' },
    { label: 'Values',    href: '/values' },
    { label: 'Blogs',     href: '/blogs' },
  ],
}

const SOCIAL = [
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail,      href: 'mailto:hello@antaraglobal.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative bg-deep-navy text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-float" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald/5 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 group">
              <Sparkles className="h-5 w-5 text-gold group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold tracking-tight">
                ANTARA{' '}
                <span className="font-light text-gold-light">GLOBAL</span>
              </span>
            </div>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-md">
              Strategic business advisory, venture readiness, and capital connectivity
              ecosystem helping businesses prepare, connect, and grow.
            </p>
            <p className="mt-3 text-gold-light text-sm font-semibold tracking-wide">
              Prepare. Connect. Capitalize. Scale.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/40 hover:text-gold-light hover:border-gold/30 hover:bg-gold/5 hover:scale-110 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/50 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="text-sm text-white/40 hover:text-gold-light hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Antara Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link to="/contact" className="hover:text-gold-light hover:underline transition-all">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-light hover:underline transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
