import SectionHeading from "@/components/section-heading/SectionHeading";

export default function OurStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="Bridging the gap between Kenyans abroad and their interests back home."
              centered={false}
            />
            <div className="space-y-6 text-charcoal text-base sm:text-lg leading-relaxed">
              <p>
                Living abroad comes with immense opportunities, but it also brings a
                unique set of worries. The founders of Home Link Africa experienced
                this firsthand — the anxiety of sending money home for a project,
                only to discover later that the work wasn't done, or that the funds
                were mismanaged. Relying on friends or family often strained relationships
                and yielded inconsistent results.
              </p>
              <p>
                We realised there was a critical need for a professional, independent,
                and highly structured service to represent diaspora interests on the
                ground in Kenya. A service that acts as your eyes, ears, and trusted
                representative, operating with the same diligence and care as if
                you were here yourself.
              </p>
              <p>
                Thus, Home Link Africa was born. We are here to bring transparency,
                professionalism, and total peace of mind to Kenyans in the diaspora.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-forest rounded-3xl flex flex-col items-center justify-center text-white p-8">
              <svg className="w-16 h-16 mb-4 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-lime font-heading font-bold text-xl mb-2 text-center">Built on Real Needs</p>
              <p className="text-white text-sm text-center">Creating reliable local representation that respects your hard-earned investments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
