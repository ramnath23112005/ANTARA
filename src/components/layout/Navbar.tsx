import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navConfig, type NavLink, type NavGroup } from './navConfig'

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.12, ease: 'easeIn' },
  },
}

const drawerVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
}

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.16, ease: 'easeIn' },
  },
}

interface DesktopDropdownProps {
  link: NavLink
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

function DesktopDropdown({ link, isOpen, onOpen, onClose }: DesktopDropdownProps) {
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    onOpen()
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => onClose(), 120)
  }

  const dropdown = link.dropdown
  const isGrouped = dropdown?.type === 'grouped'
  const totalGroups = dropdown?.groups?.length ?? 0

  const gridCols =
    totalGroups <= 2 ? 'grid-cols-2' :
    totalGroups === 3 ? 'grid-cols-3' :
    'grid-cols-4'

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`nav-trigger group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
          isOpen ? 'text-deep-navy' : 'text-medium-gray hover:text-deep-navy'
        }`}
      >
        {link.label}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-gold' : 'text-medium-gray group-hover:text-gold'
          }`}
        />
        <span
          className={`absolute bottom-[-4px] left-0 h-0.5 bg-gold transition-all duration-300 ${
            isOpen ? 'w-full' : 'w-0'
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && dropdown && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`nav-dropdown absolute top-full z-50 mt-3 rounded-2xl border border-border-gray/60 bg-white/95 shadow-2xl shadow-deep-navy/10 backdrop-blur-xl ${
              isGrouped
                ? totalGroups >= 3
                  ? 'left-1/2 -translate-x-1/2 w-max min-w-[640px] max-w-[900px]'
                  : 'left-0 w-max min-w-[420px]'
                : 'left-0 w-56'
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-gold/60 via-gold to-gold/60" />

            {isGrouped ? (
              <div className={`grid ${gridCols} gap-0 p-5`}>
                {dropdown.groups!.map((group: NavGroup, gi: number) => (
                  <div
                    key={group.heading}
                    className={`px-4 py-2 ${
                      gi < totalGroups - 1
                        ? 'border-r border-border-gray/50'
                        : ''
                    }`}
                  >
                    <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-gold">
                      {group.heading}
                    </p>
                    <ul className="flex flex-col gap-0.5">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            onClick={onClose}
                            className={`nav-item group flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-medium transition-all duration-150 ${
                              location.pathname === item.href
                                ? 'bg-gold/8 text-deep-navy'
                                : 'text-charcoal hover:bg-deep-navy/5 hover:text-deep-navy'
                            }`}
                          >
                            <ChevronRight className="h-3 w-3 flex-shrink-0 text-gold/50 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="flex flex-col gap-0.5 p-2.5">
                {dropdown.flat!.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`nav-item group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                        location.pathname === item.href
                          ? 'bg-deep-navy text-white'
                          : 'text-charcoal hover:bg-deep-navy/5 hover:text-deep-navy'
                      }`}
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-gold/60 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MobileNavItemProps {
  link: NavLink
  onClose: () => void
}

function MobileNavItem({ link, onClose }: MobileNavItemProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const hasDropdown = Boolean(link.dropdown)

  if (!hasDropdown) {
    return (
      <Link
        to={link.href ?? '/'}
        onClick={onClose}
        className={`flex items-center rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
          location.pathname === link.href
            ? 'bg-deep-navy text-white'
            : 'text-charcoal hover:bg-deep-navy/5 hover:text-deep-navy'
        }`}
      >
        {link.label}
      </Link>
    )
  }

  const dropdown = link.dropdown!
  const allItems =
    dropdown.type === 'flat'
      ? [{ heading: '', items: dropdown.flat! }]
      : dropdown.groups!

  return (
    <div className="rounded-xl overflow-hidden border border-border-gray/50">
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
          open ? 'bg-deep-navy/5 text-deep-navy' : 'text-charcoal hover:bg-deep-navy/5'
        }`}
      >
        {link.label}
        <ChevronDown
          className={`h-4 w-4 text-gold transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="accordion"
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="border-t border-border-gray/50 px-3 py-3 flex flex-col gap-4">
              {allItems.map((group, gi) => (
                <div key={group.heading || gi}>
                  {group.heading && (
                    <p className="mb-2 px-2 text-[10px] font-black uppercase tracking-widest text-gold">
                      {group.heading}
                    </p>
                  )}
                  <ul className="flex flex-col gap-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                            location.pathname === item.href
                              ? 'bg-deep-navy text-white font-semibold'
                              : 'text-medium-gray hover:bg-deep-navy/5 hover:text-deep-navy'
                          }`}
                        >
                          <ChevronRight className="h-3 w-3 flex-shrink-0 text-gold/50" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openDropdown = useCallback((label: string) => setActiveDropdown(label), [])
  const closeDropdown = useCallback(() => setActiveDropdown(null), [])
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const [homeLink, ...dropdownLinks] = navConfig

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'top-3 mx-auto max-w-screen-xl w-[94%] rounded-2xl bg-white/90 border border-border-gray/60 shadow-xl shadow-deep-navy/8 backdrop-blur-2xl'
            : 'top-0 w-full bg-white/70 border-b border-border-gray/50 backdrop-blur-md'
        }`}
      >
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-[72px]'
          }`}
          aria-label="Main navigation"
        >
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative flex items-center">
              <Sparkles className="h-5 w-5 text-gold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-gold/40 animate-pulse-glow" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[17px] font-black tracking-tight text-deep-navy group-hover:text-gold transition-colors duration-300">
                ANTARA{' '}
                <span className="font-light text-gold">GLOBAL</span>
              </span>
              <span
                className={`text-[9px] font-medium tracking-wider text-medium-gray/70 transition-all duration-300 ${
                  scrolled ? 'hidden' : 'hidden sm:block'
                }`}
              >
                सर्वेषां वित्तज्ञानम्
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              to={homeLink.href ?? '/'}
              className="nav-trigger relative px-3 py-1 text-xs font-bold uppercase tracking-wider text-medium-gray hover:text-deep-navy transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {homeLink.label}
            </Link>

            {dropdownLinks.map((link) => (
              <div key={link.label} className="relative px-1">
                <DesktopDropdown
                  link={link}
                  isOpen={activeDropdown === link.label}
                  onOpen={() => openDropdown(link.label)}
                  onClose={closeDropdown}
                />
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-wider text-medium-gray hover:text-deep-navy transition-colors duration-200 border border-border-gray/70 hover:border-deep-navy/30 rounded-xl px-4 py-2"
            >
              Become a Partner
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              Book a Consultation
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-charcoal hover:text-gold hover:bg-deep-navy/5 transition-all duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-deep-navy/40 backdrop-blur-sm lg:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl shadow-deep-navy/20 flex flex-col lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border-gray/60 px-5 py-4">
              <Link to="/" onClick={closeMobile} className="flex items-center gap-2 group">
                <Sparkles className="h-4.5 w-4.5 text-gold group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-base font-black tracking-tight text-deep-navy">
                  ANTARA{' '}
                  <span className="font-light text-gold">GLOBAL</span>
                </span>
              </Link>
              <button
                onClick={closeMobile}
                className="p-2 rounded-lg text-charcoal hover:text-gold hover:bg-deep-navy/5 transition-all duration-200"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-deep-navy/4 px-5 py-2.5 text-[11px] font-medium tracking-wider text-medium-gray border-b border-border-gray/40">
              सर्वेषां वित्तज्ञानम् · Financial Knowledge for Everyone
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2">
              {navConfig.map((link) => (
                <MobileNavItem key={link.label} link={link} onClose={closeMobile} />
              ))}
            </div>

            <div className="border-t border-border-gray/60 px-4 py-5 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={closeMobile}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-dark px-5 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              <Link
                to="/contact"
                onClick={closeMobile}
                className="flex items-center justify-center rounded-xl border border-deep-navy/20 px-5 py-3 text-sm font-bold uppercase tracking-wider text-deep-navy hover:bg-deep-navy/5 transition-all duration-200"
              >
                Become a Partner
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
