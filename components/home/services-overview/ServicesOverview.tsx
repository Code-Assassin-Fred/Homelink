import SectionHeading from "@/components/section-heading/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";

const services = [
  {
    title: "Property & Investment Management",
    slug: "property-investment",
    tagline: "Protect your investments with",
    taglineItalic: "eyes on the ground",
    description:
      "Trusted oversight for your property projects, land verification, construction monitoring, and agricultural investments in Kenya.",
    features: [
      "Property & land verification",
      "Regular site inspections",
      "Construction monitoring",
      "Contractor coordination",
    ],
    stat: "100%",
    statLabel: "visual proof on every site visit",
    cta: "Request Property Support",
    gradient:
      "linear-gradient(135deg, #1B2F2F 0%, #243c3c 40%, #02AD7E 100%)",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Diaspora Concierge Services",
    slug: "diaspora-concierge",
    tagline: "Your reliable local presence,",
    taglineItalic: "thousands of miles away",
    description:
      "Dependable local support for administrative tasks, document collection, school and hospital visits, and personal errands.",
    features: [
      "Government service assistance",
      "Document collection",
      "School & hospital visits",
      "Appointment coordination",
    ],
    stat: "Same-day",
    statLabel: "response on urgent requests",
    cta: "Request Concierge Support",
    gradient:
      "linear-gradient(135deg, #002E67 0%, #1B2F2F 50%, #243c3c 100%)",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Family Support & Welfare Checks",
    slug: "family-support",
    tagline: "Stay connected to the people",
    taglineItalic: "who matter most",
    description:
      "Regular welfare visits, family check-ins, and care coordination to keep you connected to your loved ones in Kenya.",
    features: [
      "Elderly welfare visits",
      "School follow-ups",
      "Care coordination",
      "Detailed wellness reports",
    ],
    stat: "Detailed reports",
    statLabel: "with photos after every visit",
    cta: "Book a Welfare Check",
    gradient:
      "linear-gradient(135deg, #1B2F2F 0%, #02AD7E 50%, #E0FF03 130%)",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Financial & Investment Guidance",
    slug: "financial-guidance",
    tagline: "Navigate Kenya's financial landscape",
    taglineItalic: "with confidence",
    description:
      "Support understanding banking processes, organising documentation, tracking budgets, and connecting with licensed professionals.",
    features: [
      "Process explanations",
      "Document organisation",
      "Payment verification",
      "Professional referrals",
    ],
    stat: "Licensed experts",
    statLabel: "in our referral network",
    cta: "Speak With Our Team",
    gradient:
      "linear-gradient(135deg, #243c3c 0%, #1B2F2F 40%, #ff9635 120%)",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Services",
    slug: "custom-services",
    tagline: "No request is too unique,",
    taglineItalic: "we'll find a way",
    description:
      "Flexible, tailored support for unique requests — from representing you at meetings to coordinating emergency support.",
    features: [
      "Meeting representation",
      "Project supervision",
      "Emergency logistics",
      "Any agreed custom errand",
    ],
    stat: "Fully flexible",
    statLabel: "scope tailored to your needs",
    cta: "Request a Custom Service",
    gradient:
      "linear-gradient(135deg, #1B2F2F 0%, #002E67 50%, #02AD7E 100%)",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-offwhite py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive support tailored to the needs of Kenyans living abroad. From property management to family welfare — we've got you covered."
        />

        <div className="space-y-12 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              slug={service.slug}
              description={service.description}
              tagline={service.tagline}
              taglineItalic={service.taglineItalic}
              features={service.features}
              stat={service.stat}
              statLabel={service.statLabel}
              cta={service.cta}
              icon={service.icon}
              gradient={service.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
