import { usePageSeo } from "../hooks/usePageTitle";

const NAV_LINKS = ["Features", "Plans", "Security", "About"] as const;

function AxonLogo() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 256 256"
      fill="#1B133C"
      aria-hidden
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
    </svg>
  );
}

export function AxonPage() {
  usePageSeo({
    title: "Axon — Digital Workers for Mundane Workflows",
    description:
      "Axon deploys digital workers for routine workflows. A separate experimental landing from the Bizdaptive marketing site.",
    path: "/axon",
    noIndex: true,
  });

  return (
    <section className="axon-page relative flex h-screen w-full flex-col overflow-hidden">
      <video
        className="absolute inset-0 z-0 h-[130%] w-full object-cover object-top"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex w-full justify-center pt-4 md:pt-6">
        <nav
          className="inline-flex items-center gap-6 rounded-xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md md:px-6"
          aria-label="Axon"
        >
          <a href="/axon" className="shrink-0" aria-label="Axon home">
            <AxonLogo />
          </a>
          <div className="hidden items-center gap-5 sm:flex">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm font-medium text-[#1B133C]/80 transition-opacity hover:text-[#1B133C] hover:opacity-100"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 text-center sm:px-8 mt-8 md:mt-16">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-xl border border-[#1B133C]/10 bg-white/70 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <span
            className="flex h-5 w-5 items-center justify-center rounded bg-orange-500 text-[11px] font-bold leading-none text-white"
            aria-hidden
          >
            Y
          </span>
          Funded by Y Combinator
        </div>

        <h1 className="max-w-4xl font-['Instrument_Serif'] text-4xl leading-[0.95] tracking-tight text-[#1B133C] sm:text-5xl md:text-7xl lg:text-8xl">
          Deploy digital workers
          <br />
          for mundane workflows
        </h1>

        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-[#1B133C]/70 sm:mt-6 sm:text-sm md:text-base">
          Eliminate your tedious browser work and 10x your team&apos;s capacity.
          Put intelligent agents on every routine process so you grow faster and
          deliver more for clients — effortlessly.
        </p>

        <a
          href="#early-access"
          className="mt-7 rounded-xl bg-[#FEFEFE] px-6 py-3 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] sm:mt-8 sm:px-8 sm:py-3.5"
        >
          Get Early Access
        </a>
      </div>
    </section>
  );
}
