/**
 * Stand-in for real product/location photography. Renders as a soft,
 * off-white shimmering skeleton instead of the old gray diagonal-stripe
 * "product photo" box — reads as a loading state, not a broken layout,
 * and needs no border/frame since the shimmer itself defines the edge.
 */
export default function PlaceholderImage({
  ratio = "1/1",
  label,
  className = "",
  rounded = "rounded-md",
  src,
  alt = "",
}: {
  ratio?: string;
  label?: string;
  className?: string;
  rounded?: string;
  /** Real product/location photo URL. Falls back to the shimmer when omitted. */
  src?: string | null;
  alt?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-bone-soft ${rounded} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`skeleton relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {label && (
        <span className="eyebrow absolute bottom-3 left-3 !text-[9px] text-ink-faint/70">
          {label}
        </span>
      )}
    </div>
  );
}
