import { ArrowRight } from "lucide-react";

export default function Page() {
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

      {/* ---------- Hero ---------- */}
      <section className="relative z-10 flex min-h-screen items-center px-8 md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-[58px] font-medium leading-[0.92] tracking-tight sm:text-[72px] md:text-[90px]">
            Engineering
            <br />
            your next stage
            <br />
            of growth
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#F4F1EA]/80">
            Securing top-tier executives to build, scale,
            <br className="hidden sm:block" />
            and dominate competitive landscapes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-md bg-[#F4F1EA] px-6 py-3.5 text-sm font-medium text-[#1B2F2F] transition hover:bg-white">
              Job Opening
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>

            <button className="rounded-md border border-white/20 px-6 py-3.5 text-sm font-medium text-[#F4F1EA] transition hover:border-white/40">
              Explore Expertise
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}