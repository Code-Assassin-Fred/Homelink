import { Metadata } from "next";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import CTAButton from "@/components/cta-button/CTAButton";
import FinalCTA from "@/components/home/final-cta/FinalCTA";

export const metadata: Metadata = {
  title: "Why Choose Home Link Africa",
  description:
    "Discover what makes Home Link Africa the most dependable diaspora support partner — from banking expertise and counselling psychology to transparent photo and video reporting.",
};

const differentiators = [
  {
    title: "Over 10 Years of Banking Experience",
    description:
      "Our deep background in banking means we understand financial processes, documentation, compliance, and the importance of protecting your money at every stage.",
    color: "border-jade",
  },
  {
    title: "Counselling Psychology Background",
    description:
      "Family welfare checks and sensitive client situations require emotional intelligence, empathy, and professional conflict resolution — skills at the heart of our approach.",
    color: "border-tangerine",
  },
  {
    title: "Strong Professional Ethics",
    description:
      "We operate with the same ethical standards expected in corporate banking — integrity, confidentiality, and strict adherence to professional boundaries.",
    color: "border-lime",
  },
  {
    title: "Transparent Communication",
    description:
      "We tell you the truth, even when it's difficult. Every update, report, and conversation is honest, clear, and well-documented.",
    color: "border-jade",
  },
  {
    title: "Reliable Local Representation",
    description:
      "We act as your trusted eyes, ears, and representative on the ground in Kenya — attending meetings, inspecting sites, and following up on your behalf.",
    color: "border-tangerine",
  },
  {
    title: "Regular Photo & Video Reporting",
    description:
      "See what we see. We provide regular visual documentation of every project, welfare visit, and site inspection through photos and video.",
    color: "border-lime",
  },
  {
    title: "Full Accountability",
    description:
      "We take ownership of every task. If something goes wrong, we address it immediately and honestly. We don't make excuses.",
    color: "border-jade",
  },
  {
    title: "Confidential Handling of Information",
    description:
      "Your personal, financial, and family information is treated with the strictest confidentiality. We protect your privacy at all times.",
    color: "border-tangerine",
  },
  {
    title: "Personalised Service",
    description:
      "No two clients have the same needs. We tailor every engagement to your specific requirements, situation, and preferences.",
    color: "border-lime",
  },
  {
    title: "Commitment to Follow-Through",
    description:
      "We don't disappear after the task is assigned. We see every engagement through to completion and follow up to make sure everything is in order.",
    color: "border-jade",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <ServiceHero
        title="Why Choose Home Link Africa"
        subtitle="The dependable diaspora support partner you can trust with confidence."
        badge="Trust & Credibility"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className={`bg-offwhite rounded-2xl p-8 border-l-8 ${item.color} hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className="font-heading font-bold text-xl text-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <CTAButton href="/book-consultation" variant="lime" arrow>
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
