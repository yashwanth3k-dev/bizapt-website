import { useId } from "react";
import { useTheme } from "../theme/ThemeProvider";

/** Animated sun/moon theme switch — wired to ThemeProvider. */
export function ThemeSwitch() {
  const { isDark, toggle } = useTheme();
  const id = useId();

  return (
    <label htmlFor={id} className="theme-switch" title={isDark ? "Light mode" : "Dark mode"}>
      <span className="theme-switch__wrap">
        <input
          id={id}
          className="theme-switch__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          checked={isDark}
          onChange={toggle}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        />
        <span className="theme-switch__icon" aria-hidden>
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
          <span className="theme-switch__icon-part" />
        </span>
      </span>
    </label>
  );
}
