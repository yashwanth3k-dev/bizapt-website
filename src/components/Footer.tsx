import { motion } from "framer-motion";
import { Button } from "./Button";
import { BrandLogo } from "./BrandMark";

export function FinalCta() {
  return (
    <section id="request-demo" className="px-5 pb-8 pt-8 sm:px-8" style={{ background: "var(--bg)" }}>
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border px-6 py-20 text-center sm:px-12 sm:py-24"
        style={{
          borderColor: "var(--line)",
          background: "var(--card-solid)",
          boxShadow: `0 0 80px var(--cta-glow)`,
        }}
      >
        <div className="pointer-events-none absolute right-8 top-8 opacity-40" aria-hidden>
          <BrandLogo size={48} />
        </div>
        <div className="relative z-10">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            See what your organization could become.
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            One PoC demo: interview → receipt → Company Graph. Built for founders proving
            governance before scale. Production deploy held for external audit.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="mailto:hello@bizdaptive.com?subject=Bizdaptive%20PoC%20Demo" showArrow>
              Request a Demo
            </Button>
            <Button
              href="mailto:hello@bizdaptive.com?subject=Bizdaptive%20PoC%20Waitlist"
              variant="ghost"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
