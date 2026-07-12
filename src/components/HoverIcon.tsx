import type { LucideIcon } from "lucide-react";
import type { IconHoverVariant } from "./iconHoverVariants";

export type { IconHoverVariant } from "./iconHoverVariants";

type Props = {
  icon: LucideIcon;
  variant: IconHoverVariant;
  className?: string;
  size?: number;
  color?: string;
};

/**
 * Icon with a page-specific hover motion.
 * Place inside a `.group` card — animates when the card is hovered.
 */
export function HoverIcon({
  icon: Icon,
  variant,
  className = "",
  size = 24,
  color = "var(--accent)",
}: Props) {
  return (
    <span
      className={`mb-4 inline-flex origin-center icon-hover icon-hover--${variant} ${className}`}
      style={{ color }}
    >
      <Icon size={size} strokeWidth={1.5} aria-hidden />
    </span>
  );
}
