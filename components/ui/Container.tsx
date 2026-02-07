import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Use for full-bleed sections (e.g. horizontal scroll) that need container padding only on x-axis */
  as?: "div" | "section" | "main" | "header" | "footer";
}

/**
 * Wraps content in the project's container: max-width by breakpoint, centered, with consistent padding.
 * Use as the base for all page/section layout.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return <Tag className={`container ${className}`.trim()}>{children}</Tag>;
}
