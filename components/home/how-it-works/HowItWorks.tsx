const steps = [
  {
    number: "01",
    title: "Start With a Conversation",
    description: "Reach out to our team to discuss your needs and objectives.",
  },
  {
    number: "02",
    title: "Tell Us Your Needs",
    description: "Share details about what you need done in Kenya — property, family, admin, or custom.",
  },
  {
    number: "03",
    title: "Get a Tailored Plan",
    description: "We develop a customised service plan with clear timelines, deliverables, and costs.",
  },
  {
    number: "04",
    title: "We Act on Your Behalf",
    description: "Our team carries out the work professionally, representing your interests in Kenya.",
  },
  {
    number: "05",
    title: "Receive Regular Updates",
    description: "Stay informed with progress reports, photos, videos, and written documentation.",
  },
  {
    number: "06",
    title: "Task Completed",
    description: "We see every task through to completion with full accountability and follow-up.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-jade py-12 sm:py-16 scroll-mt-24">
      {/* Decorative diagonal shard / subtle striations similar to hero */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="rg1" cx="30%" cy="15%" r="45%">
              <stop offset="0" stopColor="#073b2b" stopOpacity="0.42" />
              <stop offset="1" stopColor="#073b2b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="rg2" cx="75%" cy="25%" r="40%">
              <stop offset="0" stopColor="#073b2b" stopOpacity="0.36" />
              <stop offset="1" stopColor="#073b2b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="rg3" cx="20%" cy="60%" r="50%">
              <stop offset="0" stopColor="#073b2b" stopOpacity="0.32" />
              <stop offset="1" stopColor="#073b2b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="rg4" cx="60%" cy="65%" r="48%">
              <stop offset="0" stopColor="#073b2b" stopOpacity="0.28" />
              <stop offset="1" stopColor="#073b2b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="rg5" cx="90%" cy="75%" r="30%">
              <stop offset="0" stopColor="#073b2b" stopOpacity="0.24" />
              <stop offset="1" stopColor="#073b2b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="rg6" cx="45%" cy="40%" r="35%">
              <stop offset="0" stopColor="#073b2b" stopOpacity="0.20" />
              <stop offset="1" stopColor="#073b2b" stopOpacity="0" />
            </radialGradient>
          </defs>

          <polygon points="0,900 480,900 900,0 0,0" fill="#009e6d" />
          <polygon points="0,900 620,900 1100,0 480,0" fill="#008a5e" opacity="0.45" />
          <polygon points="200,900 780,900 1300,0 620,0" fill="#12b36e" opacity="0.3" />
          <polygon points="400,900 960,900 1440,0 780,0" fill="#1ec98a" opacity="0.18" />

          {/* irregular forest-green blobs blended across the background */}
          <g opacity="0.34">
            <ellipse cx="360" cy="120" rx="420" ry="260" fill="url(#rg1)" transform="rotate(-18 360 120)" />
            <ellipse cx="1120" cy="180" rx="360" ry="220" fill="url(#rg2)" transform="rotate(-12 1120 180)" />
            <ellipse cx="260" cy="520" rx="520" ry="300" fill="url(#rg3)" transform="rotate(-22 260 520)" />
            <ellipse cx="840" cy="600" rx="460" ry="280" fill="url(#rg4)" transform="rotate(-8 840 600)" />
            <ellipse cx="1280" cy="720" rx="260" ry="160" fill="url(#rg5)" transform="rotate(-6 1280 720)" />
            <ellipse cx="700" cy="340" rx="320" ry="200" fill="url(#rg6)" transform="rotate(-30 700 340)" />
          </g>

          {/* very subtle diagonal striations kept faint */}
          <line x1="0" y1="900" x2="900" y2="0" stroke="#008a5e" strokeWidth="0.5" opacity="0.06" />
        </svg>
      </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-8 lg:mt-10">
          <p className="mx-auto max-w-2xl text-center text-white text-base sm:text-lg lg:text-xl leading-relaxed">
            A simple, transparent process from first contact to task completion.
          </p>
          <div className="mt-8 sm:mt-10">
            <div className="space-y-8 sm:space-y-12">
              {steps.map((step, index) => {
                const isRight = index % 2 === 1;

                return (
                  <div key={step.number}>
                    <div
                      className={`relative ${
                        isRight ? "lg:flex lg:justify-end" : "lg:flex lg:justify-start"
                      }`}
                    >
                      <div className="w-full lg:w-[60%]">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                          <div className={`inline-flex items-center justify-center rounded-md bg-white text-forest font-heading font-bold text-xs sm:text-sm tracking-wide px-3 sm:px-4 py-2.5 sm:py-3 ${isRight ? "order-2 ml-auto lg:order-1 lg:ml-0" : "order-1"}`}>
                            Step {step.number}
                          </div>
                          <h3 className={`font-heading font-bold text-xl sm:text-2xl text-white ${isRight ? "order-1 lg:order-2" : "order-2"}`}>
                            {step.title}
                          </h3>
                        </div>
                        <div className="bg-forest/95 border border-white/10 rounded-md p-5 sm:p-6 lg:p-8 shadow-[0_32px_80px_rgba(0,0,0,0.15)]">
                          <p className="text-white text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* separators removed: visual blending handled by SVG gradient */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
