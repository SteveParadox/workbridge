import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  icon?: LucideIcon;
  className?: string;
};

const variants = {
  primary:
    "bg-navy text-white shadow-soft hover:bg-navy-deep focus-visible:outline-gold",
  secondary:
    "border border-navy/15 bg-white text-navy hover:border-gold hover:bg-gold/10",
  ghost: "text-navy hover:bg-navy/5",
  light: "bg-white text-navy hover:bg-gold/10"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
