import { ChevronsLeftRight } from "lucide-react";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { PersonAvatar } from "@/components/ui/PersonAvatar";
import type { FaceAsset } from "@/data/faces";

interface BeforeAfterSliderProps {
  beforeLabel: string;
  afterLabel: string;
  face: FaceAsset;
  className?: string;
}

/** Drag the handle: right reveals more of the "before" camera feed, left reveals more of the "after" result. */
export function BeforeAfterSlider({ beforeLabel, afterLabel, face, className = "" }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(event.clientX);
  };
  const stopDragging = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label={`${beforeLabel} / ${afterLabel}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") setPosition((value) => Math.max(4, value - 5));
        if (event.key === "ArrowRight") setPosition((value) => Math.min(96, value + 5));
      }}
      className={`relative touch-none select-none overflow-hidden rounded-2xl bg-dark ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      <div className="absolute inset-0 flex flex-col">
        <span className="px-4 pt-3 text-[11px] font-medium uppercase tracking-wide text-white/70">{afterLabel}</span>
        <div className="flex flex-1 items-center justify-center pb-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: face.bg }}>
            <PersonAvatar fill={face.fill} size={30} />
          </span>
        </div>
      </div>

      <div
        className="absolute inset-0 flex flex-col bg-dark"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="px-4 pt-3 text-[11px] font-medium uppercase tracking-wide text-white/50">{beforeLabel}</span>
        <div className="flex flex-1 items-center justify-center pb-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <PersonAvatar fill="#9A9A9A" size={30} />
          </span>
        </div>
      </div>

      <div className="absolute inset-y-0 z-10 w-px bg-white/60" style={{ left: `${position}%` }} aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-background shadow-lg">
          <ChevronsLeftRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </div>
      </div>
    </div>
  );
}
