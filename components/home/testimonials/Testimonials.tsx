import SectionHeading from "@/components/section-heading/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-offwhite py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from Kenyans abroad who trust Home Link Africa to represent their interests back home."
        />

        {/* Coming Soon Placeholder */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 sm:p-16">
            {/* Large Quote Icon */}
            <svg className="w-16 h-16 text-lime mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
            </svg>
            <h3 className="font-heading font-bold text-forest text-2xl mb-4">
              Testimonials Coming Soon
            </h3>
            <p className="text-charcoal text-base leading-relaxed mb-8">
              We&apos;re building meaningful relationships with clients across
              the diaspora. Their stories of trust, transparency, and
              successful outcomes will be shared here soon.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-lime" />
              <div className="w-3 h-3 rounded-full bg-jade" />
              <div className="w-3 h-3 rounded-full bg-tangerine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
