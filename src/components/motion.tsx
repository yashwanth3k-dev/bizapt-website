import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0 },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

/** Distinct section reveal styles — appear on enter, disappear on leave. */
export type RevealVariant =
  | "rise"
  | "cascade"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "blur"
  | "clip";

const sectionVariants: Record<RevealVariant, Variants> = {
  rise: {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: easeOut },
    },
    exit: {
      opacity: 0,
      y: -32,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  },
  cascade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -64 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
    exit: {
      opacity: 0,
      x: 48,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 64 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
    exit: {
      opacity: 0,
      x: -48,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      transition: { duration: 0.35, ease: "easeIn" },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 24 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
    exit: {
      opacity: 0,
      filter: "blur(8px)",
      y: -16,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(12% 8% 12% 8%)", scale: 1.04 },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      transition: { duration: 0.75, ease: easeOut },
    },
    exit: {
      opacity: 0,
      clipPath: "inset(8% 12% 8% 12%)",
      transition: { duration: 0.4, ease: "easeIn" },
    },
  },
};

export const cascadeItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

type SectionRevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  as?: "section" | "div";
  style?: React.CSSProperties;
};

/**
 * Section wrapper: distinct reveal in, reverse out when leaving viewport.
 * Uses whileInView so scrolling away re-triggers “disappear” via hidden state.
 */
export function SectionReveal({
  children,
  variant = "rise",
  className = "",
  as = "section",
  style,
}: SectionRevealProps) {
  const Comp = as === "div" ? motion.div : motion.section;

  return (
    <Comp
      className={className}
      style={style}
      variants={sectionVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.18, margin: "-60px 0px" }}
    >
      {children}
    </Comp>
  );
}

type CardProps = HTMLMotionProps<"article"> & {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right";
  /** Replay appear/disappear when scrolling past. */
  replay?: boolean;
};

/** Scroll-in + hover lift card used across sections. */
export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  from = "up",
  replay = false,
  ...rest
}: CardProps) {
  const initial =
    from === "left"
      ? slideFromLeft.hidden
      : from === "right"
        ? slideFromRight.hidden
        : fadeUp.hidden;

  return (
    <motion.article
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: !replay, margin: "-60px", amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.99 }}
      className={`group card-surface card-interactive rounded-2xl ${className}`}
      {...rest}
    >
      {children}
    </motion.article>
  );
}

export function SectionHeader({
  children,
  className = "",
  replay = false,
}: {
  children: React.ReactNode;
  className?: string;
  replay?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !replay, margin: "-40px" }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
