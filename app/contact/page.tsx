"use client";

import { useState } from "react";
import ServiceHero from "@/components/services/service-hero/ServiceHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <>
      <ServiceHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and let's talk about how we can help."
        badge="Get in Touch"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-3xl text-forest mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-heading font-bold text-forest mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
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
                    <label htmlFor="contact-email" className="block text-sm font-heading font-bold text-forest mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-heading font-bold text-forest mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200"
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-heading font-bold text-forest mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-offwhite bg-offwhite text-charcoal font-body text-base focus:outline-none focus:border-jade transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-lime text-forest font-heading font-bold text-base px-8 py-4 rounded-full hover:bg-lime-hover transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-forest rounded-3xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl text-lime mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jade rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-lime">Email</p>
                      <a href="mailto:info@homelinkafrica.com" className="text-white text-sm hover:text-lime transition-colors duration-200">
                        info@homelinkafrica.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jade rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-lime">Phone</p>
                      <a href="tel:+254700000000" className="text-white text-sm hover:text-lime transition-colors duration-200">
                        +254 700 000 000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jade rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-lime">WhatsApp</p>
                      <a href="https://wa.me/254700000000" className="text-white text-sm hover:text-lime transition-colors duration-200">
                        Chat with us
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-jade rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-lime">Location</p>
                      <p className="text-white text-sm">Nairobi, Kenya</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-offwhite rounded-3xl p-8 border-2 border-jade">
                <h3 className="font-heading font-bold text-lg text-forest mb-4">
                  Business Hours
                </h3>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li className="flex justify-between">
                    <span className="font-semibold">Monday – Friday</span>
                    <span>8:00 AM – 6:00 PM (EAT)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span>9:00 AM – 2:00 PM (EAT)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <p className="text-xs text-charcoal mt-4">
                  We accommodate diaspora clients across all timezones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
