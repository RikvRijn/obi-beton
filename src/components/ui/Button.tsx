import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
};

export function Button({ href, children, variant = "primary", className = "", target }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase font-display transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.97] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const styles =
    variant === "primary"
      ? "bg-accent text-on-dark hover:bg-accent-glow"
      : "border border-white/25 text-on-dark hover:border-accent hover:text-accent";

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
