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
  description: string;
  items: string[];
  stat: string;
  statLabel: string;
  cta: string;
  detailLink: string;
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
  description,
  items,
  stat,
  statLabel,
  cta,
  detailLink,
  gradient,
  subBrand,
  themeColor,
  buttonTextColor,
  testimonial,
}: ServiceCardProps) {
  return (
    <article className={styles.overviewCard} id={slug}>
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

        <p className={styles.overviewDescription}>{description}</p>

        <ul className={styles.overviewFeatureList}>
          {items.map((item) => (
            <li key={item} className={styles.overviewFeatureItem}>
              <span className={styles.overviewFeatureBullet} />
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.overviewBottomRow}>
          {/* Stat Box */}
          <div className={styles.overviewStat}>
            <span className={styles.overviewStatNumber}>{stat}</span>
            <span className={styles.overviewStatLabel}>{statLabel}</span>
          </div>

          {/* Capsule Button */}
          <Link
            href={detailLink}
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

