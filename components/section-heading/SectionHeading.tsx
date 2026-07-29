interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? "text-center" : "text-left"} ${className}`}>
      {title && (
        <>
          <h2
            className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${
              light ? "text-white" : "text-forest"
            }`}
          >
            {title}
          </h2>
          <div
            className={`w-16 h-1 bg-lime rounded-full ${
              centered ? "mx-auto" : ""
            } mb-6`}
          />
        </>
      )}
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white" : "text-charcoal"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
