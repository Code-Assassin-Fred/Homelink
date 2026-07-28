import SectionHeading from "@/components/section-heading/SectionHeading";

const bankingItems = [
  "Customer relationship management",
  "Financial documentation oversight",
  "Loan and credit processes guidance",
  "High risk awareness & fraud prevention",
  "Strict regulatory compliance adherence",
  "Absolute client confidentiality",
  "High professional ethics standards",
];

const psychologyItems = [
  "Empathy and active listening",
  "Clear and effective communication",
  "Sensitive family mediation",
  "High emotional intelligence",
  "Professional conflict resolution",
  "Bridges trust across distance",
  "Safe, confidential support channels",
];

export default function Experience() {
  return (
    <section className="bg-forest py-20 sm:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Our Experience Matters"
          subtitle="Combining high-level corporate diligence with deep human understanding."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Banking Column */}
          <div className="bg-forest-light p-8 sm:p-12 rounded-3xl border-2 border-jade">
            <div className="w-14 h-14 rounded-2xl bg-jade flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-lime">
              10+ Years in Corporate Banking
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
              Our background in banking guarantees that we handle all documentation, payments,
              and process coordinating with the highest levels of scrutiny, financial safety,
              and compliance.
            </p>
            <ul className="space-y-3">
              {bankingItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-jade flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Counselling Psychology Column */}
          <div className="bg-forest-light p-8 sm:p-12 rounded-3xl border-2 border-tangerine">
            <div className="w-14 h-14 rounded-2xl bg-tangerine flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-lime">
              Counselling Psychology Background
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
              Managing family support, check-ins, and local mediation requires more than just administrative
              follow-up — it requires high emotional intelligence, active empathy, and conflict resolution.
            </p>
            <ul className="space-y-3">
              {psychologyItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-tangerine flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
