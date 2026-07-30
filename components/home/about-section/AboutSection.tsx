"use client";

import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/cta-button/CTAButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Page() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1B2F2F] text-[#F4F1EA]">
      {/* ---------- Decorative clipped panel ---------- */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[58%]"
        style={{
          clipPath: "polygon(36% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {/* Main panel */}
        <div className="absolute inset-0 bg-[#36534E]" />

        {/* Decorative diagonal lines */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(36% 0, 44% 0, 8% 100%, 0% 100%)",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-y-0 border-l border-white/10"
              style={{ left: `${i * 8}px` }}
            />
          ))}
        </div>
      </div>

      {/* ---------- About Hero ---------- */}
      <section ref={sectionRef as any} className="relative z-10 flex min-h-screen items-center px-6 py-10 sm:px-8 sm:py-0 md:px-12 lg:px-16">
        <div className={`${isVisible ? 'animate-visible' : 'animate-on-scroll'} grid w-full items-center gap-12 lg:gap-20 lg:grid-cols-2`}>
          {/* Left */}
          <div className="max-w-xl">
            <h1 className="text-[32px] font-medium leading-[0.95] tracking-tight text-center sm:text-left sm:text-[42px] md:text-[56px] lg:text-[68px]">
              Your trusted
              <br />
              representative
              <br />
              in Kenya
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/75">
              Home Link Africa provides dependable on-the-ground support for
              Kenyans living abroad. Whether you're managing property,
              supporting loved ones, handling important documentation, or
              overseeing projects, we become your reliable presence in Kenya
              with complete transparency and professional follow-through.
            </p>
          </div>

          {/* Right */}
          <div className="max-w-md justify-self-end">
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/75">
              We serve as your trusted eyes and ears on the ground, helping you
              stay connected to your investments, your family, and the matters
              that matter most—no matter where you are in the world.
            </p>

            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-base sm:text-lg text-white/85">
              <div>• Property & investment oversight</div>
              <div>• Family welfare support</div>
              <div>• Concierge & administrative services</div>
              <div>• Transparent photo & video reporting</div>
            </div>

            <div className="mt-8 sm:mt-10 flex justify-center sm:justify-end">
              <CTAButton href="/book-consultation" variant="lime" arrow>
                Book Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}