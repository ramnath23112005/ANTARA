import { motion } from 'framer-motion'
import { 
  Shield, TrendingUp, Share2, DollarSign, XCircle, 
  CheckCircle, ArrowRight, Zap, Network, Target
} from 'lucide-react'
import SectionHeader from "@/components/ui/SectionHeader"

const whatWeAreNot = [
  { icon: XCircle, label: 'Loan Agency', desc: 'Not focused on only providing financial products.' },
  { icon: XCircle, label: 'Funding Broker', desc: 'We do not promise or sell funding opportunities.' },
  { icon: XCircle, label: 'Training Institute', desc: 'We focus on practical business readiness, not only learning sessions.' },
  { icon: XCircle, label: 'Investment Guarantee Platform', desc: 'We do not guarantee investments, funding, or capital commitments.' },
  { icon: XCircle, label: 'Generic Consultancy', desc: 'We provide ecosystem-driven strategic support beyond standard consulting.' },
]

const whatWeAre = [
  {
    icon: Shield,
    title: 'Prepare',
    subtitle: 'Through:',
    items: ['Strategic guidance', 'Business readiness support', 'Financial knowledge', 'Growth planning'],
  },
  {
    icon: Share2,
    title: 'Connect',
    subtitle: 'Through:',
    items: ['Advisors', 'Investors', 'Industry experts', 'Strategic partners', 'Ecosystem networks'],
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    subtitle: 'Through:',
    items: ['Opportunities', 'Partnerships', 'Long-term value creation', 'Sustainable business development'],
  },
]

export default function ComparisonSection() {
  return (
    <section
      id="difference"
      className="relative bg-antara-navy overflow-hidden"
      aria-label="What Makes Antara Global Different"
    >
      {/* Gradient divider - top */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)', marginBottom: '0px' }}></div>

      {/* Background effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-antara-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* ─── Section Hero ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold text-antara-gold border border-antara-gold/20 mb-4">
              <Shield className="h-3.5 w-3.5" />
              <span>Why Antara Global</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-antara-white leading-tight tracking-tight">
              More Than Consulting.<br />
              <span className="bg-gradient-to-r from-antara-gold to-amber-400 bg-clip-text text-transparent">
                A Complete Growth Ecosystem.
              </span>
            </h2>
            <p className="mt-6 text-antara-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Antara Global goes beyond traditional business support by combining strategy, knowledge,
              partnerships, venture readiness, and capital connectivity to help businesses prepare, connect, and grow.
            </p>
          </motion.div>

          {/* ─── Comparison Grid ───────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 lg:mb-28">
            
            {/* Left: What We Are Not */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 rounded-full bg-red-400/60" />
                <h3 className="text-xl sm:text-2xl font-bold text-white/60">We Are Not</h3>
              </div>

              <div className="space-y-4">
                {whatWeAreNot.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-red-400/20 hover:bg-red-500/5 transition-all duration-300"
                  >
                    <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-red-500/10 text-red-400/60 flex items-center justify-center group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors duration-300">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{item.label}</p>
                      <p className="text-xs text-antara-muted mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: What We Are */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 rounded-full bg-antara-gold" />
                <h3 className="text-xl sm:text-2xl font-bold text-antara-white">We Are</h3>
              </div>

              {/* Main highlight card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-antara-gold/10 via-antara-gold/5 to-transparent border border-antara-gold/20 p-6 sm:p-8 mb-6 overflow-hidden group">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-antara-gold/10 blur-2xl group-hover:bg-antara-gold/20 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-antara-gold/40 to-transparent" />
                
                <div className="relative flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-antara-gold/15 text-antara-gold flex items-center justify-center">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-antara-white leading-snug">
                      Strategic Business Advisory, Venture Readiness, Fundraising Support & Capital Connectivity Ecosystem
                    </h4>
                    <p className="mt-3 text-sm text-antara-muted leading-relaxed">
                      Antara Global helps businesses become growth-ready and investment-ready through:
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Grid: Prepare, Connect, Grow */}
              <div className="grid sm:grid-cols-3 gap-4">
                {whatWeAre.map((feature) => (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-antara-gold/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-xl bg-antara-gold/10 text-antara-gold flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-antara-gold/20 transition-all duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-antara-white mb-2">{feature.title}</h4>
                    <p className="text-[11px] font-semibold text-antara-gold/70 uppercase tracking-wider mb-2">{feature.subtitle}</p>
                    <ul className="space-y-1.5">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-antara-muted">
                          <CheckCircle className="h-3 w-3 text-antara-gold/50 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Brand Statement ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center max-w-4xl mx-auto"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-antara-gold/20 via-blue-500/10 to-antara-gold/20 blur-md" />
            <div className="relative rounded-3xl bg-gradient-to-br from-antara-surface via-antara-navy to-antara-navy border border-white/5 p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-antara-gold/30 to-transparent" />
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-antara-gold/5 blur-2xl" />

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6">
                {[
                  { icon: Shield, label: 'Trust' },
                  { icon: TrendingUp, label: 'Growth' },
                  { icon: Share2, label: 'Network' },
                  { icon: DollarSign, label: 'Capital' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <div className="h-10 w-10 rounded-xl bg-antara-gold/10 text-antara-gold flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-antara-muted uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-antara-white tracking-tight">
                <span className="bg-gradient-to-r from-antara-gold via-amber-300 to-antara-gold bg-clip-text text-transparent">
                  Prepare. Connect. Capitalize. Scale.
                </span>
              </h3>
              <p className="mt-4 text-antara-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                We bridge the gap between businesses, knowledge, capital, and opportunities to create sustainable growth journeys.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-antara-gold text-antara-navy px-6 py-3 text-sm font-bold hover:opacity-90 transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 text-antara-muted px-6 py-3 text-sm font-semibold hover:text-antara-white hover:border-white/20 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Gradient divider - bottom */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)', marginBottom: '0px' }}></div>
    </section>
  )
}
