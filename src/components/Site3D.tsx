import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
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

const nodes = [
  { x: 18, y: 32, r: 5, label: "People" },
  { x: 52, y: 18, r: 6, label: "Goals" },
  { x: 78, y: 38, r: 5, label: "Assets" },
  { x: 40, y: 58, r: 7, label: "Core" },
  { x: 68, y: 72, r: 4.5, label: "Metrics" },
];

const links: [number, number][] = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 4],
  [1, 2],
];

/** Soft 3D company-graph float for the home hero. */
export function CompanyGraphHero() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-12, 12]);

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute -right-8 top-1/2 w-[min(92vw,420px)] -translate-y-1/2 sm:right-0 sm:w-[460px] lg:right-8"
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
      >
        <svg viewBox="0 0 100 90" className="h-auto w-full" style={{ opacity: 0.55 }}>
          {links.map(([a, b]) => {
            const na = nodes[a]!;
            const nb = nodes[b]!;
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="var(--accent)"
                strokeWidth="0.35"
                strokeOpacity="0.45"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: easeOut }}
              />
            );
          })}
          {nodes.map((n, i) => (
            <motion.g
              key={n.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                reduced
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 1, scale: 1, y: [0, i % 2 === 0 ? -1.2 : 1.2, 0] }
              }
              transition={
                reduced
                  ? { delay: 0.5 + i * 0.08 }
                  : {
                      opacity: { delay: 0.5 + i * 0.08 },
                      scale: { delay: 0.5 + i * 0.08 },
                      y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                    }
              }
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="var(--card-solid)"
                stroke="var(--accent)"
                strokeWidth="0.5"
              />
              <circle cx={n.x} cy={n.y} r={1.4} fill="var(--accent)" />
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
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
