import { AnimatePresence, motion } from "framer-motion";
import { Phone, Radio, UserRound, Video } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { demoFaces } from "@/data/faces";
import { PersonAvatar } from "@/components/ui/PersonAvatar";
import { HeadingReveal, RiseReveal } from "@/components/animations/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const tabIcon: Record<string, typeof Phone> = { prank: Phone, stream: Radio, create: Video, perform: UserRound };
const tabColor: Record<string, string> = {
  prank: "#8F6FFF",
  stream: "#4A9EFF",
  create: "#4AD98F",
  perform: "#FFA24A",
};
const tabTint: Record<string, string> = {
  prank: "#180F2A",
  stream: "#0A1728",
  create: "#0A2018",
  perform: "#241708",
};

function PillButton({ label, danger = false }: { label: string; danger?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1.5 text-[11px] font-medium ${danger ? "bg-red-500/90 text-white" : "bg-white/10 text-white/70"}`}
    >
      {label}
    </span>
  );
}

function PrankVisual({ chrome, color }: { chrome: ReturnType<typeof useLanguage>["t"]["useCaseIntro"]["chrome"]; color: string }) {
  const face = demoFaces[0];
  return (
    <div className="flex h-full flex-col justify-between">
      <span className="text-center text-[10px] font-medium uppercase tracking-wide text-white/40">
        {chrome.videoCall}
      </span>
      <div className="grid flex-1 grid-cols-2 gap-2 py-3">
        <div className="flex items-center justify-center rounded-xl bg-black/30">
          <PersonAvatar fill="#9A9A9A" size={30} />
        </div>
        <div className="relative flex items-center justify-center rounded-xl" style={{ backgroundColor: face.bg }}>
          <PersonAvatar fill={face.fill} size={30} />
          <span
            className="absolute bottom-2 left-2 rounded px-1.5 py-0.5 text-[9px] font-bold text-foreground"
            style={{ backgroundColor: color }}
          >
            FF
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <PillButton label={chrome.mute} />
        <PillButton label={chrome.video} />
        <PillButton label={chrome.end} danger />
      </div>
    </div>
  );
}

function StreamVisual({ chrome, color }: { chrome: ReturnType<typeof useLanguage>["t"]["useCaseIntro"]["chrome"]; color: string }) {
  const face = demoFaces[1];
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-red-400">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
          {chrome.live}
        </span>
        <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold text-foreground" style={{ backgroundColor: color }}>
          {chrome.statusOn}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: face.bg }}>
          <PersonAvatar fill={face.fill} size={30} />
        </span>
      </div>
      <div className="flex justify-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: i === 2 ? color : "rgba(255,255,255,0.15)" }}
          />
        ))}
      </div>
    </div>
  );
}

function CreateVisual() {
  const faces = demoFaces.slice(0, 4);
  return (
    <div className="grid h-full grid-cols-4 gap-2">
      {faces.map((face, index) => (
        <div
          key={face.id}
          className={`flex items-center justify-center rounded-xl ${index === 1 ? "ring-2 ring-offset-0" : ""}`}
          style={{ backgroundColor: index === 1 ? face.bg : "rgba(255,255,255,0.06)", ...(index === 1 ? { boxShadow: `0 0 0 2px ${tabColor.create}` } : {}) }}
        >
          <PersonAvatar fill={index === 1 ? face.fill : "#6B6B6B"} size={22} />
        </div>
      ))}
    </div>
  );
}

function PerformVisual({ chrome, color }: { chrome: ReturnType<typeof useLanguage>["t"]["useCaseIntro"]["chrome"]; color: string }) {
  const faces = demoFaces.slice(0, 3);
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-1 flex-col justify-center gap-2">
        {faces.map((face, index) => (
          <div
            key={face.id}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 ${index === 1 ? "" : "bg-white/5"}`}
            style={index === 1 ? { backgroundColor: `${color}26`, boxShadow: `inset 0 0 0 1px ${color}66` } : undefined}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: face.bg }}>
              <PersonAvatar fill={face.fill} size={14} />
            </span>
            <span className={`text-xs font-medium ${index === 1 ? "" : "text-white/60"}`} style={index === 1 ? { color } : undefined}>
              {chrome.character} 0{index + 1}
            </span>
            {index === 1 && <span className="ml-auto h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />}
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1 rounded-full"
            style={{ width: i === 1 ? "24px" : "6px", backgroundColor: i === 1 ? color : "rgba(255,255,255,0.15)" }}
          />
        ))}
      </div>
    </div>
  );
}

export function UseCaseTabs() {
  const { t } = useLanguage();
  const tabs = t.useCaseIntro.tabs;
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const ActiveIcon = tabIcon[active.id] ?? Phone;
  const activeColor = tabColor[active.id];

  return (
    <section id="use-cases" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <RiseReveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-4 block">{t.useCaseIntro.eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.02] tracking-tight">
            <HeadingReveal lines={t.useCaseIntro.heading} />
          </h2>
        </RiseReveal>

        <div className="mx-auto mt-10 flex max-w-full justify-start gap-2 overflow-x-auto sm:mt-14 sm:justify-center">
          {tabs.map((tab) => {
            const Icon = tabIcon[tab.id] ?? Phone;
            const isActive = activeId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`flex flex-shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "bg-foreground" : "bg-surface hover:text-foreground"
                }`}
                style={{ color: isActive ? tabColor[tab.id] : undefined }}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                <span className={isActive ? "" : "text-muted"}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div
          className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] p-6 transition-colors duration-500 sm:mt-14 sm:grid-cols-2 sm:p-10"
          style={{ backgroundColor: tabTint[active.id] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 text-dark-foreground sm:order-1"
            >
              <span
                className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide"
                style={{ color: activeColor }}
              >
                <ActiveIcon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                {active.label}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{active.title}</h3>
              <p className="mt-3 text-white/60">{active.description}</p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 h-56 rounded-2xl bg-black/20 p-4 sm:order-2 sm:h-64"
            >
              {active.id === "prank" && <PrankVisual chrome={t.useCaseIntro.chrome} color={activeColor} />}
              {active.id === "stream" && <StreamVisual chrome={t.useCaseIntro.chrome} color={activeColor} />}
              {active.id === "create" && <CreateVisual />}
              {active.id === "perform" && <PerformVisual chrome={t.useCaseIntro.chrome} color={activeColor} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
