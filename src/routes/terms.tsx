import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { legalContent } from "@/data/legalContent";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta({
      title: "Terms of Use — FaceFusion",
      description: "Read the terms of use governing your access to and use of FaceFusion.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  const { locale } = useLanguage();
  return <LegalPage doc={legalContent[locale].terms} />;
}
