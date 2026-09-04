import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { DownloadPage } from "@/components/DownloadPage";

export const Route = createFileRoute("/download")({
  head: () =>
    pageMeta({
      title: "Download — FaceFusion",
      description: "Download FaceFusion for Windows or macOS and start transforming your face in real time.",
      path: "/download",
    }),
  component: DownloadPage,
});
