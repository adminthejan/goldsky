export type BrandLogo = {
  name: string;
  src: string;
  /** infinix.jpg ships white-on-black, unlike every other logo here (dark mark on white) — invert it losslessly instead of showing a black box. */
  invert?: boolean;
};

/**
 * Two logo rows drifting in opposite directions, each a doubled-up copy
 * of its brand list so the loop is seamless (see .marquee-track in
 * globals.css). Replaces a fixed grid — with 10 brands and 4 columns a
 * grid always leaves one dead cell, which read as a broken/missing tile
 * rather than an intentional empty state.
 *
 * The loop is driven by `translateX(-50%)`, which is only an exact
 * half-copy shift if every item — including the last one in each
 * copy — owns the same trailing space. A flex `gap` doesn't do that:
 * it sits *between* items, so N items only carry N-1 gaps, and the
 * doubled track ends up one gap narrower than "two full copies," which
 * makes -50% overshoot the true seam by half a gap every cycle — a
 * visible stutter/gap right where each row "wraps." Each logo instead
 * carries its own trailing margin (see MarqueeRow), so every item —
 * last one included — contributes an identical width+space, and two
 * copies really are exactly double, with no seam to see.
 */
export default function BrandMarquee({ brands }: { brands: BrandLogo[] }) {
  const mid = Math.ceil(brands.length / 2);
  const rowA = brands.slice(0, mid);
  const rowB = brands.slice(mid);

  return (
    <div
      className="flex flex-col gap-8 py-2 sm:gap-10"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <MarqueeRow items={rowA} duration={34} />
      <MarqueeRow items={rowB} duration={27} reverse />
    </div>
  );
}

function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: BrandLogo[];
  duration: number;
  reverse?: boolean;
}) {
  // Doubled so the track can loop by sliding exactly one copy-width.
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className="marquee-track flex w-max items-center"
        style={
          {
            animationDirection: reverse ? "reverse" : "normal",
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        {loop.map((b, i) => (
          // mr-*, not the row's gap: every item (including the last one
          // in each copy) needs the *same* trailing space for the two
          // copies to be truly identical widths — see the note above.
          <div key={`${b.name}-${i}`} className="group mr-14 shrink-0 sm:mr-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b.src}
              alt={b.name}
              aria-hidden={i >= items.length ? true : undefined}
              className={`h-7 w-auto max-w-[110px] object-contain opacity-45 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-9 ${
                b.invert ? "invert" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
