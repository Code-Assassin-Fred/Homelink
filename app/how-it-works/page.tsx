import { Metadata } from "next";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import CTAButton from "@/components/cta-button/CTAButton";
import FinalCTA from "@/components/home/final-cta/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand the clear, step-by-step process Home Link Africa follows — from initial consultation to task completion with full accountability.",
};

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "Schedule a call at a time that works for you. Consultations are available via phone, WhatsApp, or video call — wherever you are in the world.",
    detail: "We'll arrange a time that works for your timezone.",
  },
  {
    number: "02",
    title: "Discuss Your Needs",
    description:
      "Tell us exactly what you need help with. Whether it's property oversight, family welfare, document handling, or something unique — we listen carefully.",
    detail: "Every request is assessed individually.",
  },
  {
    number: "03",
    title: "Receive a Customised Plan",
    description:
      "Based on your requirements, we develop a tailored service plan with clear timelines, deliverables, and transparent pricing. No hidden costs.",
    detail: "We agree on the scope before any work begins.",
  },
  {
    number: "04",
    title: "We Act on Your Behalf",
    description:
      "Our team carries out the work professionally, coordinating with relevant parties, visiting sites, and representing your interests on the ground.",
    detail: "You stay in control while we handle the execution.",
  },
  {
    number: "05",
    title: "Receive Regular Updates",
    description:
      "Throughout every engagement, we send you progress reports, photographs, video documentation, and written summaries so you see exactly what's happening.",
    detail: "Updates are sent via your preferred channel — WhatsApp, email, or video call.",
  },
  {
    number: "06",
    title: "Task Completed",
    description:
      "We see every task through to completion. Once finished, you receive a final summary report and we follow up to ensure everything is in order.",
    detail: "We don't disappear after the task is done.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <ServiceHero
        title="How It Works"
        subtitle="A clear, transparent process from first contact to task completion."
        badge="Our Process"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-jade hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-8">
                  {/* Number Circle */}
                  <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-full bg-lime items-center justify-center z-10">
                    <span className="text-forest font-heading font-bold text-xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 bg-offwhite rounded-2xl p-8 border-l-4 ${index % 2 === 0 ? "border-jade" : "border-tangerine"}`}>
                    <div className="sm:hidden w-12 h-12 rounded-full bg-lime flex items-center justify-center mb-4">
                      <span className="text-forest font-heading font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-forest mb-3">
                      {step.title}
                    </h3>
                    <p className="text-charcoal text-base leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-jade font-heading font-semibold text-sm">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="bg-forest py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
            Communication Throughout Every Engagement
          </h2>
          <div className="w-16 h-1 bg-lime rounded-full mx-auto mb-8" />
          <p className="text-white text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We understand that being far from home makes regular communication essential.
            Throughout every engagement, we maintain open, honest, and timely communication
            via your preferred channel — WhatsApp, email, phone calls, or video calls.
            You&apos;ll never have to wonder what&apos;s happening on the ground.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-forest-light rounded-2xl p-6 border-2 border-jade">
              <div className="w-12 h-12 bg-jade rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-white text-sm mb-2">Photos & Videos</h4>
              <p className="text-white text-xs leading-relaxed">Visual proof of every site visit and milestone.</p>
            </div>
            <div className="bg-forest-light rounded-2xl p-6 border-2 border-lime">
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-white text-sm mb-2">Written Reports</h4>
              <p className="text-white text-xs leading-relaxed">Detailed summaries and structured documentation.</p>
            </div>
            <div className="bg-forest-light rounded-2xl p-6 border-2 border-tangerine">
              <div className="w-12 h-12 bg-tangerine rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-white text-sm mb-2">Video Calls</h4>
              <p className="text-white text-xs leading-relaxed">Live updates and face-to-face discussions.</p>
            </div>
          </div>
          <div className="mt-12">
            <CTAButton href="/book-consultation" variant="lime" arrow>
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
