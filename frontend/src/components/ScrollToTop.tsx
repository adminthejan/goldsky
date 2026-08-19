"use client";

import { useEffect, useState } from "react";

/**
 * Floating "back to top" button — appears once the visitor has scrolled
 * a full screen down, sits bottom-left so it never collides with the
 * WhatsApp fab (bottom-right) or the PDP's mobile sticky order bar.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`scroll-to-top-fab fixed bottom-5 left-5 z-40 flex h-10 w-10 items-center justify-center rounded-pill border border-line bg-bone/90 text-ink-soft shadow-[0_6px_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:text-ink ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
