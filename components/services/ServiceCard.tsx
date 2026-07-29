import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface ServiceCardProps {
  title: string;
  slug: string;
  tagline: string;
  taglineItalic?: string;
  stat: string;
  statLabel: string;
  cta: string;
  gradient: string;
  subBrand: string;
  themeColor: string;
  buttonTextColor: string;
  testimonial: Testimonial;
}

export default function ServiceCard({
  slug,
  tagline,
  taglineItalic,
  stat,
  statLabel,
  cta,
  gradient,
  subBrand,
  themeColor,
  buttonTextColor,
  testimonial,
}: ServiceCardProps) {
  return (
    <article
      className={styles.overviewCard}
      id={slug}
      style={{ borderTop: `6px solid ${themeColor}` }}
    >
      {/* Left Column — Brand Banner */}
      <div className={styles.overviewImagePanel} style={{ background: gradient }}>
        <div className={styles.logoContainer}>
          <span className={styles.logoBrand}>Home Link</span>
          <span className={styles.logoSub}>{subBrand}</span>
        </div>
      </div>

      {/* Center Column — Content */}
      <div className={styles.overviewContent}>
        <h3 className={styles.overviewHeadline}>
          {tagline}{" "}
          {taglineItalic && (
            <span className={styles.overviewHeadlineItalic}>{taglineItalic}</span>
          )}
        </h3>

        <div className={styles.overviewBottomRow}>
          {/* Stat Box */}
          <div className={styles.overviewStat}>
            <span className={styles.overviewStatNumber}>{stat}</span>
            <span className={styles.overviewStatLabel}>{statLabel}</span>
          </div>

          {/* Capsule Button */}
          <Link
            href="/book-consultation"
            className={styles.overviewCta}
            id={`cta-${slug}`}
            style={{
              backgroundColor: themeColor,
              color: buttonTextColor,
            }}
          >
            {cta}
            <span className={styles.overviewCtaCircle}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Right Column — Testimonial */}
      <aside className={styles.overviewTestimonial}>
        <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
        <hr className={styles.testimonialDivider} />
        <div className={styles.testimonialAuthor}>
          <span className={styles.testimonialName}>{testimonial.name}</span>
          <span className={styles.testimonialRole}>{testimonial.role}</span>
        </div>
      </aside>
    </article>
  );
}

