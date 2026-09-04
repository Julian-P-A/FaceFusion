import { useLanguage } from "@/lib/language";
import { RiseReveal, WordsReveal } from "@/components/animations/Reveal";

export function ResponsibleUse() {
  const { t } = useLanguage();

  return (
    <section id="responsible-use" className="border-t border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <RiseReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            <WordsReveal text={t.responsibleUse.title} />
          </h2>
          <p className="mt-4 text-muted">{t.responsibleUse.description}</p>
          {t.responsibleUse.links.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
              {t.responsibleUse.links.map((link) => (
                <a key={link.href} href={link.href} className="text-foreground underline underline-offset-4">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </RiseReveal>
      </div>
    </section>
  );
}
