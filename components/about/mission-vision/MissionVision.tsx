import SectionHeading from "@/components/section-heading/SectionHeading";

export default function MissionVision() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border-l-8 border-jade shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-lime mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-forest text-2xl sm:text-3xl mb-4">
              Our Mission
            </h3>
            <p className="text-charcoal text-base sm:text-lg leading-relaxed">
              To empower Kenyans living abroad by serving as their trusted on-the-ground
              partner, executing personal and business matters with absolute transparency,
              professional integrity, and reliable follow-through, so they can manage
              their affairs in Kenya with complete peace of mind.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border-l-8 border-tangerine shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-lime mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-forest text-2xl sm:text-3xl mb-4">
              Our Vision
            </h3>
            <p className="text-charcoal text-base sm:text-lg leading-relaxed">
              To become the most reliable and trusted brand for diaspora support,
              coordination, and representation across Kenya, known for bridging physical
              distances with professional trust, emotional empathy, and complete accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
