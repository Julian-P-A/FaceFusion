import type { ReactNode } from "react";

/** Plain small-caps label used above headlines — matches the approved reference typography. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.11em] text-foreground ${className}`}
    >
      {children}
    </span>
  );
}
