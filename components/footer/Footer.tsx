"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const companyLinks = [
  { name: "About Us", href: "/#about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQs", href: "/#faqs" },
  { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { name: "Property & Investment", href: "/services/property-investment" },
  { name: "Diaspora Concierge", href: "/services/diaspora-concierge" },
  { name: "Family Support", href: "/services/family-support" },
  { name: "Financial Guidance", href: "/services/financial-guidance" },
  { name: "Custom Services", href: "/services/custom-services" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer
      className="bg-forest text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--color-forest) 0%, rgba(2,173,126,0.10) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-block mb-6">
              <span className="text-lime font-heading text-2xl font-bold tracking-tight">
                HOME LINK
              </span>{" "}
              <span className="text-white font-heading text-2xl font-bold tracking-tight">
                AFRICA
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
              Your trusted representative in Kenya. We provide reliable on-the-ground support for Kenyans living abroad.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex justify-center sm:justify-start items-center gap-4">
              <a href="https://wa.me/254700000000" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-forest-light flex items-center justify-center hover:bg-jade transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-lime text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => {
                let href = link.href;
                if (link.href === "/how-it-works") {
                  href = isHome ? "#how-it-works" : "/#how-it-works";
                } else if (link.href.startsWith("/#")) {
                  href = isHome ? link.href.slice(1) : link.href;
                }

                return (
                  <li key={link.name}>
                    <Link
                      href={href}
                      className="text-white text-sm hover:text-lime transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-lime text-sm uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => {
                // On the homepage, make these scroll to the services section
                const href = isHome ? "#services" : "/#services";
                return (
                  <li key={link.name}>
                    <Link
                      href={href}
                      className="text-white text-sm hover:text-lime transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-lime text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <svg className="w-5 h-5 text-jade mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@homelinkafrica.com" className="text-white text-sm hover:text-lime transition-colors duration-200">
                  info@homelinkafrica.com
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <svg className="w-5 h-5 text-jade mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+254722905242" className="text-white text-sm hover:text-lime transition-colors duration-200">
                  +254 722905242
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <svg className="w-5 h-5 text-jade mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/254722905242" className="text-white text-sm hover:text-lime transition-colors duration-200">
                  WhatsApp
                </a>
              </li>
              {/* Location removed per request */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
            <p className="text-white text-xs">
              © {new Date().getFullYear()} Home Link Africa. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-xs hover:text-lime transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
