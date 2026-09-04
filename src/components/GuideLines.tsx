/**
 * Decorative full-page vertical guides matching the reference's layout system:
 * two solid lines at the content container's edges. Purely visual — sits
 * behind all content.
 */
export function GuideLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden lg:block" aria-hidden="true">
      <div className="mx-auto h-full w-full max-w-[1280px] border-x border-border" />
    </div>
  );
}
