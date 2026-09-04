import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeadingReveal, PopReveal, RiseReveal } from "@/components/animations/Reveal";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border py-28 sm:py-36">
      <div className="mx-auto max-w-[1280px] px-5 text-center lg:px-12">
        <PopReveal className="mb-6">
          <Eyebrow>{t.finalCta.eyebrow}</Eyebrow>
        </PopReveal>

        <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
          <HeadingReveal lines={t.finalCta.title} />
        </h2>

        <RiseReveal delay={0.1} className="mx-auto mt-6 max-w-lg text-lg text-muted">
          <p>{t.finalCta.description}</p>
        </RiseReveal>

        <RiseReveal delay={0.2} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/download" variant="primary">
            {t.finalCta.ctaPrimary}
          </Button>
          <Button href="#hero-demo" variant="secondary">
            {t.finalCta.ctaSecondary}
          </Button>
        </RiseReveal>
      </div>
    </section>
  );
}
