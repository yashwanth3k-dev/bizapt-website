import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { easeOut } from "./motion";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Card that tilts in 3D toward the cursor. */
export function TiltCard({ children, className = "", delay = 0 }: TiltCardProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 260, damping: 22 });
  const sy = useSpring(my, { stiffness: 260, damping: 22 });
  const rotateX = useTransform(sy, [0, 1], [10, -10]);
  const rotateY = useTransform(sx, [0, 1], [-12, 12]);
  const glareX = useTransform(sx, [0, 1], [0, 100]);
  const glareY = useTransform(sy, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 55%)`;

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.55, ease: easeOut }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={`card-surface card-interactive group relative h-full overflow-hidden rounded-2xl ${className}`}
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        {!reduced && (
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: glare }}
            aria-hidden
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </motion.div>
  );
}
