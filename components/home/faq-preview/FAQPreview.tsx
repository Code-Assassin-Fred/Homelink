"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which areas of Kenya do you serve?",
    answer:
      "We serve clients across all counties in Kenya, with strong coverage in Nairobi, Mombasa, Kisumu, Nakuru, and other major towns.",
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
        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-charcoal/80 mb-6 sm:mb-8">
          Quick answers to the most common questions from our diaspora clients.
        </p>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-offwhite rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-forest hover:text-white group transition-colors duration-200"
              >
                <span className="font-heading font-semibold text-sm sm:text-base pr-4 text-forest group-hover:text-white transition-colors duration-200">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-jade group-hover:text-lime transition-all duration-200 ${
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
                <div className="px-4 sm:px-6 pt-3 sm:pt-4 pb-4 sm:pb-5">
                  <p className="text-charcoal text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
