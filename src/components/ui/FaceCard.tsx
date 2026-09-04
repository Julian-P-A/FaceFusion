import { motion } from "framer-motion";
import type { FaceAsset } from "@/data/faces";
import { PersonAvatar } from "@/components/ui/PersonAvatar";

interface FaceCardProps {
  face: FaceAsset;
  label: string;
  active?: boolean;
  onSelect?: () => void;
  size?: "sm" | "md" | "lg";
  selectedLabel: string;
}

const sizeClasses = {
  sm: { tile: "h-14 w-14", icon: 22 },
  md: { tile: "h-16 w-16", icon: 26 },
  lg: { tile: "h-20 w-20", icon: 32 },
};

export function FaceCard({ face, label, active, onSelect, size = "md", selectedLabel }: FaceCardProps) {
  const { tile, icon } = sizeClasses[size];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-label={active ? `${label} — ${selectedLabel}` : label}
      className="group flex flex-col items-center gap-2 focus-visible:outline-none"
    >
      <motion.span
        className={`relative flex items-center justify-center rounded-xl ring-2 ${tile} ${
          active ? "ring-accent" : "ring-transparent"
        }`}
        style={{ backgroundColor: face.bg }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 340, damping: 22 }}
      >
        <PersonAvatar fill={face.fill} size={icon} />
      </motion.span>
      <span className="text-xs font-medium text-muted group-focus-visible:text-foreground">{label}</span>
    </button>
  );
}
