import ServiceCard from "@/components/services/ServiceCard";

const services = [
  {
    title: "Property & Investment Management",
    slug: "property-investment",
    tagline: "Protect your investments with",
    taglineItalic: "eyes on the ground",
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
    title: "Financial & Investment Guidance",
    slug: "financial-guidance",
    tagline: "Navigate Kenya's financial landscape",
    taglineItalic: "with confidence",
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
    <section id="services" className="bg-offwhite py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              slug={service.slug}
              tagline={service.tagline}
              taglineItalic={service.taglineItalic}
              stat={service.stat}
              statLabel={service.statLabel}
              cta={service.cta}
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

