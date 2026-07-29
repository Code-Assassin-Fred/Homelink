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
    <section id="how-it-works" className="bg-jade py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 lg:mt-10">
          <p className="mx-auto max-w-2xl text-center text-white text-lg sm:text-xl leading-relaxed">
            A simple, transparent process from first contact to task completion.
          </p>
          <div className="mt-10 space-y-12">
            {steps.map((step, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative ${
                    isRight ? "lg:flex lg:justify-end" : "lg:flex lg:justify-start"
                  }`}
                >
                  <div className="w-full lg:w-[60%]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-white text-forest font-heading font-bold text-sm tracking-wide px-4 py-3">
                        Step {step.number}
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-white">
                        {step.title}
                      </h3>
                    </div>
                    <div className="bg-forest/95 border border-white/10 rounded-md p-8 shadow-[0_32px_80px_rgba(0,0,0,0.15)]">
                      <p className="text-white text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
