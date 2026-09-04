/**
 * facefusion.example is a placeholder (RFC 2606 reserved TLD, resolves nowhere) —
 * set VITE_SITE_URL once a real domain exists.
 */
export const siteUrl = (import.meta.env.VITE_SITE_URL || "https://facefusion.example").replace(
  /\/$/,
  "",
);

interface PageMetaOptions {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/login". Used to build the page's own canonical/og:url. */
  path: string;
}

/**
 * Every route must build its own canonical/og:url/social tags with this helper rather than
 * relying on the root route's — TanStack Router dedupes <meta> by name/property (child wins)
 * but does NOT dedupe <link> tags at all, so a root-level canonical would render twice
 * (once from root, once from the leaf) instead of being overridden.
 */
export function pageMeta({ title, description, path }: PageMetaOptions) {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
