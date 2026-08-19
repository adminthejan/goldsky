/**
 * GoldSky's mark: a minimal IC/chip-package silhouette — the shop's
 * actual craft is chip-level micro-soldering, so the mark is drawn from
 * the thing on the bench, not a generic phone outline. The single gold
 * dot is the "pin-1" indicator real IC packages use to mark their first
 * lead/orientation corner — repurposed here as the one spot of brand
 * color, echoing the gold accent used for prices and active states
 * everywhere else on the site. Same thin-outline-on-transparent language
 * as the homepage's circle/square/diamond feature icons, just precise
 * enough to read as a specific object instead of an abstract shape.
 *
 * Pure SVG primitives (rect/line/circle), not a freehand path — every
 * coordinate is intentional and the whole mark is symmetric, so it holds
 * up from a 16px favicon to a large print/print-like use.
 */
const PIN_POSITIONS = [11, 16, 21] as const;

export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect x="7" y="7" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      {PIN_POSITIONS.map((pos) => (
        <g key={pos} stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1={pos} y1="7" x2={pos} y2="3" />
          <line x1={pos} y1="25" x2={pos} y2="29" />
          <line x1="7" y1={pos} x2="3" y2={pos} />
          <line x1="25" y1={pos} x2="29" y2={pos} />
        </g>
      ))}
      <circle cx="12" cy="12" r="2.3" fill="var(--color-gold)" />
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
