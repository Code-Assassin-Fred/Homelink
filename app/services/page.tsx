import { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import FinalCTA from "@/components/home/final-cta/FinalCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Home Link Africa's reliable on-the-ground support services in Kenya, including property management, concierge support, family welfare, and custom coordination.",
};

const servicesList = [
  {
    title: "Property & Investment Management",
    slug: "property-investment",
    description:
      "Act as your eyes, ears, and representative for physical properties, land checks, construction monitoring, and contractor coordination.",
    features: [
      "Property & land verification",
      "Regular site inspections",
      "Construction & contractor monitoring",
      "Photo and video progress reports",
    ],
    cta: "Request Property Support",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Diaspora Concierge Services",
    slug: "diaspora-concierge",
    description:
      "Handle personal errands, official government procedures, document submission, and other physical visits on your behalf.",
    features: [
      "Government service assistance",
      "Official document collection",
      "School, hospital & home visits",
      "Errands & appointment coordination",
    ],
    cta: "Request Concierge Support",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Family Support & Welfare Checks",
    slug: "family-support",
    description:
      "Ensure your parents, siblings, or children are visited, supported, and cared for, providing reassurance across miles.",
    features: [
      "Elderly welfare checks",
      "School & hospital follow-ups",
      "Care coordination & visits",
      "Detailed health & wellness reports",
    ],
    cta: "Book a Welfare Check",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Financial & Investment Guidance",
    slug: "financial-guidance",
    description:
      "Understand financial processes, organize paperwork, coordinate documentation, track contractor milestone payouts.",
    features: [
      "Process explanations & layouts",
      "Document organization & audit",
      "Milestone payment verification",
      "Referrals to certified practitioners",
    ],
    cta: "Speak With Our Team",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Services",
    slug: "custom-services",
    description:
      "Tailor-made assistance for unique requests that do not fit into predefined categories. Fully confidential.",
    features: [
      "Representing you at meetings",
      "One-off project supervisions",
      "Emergency local logistics",
      "Any agreed custom errand",
    ],
    cta: "Request a Custom Service",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        title="Our Services"
        subtitle="Bridging the gap between your physical absence and on-the-ground needs in Kenya."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesList.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center p-8 sm:p-12 bg-offwhite rounded-3xl border-l-8 ${
                  index % 2 === 0 ? "border-jade" : "border-tangerine"
                }`}
              >
                {/* Text Section */}
                <div className="flex-1">
                  <div className="w-14 h-14 bg-forest text-lime rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-forest mb-4">
                    {service.title}
                  </h2>
                  <p className="text-charcoal text-base sm:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-jade shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-charcoal font-semibold text-sm sm:text-base">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="bg-forest text-white font-heading font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-forest-light transition-colors duration-200"
                    >
                      Read More
                    </Link>
                    <Link
                      href="/book-consultation"
                      className="bg-lime text-forest font-heading font-bold text-sm sm:text-base px-6 py-3 rounded-full hover:bg-lime-hover transition-colors duration-200"
                    >
                      {service.cta}
                    </Link>
                  </div>
                </div>

                {/* Right Placeholder panel */}
                <div className="w-full lg:w-72 aspect-square bg-forest rounded-2xl flex flex-col items-center justify-center text-white shrink-0">
                  <span className="text-lime font-heading font-bold text-sm uppercase tracking-wide">
                    {service.title.split(" ")[0]}
                  </span>
                  <span className="text-white text-xs mt-2">Placeholder Icon/Panel</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
