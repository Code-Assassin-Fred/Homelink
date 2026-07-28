import SectionHeading from "@/components/section-heading/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description: "Schedule an initial call with our team to discuss your needs and objectives.",
  },
  {
    number: "02",
    title: "Tell Us Your Needs",
    description: "Share details about what you need done in Kenya — property, family, admin, or custom.",
  },
  {
    number: "03",
    title: "Get a Tailored Plan",
    description: "We develop a customised service plan with clear timelines, deliverables, and costs.",
  },
  {
    number: "04",
    title: "We Act on Your Behalf",
    description: "Our team carries out the work professionally, representing your interests in Kenya.",
  },
  {
    number: "05",
    title: "Receive Regular Updates",
    description: "Stay informed with progress reports, photos, videos, and written documentation.",
  },
  {
    number: "06",
    title: "Task Completed",
    description: "We see every task through to completion with full accountability and follow-up.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-jade py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="A simple, transparent process from first contact to task completion."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line (hidden on mobile, shown between cards on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-white -translate-x-4 z-0" />
              )}

              <div className="relative bg-forest rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-full bg-lime flex items-center justify-center mb-6">
                  <span className="text-forest font-heading font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
