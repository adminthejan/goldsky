"use client";

import { useEffect, useState } from "react";

/**
 * Bottom-center "scroll to explore" indicator. Fixed to the viewport so it
 * reads as a cue for the whole hero rather than a badge glued to one edge
 * of the product image — fades out as soon as the visitor actually scrolls.
 */
export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-x-0 bottom-6 z-30 hidden justify-center transition-opacity duration-500 sm:flex ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex animate-soft-bounce flex-col items-center gap-2">
        <span className="eyebrow !text-[10px]">Scroll</span>
        <div className="flex h-9 w-9 items-center justify-center rounded-pill border border-line bg-bone/70 shadow-sm backdrop-blur-sm">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-soft">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
