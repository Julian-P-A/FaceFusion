import type { Locale } from "@/data/translations";

export interface DownloadCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  detecting: string;
  downloadFor: string;
  osNames: { windows: string; macos: string; unknown: string };
  switchPrompt: string;
  comingSoon: string;
  legalPrefix: string;
  legalTerms: string;
  legalAnd: string;
  legalPrivacy: string;
  legalSuffix: string;
}

export const downloadContent: Record<Locale, DownloadCopy> = {
  en: {
    eyebrow: "( Download )",
    title: "Get FaceFusion.",
    subtitle: "We detected your system below. Not right? Pick your platform manually.",
    detecting: "Detecting your system…",
    downloadFor: "Download for {os}",
    osNames: { windows: "Windows", macos: "macOS", unknown: "your computer" },
    switchPrompt: "Not on {os}? Choose your platform:",
    comingSoon: "The installer isn't published yet — check back soon.",
    legalPrefix: "By downloading and using FaceFusion, you agree to our",
    legalTerms: "Terms and Conditions",
    legalAnd: "and our",
    legalPrivacy: "Privacy Policy",
    legalSuffix: ".",
  },
  es: {
    eyebrow: "( Descargar )",
    title: "Obtén FaceFusion.",
    subtitle: "Detectamos tu sistema abajo. ¿No es el correcto? Elige tu plataforma manualmente.",
    detecting: "Detectando tu sistema…",
    downloadFor: "Descargar para {os}",
    osNames: { windows: "Windows", macos: "macOS", unknown: "tu computador" },
    switchPrompt: "¿No usas {os}? Elige tu plataforma:",
    comingSoon: "El instalador aún no está publicado — vuelve pronto.",
    legalPrefix: "Al descargar y utilizar FaceFusion, acepta nuestro",
    legalTerms: "Términos y condiciones",
    legalAnd: "y nuestro",
    legalPrivacy: "Política de privacidad",
    legalSuffix: ".",
  },
};
