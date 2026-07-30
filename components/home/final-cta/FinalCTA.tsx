import CTAButton from "@/components/cta-button/CTAButton";

export default function FinalCTA() {
  return (
    <section className="relative bg-forest py-20 sm:py-28 overflow-hidden">
      {/* Decorative SVG Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="xMidYMid slice">
          <circle cx="100" cy="400" r="200" fill="#02AD7E" fillOpacity="0.15" />
          <circle cx="1350" cy="80" r="150" fill="#E0FF03" fillOpacity="0.08" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
          Ready to Get <span className="text-lime">Started?</span>
        </h2>
        <p className="text-white text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Take the first step towards reliable representation in Kenya. Book a
          consultation today and let us show you how Home Link Africa can support
          your needs with professionalism and care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/contact" variant="lime" arrow>
            Contact Us
          </CTAButton>
          <CTAButton href="/#contact" variant="tangerine" arrow>
            Contact Us
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
