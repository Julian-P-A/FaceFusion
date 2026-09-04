// The real installer URL. Left unset until one exists — set VITE_DOWNLOAD_URL to
// enable the download button on /download instead of pointing anywhere invented.
export const DOWNLOAD_URL: string | null = import.meta.env.VITE_DOWNLOAD_URL || null;
