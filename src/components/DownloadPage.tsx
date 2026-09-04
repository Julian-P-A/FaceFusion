import { Download, Laptop, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { downloadContent } from "@/data/downloadContent";
import { DOWNLOAD_URL } from "@/data/downloads";
import { detectOS, type DetectedOS } from "@/lib/detectOS";
import { Header } from "@/components/Header";
import { GuideLines } from "@/components/GuideLines";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PopReveal, RiseReveal } from "@/components/animations/Reveal";

const osIcon: Record<DetectedOS, typeof Monitor> = {
  windows: Monitor,
  macos: Laptop,
  unknown: Monitor,
};

const platforms: Exclude<DetectedOS, "unknown">[] = ["windows", "macos"];

export function DownloadPage() {
  const { t, locale } = useLanguage();
  const copy = downloadContent[locale];
  const [selected, setSelected] = useState<DetectedOS>("unknown");
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    setSelected(detectOS());
    setDetected(true);
  }, []);

  const Icon = osIcon[selected];
  const osLabel = copy.osNames[selected];
  const primaryLabel = copy.downloadFor.replace("{os}", osLabel);
  const switchLabel = copy.switchPrompt.replace("{os}", osLabel);
  const hasInstaller = Boolean(DOWNLOAD_URL);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuideLines />
      <Header />
      <main className="flex min-h-screen items-center justify-center px-5 pb-24 pt-32 lg:px-12">
        <div className="mx-auto max-w-lg text-center">
          <PopReveal>
            <Eyebrow className="mb-4 block">{copy.eyebrow}</Eyebrow>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              {copy.title}
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-muted">{copy.subtitle}</p>
          </PopReveal>

          <RiseReveal delay={0.1} className="mt-10 flex flex-col items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface">
              <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
            </span>

            {hasInstaller ? (
              <Button href={DOWNLOAD_URL as string} variant="primary" className="mt-2 min-w-[240px]">
                <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                {detected ? primaryLabel : copy.detecting}
              </Button>
            ) : (
              <>
                <span
                  aria-disabled="true"
                  className="mt-2 inline-flex min-w-[240px] cursor-not-allowed items-center justify-center gap-2 rounded-full bg-foreground/40 px-4 py-3 text-[15px] font-medium text-background"
                >
                  <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  {detected ? primaryLabel : copy.detecting}
                </span>
                <p className="text-xs text-muted">{copy.comingSoon}</p>
              </>
            )}
          </RiseReveal>

          <RiseReveal delay={0.2} className="mt-10 border-t border-border pt-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">{switchLabel}</p>
            <div className="mt-3 flex justify-center gap-2">
              {platforms.map((os) => {
                const PlatformIcon = osIcon[os];
                const isActive = selected === os;
                return (
                  <button
                    key={os}
                    type="button"
                    onClick={() => setSelected(os)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive ? "bg-foreground text-background" : "bg-surface text-muted hover:text-foreground"
                    }`}
                  >
                    <PlatformIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                    {copy.osNames[os]}
                  </button>
                );
              })}
            </div>
          </RiseReveal>

          <RiseReveal delay={0.3} className="mt-10 text-xs text-muted">
            <p>
              {copy.legalPrefix}{" "}
              <a href="/terms" className="font-medium text-foreground underline underline-offset-4">
                {copy.legalTerms}
              </a>{" "}
              {copy.legalAnd}{" "}
              <a href="/privacy" className="font-medium text-foreground underline underline-offset-4">
                {copy.legalPrivacy}
              </a>
              {copy.legalSuffix}
            </p>
          </RiseReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
