import ServiceHero from "@/components/services/service-hero/ServiceHero";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  badge,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <ServiceHero title={title} subtitle={subtitle} badge={badge} />
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-charcoal">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
