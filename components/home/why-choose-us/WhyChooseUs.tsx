import Image from "next/image";
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
        <SectionHeading
          title="Why Choose Home Link Africa"
          subtitle="We combine professional expertise with a genuine commitment to serving the Kenyan diaspora."
          centered={true}
          showDivider={false}
          titleClassName="text-2xl sm:text-3xl lg:text-4xl"
          subtitleClassName="max-w-full"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
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
            <div className="w-full max-w-md aspect-square overflow-hidden rounded-xl border border-slate-200 shadow-2xl shadow-slate-300/20 bg-white">
              <Image
                src="/founder.jpeg"
                alt="Founder of Home Link Africa"
                width={800}
                height={800}
                className="object-cover w-full h-full transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
