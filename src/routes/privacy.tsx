import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { legalContent } from "@/data/legalContent";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy — FaceFusion",
      description: "Learn how FaceFusion collects, uses, and protects your data.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { locale } = useLanguage();
  return <LegalPage doc={legalContent[locale].privacy} />;
}
