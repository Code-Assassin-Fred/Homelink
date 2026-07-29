import { Metadata } from "next";
import ServiceDetailLayout from "@/components/service-detail/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Financial & Investment Guidance Support",
  description:
    "Understand banking processes, organise investment documentation, track contractor payments, and connect with licensed professionals in Kenya.",
};

const items = [
  "Explaining banking processes and requirements",
  "Property financing guidance and information",
  "Documentation coordination and organisation",
  "Budget tracking and expense summaries",
  "Monitoring contractor payments against milestones",
  "Organising investment documentation",
  "Referrals to licensed financial professionals",
  "Referrals to licensed legal professionals",
  "Referrals to licensed tax professionals",
];

export default function FinancialGuidancePage() {
  return (
    <ServiceDetailLayout
      title="Financial & Investment Guidance Support"
      subtitle="Navigate Kenya's financial landscape with clarity, confidence, and the right professional connections."
      description="Managing finances and investments across borders can be confusing. Home Link Africa helps you understand the processes involved — from banking procedures to property financing to contractor payment structures. We organise your documentation, track expenses against milestones, and ensure you're asking the right questions. When specialist advice is needed, we connect you with appropriately licensed professionals."
      items={items}
      ctaText="Speak With Our Team"
      gradient="linear-gradient(135deg, #243c3c 0%, #1B2F2F 40%, #ff9635 120%)"
      disclaimer="Home Link Africa does not provide regulated financial, legal, or investment advice. We help clients understand processes, stay organised, ask informed questions, and connect with licensed financial, legal, and tax professionals where specialised advice is required."
      icon={
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
    />
  );
}
