import SectionHeading from "@/components/section-heading/SectionHeading";

export default function MeetFounder() {
  return (
    <section id="meet-founder" className="bg-forest py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet the Founder"
          subtitle="The person behind Home Link Africa's commitment to dependable diaspora support."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Portrait */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/founder.jpeg"
                alt="Founder of Home Link Africa"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-white order-2 lg:order-none">
            <h3 className="font-heading font-bold text-lime text-xl sm:text-2xl lg:text-3xl mb-2">
              Margret
            </h3>
            <p className="text-jade font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Founder &amp; Principal Consultant
            </p>
            {/* Credential Callout Strip */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                10+ Years Banking
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Counselling Psychology
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base leading-relaxed">
              <p>
                With over ten years of experience in the banking industry and a
                background in counselling psychology, our founder combines
                professional rigour with a deeply personal understanding of the
                challenges Kenyans abroad face when managing affairs back home.
              </p>
              <p>
                Having witnessed the frustrations and risks that come with
                relying on informal arrangements, she founded Home Link Africa to
                offer a trustworthy, professional alternative — one built on
                transparency, accountability, and genuine care.
              </p>
              <p>
                Her vision is simple: every Kenyan living abroad deserves a
                reliable representative they can trust with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
