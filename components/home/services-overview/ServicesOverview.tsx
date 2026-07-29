import SectionHeading from "@/components/section-heading/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";

const services = [
  {
    title: "Property & Investment Management",
    slug: "property-investment",
    tagline: "Protect your investments with",
    taglineItalic: "eyes on the ground",
    description:
      "Designed for clients investing or managing projects remotely. Home Link Africa serves as your trusted representative throughout the project, verifying progress, coordinating contractors, and delivering timely updates.",
    items: [
      "Property verification",
      "Land and property inspections",
      "Construction monitoring",
      "Contractor coordination",
      "Site visits",
      "Agricultural investment oversight",
      "Project accountability",
      "Progress reporting",
      "Photo and video documentation",
    ],
    stat: "100%",
    statLabel: "visual proof on every site visit",
    cta: "Request Property Support",
    gradient: "linear-gradient(135deg, #ea580c 0%, #d97706 60%, #7c2d12 100%)",
    subBrand: "Property",
    themeColor: "#c2410c",
    buttonTextColor: "#ffffff",
    testimonial: {
      quote:
        "Thanks to Home Link, I successfully monitored my construction project in Nairobi from London. The photo updates were invaluable.",
      name: "Sarah M.",
      role: "Property Owner, London",
    },
  },
  {
    title: "Diaspora Concierge Services",
    slug: "diaspora-concierge",
    tagline: "Your reliable local presence,",
    taglineItalic: "thousands of miles away",
    description:
      "Helping clients handle personal, administrative, and practical matters in Kenya when they cannot be physically present. Home Link Africa provides dependable local support for the tasks that matter most.",
    items: [
      "Government service assistance",
      "Document collection and submission",
      "School visits",
      "Hospital visits",
      "Home inspections",
      "Event coordination",
      "Personal errands",
      "Administrative support",
      "Appointment coordination",
    ],
    stat: "Same-day",
    statLabel: "response on urgent requests",
    cta: "Request Concierge Support",
    gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #14532d 100%)",
    subBrand: "Concierge",
    themeColor: "#15803d",
    buttonTextColor: "#ffffff",
    testimonial: {
      quote:
        "They collected my transcripts from Kaimosi and sent them to Canada within 3 days. Extremely professional and reliable!",
      name: "David K.",
      role: "Student, Toronto",
    },
  },
  {
    title: "Family Support & Welfare Checks",
    slug: "family-support",
    tagline: "Stay connected to the people",
    taglineItalic: "who matter most",
    description:
      "Focused on helping clients care for loved ones from abroad, Home Link Africa provides regular welfare visits and detailed reports so families stay informed and reassured.",
    items: [
      "Elderly welfare visits",
      "Family check-ins",
      "School follow-ups",
      "Hospital visits",
      "Care coordination",
      "Communication support",
      "Mediation assistance",
      "Welfare reporting",
    ],
    stat: "Detailed reports",
    statLabel: "with photos after every visit",
    cta: "Book a Welfare Check",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 60%, #075985 100%)",
    subBrand: "Family Care",
    themeColor: "#0284c7",
    buttonTextColor: "#ffffff",
    testimonial: {
      quote:
        "Knowing my elderly parents are visited regularly and their medication checked gives me peace of mind. Exceptional care.",
      name: "Grace O.",
      role: "Healthcare Professional, Dallas",
    },
  },
  {
    title: "Financial & Investment Guidance Support",
    slug: "financial-guidance",
    tagline: "Navigate Kenya's financial landscape",
    taglineItalic: "with confidence",
    description:
      "Designed to help clients understand financial processes and remain organised, with guidance, document tracking, and referrals to licensed experts when specialised advice is required.",
    items: [
      "Explaining banking processes",
      "Property financing guidance",
      "Documentation coordination",
      "Budget tracking",
      "Monitoring contractor payments",
      "Organising investment documentation",
      "Referrals to licensed professionals",
    ],
    stat: "Licensed experts",
    statLabel: "in our referral network",
    cta: "Speak With Our Team",
    gradient: "linear-gradient(135deg, #6b21a8 0%, #581c87 60%, #3b0764 100%)",
    subBrand: "Financial",
    themeColor: "#581c87",
    buttonTextColor: "#ffffff",
    testimonial: {
      quote:
        "Navigating land registry and title verification was stress-free. Home Link connected me to certified surveyors who verified everything.",
      name: "Joseph N.",
      role: "Investor, Seattle",
    },
  },
  {
    title: "Custom Services",
    slug: "custom-services",
    tagline: "No request is too unique,",
    taglineItalic: "we'll find a way",
    description:
      "One of the business's strongest differentiators. Every request is assessed individually and handled professionally where feasible.",
    items: [
      "Representing clients at meetings",
      "Property or business inspections",
      "Coordinating deliveries",
      "Following up on documentation",
      "Supervising one-off projects",
      "Collecting or delivering important documents",
      "Attending family meetings",
      "Coordinating emergency support",
      "School or institution visits",
      "Farm or business oversight",
      "Any agreed representation or support",
    ],
    stat: "Fully flexible",
    statLabel: "scope tailored to your needs",
    cta: "Request a Custom Service",
    gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #115e59 100%)",
    subBrand: "Custom",
    themeColor: "#0f172a",
    buttonTextColor: "#ffffff",
    testimonial: {
      quote:
        "I needed representation at a family meeting to resolve a land boundary dispute. Home Link stepped in and handled it with absolute neutrality.",
      name: "Amani W.",
      role: "Business Owner, Dubai",
    },
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-offwhite py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Comprehensive support tailored to the needs of Kenyans living abroad. From property management to family welfare — we've got you covered."
        />

        <div className="space-y-12 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              slug={service.slug}
              tagline={service.tagline}
              taglineItalic={service.taglineItalic}
              description={service.description}
              items={service.items}
              stat={service.stat}
              statLabel={service.statLabel}
              cta={service.cta}
              detailLink={`/services/${service.slug}`}
              gradient={service.gradient}
              subBrand={service.subBrand}
              themeColor={service.themeColor}
              buttonTextColor={service.buttonTextColor}
              testimonial={service.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

