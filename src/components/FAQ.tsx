import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RiseReveal, WordsReveal } from "@/components/animations/Reveal";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <RiseReveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-4 block">{t.faq.eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
            <WordsReveal text={t.faq.title} />
          </h2>
        </RiseReveal>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-border sm:mt-16">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold sm:text-lg">{item.question}</span>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
