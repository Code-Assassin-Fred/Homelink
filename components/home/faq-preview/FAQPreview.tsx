"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/section-heading/SectionHeading";

const faqs = [
  {
    question: "Which areas of Kenya do you serve?",
    answer:
      "We currently serve all major towns and counties across Kenya, with our strongest presence in Nairobi, Mombasa, Kisumu, Nakuru, and surrounding areas. For remote locations, we coordinate with trusted local contacts.",
  },
  {
    question: "How do you provide updates?",
    answer:
      "We provide regular updates via WhatsApp, email, and video calls depending on your preference. Updates include written reports, photographs, and video documentation of progress.",
  },
  {
    question: "Can you verify land ownership?",
    answer:
      "Yes. We assist with land and property verification by coordinating with relevant government offices, conducting site visits, and providing detailed reports on ownership status and any potential issues.",
  },
  {
    question: "Do you provide legal or financial advice?",
    answer:
      "No. Home Link Africa does not provide regulated financial, legal, or investment advice. We help you understand processes, stay organised, and connect with appropriately licensed professionals where specialist advice is needed.",
  },
  {
    question: "How do consultations work?",
    answer:
      "Consultations are conducted via phone call, WhatsApp, or video call at a time convenient for you. During the consultation, we discuss your needs, explain our approach, and develop a tailored plan for your specific requirements.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-white py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to the most common questions from our diaspora clients."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-offwhite rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-forest hover:text-white group transition-colors duration-200"
              >
                <span className="font-heading font-semibold text-base pr-4 text-forest group-hover:text-white transition-colors duration-200">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-jade group-hover:text-lime transition-all duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-charcoal text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/#faqs"
            className="inline-flex items-center gap-2 text-jade font-heading font-bold text-base hover:text-forest transition-colors duration-200"
          >
            View All FAQs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
