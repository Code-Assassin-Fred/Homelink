"use client";

import { useState } from "react";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import CTAButton from "@/components/cta-button/CTAButton";

const allFaqs = [
  {
    category: "General",
    items: [
      {
        question: "Which areas of Kenya do you serve?",
        answer:
          "We currently serve all major towns and counties across Kenya, with our strongest presence in Nairobi, Mombasa, Kisumu, Nakuru, and surrounding areas. For remote locations, we coordinate with trusted local contacts to ensure reliable coverage.",
      },
      {
        question: "How do consultations work?",
        answer:
          "Consultations are conducted via phone call, WhatsApp, or video call at a time convenient for you. During the consultation, we discuss your needs, explain our approach, and develop a tailored plan for your specific requirements. Initial consultations typically last 30–45 minutes.",
      },
      {
        question: "What happens after I contact you?",
        answer:
          "After you submit a consultation request, our team reviews your details within 24 hours. We then reach out to schedule a call at a time that suits your timezone. Following the call, we send you a tailored service plan with clear timelines and transparent pricing.",
      },
      {
        question: "Do you offer one-time services?",
        answer:
          "Yes. We offer both ongoing and one-time services. Whether you need a single property inspection, a one-off document collection, or a single welfare check — we are happy to help with individual tasks as well as longer engagements.",
      },
    ],
  },
  {
    category: "Property & Investment",
    items: [
      {
        question: "Can you verify land ownership?",
        answer:
          "Yes. We assist with land and property verification by coordinating with relevant government offices, conducting site visits, and providing detailed reports on ownership status and any potential issues. We recommend always verifying before any purchase.",
      },
      {
        question: "How often do you visit project sites?",
        answer:
          "Visit frequency depends on the service plan. For active construction projects, we typically visit weekly or bi-weekly. For monitoring investments, visits may be monthly. We agree on the schedule upfront and adjust as needed.",
      },
      {
        question: "Can you monitor construction?",
        answer:
          "Absolutely. Construction monitoring is one of our core services. We visit sites, verify contractor progress against milestones, document work with photos and videos, and report any issues or discrepancies immediately.",
      },
    ],
  },
  {
    category: "Family & Welfare",
    items: [
      {
        question: "Can you support my elderly parents?",
        answer:
          "Yes. Family welfare is a central part of our services. We conduct regular check-ins, coordinate medical visits, ensure care is being provided as expected, and send you detailed reports with photos so you know exactly how your loved ones are doing.",
      },
      {
        question: "How do you provide updates?",
        answer:
          "We provide regular updates via WhatsApp, email, and video calls depending on your preference. Updates include written reports, photographs, and video documentation of progress. The frequency is agreed upon during your consultation.",
      },
    ],
  },
  {
    category: "Financial & Legal",
    items: [
      {
        question: "Do you provide legal advice?",
        answer:
          "No. Home Link Africa does not provide regulated legal advice. However, we help you understand legal processes, organise relevant documentation, and connect you with appropriately licensed legal professionals when specialist advice is required.",
      },
      {
        question: "Do you provide investment advice?",
        answer:
          "No. We do not provide regulated financial or investment advice. We help clients understand banking processes, stay organised, track expenses, and connect with licensed financial, legal, and tax professionals where specialised advice is needed.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <>
      <ServiceHero
        title="Frequently Asked Questions"
        subtitle="Answers to the most common questions from our diaspora clients."
        badge="FAQs"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {allFaqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-forest mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-lime rounded-full" />
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((faq, faqIndex) => {
                  const key = `${section.category}-${faqIndex}`;
                  return (
                    <div
                      key={key}
                      className="bg-offwhite rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-forest hover:text-white group transition-colors duration-200"
                      >
                        <span className="font-heading font-semibold text-base pr-4 text-forest group-hover:text-white transition-colors duration-200">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-5 h-5 shrink-0 text-jade group-hover:text-lime transition-all duration-200 ${
                            openIndex === key ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openIndex === key && (
                        <div className="px-6 pb-6">
                          <p className="text-charcoal text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="text-center mt-16">
            <p className="text-charcoal text-base mb-6">
              Still have questions? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="lime" arrow>
                Contact Us
              </CTAButton>
              <CTAButton href="/book-consultation" variant="tangerine" arrow>
                Book a Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
