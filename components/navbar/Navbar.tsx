"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

const services = [
  { name: "Property & Investment Management", href: "/services/property-investment" },
  { name: "Diaspora Concierge Services", href: "/services/diaspora-concierge" },
  { name: "Family Support & Welfare Checks", href: "/services/family-support" },
  { name: "Financial & Investment Guidance", href: "/services/financial-guidance" },
  { name: "Custom Services", href: "/services/custom-services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const primaryNavLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: isHome ? "#services" : "/#services", hasDropdown: true },
    { name: "About Us", href: isHome ? "#about" : "/#about" },
  ];
  const sideMenuLinks: NavLink[] = [
    { name: "How It Works", href: isHome ? "#how-it-works" : "/#how-it-works" },
    { name: "FAQs", href: isHome ? "#faqs" : "/#faqs" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sideMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sideMenuOpen]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const closeSideMenu = () => setSideMenuOpen(false);

  const navLinkClass = (extra = "") =>
    `text-white font-body text-sm font-semibold uppercase tracking-wide px-4 py-2 transition-colors duration-200 ${extra} ${
      isHome ? "hover:text-hero-highlight" : "hover:text-lime"
    }`;

  return (
    <>
      <nav
        className={`top-0 left-0 right-0 z-50 transition-colors duration-500 ease-out ${
          isHome && !scrolled ? "absolute" : "sticky"
        } ${
          isHome
            ? scrolled
              ? "bg-hero-green/95 shadow-xl shadow-forest/20"
              : "bg-transparent shadow-none"
            : "bg-forest"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="shrink-0 inline-flex items-center gap-3">
              <Image
                src="/logo1.png"
                alt="Home Link Africa logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-logo text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-wider whitespace-nowrap">
                HOME LINK AFRICA
              </span>
            </Link>

            {/* Desktop — primary links + CTA + menu trigger */}
            <div className="hidden lg:flex items-center gap-2">
              {primaryNavLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`${navLinkClass()} inline-flex items-center gap-1`}
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

                      {servicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-72 bg-forest border-2 border-jade rounded-xl shadow-2xl py-2">
                          {services.map((service) => {
                            const href = isHome ? `#${service.href.split('/').pop()}` : `/#${service.href.split('/').pop()}`;
                            return (
                              <Link
                                key={service.name}
                                href={href}
                                className="block px-5 py-3 text-white text-sm normal-case tracking-normal font-medium hover:bg-forest-light hover:text-lime transition-colors duration-200"
                              >
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={link.href} className={navLinkClass()}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href={isHome ? "#contact" : "/#contact"}
                className="ml-4 inline-flex items-center bg-tangerine text-white font-heading font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-[4px] hover:bg-tangerine-hover transition-colors duration-200"
              >
                Book Consultation
              </Link>

              <button
                onClick={() => setSideMenuOpen(true)}
                className="ml-2 inline-flex items-center text-white p-2 hover:text-hero-highlight transition-colors duration-200"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile — hamburger only */}
            <div className="flex lg:hidden items-center justify-end w-full">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex items-center gap-2 text-white p-2"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className={`lg:hidden fixed inset-x-0 top-24 z-40 border-t-2 ${
              isHome
                ? "bg-hero-green/95 backdrop-blur-sm border-white/20"
                : "bg-forest border-jade"
            }`}
          >
            <div className="px-4 py-6 space-y-2">
              {[...primaryNavLinks, ...sideMenuLinks].map((link) => (
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
                            href={isHome ? "#services" : "/#services"}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-lime text-sm font-medium hover:bg-forest-light rounded-lg transition-colors duration-200"
                          >
                            All Services
                          </Link>
                          {services.map((service) => {
                            const href = isHome ? `#${service.href.split('/').pop()}` : `/#${service.href.split('/').pop()}`;
                            return (
                              <Link
                                key={service.name}
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 text-white text-sm hover:bg-forest-light hover:text-lime rounded-lg transition-colors duration-200"
                              >
                                {service.name}
                              </Link>
                            );
                          })}
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
                  href={isHome ? "#contact" : "/#contact"}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-tangerine text-white font-heading font-bold text-base px-6 py-4 rounded-[4px] hover:bg-tangerine-hover transition-colors duration-200 w-full"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop side menu */}
      {sideMenuOpen && (
        <div className="fixed inset-0 z-[60] hidden lg:block">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={closeSideMenu}
            aria-label="Close menu overlay"
          />
          <aside className="absolute top-12 right-0 w-full max-w-sm max-h-[calc(100vh-5rem)] bg-gradient-to-br from-hero-green via-forest/70 to-forest shadow-2xl flex flex-col rounded-l-lg overflow-hidden">
            <div className="flex items-center justify-end px-6 h-16 border-b border-white/10">
              <button
                onClick={closeSideMenu}
                className="text-white p-2 hover:text-lime transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
              {sideMenuLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeSideMenu}
                  className="block text-white font-heading font-bold text-base uppercase tracking-wide py-3 border-b border-forest-light hover:text-lime transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="px-6 pb-8">
              <Link
                href={isHome ? "#contact" : "/#contact"}
                onClick={closeSideMenu}
                className="flex items-center justify-center bg-tangerine text-white font-heading font-bold text-sm uppercase tracking-wide px-5 py-3 rounded-sm hover:bg-tangerine-hover transition-colors duration-200 w-full"
              >
                Book Consultation
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
