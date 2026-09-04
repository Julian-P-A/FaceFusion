export type DetectedOS = "windows" | "macos" | "unknown";

/** Best-effort client-side OS sniff from the user agent. Call only in the browser. */
export function detectOS(): DetectedOS {
  if (typeof navigator === "undefined") return "unknown";
  const ua = `${navigator.userAgent} ${navigator.platform ?? ""}`.toLowerCase();

  if (ua.includes("win")) return "windows";
  if (ua.includes("mac") || ua.includes("iphone") || ua.includes("ipad")) return "macos";
  return "unknown";
}
