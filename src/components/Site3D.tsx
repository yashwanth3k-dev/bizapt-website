import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { easeOut } from "./motion";

export function usePrefersReducedMotion() {
  const framer = useReducedMotion();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return Boolean(framer || reduced);
}

type DepthCardProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

/** Talk / Map / Share cards with perspective depth. */
export function DepthStepCard({ children, index, className = "" }: DepthCardProps) {
  const reduced = usePrefersReducedMotion();
  const z = reduced ? 0 : (1 - index) * 18;
  const rot = reduced ? 0 : (index - 1) * 4;

  return (
    <motion.div
      className="h-full"
      style={{ perspective: 900 }}
      initial={{ opacity: 0, y: 24, rotateY: reduced ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: easeOut }}
    >
      <motion.div
        className={`card-surface card-interactive group h-full rounded-2xl ${className}`}
        whileHover={reduced ? undefined : { y: -6, rotateY: rot * 0.4, z: 24 }}
        style={{
          transformStyle: "preserve-3d",
          translateZ: z,
          rotateY: rot,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

type StampCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Day-one card with light 3D hover. */
export function StampCard({ children, className = "", delay = 0 }: StampCardProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className="relative h-full"
      style={{ perspective: 900 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5, ease: easeOut }}
    >
      <motion.div
        className={`card-surface card-interactive group relative h-full overflow-hidden rounded-2xl ${className}`}
        whileHover={reduced ? undefined : { rotateX: -3, rotateY: 4, y: -4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Fog layers that peel back as the CTA enters view. */
export function FogCtaShell({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const fog1 = useTransform(scrollYProgress, [0, 1], [0.55, 0]);
  const fog2 = useTransform(scrollYProgress, [0, 1], [0.4, 0]);
  const clearY = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <div ref={ref} className="relative">
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute -inset-x-8 -top-10 bottom-10 rounded-[3rem] blur-2xl"
            style={{
              opacity: fog1,
              background:
                "radial-gradient(ellipse at center, color-mix(in srgb, var(--fg-faint) 35%, transparent), transparent 70%)",
            }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full blur-xl"
            style={{
              opacity: fog2,
              background: "color-mix(in srgb, var(--bg-soft) 80%, transparent)",
            }}
            aria-hidden
          />
        </>
      )}
      <motion.div style={{ y: reduced ? 0 : clearY }}>{children}</motion.div>
    </div>
  );
}
