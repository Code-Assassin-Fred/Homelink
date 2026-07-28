import { Metadata } from "next";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import SectionHeading from "@/components/section-heading/SectionHeading";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Practical guides, expert tips, and educational articles for Kenyans abroad managing property, investments, and family matters in Kenya.",
};

const topics = [
  { title: "Buying Land Safely in Kenya", tag: "Property" },
  { title: "How to Avoid Property Fraud", tag: "Property" },
  { title: "Managing Construction While Abroad", tag: "Property" },
  { title: "Caring for Elderly Parents from Overseas", tag: "Family" },
  { title: "Understanding Property Financing in Kenya", tag: "Finance" },
  { title: "Preparing for Retirement in Kenya", tag: "Planning" },
  { title: "Common Mistakes Diaspora Investors Make", tag: "Investment" },
  { title: "Tips for Managing Family Responsibilities from Abroad", tag: "Family" },
  { title: "Questions to Ask Before Hiring a Contractor", tag: "Property" },
  { title: "How Regular Project Monitoring Saves Money", tag: "Investment" },
];

const tagColors: Record<string, string> = {
  Property: "bg-jade text-white",
  Family: "bg-tangerine text-white",
  Finance: "bg-navy text-white",
  Planning: "bg-lime text-forest",
  Investment: "bg-forest text-lime",
};

export default function ResourcesPage() {
  return (
    <>
      <ServiceHero
        title="Resources & Insights"
        subtitle="Practical knowledge and expert guidance for Kenyans managing affairs from abroad."
        badge="Blog"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Coming Soon"
            subtitle="We're preparing practical, honest guides to help you navigate property investment, family support, and financial processes in Kenya. Check back soon."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-offwhite rounded-2xl p-8 hover:shadow-md transition-shadow duration-200"
              >
                <span
                  className={`inline-block text-xs font-heading font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${
                    tagColors[topic.tag] || "bg-jade text-white"
                  }`}
                >
                  {topic.tag}
                </span>
                <h3 className="font-heading font-bold text-lg text-forest leading-snug">
                  {topic.title}
                </h3>
                <p className="text-charcoal text-sm mt-3">Article coming soon...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
