import SectionHeading from "@/components/section-heading/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-offwhite py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Us"
          subtitle="We help diaspora clients navigate property, family, and investment matters in Kenya with transparency and care."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="bg-white rounded-[32px] border border-forest/10 shadow-sm p-8 sm:p-10">
            <h3 className="font-heading font-bold text-2xl text-forest mb-4">
              Professional representation on the ground
            </h3>
            <p className="text-charcoal text-base sm:text-lg leading-relaxed">
              Home Link Africa exists to give Kenyans living abroad a trusted local partner who can manage important responsibilities back home with integrity, consistency, and clear communication.
            </p>
          </div>

          <div className="bg-forest rounded-[32px] p-8 sm:p-10 text-white">
            <h3 className="font-heading font-bold text-xl text-lime mb-6">Why clients choose us</h3>
            <ul className="space-y-4 text-sm leading-relaxed text-white/90">
              <li className="flex gap-3">
                <span className="text-lime font-bold">•</span>
                <span>Reliable and transparent local support for everyday and complex matters.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime font-bold">•</span>
                <span>Professional guidance for property, investment, and family support needs.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime font-bold">•</span>
                <span>Clear communication and attentive service across multiple time zones.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
