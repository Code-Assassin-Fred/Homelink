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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Portrait Placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-80 sm:w-80 sm:h-96 bg-jade rounded-2xl flex flex-col items-center justify-center text-white">
              <svg className="w-20 h-20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-sm font-medium">Founder Photo Placeholder</p>
            </div>
          </div>

          {/* Bio */}
          <div className="text-white">
            <h3 className="font-heading font-bold text-lime text-2xl sm:text-3xl mb-2">
              Jane Doe
            </h3>
            <p className="text-jade font-heading font-semibold text-base mb-6">
              Founder &amp; Principal Consultant
            </p>
            <div className="space-y-4 text-white text-base leading-relaxed">
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
