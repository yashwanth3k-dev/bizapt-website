import { motion } from "framer-motion";
import { Button } from "./Button";
import { BrandLogo, SpiralWatermark } from "./BrandMark";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-16 text-center sm:px-8"
      style={{ background: "var(--hero-veil)" }}
    >
      {/* Portal-style oversized spiral watermark */}
      <div className="pointer-events-none absolute -right-24 top-16 sm:-right-16 sm:top-10" aria-hidden>
        <SpiralWatermark size={520} className="sm:hidden" />
        <SpiralWatermark size={640} className="hidden sm:block" />
      </div>
      <div
        className="pointer-events-none absolute -left-40 bottom-0 opacity-60"
        aria-hidden
      >
        <SpiralWatermark size={380} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs backdrop-blur"
          style={{
            borderColor: "var(--line)",
            background: "var(--card)",
            color: "var(--fg-muted)",
          }}
        >
          <BrandLogo size={16} />
          Proof of Concept — belief + evidence substrate
        </motion.div>

        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.25rem] md:leading-[1.1]"
          style={{ color: "var(--fg)" }}
        >
          Your organization, as a living governed mirror.
        </h1>
        <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="accent-text">Starts with a conversation.</span>
        </p>

        <p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--fg-muted)" }}
        >
          Bizdaptive PoC captures how your company actually works — people, goals, metrics, and
          assets — stamps belief with evidence, mints a first-decision receipt, and lands you in a
          Company Graph you can walk with Structure and Dynamics.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="#request-demo" showArrow>
            Request a Demo
          </Button>
          <Button href="#platform" variant="ghost">
            What the PoC ships
          </Button>
        </div>
      </motion.div>

      <p
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs"
        style={{ color: "var(--fg-faint)" }}
      >
        Real onboarding · real graph · deploy held until audit
      </p>
    </section>
  );
}
