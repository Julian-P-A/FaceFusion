import { Laptop, Monitor } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RiseReveal, WordsReveal } from "@/components/animations/Reveal";

const platformIcon: Record<string, typeof Monitor> = {
  windows: Monitor,
  macos: Laptop,
};

export function SystemRequirements() {
  const { t } = useLanguage();
  const platforms = t.systemRequirements.platforms;
  const [activeId, setActiveId] = useState(platforms[0].id);
  const active = platforms.find((p) => p.id === activeId) ?? platforms[0];

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
        <RiseReveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mb-4 block">{t.systemRequirements.eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
            <WordsReveal text={t.systemRequirements.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{t.systemRequirements.description}</p>
        </RiseReveal>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex justify-center gap-2">
            {platforms.map((platform) => {
              const Icon = platformIcon[platform.id] ?? Monitor;
              const isActive = activeId === platform.id;
              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActiveId(platform.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "bg-foreground text-background" : "bg-surface text-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {platform.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="w-1/5 px-5 py-3 font-medium text-muted" scope="col" />
                  <th className="px-5 py-3 font-medium text-muted" scope="col">
                    {t.systemRequirements.columnMinimum}
                  </th>
                  <th className="px-5 py-3 font-medium text-muted" scope="col">
                    {t.systemRequirements.columnRecommended}
                  </th>
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row, index) => (
                  <tr key={row.label} className={index !== 0 ? "border-t border-border" : ""}>
                    <th className="px-5 py-4 font-semibold text-foreground" scope="row">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-muted">{row.minimum}</td>
                    <td className="px-5 py-4 text-foreground/85">{row.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
