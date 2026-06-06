import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all",
    variant === "primary" &&
      "bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25 hover:opacity-90",
    variant === "outline" &&
      "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
