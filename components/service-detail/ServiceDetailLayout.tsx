import Link from "next/link";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import FinalCTA from "@/components/home/final-cta/FinalCTA";

interface ServiceDetailLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  ctaText: string;
  disclaimer?: string;
  icon: React.ReactNode;
}

export default function ServiceDetailLayout({
  title,
  subtitle,
  description,
  items,
  ctaText,
  disclaimer,
  icon,
}: ServiceDetailLayoutProps) {
  return (
    <>
      <ServiceHero title={title} subtitle={subtitle} badge="Service Details" />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-forest text-lime rounded-2xl flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-forest">
                  What is included in this service?
                </h2>
              </div>

              <p className="text-charcoal text-base sm:text-lg leading-relaxed">
                {description}
              </p>

              <div className="bg-offwhite rounded-3xl p-8 sm:p-12 border-2 border-jade">
                <h3 className="font-heading font-bold text-2xl text-forest mb-6">
                  Services Included:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-jade flex items-center justify-center mt-0.5 shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal text-sm sm:text-base font-semibold leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {disclaimer && (
                <div className="bg-forest text-white p-8 rounded-3xl border-2 border-tangerine">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-tangerine shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h4 className="font-heading font-bold text-lg text-lime">Important Disclaimer</h4>
                  </div>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {disclaimer}
                  </p>
                </div>
              )}

              <div className="pt-6">
                <Link
                  href="/book-consultation"
                  className="bg-lime text-forest font-heading font-bold text-base sm:text-lg px-8 py-4 rounded-full hover:bg-lime-hover transition-colors duration-200 inline-flex items-center gap-2"
                >
                  {ctaText}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="bg-offwhite rounded-3xl p-8 border-2 border-forest-light space-y-8">
              <h3 className="font-heading font-bold text-xl text-forest border-b-2 border-jade pb-4">
                Our Guarantee
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 bg-jade rounded-full flex items-center justify-center shrink-0 text-white mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-forest">Regular Updates</h4>
                    <p className="text-xs text-charcoal leading-relaxed mt-1">We send photo and video proof of all on-the-ground work.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 bg-jade rounded-full flex items-center justify-center shrink-0 text-white mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-forest">Honest Communication</h4>
                    <p className="text-xs text-charcoal leading-relaxed mt-1">Complete transparency on costs, progress, and issues.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 bg-jade rounded-full flex items-center justify-center shrink-0 text-white mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-forest">Professional Standards</h4>
                    <p className="text-xs text-charcoal leading-relaxed mt-1">Structured reports, background tracking, and full follow-through.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-jade">
                <h4 className="font-heading font-bold text-base text-forest mb-3">Need a customised plan?</h4>
                <p className="text-xs text-charcoal leading-relaxed mb-4">We assess every request individually to match your specific requirements in Kenya.</p>
                <Link
                  href="/services/custom-services"
                  className="text-jade font-heading font-bold text-sm hover:text-forest transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Explore Custom Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
