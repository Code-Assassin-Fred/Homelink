import { ArrowRight, LayoutGrid } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#1B2F2F] text-[#F4F1EA]">
      {/* ---------- Nav ---------- */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-12">
        <a href="#" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L26 26M26 2L2 26"
              stroke="#F4F1EA"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-semibold tracking-tight">Aequix</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          <button className="flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-[#F4F1EA]/90 transition hover:border-white/30">
            <LayoutGrid className="h-4 w-4" strokeWidth={2} />
            All Service
          </button>
          <a
            href="#"
            className="px-4 py-2 text-sm text-[#F4F1EA]/90 transition hover:text-white"
          >
            For Candidates
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm text-[#F4F1EA]/90 transition hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm text-[#F4F1EA]/90 transition hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* ---------- Diagonal image panel ---------- */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[62%]"
        style={{
          clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/hero-rider.jpg"
            alt="Rider on horseback in a golden field under a stormy sky"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* thin diagonal accent lines along the cut edge */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(38% 0, 46% 0, 8% 100%, 0% 100%)",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-y-0 border-l border-[#F4F1EA]/25"
              style={{ left: `${i * 6}px` }}
            />
          ))}
        </div>
      </div>

      {/* ---------- Stat badge ---------- */}
      <div className="absolute bottom-10 right-8 z-20 rounded-md bg-black/30 px-4 py-2 text-sm backdrop-blur-sm md:right-12">
        <span className="font-semibold">99%</span>
        <span className="mx-1.5 opacity-60">•</span>
        <span className="opacity-90">Partner Retention Rate</span>
      </div>

      {/* ---------- Hero copy ---------- */}
      <section className="relative z-10 px-8 pb-24 pt-10 md:px-12 md:pt-16">
        <h1 className="max-w-2xl text-[56px] font-medium leading-[0.95] tracking-tight sm:text-[64px] md:text-[76px]">
          Engineering
          <br />
          your next stage
          <br />
          of growth
        </h1>

        <p className="mt-8 max-w-md text-lg leading-snug text-[#F4F1EA]/85">
          Securing top-tier executives to build, scale,
          <br className="hidden sm:block" />
          and dominate competitive landscapes.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 rounded-md bg-[#F4F1EA] px-6 py-3.5 text-sm font-medium text-[#1B2F2F] transition hover:bg-white">
            Job Opening
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <button className="rounded-md border border-white/25 px-6 py-3.5 text-sm font-medium text-[#F4F1EA] transition hover:border-white/50">
            Explore Expertise
          </button>
        </div>
      </section>
    </main>
  );
}