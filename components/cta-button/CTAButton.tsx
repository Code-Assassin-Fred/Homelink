import Link from "next/link";

interface CTAButtonProps {
  variant?: "lime" | "outlined" | "tangerine";
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
}

export default function CTAButton({
  variant = "lime",
  href,
  children,
  arrow = false,
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-colors duration-200";

  const variantStyles = {
    lime: "bg-lime text-forest hover:bg-lime-hover",
    outlined:
      "border-2 border-white text-white hover:bg-white hover:text-forest",
    tangerine: "bg-tangerine text-white hover:bg-tangerine-hover",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </Link>
  );
}
