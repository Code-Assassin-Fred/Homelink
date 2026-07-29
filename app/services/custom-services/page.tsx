import { Metadata } from "next";
import ServiceDetailLayout from "@/components/service-detail/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Custom Services",
  description:
    "Flexible, tailored support for unique diaspora requests — from representing you at meetings to coordinating emergency logistics in Kenya.",
};

const items = [
  "Representing clients at meetings",
  "Property or business inspections",
  "Coordinating deliveries and pickups",
  "Following up on documentation",
  "Supervising one-off projects",
  "Collecting or delivering important documents",
  "Attending family meetings on your behalf",
  "Coordinating emergency support and logistics",
  "School or institution visits",
  "Farm or business oversight",
  "Any other agreed representation or support service",
];

export default function CustomServicesPage() {
  return (
    <ServiceDetailLayout
      title="Custom Services"
      subtitle="No request is too unique. If it can be done professionally, we'll find a way."
      description="Many diaspora clients have unique requests that don't fit neatly into predefined categories. That's exactly why Custom Services is one of our strongest differentiators. Whether you need someone to represent you at a family meeting, supervise a one-off project, coordinate an emergency delivery, or handle something entirely unique — we assess each request individually and handle it professionally where feasible. Your needs are unique, and our support should be too."
      items={items}
      ctaText="Request a Custom Service"
      gradient="linear-gradient(135deg, #1B2F2F 0%, #002E67 50%, #02AD7E 100%)"
      icon={
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
    />
  );
}
