import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  accent?: "teal" | "sky" | "accent";
};

const accentVar = {
  teal: "var(--accent)",
  sky: "var(--accent)",
  accent: "var(--accent)",
} as const;

export function PageHero({ eyebrow, title, lead, accent = "accent" }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl px-5 pb-12 pt-16 text-center sm:px-8 sm:pt-20"
    >
      <p
        className="text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: accentVar[accent] }}
      >
        {eyebrow}
      </p>
      <h1
        className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h1>
      {lead && (
        <p
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--fg-muted)" }}
        >
          {lead}
        </p>
      )}
    </motion.header>
  );
}
