interface PersonAvatarProps {
  fill: string;
  size?: number;
  className?: string;
}

/** Two-shape silhouette icon (head + shoulders) — matches the approved reference art direction. */
export function PersonAvatar({ fill, size = 20, className }: PersonAvatarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18" cy="14" r="7" fill={fill} opacity="0.85" />
      <ellipse cx="18" cy="30" rx="12" ry="8" fill={fill} opacity="0.5" />
    </svg>
  );
}
