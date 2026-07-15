import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export function Button({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  showArrow = false,
}: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";
  const styles = variant === "primary" ? "btn-solid" : "btn-ghost";
  const cls = `${base} ${styles} ${className}`;
  const content = (
    <>
      {children}
      {showArrow && (
        <span aria-hidden className="text-base leading-none">
          →
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href ?? "/contact"} className={cls}>
      {content}
    </a>
  );
}
