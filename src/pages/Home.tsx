// src/pages/Home.tsx
// Developer: (assigned per team structure)
import PageWrapper from "@/components/layout/PageWrapper";
import HeroAnimated from "@/sections/hero/HeroAnimated";
import ServicesGrid from "@/sections/services/ServicesGrid";
import SectionHeader from "@/components/ui/SectionHeader";

// Reusable Coming Soon Section Component
function ComingSoonSection({ id, heading }: { id: string; heading: string }) {
  return (
    <section
      id={id}
      className="relative bg-antara-navy overflow-hidden"
      aria-label={heading}
    >
      {/* Gradient divider - top */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)', marginBottom: '0px' }}></div>

      <div className="py-20 lg:py-28">
        {/* Decorative background circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Large gradient glow circles */}
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-antara-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          
          {/* SVG decorative elements */}
          <svg className="absolute top-0 right-0 -z-1" width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_home)" opacity="0.5" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_home)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_home)" />
            <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_home)" opacity="0.4" />
            <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_home)" strokeWidth="1" fill="none" />
            <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_home)" strokeWidth="1" fill="none" />
            <defs>
              <linearGradient id="paint0_linear_home" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" />
                <stop offset="1" stopColor="#1A606C" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint1_radial_home" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                <stop offset="0.145833" stopColor="#1A606C" stopOpacity="0" />
                <stop offset="1" stopColor="#1A606C" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient id="paint2_radial_home" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                <stop offset="0.145833" stopColor="#1A606C" stopOpacity="0" />
                <stop offset="1" stopColor="#1A606C" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient id="paint3_linear_home" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" />
                <stop offset="1" stopColor="#1A606C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint4_linear_home" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_home" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bottom left decorative SVG */}
          <svg className="absolute bottom-0 left-0 -z-1" width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_bottom)" strokeWidth="2" />
            <path d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24" stroke="url(#paint1_linear_bottom)" strokeWidth="2" />
            <circle opacity="0.8" cx="214.505" cy="60.5054" r="49.7205" transform="rotate(-13.421 214.505 60.5054)" stroke="url(#paint4_linear_bottom)" strokeWidth="1" fill="none" />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_bottom)" />
            <defs>
              <linearGradient id="paint0_linear_bottom" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" stopOpacity="0" />
                <stop offset="1" stopColor="#1A606C" />
              </linearGradient>
              <linearGradient id="paint1_linear_bottom" x1="156.389" y1="69.2405" x2="156.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" stopOpacity="0" />
                <stop offset="1" stopColor="#1A606C" />
              </linearGradient>
              <linearGradient id="paint4_linear_bottom" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1A606C" />
                <stop offset="1" stopColor="#1A606C" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint5_radial_bottom" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)">
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={heading}
            subtext="Coming Soon"
            align="center"
            className="mb-14"
          />
          
          {/* Blank space */}
          <div className="min-h-[300px]"></div>
        </div>
      </div>

      {/* Gradient divider - bottom */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(130, 40, 200, 0.4), rgba(201, 163, 65, 0.18), transparent)', marginBottom: '0px' }}></div>
    </section>
  );
}

export default function Home() {
  return (
    <PageWrapper noTopPad>
      <HeroAnimated />
      
      {/* Services Section */}
      <ServicesGrid />
      
      {/* Audience Section */}
      <ComingSoonSection id="audience" heading="Audience" />
      
      {/* Ecosystem Model Section */}
      <ComingSoonSection id="ecosystem" heading="Ecosystem Model" />
      
      {/* How Antara is Different Section */}
      <ComingSoonSection id="difference" heading="How Antara is Different" />
      
      {/* Core Values Section */}
      <ComingSoonSection id="values" heading="Core Values" />
      
      {/* Positioning & Roadmap Section */}
      <ComingSoonSection id="roadmap" heading="Positioning & Roadmap" />
    </PageWrapper>
  );
}
