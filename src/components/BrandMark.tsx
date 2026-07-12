import { useEffect, useId, useState } from "react";

/** Portal spiral path — same curve as BrandMark / ScreenSpinner (onboarding). */
export const BRAND_SPIRAL_PATH =
  "M14 56 C 8 34, 28 12, 50 16 C 70 20, 74 46, 58 56 C 46 63, 28 60, 28 46 C 28 36, 40 32, 48 38 C 54 43, 50 52, 42 50";

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

type LogoProps = {
  size?: number;
  /** Dot travels the spiral path (portal spinner motion). */
  animate?: boolean;
};

/**
 * Spiral mark uses CSS variables so light/dark always stay in sync
 * with `data-theme` (no React theme dependency for the SVG strokes).
 */
export function BrandLogo({ size = 30, animate = false }: LogoProps) {
  const uid = useId();
  const pathId = `bp-${uid.replace(/:/g, "")}`;
  const reducedMotion = usePrefersReducedMotion();
  const run = animate && !reducedMotion;

  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      fill="none"
      aria-hidden
      style={{ display: "block", flex: "0 0 auto" }}
    >
      <path
        id={pathId}
        d={BRAND_SPIRAL_PATH}
        stroke="var(--logo-stroke)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {run ? (
        <circle r="3.8" fill="var(--logo-dot)">
          <animateMotion
            dur="3.6s"
            repeatCount="indefinite"
            keyPoints="1;0"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      ) : (
        <circle cx="42" cy="50" r="3.6" fill="var(--logo-dot)" />
      )}
    </svg>
  );
}

export function BrandMark({
  size = 28,
  animate = true,
}: {
  size?: number;
  animate?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandLogo size={size} animate={animate} />
      <span
        className="text-[15px] font-bold tracking-[-0.02em]"
        style={{ color: "var(--fg)" }}
      >
        Bizdaptive
      </span>
    </span>
  );
}

/** Large watermark spiral for hero — matches SpiralMark on portal. */
export function SpiralWatermark({
  size = 560,
  className = "",
  animate = false,
}: {
  size?: number;
  className?: string;
  animate?: boolean;
}) {
  const uid = useId();
  const pathId = `wm-${uid.replace(/:/g, "")}`;
  const reducedMotion = usePrefersReducedMotion();
  const run = animate && !reducedMotion;

  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden
      style={{ opacity: "var(--spiral-opacity)" }}
    >
      <path
        id={pathId}
        d={BRAND_SPIRAL_PATH}
        stroke="var(--logo-dot)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {run && (
        <circle r="2.2" fill="var(--logo-dot)">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            keyPoints="1;0"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      )}
    </svg>
  );
}
