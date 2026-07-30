import Link from "next/link";
import ServiceHero from "@/components/services/service-hero/ServiceHero";
import FinalCTA from "@/components/home/final-cta/FinalCTA";
import styles from "@/components/services/ServiceCard.module.css";

interface ServiceDetailLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  ctaText: string;
  disclaimer?: string;
  icon: React.ReactNode;
  gradient?: string;
}

const checkIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function ServiceDetailLayout({
  title,
  subtitle,
  description,
  items,
  ctaText,
  disclaimer,
  icon,
  gradient = "linear-gradient(135deg, #1B2F2F 0%, #243c3c 40%, #02AD7E 100%)",
}: ServiceDetailLayoutProps) {
  return (
    <>
      <ServiceHero title={title} subtitle={subtitle} badge="Service Details" />

      <section className="bg-offwhite py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Service Card */}
          <article className={styles.card}>
            {/* Left — Gradient Panel */}
            <div className={styles.imagePanel} style={{ background: gradient }}>
              <div className={styles.imagePanelIcon}>{icon}</div>
              <h2 className={styles.imagePanelTitle}>{title}</h2>
            </div>

            {/* Center — Content */}
            <div className={styles.content}>
              <h3 className={styles.headline}>
                What is included in this service?
              </h3>

              <p className={styles.stat} style={{ fontWeight: 400, fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {description}
              </p>

              <div style={{ background: "var(--color-offwhite)", borderRadius: 16, padding: "24px 28px", border: "2px solid var(--color-jade)" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-forest)", marginBottom: 16 }}>
                  Services Included:
                </p>
                <ul className={styles.featureList}>
                  {items.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <span className={styles.featureCheck}>{checkIcon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {disclaimer && (
                <div style={{ background: "var(--color-forest)", color: "#fff", padding: "20px 24px", borderRadius: 16, border: "2px solid var(--color-tangerine)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <svg style={{ width: 20, height: 20, color: "var(--color-tangerine)", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.875rem", color: "var(--color-lime)" }}>Important Disclaimer</span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>{disclaimer}</p>
                </div>
              )}

              <div className={styles.ctaRow}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  {ctaText}
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — Guarantee Sidebar */}
            <aside className={styles.sidebar}>
              <h4 className={styles.sidebarTitle}>Our Guarantee</h4>

              <div className={styles.guaranteeList}>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>{checkIcon}</span>
                  <div>
                    <p className={styles.guaranteeItemTitle}>Regular Updates</p>
                    <p className={styles.guaranteeItemDesc}>
                      We send photo and video proof of all on-the-ground work.
                    </p>
                  </div>
                </div>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>{checkIcon}</span>
                  <div>
                    <p className={styles.guaranteeItemTitle}>Honest Communication</p>
                    <p className={styles.guaranteeItemDesc}>
                      Complete transparency on costs, progress, and issues.
                    </p>
                  </div>
                </div>
                <div className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>{checkIcon}</span>
                  <div>
                    <p className={styles.guaranteeItemTitle}>Professional Standards</p>
                    <p className={styles.guaranteeItemDesc}>
                      Structured reports, background tracking, and full follow-through.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.customCta}>
                <p className={styles.customCtaTitle}>Need a customised plan?</p>
                <p className={styles.customCtaDesc}>
                  We assess every request individually to match your specific requirements in Kenya.
                </p>
                <Link href="/services/custom-services" className={styles.customCtaLink}>
                  Explore Custom Services →
                </Link>
              </div>
            </aside>
          </article>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
