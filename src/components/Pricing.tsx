import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeadingReveal, RiseReveal, StaggerGroup, staggerItem } from "@/components/animations/Reveal";

export function Pricing() {
  const { t } = useLanguage();
  const plans = t.pricing.plans;
  const [selectedId, setSelectedId] = useState(plans[plans.length - 1].id);
  const selected = plans.find((plan) => plan.id === selectedId) ?? plans[0];

  return (
    <section id="pricing" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <RiseReveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-4 block">{t.pricing.eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.02] tracking-tight">
            <HeadingReveal lines={t.pricing.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{t.pricing.description}</p>
        </RiseReveal>

        <StaggerGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2" stagger={0.1}>
          <motion.div variants={staggerItem} className="flex flex-col rounded-[28px] border border-border bg-background p-8">
            <span className="text-sm font-semibold text-muted">{t.pricing.free.name}</span>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold">{t.pricing.free.price}</span>
            </div>
            <p className="mt-3 text-sm text-muted">{t.pricing.free.description}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {t.pricing.free.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted" strokeWidth={1.75} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/download" variant="secondary" className="mt-8 w-full">
              {t.pricing.free.cta}
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col rounded-[28px] border border-foreground bg-dark p-8 text-dark-foreground"
          >
            <span className="text-sm font-semibold text-accent">FaceFusion Pro</span>

            <div className="mt-4 flex flex-wrap gap-2">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedId(plan.id)}
                  aria-pressed={selectedId === plan.id}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    selectedId === plan.id ? "bg-accent text-foreground" : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  {plan.label}
                </button>
              ))}
            </div>

            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-semibold">{selected.price}</span>
              <span className="text-sm text-white/50">{selected.period}</span>
              {selected.badge && (
                <span className="ml-2 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  {selected.badge}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-white/50">{selected.note}</p>

            <span className="mt-6 text-xs font-medium uppercase tracking-wide text-white/40">
              {t.pricing.paidBadge}
            </span>
            <ul className="mt-3 flex-1 space-y-3">
              {t.pricing.paidFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/signup" variant="primary" className="mt-8 w-full">
              {t.pricing.cta}
            </Button>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
