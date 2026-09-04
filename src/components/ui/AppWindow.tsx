import { Sun } from "lucide-react";
import type { ReactNode } from "react";

interface AppWindowProps {
  title: string;
  statusLabel: string;
  statusActive?: boolean;
  children: ReactNode;
  className?: string;
}

export function AppWindow({ title, statusLabel, statusActive, children, className = "" }: AppWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-dark shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-dark-surface px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 font-display text-sm font-semibold text-dark-foreground">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70 sm:flex">
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusActive ? "bg-accent" : "bg-white/40"}`}
              aria-hidden="true"
            />
            {statusLabel}
          </span>
          <Sun className="h-4 w-4 text-white/50" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
      {children}
    </div>
  );
}
