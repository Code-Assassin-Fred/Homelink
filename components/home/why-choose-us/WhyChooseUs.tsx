import SectionHeading from "@/components/section-heading/SectionHeading";

const differentiators = [
  "Over 10 years of banking experience",
  "Counselling psychology background",
  "Strong professional ethics",
  "Transparent communication at every stage",
  "Reliable local representation",
  "Regular photo and video reporting",
  "Accountability throughout every engagement",
  "Confidential handling of personal information",
  "Personalised, people-centred service",
  "Commitment to follow-through on every task",
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-offwhite py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionHeading
              title="Why Choose Home Link Africa"
              subtitle="We combine professional expertise with a genuine commitment to serving the Kenyan diaspora."
              centered={false}
            />
            <ul className="space-y-4">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-jade flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-charcoal text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Placeholder Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-forest rounded-3xl flex flex-col items-center justify-center text-white p-8">
              <svg className="w-24 h-24 mb-6 text-jade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-lime font-heading font-bold text-2xl mb-2">10+ Years</p>
              <p className="text-white text-sm text-center">Professional Experience in Banking &amp; Client Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
