import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navAnchors = [
  { key: "product", href: "/#hero-demo" },
  { key: "howItWorks", href: "/#how-it-works" },
  { key: "useCases", href: "/#use-cases" },
  { key: "pricing", href: "/#pricing" },
  { key: "safety", href: "/#responsible-use" },
] as const;

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 lg:px-12">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground">
          <Logo className="h-9 w-9" />
          FaceFusion
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navAnchors.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[13px] font-medium text-foreground/75 transition-colors hover:text-foreground"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="/login" className="text-[13px] font-medium text-foreground/75 transition-colors hover:text-foreground">
            {t.nav.login}
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
          <Button href="/download" variant="primary" size="sm">
            {t.header.cta}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span className="relative block h-3.5 w-5">
            <span className="absolute inset-x-0 top-0 h-[1.5px] bg-foreground" />
            <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-foreground" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 font-display text-lg font-semibold text-foreground"
              >
                <Logo className="h-9 w-9" />
                FaceFusion
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full"
                aria-label="Close menu"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute inset-0 top-1/2 h-[1.5px] w-full rotate-45 bg-foreground" />
                  <span className="absolute inset-0 top-1/2 h-[1.5px] w-full -rotate-45 bg-foreground" />
                </span>
              </button>
            </div>

            <motion.nav
              className="flex flex-1 flex-col justify-center gap-6 px-8"
              aria-label="Mobile"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              {navAnchors.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl font-semibold"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                >
                  {t.nav[item.key]}
                </motion.a>
              ))}
              <motion.a
                href="/login"
                className="font-display text-3xl font-semibold"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                {t.nav.login}
              </motion.a>
              <motion.a
                href="/download"
                className="font-display text-3xl font-semibold text-accent"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                {t.nav.download}
              </motion.a>
            </motion.nav>

            <div className="flex items-center justify-between border-t border-border px-8 py-6">
              <button
                type="button"
                onClick={toggleLocale}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold"
              >
                <span className={locale === "en" ? "text-foreground" : "text-muted"}>EN</span>
                <span className="mx-1 text-muted">/</span>
                <span className={locale === "es" ? "text-foreground" : "text-muted"}>ES</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
