import { Metadata } from "next";
import ServiceDetailLayout from "@/components/service-detail/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Family Support & Welfare Checks",
  description:
    "Regular welfare visits, family check-ins, school follow-ups, hospital visits, and care coordination for your loved ones in Kenya.",
};

const items = [
  "Elderly welfare visits and reports",
  "Family check-ins and wellness updates",
  "School follow-ups and progress checks",
  "Hospital visits and care coordination",
  "Care coordination with local providers",
  "Communication support between family members",
  "Mediation assistance for family matters",
  "Detailed welfare reporting with photos",
];

export default function FamilySupportPage() {
  return (
    <ServiceDetailLayout
      title="Family Support & Welfare Checks"
      subtitle="Stay connected to the people who matter most, even from thousands of miles away."
      description="Distance makes it difficult to care for aging parents, monitor your children's education, or check on vulnerable family members. Home Link Africa provides regular, structured welfare visits that give you real-time insight into your loved ones' wellbeing. Every visit includes a detailed report with photos and honest feedback, so you always know exactly how your family is doing."
      items={items}
      ctaText="Book a Welfare Check"
      gradient="linear-gradient(135deg, #1B2F2F 0%, #02AD7E 50%, #E0FF03 130%)"
      icon={
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      }
    />
  );
}
