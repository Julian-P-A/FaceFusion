import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md";
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-foreground text-background hover:bg-white",
  secondary: "bg-transparent text-foreground border border-border hover:border-foreground/30",
  dark: "bg-dark text-dark-foreground hover:bg-black border border-border",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3.5 text-[13px] gap-1.5",
  md: "h-10 px-4 text-[15px] gap-1.5",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  const handlePointerMove = (event: React.PointerEvent) => {
    if (reduced || event.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.2, y: y * 0.2 });
  };

  const handlePointerLeave = () => setOffset({ x: 0, y: 0 });

  const baseClass = `inline-flex items-center justify-center rounded-full font-sans font-medium transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      className="inline-flex items-center gap-1.5"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={baseClass}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={baseClass}
      {...rest}
    >
      {content}
    </button>
  );
}
