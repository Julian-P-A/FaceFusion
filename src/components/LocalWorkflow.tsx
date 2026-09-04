import { useLanguage } from "@/lib/language";
import { MediaReveal, RiseReveal, WordsReveal } from "@/components/animations/Reveal";

export function LocalWorkflow() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 lg:px-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <RiseReveal>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
            <WordsReveal text={t.localWorkflow.title} />
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted">{t.localWorkflow.description}</p>
        </RiseReveal>

        <MediaReveal>
          <div className="rounded-[28px] border border-border bg-surface p-8 sm:p-10">
            <div className="rounded-2xl border border-border bg-background px-5 py-4">
              <span className="font-display text-sm font-semibold">{t.localWorkflow.diagram.root}</span>
            </div>
            <div className="mt-4 space-y-3 border-l border-dashed border-border pl-6">
              {t.localWorkflow.diagram.items.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
                    index === t.localWorkflow.diagram.items.length - 1
                      ? "border-accent/40 bg-accent/10 text-foreground"
                      : "border-border bg-surface text-muted"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === t.localWorkflow.diagram.items.length - 1 ? "bg-accent" : "bg-muted"
                    }`}
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </MediaReveal>
      </div>
    </section>
  );
}
