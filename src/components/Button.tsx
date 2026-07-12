type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export function Button({
  children,
  href = "#request-demo",
  variant = "primary",
  className = "",
  showArrow = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const styles = variant === "primary" ? "btn-solid" : "btn-ghost";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {showArrow && (
        <span aria-hidden className="text-base leading-none">
          →
        </span>
      )}
    </a>
  );
}
