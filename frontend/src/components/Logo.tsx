/**
 * GoldSky's mark: an open-ring "G" monogram — the ring (whole, unbroken
 * but for one gap) reads as "Sky" — open, horizon-like — while the gap
 * plus inward bar reads as the initial "G". The bar terminates in a
 * single gold dot: a sunset/sunrise point on the horizon, and the one
 * spot of brand color, echoing the gold accent used for prices and
 * active states everywhere else on the site.
 *
 * Pure SVG primitives (arc/line/circle) with every coordinate computed
 * from the ring's actual geometry (radius 10, centered at 16,16, gap
 * spanning -25°..25°) rather than freehand-drawn, so it stays exact and
 * legible from a 16px favicon up.
 */
export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M 25.06 20.23 A 10 10 0 1 1 25.06 11.77"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line x1="26" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="18" cy="16" r="2" fill="var(--color-gold)" />
    </svg>
  );
}

export default function Logo({
  className = "",
  iconClassName = "h-6 w-6",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={iconClassName} />
      <span className="font-display font-semibold tracking-tight">GoldSky</span>
    </span>
  );
}
