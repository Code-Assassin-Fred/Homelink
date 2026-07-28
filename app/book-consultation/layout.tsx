import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a personalised consultation with Home Link Africa. Tell us about your needs and we'll develop a tailored support plan.",
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
