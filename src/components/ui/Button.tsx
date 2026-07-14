import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--secondary)] text-black hover:opacity-90",

    secondary:
      "bg-[var(--primary)] text-white hover:opacity-90",

    outline:
      "border border-[var(--secondary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-black",
  };

  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
