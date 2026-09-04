import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import type { FaceAsset } from "@/data/faces";
import { PersonAvatar } from "@/components/ui/PersonAvatar";

interface CameraFrameProps {
  label: string;
  state: string;
  variant: "camera" | "result";
  face?: FaceAsset;
  processing?: boolean;
  className?: string;
}

export function CameraFrame({ label, state, variant, face, processing, className = "" }: CameraFrameProps) {
  return (
    <div
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-dark ${className}`}
    >
      <div className="flex items-center justify-between px-4 pt-4 text-[11px] font-medium uppercase tracking-wide text-white/70">
        <span>{label}</span>
        <span className="flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1">
          <span
            className={`h-1.5 w-1.5 rounded-full ${variant === "result" && !processing ? "bg-accent" : "bg-white/60"}`}
            aria-hidden="true"
          />
          {state}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          {variant === "camera" ? (
            <motion.span
              key="camera"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
            >
              <PersonAvatar fill="#9A9A9A" size={30} />
            </motion.span>
          ) : processing ? (
            <motion.span
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-accent"
            >
              <Loader2 className="h-7 w-7 animate-spin" style={{ animationDuration: "0.9s" }} />
            </motion.span>
          ) : (
            <motion.span
              key={face?.id ?? "result"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: face ? face.bg : "rgba(255,255,255,0.1)" }}
            >
              {face && <PersonAvatar fill={face.fill} size={30} />}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
