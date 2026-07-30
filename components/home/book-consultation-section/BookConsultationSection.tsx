"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import SectionHeading from "@/components/section-heading/SectionHeading";

const serviceOptions = [
  "Property & Investment Management",
  "Diaspora Concierge Services",
  "Family Support & Welfare Checks",
  "Financial & Investment Guidance",
  "Custom Services",
  "Not sure yet",
];

export default function BookConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will reach out to arrange your consultation.");
  };

  return (
    <section id="book-consultation" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Book a Consultation"
          subtitle="Tell us what matters most and we will help you take the next step with confidence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
          <div className="bg-offwhite rounded-[32px] border border-forest/10 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="consult-name" className="block text-sm font-heading font-bold text-forest mb-2">
                    Full Name *
                  </label>
                  <input
                    id="consult-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-offwhite bg-white text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="consult-email" className="block text-sm font-heading font-bold text-forest mb-2">
                    Email Address *
                  </label>
                  <input
                    id="consult-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-offwhite bg-white text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="consult-phone" className="block text-sm font-heading font-bold text-forest mb-2">
                  Phone Number
                </label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-offwhite bg-white text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label htmlFor="consult-service" className="block text-sm font-heading font-bold text-forest mb-2">
                  Service of Interest *
                </label>
                <select
                  id="consult-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-offwhite bg-white text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="consult-message" className="block text-sm font-heading font-bold text-forest mb-2">
                  What would you like help with? *
                </label>
                <textarea
                  id="consult-message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-offwhite bg-white text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200 resize-none"
                  placeholder="Share a brief overview of your needs..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-lime text-forest font-heading font-bold text-base px-8 py-4 rounded-full hover:bg-lime-hover transition-colors duration-200"
              >
                Request Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-forest rounded-[32px] p-8 sm:p-10 text-white">
              <h3 className="font-heading font-bold text-xl text-lime mb-6">What to expect</h3>
              <ul className="space-y-4 text-sm leading-relaxed text-white/90">
                <li className="flex gap-3">
                  <span className="text-lime font-bold">01</span>
                  <span>We review your request and respond within one business day.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime font-bold">02</span>
                  <span>We arrange a consultation that suits your time zone and availability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime font-bold">03</span>
                  <span>We discuss the best approach for your investment, family, or property needs.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[32px] border border-forest/10 shadow-sm p-8 sm:p-10">
              <h3 className="font-heading font-bold text-xl text-forest mb-4">Prefer direct contact?</h3>
              <p className="text-charcoal text-sm leading-relaxed">
                We are happy to speak with you directly by email, phone, or WhatsApp.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a href="mailto:info@homelinkafrica.com" className="block text-jade hover:text-forest transition-colors duration-200">
                  info@homelinkafrica.com
                </a>
                <a href="tel:+254700000000" className="block text-jade hover:text-forest transition-colors duration-200">
                  +254 700 000 000
                </a>
                <a href="https://wa.me/254700000000" className="block text-jade hover:text-forest transition-colors duration-200">
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
