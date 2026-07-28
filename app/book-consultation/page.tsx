"use client";

import { useState } from "react";
import ServiceHero from "@/components/services/service-hero/ServiceHero";

const serviceOptions = [
  "Property & Investment Management",
  "Diaspora Concierge Services",
  "Family Support & Welfare Checks",
  "Financial & Investment Guidance Support",
  "Custom Services",
  "Not sure yet",
];

const contactMethods = ["WhatsApp", "Email", "Phone Call", "Video Call"];

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
    contactMethod: "",
    service: "",
    description: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your consultation request has been submitted. We'll be in touch within 24 hours.");
  };

  return (
    <>
      <ServiceHero
        title="Book a Consultation"
        subtitle="Take the first step. Tell us about your needs and we'll arrange a personalised discussion."
        badge="Get Started"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-3xl text-forest mb-2">
                Consultation Request Form
              </h2>
              <p className="text-charcoal text-base mb-8">
                Fill in the details below and we&apos;ll reach out to schedule your consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="consult-country" className="block text-sm font-heading font-bold text-forest mb-2">
                      Country of Residence *
                    </label>
                    <input
                      id="consult-country"
                      name="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                      placeholder="e.g. United Kingdom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="consult-phone" className="block text-sm font-heading font-bold text-forest mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="consult-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                      placeholder="+44 7000 000000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="consult-contact-method" className="block text-sm font-heading font-bold text-forest mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      id="consult-contact-method"
                      name="contactMethod"
                      required
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    >
                      <option value="">Select a method</option>
                      {contactMethods.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
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
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="consult-description" className="block text-sm font-heading font-bold text-forest mb-2">
                    Brief Description of Requirements *
                  </label>
                  <textarea
                    id="consult-description"
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200 resize-none"
                    placeholder="Tell us briefly what you need help with..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="consult-date" className="block text-sm font-heading font-bold text-forest mb-2">
                      Preferred Date
                    </label>
                    <input
                      id="consult-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="consult-time" className="block text-sm font-heading font-bold text-forest mb-2">
                      Preferred Time
                    </label>
                    <input
                      id="consult-time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-lime text-forest font-heading font-bold text-base sm:text-lg px-10 py-4 rounded-full hover:bg-lime-hover transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Submit Consultation Request
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* What to Expect Sidebar */}
            <div className="space-y-8">
              <div className="bg-forest rounded-3xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl text-lime mb-6">
                  What to Expect
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center shrink-0">
                      <span className="text-forest font-heading font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">We Review Your Request</h4>
                      <p className="text-white text-xs leading-relaxed mt-1">
                        Our team reviews your details within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center shrink-0">
                      <span className="text-forest font-heading font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">We Schedule a Call</h4>
                      <p className="text-white text-xs leading-relaxed mt-1">
                        We arrange a consultation at a time that suits your timezone.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center shrink-0">
                      <span className="text-forest font-heading font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">We Discuss Your Needs</h4>
                      <p className="text-white text-xs leading-relaxed mt-1">
                        A detailed conversation about your requirements and objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center shrink-0">
                      <span className="text-forest font-heading font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">You Receive a Tailored Plan</h4>
                      <p className="text-white text-xs leading-relaxed mt-1">
                        A customised service plan with timelines, deliverables, and transparent pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-offwhite rounded-3xl p-8 border-2 border-jade">
                <h3 className="font-heading font-bold text-lg text-forest mb-4">
                  Prefer to Contact Us Directly?
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:info@homelinkafrica.com" className="text-jade font-heading font-bold text-sm hover:text-forest transition-colors duration-200">
                      📧 info@homelinkafrica.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+254700000000" className="text-jade font-heading font-bold text-sm hover:text-forest transition-colors duration-200">
                      📞 +254 700 000 000
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/254700000000" className="text-jade font-heading font-bold text-sm hover:text-forest transition-colors duration-200">
                      💬 WhatsApp Chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
