import { useLanguage } from "@/lib/language";
import { demoFaces } from "@/data/faces";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PersonAvatar } from "@/components/ui/PersonAvatar";
import { RiseReveal, StaggerGroup, WordsReveal, staggerItem } from "@/components/animations/Reveal";
import { motion } from "framer-motion";

function StepVisual({ index }: { index: number }) {
  const { t } = useLanguage();

  if (index === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl bg-dark p-6">
        <div className="flex gap-3">
          {demoFaces.slice(0, 3).map((face) => (
            <span
              key={face.id}
              className="flex h-14 w-14 items-center justify-center rounded-xl"
              style={{ backgroundColor: face.bg }}
              aria-hidden="true"
            >
              <PersonAvatar fill={face.fill} size={22} />
            </span>
          ))}
        </div>
        <span className="rounded-full border border-dashed border-white/25 px-4 py-1.5 text-xs text-white/60">
          {t.howItWorks.addFaceCta}
        </span>
      </div>
    );
  }

  if (index === 1) {
    return (
      <BeforeAfterSlider
        beforeLabel={t.ui.original}
        afterLabel={t.heroDemo.statusActive}
        face={demoFaces[1]}
        className="h-full"
      />
    );
  }

  if (index === 2) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl bg-dark p-6">
        <div className="flex items-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: demoFaces[i].bg }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <PersonAvatar fill={demoFaces[i].fill} size={26} />
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-wrap items-center justify-center gap-3 rounded-2xl bg-dark p-6">
      {["Stream", "Prank", "Content", "Character"].map((label) => (
        <span key={label} className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80">
          {label}
        </span>
      ))}
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <RiseReveal className="max-w-2xl">
          <Eyebrow className="mb-4 block">{t.howItWorks.eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
            <WordsReveal text={t.howItWorks.title} />
          </h2>
        </RiseReveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {t.howItWorks.steps.map((step, index) => (
            <motion.div key={step.number} variants={staggerItem} className="flex flex-col gap-5">
              <div className="h-48">
                <StepVisual index={index} />
              </div>
              <div>
                <span className="font-display text-sm font-semibold text-accent">{step.number}</span>
                <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
