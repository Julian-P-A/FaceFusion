import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { authContent } from "@/data/authContent";
import { pageMeta } from "@/lib/seo";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/login")({
  head: () =>
    pageMeta({
      title: "Log in — FaceFusion",
      description: "Log in to your FaceFusion account to access your face-changing app and settings.",
      path: "/login",
    }),
  component: LoginPage,
});

function LoginPage() {
  const { locale } = useLanguage();
  const copy = authContent[locale].login;
  const [email, setEmail] = useState("");

  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight">{copy.title}</h1>
        <p className="mt-1.5 text-muted">{copy.subtitle}</p>
      </div>

      <form className="mt-8" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="login-email" className="sr-only">
          {copy.emailLabel}
        </label>
        <div className="flex items-center rounded-full border border-border bg-surface pl-5 pr-1.5 focus-within:border-foreground/40">
          <input
            id="login-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.emailPlaceholder}
            className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            aria-label={copy.submit}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent text-foreground transition-colors hover:bg-[#e0004d]"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </form>

      <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted">
        {copy.altPrompt}{" "}
        <a href="/signup" className="font-medium text-foreground underline underline-offset-4">
          {copy.altLink}
        </a>
      </p>
    </AuthShell>
  );
}
