import { useLanguage } from "@/lib/language";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-dark text-dark-foreground">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-12">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <a href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-dark-foreground">
              <Logo className="h-8 w-8" />
              FaceFusion
            </a>
            <p className="mt-3 text-sm text-white/60">{t.footer.tagline}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-white/40">
                {t.footer.productHeading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.footer.productLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/75 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-white/40">
                {t.footer.legalHeading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.footer.legalLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/75 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-5 py-6 text-xs text-white/40 lg:px-12">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
