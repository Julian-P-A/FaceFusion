import { motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { demoFaces } from "@/data/faces";
import { AppWindow } from "@/components/ui/AppWindow";
import { CameraFrame } from "@/components/ui/CameraFrame";
import { FaceCard } from "@/components/ui/FaceCard";

type Phase = "idle" | "library" | "cursor" | "select" | "processing" | "active";

const AUTO_SELECT_INDEX = 1;

export function FaceFusionDemo() {
  const { t } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const [phase, setPhase] = useState<Phase>("idle");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      setPhase("active");
      setActiveIndex(AUTO_SELECT_INDEX);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase("library"), 500));
    timers.push(setTimeout(() => setPhase("cursor"), 1200));
    timers.push(setTimeout(() => setPhase("select"), 2200));
    timers.push(setTimeout(() => {
      setActiveIndex(AUTO_SELECT_INDEX);
      setPhase("processing");
    }, 2500));
    timers.push(setTimeout(() => setPhase("active"), 3400));

    return () => timers.forEach(clearTimeout);
  }, [inView, reducedMotion]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setPhase("processing");
    window.setTimeout(() => setPhase("active"), 700);
  };

  const isProcessing = phase === "processing";
  const isActive = phase === "active" || activeIndex !== null;
  const showLibrary = phase !== "idle";
  const showCursor = phase === "cursor" && !reducedMotion;
  const selectedFace = activeIndex !== null ? demoFaces[activeIndex] : undefined;

  const statusLabel = isProcessing
    ? t.heroDemo.statusProcessing
    : isActive
      ? t.heroDemo.statusActive
      : t.heroDemo.statusReady;

  return (
    <div ref={containerRef} className="relative">
      <AppWindow title={t.heroDemo.windowTitle} statusLabel={statusLabel} statusActive={isActive}>
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          <div className="h-[220px] bg-dark p-3 sm:h-[300px]">
            <CameraFrame label={t.heroDemo.cameraLabel} state={t.heroDemo.cameraState} variant="camera" />
          </div>
          <div className="h-[220px] bg-dark p-3 sm:h-[300px]">
            <CameraFrame
              label={t.heroDemo.resultLabel}
              state={isActive ? t.heroDemo.resultState : t.heroDemo.statusReady}
              variant="result"
              face={selectedFace}
              processing={isProcessing}
            />
          </div>
        </div>

        <motion.div
          className="relative border-t border-white/10 bg-dark-surface px-5 py-5"
          initial={{ opacity: 0, y: 24 }}
          animate={showLibrary ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wide text-white/50">
              {t.heroDemo.facesLabel}
            </span>
          </div>
          <div className="no-scrollbar flex items-center gap-4 overflow-x-auto">
            {demoFaces.slice(0, 5).map((face, index) => (
              <FaceCard
                key={face.id}
                face={face}
                label={`${index + 1 < 10 ? "0" : ""}${index + 1}`}
                active={activeIndex === index}
                onSelect={() => handleSelect(index)}
                selectedLabel={t.ui.selected}
                size="sm"
              />
            ))}
            <button
              type="button"
              className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/25 text-white/50 transition-colors hover:border-white/50 hover:text-white/80"
              aria-label={t.heroDemo.addFace}
            >
              <Plus className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          {showCursor && (
            <motion.div
              className="pointer-events-none absolute z-10 h-4 w-4 rounded-full border-2 border-accent bg-accent/30"
              style={{ top: "28px" }}
              initial={{ left: "8%", opacity: 0, scale: 0.6 }}
              animate={{
                left: [`8%`, `${18 + AUTO_SELECT_INDEX * 13}%`, `${18 + AUTO_SELECT_INDEX * 13}%`],
                opacity: [0, 1, 1],
                scale: [0.6, 1, 0.85],
              }}
              transition={{ duration: 1, times: [0, 0.7, 1], ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
          )}
        </motion.div>
      </AppWindow>

      <motion.div
        className="absolute -right-4 -top-6 hidden w-52 rounded-2xl border border-white/10 bg-dark/95 p-4 text-dark-foreground shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md sm:block lg:-right-10 lg:-top-8"
        initial={{ opacity: 0, y: -16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-display text-xs font-semibold">{t.heroDemo.floatingTitle}</span>
        </div>
        <dl className="space-y-2 text-[11px] text-white/60">
          <div className="flex items-center justify-between">
            <dt>{t.heroDemo.floatingCamera}</dt>
            <dd className="text-white/85">{t.ui.ready}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>{t.heroDemo.floatingFace}</dt>
            <dd className="text-white/85">
              {activeIndex !== null ? `${activeIndex + 1 < 10 ? "0" : ""}${activeIndex + 1}` : "—"}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>{t.heroDemo.floatingIntensity}</dt>
            <dd className="text-white/85">{isActive ? "80%" : "0%"}</dd>
          </div>
        </dl>
        <div className="mt-3 flex items-center gap-1.5 border-t border-white/10 pt-3 text-[11px] font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {isActive ? t.heroDemo.floatingStatus : t.heroDemo.statusReady}
        </div>
      </motion.div>
    </div>
  );
}
