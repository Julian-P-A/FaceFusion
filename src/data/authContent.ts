import type { Locale } from "@/data/translations";

export interface AuthCopy {
  backHome: string;
  login: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    altPrompt: string;
    altLink: string;
  };
  signup: {
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    agreePrefix: string;
    agreeTerms: string;
    agreeAnd: string;
    agreePrivacy: string;
    agreeSuffix: string;
    altPrompt: string;
    altLink: string;
  };
}

export const authContent: Record<Locale, AuthCopy> = {
  en: {
    backHome: "Back to FaceFusion",
    login: {
      title: "Welcome back.",
      subtitle: "Log in to FaceFusion.",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      submit: "Continue",
      altPrompt: "Don't have an account?",
      altLink: "Sign up",
    },
    signup: {
      title: "Let's get started.",
      subtitle: "Create your FaceFusion account.",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      submit: "Continue",
      agreePrefix: "I agree to the",
      agreeTerms: "Terms",
      agreeAnd: "and",
      agreePrivacy: "Privacy Policy",
      agreeSuffix: ".",
      altPrompt: "Already have an account?",
      altLink: "Log in",
    },
  },
  es: {
    backHome: "Volver a FaceFusion",
    login: {
      title: "Bienvenido de nuevo.",
      subtitle: "Inicia sesión en FaceFusion.",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      submit: "Continuar",
      altPrompt: "¿No tienes una cuenta?",
      altLink: "Regístrate",
    },
    signup: {
      title: "Empecemos.",
      subtitle: "Crea tu cuenta de FaceFusion.",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      submit: "Continuar",
      agreePrefix: "Acepto los",
      agreeTerms: "Términos",
      agreeAnd: "y la",
      agreePrivacy: "Política de Privacidad",
      agreeSuffix: ".",
      altPrompt: "¿Ya tienes una cuenta?",
      altLink: "Inicia sesión",
    },
  },
};
