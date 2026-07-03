export interface NavItem {
  label: string
  href: string
}

export interface NavGroup {
  heading: string
  items: NavItem[]
}

export interface NavDropdown {
  type: 'flat' | 'grouped'
  flat?: NavItem[]
  groups?: NavGroup[]
}

export interface NavLink {
  label: string
  href?: string
  dropdown?: NavDropdown
}

export const navConfig: NavLink[] = [
  {
    label: 'Home',
    href: '/',
  },

  {
    label: 'About',
    dropdown: {
      type: 'flat',
      flat: [
        { label: 'About Antara Global', href: '/about' },
        { label: 'Vision & Mission',    href: '/about' },
        { label: 'Our Philosophy',      href: '/about' },
        { label: 'Core Values',         href: '/values' },
        { label: 'Positioning',         href: '/positioning' },
        { label: 'Brand Story',         href: '/about' },
      ],
    },
  },

  {
    label: 'Services',
    dropdown: {
      type: 'grouped',
      groups: [
        {
          heading: 'Strategic Business Advisory',
          items: [
            { label: 'Business Strategy',      href: '/services' },
            { label: 'Growth Planning',         href: '/services' },
            { label: 'Market Positioning',      href: '/positioning' },
            { label: 'Business Transformation', href: '/services' },
            { label: 'Operational Excellence',  href: '/services' },
            { label: 'Expansion Planning',      href: '/services' },
          ],
        },
        {
          heading: 'Venture Readiness Advisory',
          items: [
            { label: 'Business Diagnostics',          href: '/services' },
            { label: 'Investment Readiness Assessment',href: '/services' },
            { label: 'Investor Preparedness',         href: '/services' },
            { label: 'Pitch Deck Development',        href: '/services' },
            { label: 'Financial Modelling',           href: '/services' },
            { label: 'Due Diligence Preparation',     href: '/services' },
            { label: 'Fundraising Strategy',          href: '/services' },
          ],
        },
        {
          heading: 'Fundraising Support',
          items: [
            { label: 'Capital Planning',           href: '/services' },
            { label: 'Investor Readiness',         href: '/services' },
            { label: 'Financial Projections',      href: '/services' },
            { label: 'Data Room Preparation',      href: '/services' },
            { label: 'Investor Communication',     href: '/services' },
            { label: 'Fundraising Coordination',   href: '/services' },
            { label: 'Strategic Introductions',    href: '/services' },
          ],
        },
        {
          heading: 'MSME Growth Advisory',
          items: [
            { label: 'Growth Strategy',          href: '/services' },
            { label: 'Financial Preparedness',   href: '/services' },
            { label: 'Debt Readiness',           href: '/services' },
            { label: 'Government Scheme Awareness', href: '/services' },
            { label: 'Compliance Awareness',     href: '/services' },
            { label: 'Capacity Building',        href: '/services' },
          ],
        },
      ],
    },
  },

  {
    label: 'Solutions',
    dropdown: {
      type: 'grouped',
      groups: [
        {
          heading: 'Startups',
          items: [
            { label: 'Early Stage',          href: '/audience' },
            { label: 'Growth Stage',         href: '/audience' },
            { label: 'Investment Readiness', href: '/services' },
          ],
        },
        {
          heading: 'MSMEs',
          items: [
            { label: 'Manufacturing',        href: '/audience' },
            { label: 'Services',             href: '/audience' },
            { label: 'Family Businesses',    href: '/audience' },
            { label: 'Export Businesses',    href: '/audience' },
            { label: 'Emerging Businesses',  href: '/audience' },
          ],
        },
        {
          heading: 'Sectors',
          items: [
            { label: 'Healthcare',        href: '/audience' },
            { label: 'Technology',        href: '/audience' },
            { label: 'SaaS',              href: '/audience' },
            { label: 'EdTech',            href: '/audience' },
            { label: 'D2C',               href: '/audience' },
            { label: 'Social Enterprises',href: '/audience' },
          ],
        },
      ],
    },
  },

  {
    label: 'Ecosystem',
    dropdown: {
      type: 'grouped',
      groups: [
        {
          heading: 'Capital Network',
          items: [
            { label: 'Individual Investors',         href: '/ecosystem' },
            { label: 'Angel Investors',              href: '/ecosystem' },
            { label: 'Angel Networks',               href: '/ecosystem' },
            { label: 'Venture Capital Firms',        href: '/ecosystem' },
            { label: 'Family Offices',               href: '/ecosystem' },
            { label: 'Strategic Investors',          href: '/ecosystem' },
            { label: 'Corporate Investors',          href: '/ecosystem' },
            { label: 'Institutional Investors',      href: '/ecosystem' },
            { label: 'Alternative Funding Platforms',href: '/ecosystem' },
          ],
        },
        {
          heading: 'Strategic Partners',
          items: [
            { label: 'Chartered Accountants',  href: '/ecosystem' },
            { label: 'Company Secretaries',    href: '/ecosystem' },
            { label: 'Legal Advisors',         href: '/ecosystem' },
            { label: 'Financial Professionals',href: '/ecosystem' },
            { label: 'Mentors & Consultants',  href: '/ecosystem' },
            { label: 'Incubators',             href: '/ecosystem' },
            { label: 'Accelerators',           href: '/ecosystem' },
            { label: 'Institutional Partners', href: '/ecosystem' },
          ],
        },
      ],
    },
  },

  {
    label: 'Knowledge Hub',
    dropdown: {
      type: 'grouped',
      groups: [
        {
          heading: 'Resources',
          items: [
            { label: 'Blogs',               href: '/blogs' },
            { label: 'Financial Literacy',  href: '/blogs' },
            { label: 'Business Resources',  href: '/blogs' },
            { label: 'Downloads',           href: '/blogs' },
          ],
        },
        {
          heading: 'Events & Programs',
          items: [
            { label: 'Workshops',         href: '/blogs' },
            { label: 'Webinars',          href: '/blogs' },
            { label: 'Founder Bootcamps', href: '/blogs' },
            { label: 'Industry Sessions', href: '/blogs' },
            { label: 'Expert Panels',     href: '/blogs' },
          ],
        },
      ],
    },
  },

  {
    label: 'Contact',
    dropdown: {
      type: 'flat',
      flat: [
        { label: 'Contact Us',       href: '/contact' },
        { label: 'Book Consultation',href: '/contact' },
        { label: 'Partner With Us',  href: '/contact' },
      ],
    },
  },
]

export const futureLinks: NavItem[] = [
  { label: 'Founder Dashboard', href: '/dashboard/founder' },
  { label: 'Investor Portal',   href: '/portal/investor' },
  { label: 'Partner Portal',    href: '/portal/partner' },
  { label: 'Login / Sign In',   href: '/login' },
]
