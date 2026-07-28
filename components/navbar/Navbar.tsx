"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Property & Investment Management", href: "/services/property-investment" },
  { name: "Diaspora Concierge Services", href: "/services/diaspora-concierge" },
  { name: "Family Support & Welfare Checks", href: "/services/family-support" },
  { name: "Financial & Investment Guidance", href: "/services/financial-guidance" },
  { name: "Custom Services", href: "/services/custom-services" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-lime font-heading text-2xl font-bold tracking-tight">
              HOME LINK
            </span>
            <span className="text-white font-heading text-2xl font-bold tracking-tight">
              AFRICA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="text-white font-body text-sm font-medium px-4 py-2 rounded-lg hover:bg-forest-light transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-forest border-2 border-jade rounded-xl shadow-2xl py-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-5 py-3 text-white text-sm hover:bg-forest-light hover:text-lime transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white font-body text-sm font-medium px-4 py-2 rounded-lg hover:bg-forest-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/book-consultation"
            className="hidden lg:inline-flex items-center gap-2 bg-lime text-forest font-heading font-bold text-sm px-6 py-3 rounded-full hover:bg-lime-hover transition-colors duration-200"
          >
            Book a Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest border-t-2 border-jade">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between text-white font-body text-base font-medium px-4 py-3 rounded-lg hover:bg-forest-light transition-colors duration-200"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-lime text-sm font-medium hover:bg-forest-light rounded-lg transition-colors duration-200"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-white text-sm hover:bg-forest-light hover:text-lime rounded-lg transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white font-body text-base font-medium px-4 py-3 rounded-lg hover:bg-forest-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/book-consultation"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-lime text-forest font-heading font-bold text-base px-6 py-4 rounded-full hover:bg-lime-hover transition-colors duration-200 w-full"
              >
                Book a Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
