import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { authContent } from "@/data/authContent";
import { pageMeta } from "@/lib/seo";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/signup")({
  head: () =>
    pageMeta({
      title: "Sign up — FaceFusion",
      description: "Create a free FaceFusion account to start transforming your face in real time.",
      path: "/signup",
    }),
  component: SignupPage,
});

function SignupPage() {
  const { locale } = useLanguage();
  const copy = authContent[locale].signup;
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="font-display text-2xl font-semibold tracking-tight">{copy.title}</h1>
        <p className="mt-1.5 text-muted">{copy.subtitle}</p>
      </div>

      <form className="mt-8" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="signup-email" className="sr-only">
          {copy.emailLabel}
        </label>
        <div className="flex items-center rounded-full border border-border bg-surface pl-5 pr-1.5 focus-within:border-foreground/40">
          <input
            id="signup-email"
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
            disabled={!agreed}
            aria-label={copy.submit}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent text-foreground transition-colors hover:bg-[#e0004d] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <label className="mt-5 flex items-start gap-2.5 text-sm text-muted">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-border accent-accent"
          />
          <span>
            {copy.agreePrefix}{" "}
            <a href="/terms" className="font-medium text-foreground underline underline-offset-4">
              {copy.agreeTerms}
            </a>{" "}
            {copy.agreeAnd}{" "}
            <a href="/privacy" className="font-medium text-foreground underline underline-offset-4">
              {copy.agreePrivacy}
            </a>
            {copy.agreeSuffix}
          </span>
        </label>
      </form>

      <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted">
        {copy.altPrompt}{" "}
        <a href="/login" className="font-medium text-foreground underline underline-offset-4">
          {copy.altLink}
        </a>
      </p>
    </AuthShell>
  );
}
