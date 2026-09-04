import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language";
import { authContent } from "@/data/authContent";
import { GuideLines } from "@/components/GuideLines";
import { Logo } from "@/components/ui/Logo";
import { PopReveal } from "@/components/animations/Reveal";

export function AuthShell({ children }: { children: ReactNode }) {
  const { locale, toggleLocale } = useLanguage();
  const copy = authContent[locale];

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <GuideLines />

      <div className="relative z-10 flex items-center justify-between px-5 py-6 lg:px-12">
        <a href="/" className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground">
          <Logo className="h-5 w-5" />
          {copy.backHome}
        </a>
        <button
          type="button"
          onClick={toggleLocale}
          className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-wide"
          aria-label="Toggle language"
        >
          <span className={locale === "en" ? "text-foreground" : "text-muted"}>EN</span>
          <span className="mx-1 text-muted">/</span>
          <span className={locale === "es" ? "text-foreground" : "text-muted"}>ES</span>
        </button>
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center px-5 py-12">
        <PopReveal className="w-full max-w-sm">
          <div className="mb-8 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <Logo className="h-7 w-7 text-foreground" />
            </span>
          </div>
          {children}
        </PopReveal>
      </main>
    </div>
  );
}
