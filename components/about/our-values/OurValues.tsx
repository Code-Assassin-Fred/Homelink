import SectionHeading from "@/components/section-heading/SectionHeading";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with high moral standards, doing the right thing even when no one is watching.",
    color: "border-jade",
  },
  {
    title: "Transparency",
    description:
      "Open processes, clear pricing, and regular photo/video progress updates so you see what we see.",
    color: "border-lime",
  },
  {
    title: "Professionalism",
    description:
      "Strict standards, formal coordination, and structured procedures for every task.",
    color: "border-tangerine",
  },
  {
    title: "Accountability",
    description:
      "We assume full responsibility for our work and see each engagement through to a successful end.",
    color: "border-navy",
  },
  {
    title: "Confidentiality",
    description:
      "We protect your financial, personal, and project records with absolute confidentiality.",
    color: "border-forest",
  },
  {
    title: "Compassion",
    description:
      "A people-centred approach, understanding your family obligations and showing real empathy.",
    color: "border-jade",
  },
  {
    title: "Reliability",
    description:
      "We are the eyes and ears you can depend on, delivering consistent and timely updates.",
    color: "border-lime",
  },
];

export default function OurValues() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Values"
          subtitle="The foundation of everything we do and every decision we make."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className={`bg-offwhite rounded-2xl p-8 border-t-8 ${val.color} shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <h3 className="font-heading font-bold text-forest text-xl mb-3">
                {val.title}
              </h3>
              <p className="text-charcoal text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
