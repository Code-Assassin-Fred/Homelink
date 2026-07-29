import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  slug: string;
  description: string;
  tagline: string;
  taglineItalic?: string;
  features: string[];
  stat: string;
  statLabel: string;
  cta: string;
  icon: React.ReactNode;
  gradient: string;
  index: number;
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

export default function ServiceCard({
  title,
  slug,
  description,
  tagline,
  taglineItalic,
  features,
  stat,
  statLabel,
  cta,
  icon,
  gradient,
  index,
}: ServiceCardProps) {
  return (
    <article className={styles.card} id={slug}>
      {/* Left — Gradient Panel with Icon & Title */}
      <div className={styles.imagePanel} style={{ background: gradient }}>
        <div className={styles.imagePanelIcon}>{icon}</div>
        <h2 className={styles.imagePanelTitle}>{title}</h2>
      </div>

      {/* Center — Content */}
      <div className={styles.content}>
        <h3 className={styles.headline}>
          {tagline}{" "}
          {taglineItalic && (
            <em className={styles.headlineItalic}>{taglineItalic}</em>
          )}
        </h3>

        <ul className={styles.featureList}>
          {features.map((feat) => (
            <li key={feat} className={styles.featureItem}>
              <span className={styles.featureCheck}>{checkIcon}</span>
              {feat}
            </li>
          ))}
        </ul>

        <p className={styles.stat}>
          <span className={styles.statHighlight}>{stat}</span> {statLabel}
        </p>

        <div className={styles.ctaRow}>
          <Link
            href="/book-consultation"
            className={styles.ctaPrimary}
            id={`cta-${slug}`}
          >
            {cta}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right — Guarantee Sidebar */}
      <aside className={styles.sidebar}>
        <h4 className={styles.sidebarTitle}>Our Promise</h4>

        <div className={styles.guaranteeList}>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>{checkIcon}</span>
            <div>
              <p className={styles.guaranteeItemTitle}>Regular Updates</p>
              <p className={styles.guaranteeItemDesc}>
                Photo and video proof of all on-the-ground work.
              </p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>{checkIcon}</span>
            <div>
              <p className={styles.guaranteeItemTitle}>
                Honest Communication
              </p>
              <p className={styles.guaranteeItemDesc}>
                Complete transparency on costs, progress, and issues.
              </p>
            </div>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeIcon}>{checkIcon}</span>
            <div>
              <p className={styles.guaranteeItemTitle}>
                Professional Standards
              </p>
              <p className={styles.guaranteeItemDesc}>
                Structured reports, background tracking, and full
                follow-through.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.customCta}>
          <p className={styles.customCtaTitle}>Need a customised plan?</p>
          <p className={styles.customCtaDesc}>
            We assess every request individually to match your specific
            requirements in Kenya.
          </p>
          <Link
            href="/services/custom-services"
            className={styles.customCtaLink}
            id={`custom-cta-${slug}`}
          >
            Explore Custom Services →
          </Link>
        </div>
      </aside>
    </article>
  );
}
