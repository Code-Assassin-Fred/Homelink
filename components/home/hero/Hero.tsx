import CTAButton from "@/components/cta-button/CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-forest overflow-hidden flex items-center"
    >
      {/* Decorative SVG diagonal lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Angular decorative lines in jade */}
          <line x1="900" y1="0" x2="600" y2="900" stroke="#02AD7E" strokeWidth="1.5" />
          <line x1="1000" y1="0" x2="700" y2="900" stroke="#02AD7E" strokeWidth="1" />
          <line x1="1100" y1="0" x2="800" y2="900" stroke="#02AD7E" strokeWidth="0.5" />
          <line x1="1200" y1="0" x2="900" y2="900" stroke="#1B2F2F" strokeWidth="40" />
          <line x1="1300" y1="0" x2="1000" y2="900" stroke="#1B2F2F" strokeWidth="40" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-0">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Your Trusted Representative in{" "}
              <span className="text-lime">Kenya</span> While You Live Abroad.
            </h1>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Home Link Africa provides reliable on-the-ground support for
              Kenyans living abroad who want to invest, manage property, support
              family, or handle important matters back home with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/book-consultation" variant="lime" arrow>
                Book a Consultation
              </CTAButton>
              <CTAButton href="/services" variant="outlined" arrow>
                Explore Our Services
              </CTAButton>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jade flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Trusted by Kenyans in <span className="text-lime font-bold">10+ Countries</span>
              </p>
            </div>
          </div>

          {/* Right — Placeholder Image Panel */}
          <div className="hidden lg:block">
            <div
              className="relative w-full aspect-[4/5] bg-jade rounded-2xl overflow-hidden"
              style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <svg className="w-20 h-20 mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 22V12h6v10" />
                </svg>
                <p className="text-sm font-medium text-center">Hero Image Placeholder</p>
              </div>

              {/* Floating stat badge */}
              <div className="absolute bottom-6 right-6 bg-forest px-5 py-3 rounded-xl">
                <p className="text-lime font-heading font-bold text-xl">100%</p>
                <p className="text-white text-xs font-medium">Client Follow-Through</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
