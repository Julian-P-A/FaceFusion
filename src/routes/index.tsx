import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { pageMeta } from "@/lib/seo";
import { Header } from "@/components/Header";
import { GuideLines } from "@/components/GuideLines";
import { Hero } from "@/components/Hero";
import { UseCaseTabs } from "@/components/UseCaseTabs";
import { HowItWorks } from "@/components/HowItWorks";
import { LocalWorkflow } from "@/components/LocalWorkflow";
import { Pricing } from "@/components/Pricing";
import { SystemRequirements } from "@/components/SystemRequirements";
import { FAQ } from "@/components/FAQ";
import { ResponsibleUse } from "@/components/ResponsibleUse";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "FaceFusion — Change Your Face in Real Time",
      description:
        "FaceFusion is a desktop face-changing app for streams, content, pranks and creative camera experiences. Upload a face and transform your look in seconds.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  // Plain <a href="/#section"> links from other pages (header/footer) land here as a
  // full page load. The global `scroll-behavior: smooth` turns scrollIntoView into an
  // animation — calling it again before that animation finishes restarts it from the
  // current (still near-top) position, so it never actually arrives. Scrolling
  // instantly instead avoids that self-interruption.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timeout = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
    }, 120);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuideLines />
      <Header />
      <main>
        <Hero />
        <UseCaseTabs />
        <HowItWorks />
        <LocalWorkflow />
        <Pricing />
        <SystemRequirements />
        <FAQ />
        <ResponsibleUse />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
