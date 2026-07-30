import CTAButton from "@/components/cta-button/CTAButton";
import SpinningGlobe from "./SpinningGlobe";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-6rem)] pt-24 lg:pt-0 sm:pt-28 bg-hero-green overflow-hidden flex items-start"
    >
      {/* Diagonal shard / fold pattern — CLOOPEN-style geometric depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base diagonal fold bands emanating bottom-left → top-right */}
          <polygon points="0,900 480,900 900,0 0,0" fill="#009e6d" />
          <polygon points="0,900 620,900 1100,0 480,0" fill="#008a5e" opacity="0.55" />
          <polygon points="200,900 780,900 1300,0 620,0" fill="#12b36e" opacity="0.4" />
          <polygon points="400,900 960,900 1440,0 780,0" fill="#1ec98a" opacity="0.25" />

          {/* Sharp shard edges */}
          <polygon points="0,900 360,900 720,450 0,450" fill="#009e6d" opacity="0.35" />
          <polygon points="720,450 1080,900 1440,900 1440,450" fill="#008a5e" opacity="0.2" />
          <polygon points="900,0 1440,0 1440,500 1100,0" fill="#12b36e" opacity="0.3" />

          {/* Subtle diagonal striations */}
          <line x1="0" y1="900" x2="900" y2="0" stroke="#008a5e" strokeWidth="1" opacity="0.4" />
          <line x1="120" y1="900" x2="1020" y2="0" stroke="#008a5e" strokeWidth="0.75" opacity="0.25" />
          <line x1="240" y1="900" x2="1140" y2="0" stroke="#008a5e" strokeWidth="0.5" opacity="0.15" />
          <line x1="360" y1="900" x2="1260" y2="0" stroke="#1ec98a" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20 pb-10 sm:pt-28 lg:pt-40 lg:pb-16">
          {/* Left Content */}
          <div className="animate-slide-up max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] text-white leading-[1.12] mb-6 uppercase tracking-tight">
              Your Trusted{" "}
              <span className="text-hero-highlight">Representative</span> in{" "}
              <span className="text-hero-highlight">Kenya</span> While You Live
              Abroad.
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl font-medium">
              Home Link Africa provides reliable on-the-ground support for
              Kenyans living abroad who want to invest, manage property, support
              family, or handle important matters back home with confidence.
            </p>
            <div className="flex flex-row flex-nowrap justify-center gap-3 items-center">
              <CTAButton href="/book-consultation" variant="tangerine" className="basis-[calc(50%-0.75rem)] min-w-[150px] max-w-[220px]">
                Book Consultation
              </CTAButton>
              <CTAButton href="/#services" variant="tangerine" className="basis-[calc(50%-0.75rem)] min-w-[150px] max-w-[220px]">
                Explore Our Services
              </CTAButton>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-hero-green-dark flex items-center justify-center ring-2 ring-white/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium">
                Trusted by Kenyans in{" "}
                <span className="text-hero-highlight font-bold">10+ Countries</span>
              </p>
            </div>
          </div>

          {/* Right — Spinning sphere */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <SpinningGlobe />

              {/* Floating stat badge */}
              <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-2xl shadow-lg">
                <p className="text-hero-green font-heading font-extrabold text-xl">100%</p>
                <p className="text-charcoal text-xs font-semibold">Client Follow-Through</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
