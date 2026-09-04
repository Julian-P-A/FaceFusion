import type { LegalDoc } from "@/data/legalContent";
import { Header } from "@/components/Header";
import { GuideLines } from "@/components/GuideLines";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RiseReveal } from "@/components/animations/Reveal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GuideLines />
      <Header />
      <main className="pb-24 pt-36 sm:pt-44">
        <div className="mx-auto max-w-[820px] px-5 lg:px-12">
          <RiseReveal>
            <Eyebrow className="mb-4 block">{doc.eyebrow}</Eyebrow>
            <h1 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              {doc.title}
            </h1>
            <p className="mt-3 text-sm text-muted">{doc.updated}</p>
            <p className="mt-8 text-lg text-muted">{doc.intro}</p>
          </RiseReveal>

          <div className="mt-14 space-y-10">
            {doc.sections.map((section) => (
              <div key={section.heading} className="border-t border-border pt-8">
                <h2 className="font-display text-xl font-semibold tracking-tight">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-muted">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
