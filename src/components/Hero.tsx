import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PopReveal, RiseReveal, WordsReveal } from "@/components/animations/Reveal";
import { FaceFusionDemo } from "@/components/FaceFusionDemo";

function RotatingWord({ words }: { words: string[] }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduced, words.length]);

  return (
    <span className="relative inline-block h-[1.1em] align-bottom text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <PopReveal className="mb-6">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </PopReveal>

          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.1] tracking-tight">
            <WordsReveal text={t.hero.h1Static} className="block" />
            <motion.span
              className="block"
              initial={reduced ? undefined : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: reduced ? 0 : 0.17, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.h1Line2Prefix} <RotatingWord words={t.hero.h1Words} />.
            </motion.span>
            <WordsReveal text={t.hero.h1Suffix} className="block" delay={0.34} />
          </h1>

          <RiseReveal delay={0.1} className="mx-auto mt-7 max-w-xl text-lg text-muted sm:text-xl">
            <p>{t.hero.description}</p>
          </RiseReveal>

          <RiseReveal delay={0.2} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/download" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#hero-demo" variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </RiseReveal>
        </div>

        <div id="hero-demo" className="mx-auto mt-20 max-w-5xl scroll-mt-28">
          <FaceFusionDemo />
        </div>
      </div>
    </section>
  );
}
