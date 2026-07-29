import { Metadata } from "next";
import ServiceDetailLayout from "@/components/service-detail/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Diaspora Concierge Services",
  description:
    "Dependable local support for government services, document collection, school visits, hospital visits, and personal errands across Kenya.",
};

const items = [
  "Government service assistance",
  "Document collection and submission",
  "School visits and follow-ups",
  "Hospital visits and coordination",
  "Home inspections and checks",
  "Event coordination and logistics",
  "Personal errands and deliveries",
  "Administrative support and filing",
  "Appointment coordination and scheduling",
];

export default function DiasporaConciergePage() {
  return (
    <ServiceDetailLayout
      title="Diaspora Concierge Services"
      subtitle="Dependable local support when you cannot be physically present in Kenya."
      description="When you're thousands of miles away, even simple tasks in Kenya can feel impossible — collecting documents, visiting a school, checking on your home, or dealing with government offices. Home Link Africa becomes your reliable local presence. We handle your administrative, personal, and practical needs with the same care and urgency as if you were here yourself."
      items={items}
      ctaText="Request Concierge Support"
      gradient="linear-gradient(135deg, #002E67 0%, #1B2F2F 50%, #243c3c 100%)"
      icon={
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
    />
  );
}
