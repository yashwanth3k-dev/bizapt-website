import { motion, type HTMLMotionProps } from "framer-motion";

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

type CardProps = HTMLMotionProps<"article"> & {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right";
};

/** Scroll-in + hover lift card used across sections. */
export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  from = "up",
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
      viewport={{ once: true, margin: "-60px", amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.99 }}
      className={`card-surface card-interactive rounded-2xl ${className}`}
      {...rest}
    >
      {children}
    </motion.article>
  );
}

export function SectionHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
