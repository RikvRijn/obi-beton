import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase font-display transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.97]";

  const styles =
    variant === "primary"
      ? "bg-accent text-on-dark hover:bg-accent-glow"
      : "border border-white/25 text-on-dark hover:border-accent hover:text-accent";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
