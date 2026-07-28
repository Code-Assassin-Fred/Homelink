import { Metadata } from "next";
import ServiceDetailLayout from "@/components/service-detail/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Property & Investment Management",
  description:
    "Protect and oversee your properties and investments remotely. We coordinate construction projects, verify land titles, conduct site inspections, and coordinate contractors.",
};

const items = [
  "Property verification & search",
  "Land and property inspections",
  "Construction monitoring & milestone checks",
  "Contractor coordination & check-ins",
  "Site visits with visual proof",
  "Agricultural investment oversight",
  "Project accountability tracking",
  "Progress reporting & audits",
  "Regular photo & video documentation",
];

export default function PropertyInvestmentPage() {
  return (
    <ServiceDetailLayout
      title="Property & Investment Management"
      subtitle="Your trusted representative on the ground for property checks, land inspections, and project oversight in Kenya."
      description="Investing remotely in land, agriculture, or building projects in Kenya can be highly stressful and filled with uncertainty. Home Link Africa acts as your local, independent project representative. We inspect projects, verify contractors' progress against milestones, and coordinate on-site work to ensure your resources are spent exactly as planned, preventing costly errors or fraud."
      items={items}
      ctaText="Request Property Support"
      icon={
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
        </svg>
      }
    />
  );
}
