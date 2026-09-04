export interface FaceAsset {
  id: string;
  /** Icon fill color — matches the reference design's exact palette. */
  fill: string;
  /** Pastel tint used behind the icon. */
  bg: string;
}

// Abstract, generated placeholder identities — never real or public-figure faces.
// Palette matches the approved visual reference: a solid pastel tile with a
// two-tone silhouette icon in the corresponding accent color.
export const demoFaces: FaceAsset[] = [
  { id: "01", fill: "#4A6FA5", bg: "#D6E4F7" },
  { id: "02", fill: "#A56B4A", bg: "#F7E4D6" },
  { id: "03", fill: "#4A8F6A", bg: "#D6F7E4" },
  { id: "04", fill: "#8F4A6A", bg: "#F7D6E4" },
  { id: "05", fill: "#6A4A8F", bg: "#E4D6F7" },
  { id: "06", fill: "#4A8F8F", bg: "#D6F7F7" },
];
