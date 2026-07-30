export default function TrustBanner() {
  const trustItems = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      label: "Full Transparency",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      label: "Accountable Service",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Photo & Video Updates",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Reliable Follow-Through",
    },
  ];

  // Duplicate items for a seamless infinite loop
  const marqueeItems = [...trustItems, ...trustItems];

  return (
    <section className="bg-gradient-to-b from-white to-[#f0f0f0] py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-charcoal font-heading font-semibold text-base sm:text-lg lg:text-xl mb-8 px-4">
          Trusted by Kenyans Living Abroad Across the Globe
        </p>

        {/* Mobile Marquee */}
        <div className="relative overflow-hidden lg:hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#f0f0f0] to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#f0f0f0] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex flex-col items-center text-center flex-shrink-0 mx-6 gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-jade flex items-center justify-center text-white">
                  {item.icon}
                </div>

                <p className="text-forest font-heading font-semibold text-xs whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-jade flex items-center justify-center text-white">
                {item.icon}
              </div>

              <p className="text-forest font-heading font-semibold text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}