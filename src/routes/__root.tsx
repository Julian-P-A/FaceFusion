import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { translations, defaultLocale } from "@/data/translations";
import { LanguageProvider } from "@/lib/language";
import { siteUrl } from "@/lib/seo";
import appCss from "@/styles.css?url";

const meta = translations[defaultLocale].meta;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Fallback only — every route overrides title/description/og/twitter via
      // src/lib/seo.ts's pageMeta() so subpages never inherit the homepage's copy.
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:site_name", content: "FaceFusion" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "es_ES" },
      { property: "og:image", content: `${siteUrl}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${siteUrl}/og-image.jpg` },
      { name: "theme-color", content: "#100e0e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: RootComponent,
});

// No SoftwareApplication structured data is emitted: schema.org requires fields
// (operatingSystem, price, ratings) that have not been verified for the real
// application yet. Add it once that information is confirmed.

function RootComponent() {
  return (
    <RootDocument>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang={defaultLocale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
