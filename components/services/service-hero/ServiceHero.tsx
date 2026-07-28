interface ServiceHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  light?: boolean;
}

export default function ServiceHero({
  title,
  subtitle,
  badge = "Our Services",
  light = true,
}: ServiceHeroProps) {
  return (
    <div className="bg-forest py-24 sm:py-32 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block bg-jade text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          {badge}
        </span>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lime font-heading font-semibold text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="300" x2="1440" y2="100" stroke="#E0FF03" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
