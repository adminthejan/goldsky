"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 100;
const frameSrc = (i: number) =>
  `/hero-frames/frame-${String(i + 1).padStart(3, "0")}.jpg`;

// Scroll-distance budget for the pinned hero, in vh units. The pinned
// section's total height is ANIMATION_VH + HOLD_VH + 100 — that trailing
// 100vh is the sticky child's own footprint, which is what the browser
// consumes to release the pin; the first two spans are how much extra
// scroll distance we burn *while still pinned*, split between actually
// scrubbing frames and holding on the final one.
const ANIMATION_VH = 160; // scroll distance spent scrubbing frame 0 -> frame 99
const HOLD_VH = 120; // scroll distance the final frame stays pinned before releasing

/** Draws `src` onto the canvas letterboxed to fit fully inside it (CSS object-fit: contain) — never crops, always centered. */
function drawContain(
  ctx: CanvasRenderingContext2D,
  src: CanvasImageSource & { width: number; height: number },
  cw: number,
  ch: number
) {
  const canvasRatio = cw / ch;
  const imgRatio = src.width / src.height;
  let dw: number, dh: number, dx: number, dy: number;
  if (imgRatio > canvasRatio) {
    dw = cw;
    dh = dw / imgRatio;
    dx = 0;
    dy = (ch - dh) / 2;
  } else {
    dh = ch;
    dw = dh * imgRatio;
    dx = (cw - dw) / 2;
    dy = 0;
  }
  ctx.clearRect(0, 0, cw, ch);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(src, 0, 0, src.width, src.height, dx, dy, dw, dh);
}

/**
 * The source frames are studio photos on a flat gray backdrop — exactly the
 * "hard-edged gray rectangle" the design brief says to remove. The backdrop
 * isn't uniformly near-white (it ranges ~140-230 across frames, darker in
 * the vignetted corners), and some frames scatter bright metal screws and
 * brackets in mid-air at similar luminance — so a flat luminance threshold
 * either leaves the corners boxy or eats into the device. Instead this
 * flood-fills from the four image edges through any "bright enough to be
 * backdrop" pixel, the way a magic-wand background removal works: it
 * follows the backdrop's actual (irregular) shape inward and stops the
 * moment it hits the device's dark silhouette, so isolated bright screws
 * surrounded by backdrop still get cleared around, but a screw's own
 * brightness can't accidentally erase the screw itself since the fill can
 * only enter it by crossing a dark edge first. Returns an offscreen canvas
 * so the caller can drawImage() it synchronously, same as an
 * HTMLImageElement.
 */
const BACKDROP_CANDIDATE_LUMINANCE = 140;

function keyOutBackdrop(img: HTMLImageElement): HTMLCanvasElement {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const off = document.createElement("canvas");
  off.width = w;
  off.height = h;
  const octx = off.getContext("2d")!;
  octx.drawImage(img, 0, 0);

  const frame = octx.getImageData(0, 0, w, h);
  const px = frame.data;
  const luminanceAt = (idx: number) => {
    const o = idx * 4;
    return 0.299 * px[o] + 0.587 * px[o + 1] + 0.114 * px[o + 2];
  };

  const visited = new Uint8Array(w * h);
  const stack: number[] = [];
  const seed = (idx: number) => {
    if (!visited[idx] && luminanceAt(idx) >= BACKDROP_CANDIDATE_LUMINANCE) {
      visited[idx] = 1;
      stack.push(idx);
    }
  };
  for (let x = 0; x < w; x++) {
    seed(x); // top row
    seed((h - 1) * w + x); // bottom row
  }
  for (let y = 0; y < h; y++) {
    seed(y * w); // left column
    seed(y * w + w - 1); // right column
  }

  while (stack.length) {
    const idx = stack.pop()!;
    px[idx * 4 + 3] = 0;

    const x = idx % w;
    const y = (idx / w) | 0;
    if (x > 0) seed(idx - 1);
    if (x < w - 1) seed(idx + 1);
    if (y > 0) seed(idx - w);
    if (y < h - 1) seed(idx + w);
  }

  octx.putImageData(frame, 0, 0);
  return off;
}

/** Gradient mesh + canvas + grounding shadow — the decorative shell shared by both the pinned (desktop) and static (mobile) phone visuals, so they read as the same object. */
function PhoneVisual({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
  return (
    <div className="relative mx-auto w-full" style={{ maxWidth: "min(98vw, 760px)" }}>
      {/* Soft gradient mesh behind the device — depth without a box */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-[12%] -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 38%, color-mix(in srgb, var(--color-gold) 16%, transparent) 0%, transparent 70%), radial-gradient(45% 40% at 60% 75%, color-mix(in srgb, var(--color-ink) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      <div style={{ aspectRatio: "9/16", position: "relative", maxHeight: "min(90vh, 1020px)", margin: "0 auto" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* Grounding shadow beneath the device, in place of a hard box */}
      <div
        aria-hidden
        className="pointer-events-none mx-auto h-6 w-[62%] -translate-y-3"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-ink) 22%, transparent) 0%, transparent 75%)",
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}

/**
 * Desktop hero: the whole row (left copy + phone) pins in the viewport
 * while scroll drives the teardown frame-by-frame, holds on the final
 * frame for a beat once assembled, then releases and scrolls away
 * naturally. Sharing one sticky flex row between both columns is what
 * keeps the phone vertically centered against the *entire* left content
 * block rather than just its headline — they're centered together, not
 * independently.
 */
function PinnedHero({ left, active }: { left: React.ReactNode; active: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const frameIndexRef = useRef(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  // Keying a frame walks every pixel — cache the result per index so it's
  // only paid once per frame, not on every re-scroll across it.
  const keyedCacheRef = useRef<(HTMLCanvasElement | null)[]>(
    new Array(FRAME_COUNT).fill(null)
  );

  const getDrawableFrame = (index: number): HTMLCanvasElement | HTMLImageElement | null => {
    const cached = keyedCacheRef.current[index];
    if (cached) return cached;
    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return null;
    const keyed = keyOutBackdrop(img);
    keyedCacheRef.current[index] = keyed;
    return keyed;
  };

  // Preload every frame — only once this variant is actually the active one
  // (desktop viewport), so mobile visitors never pay for 100 requests.
  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = images;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCountRef.current += 1;
        if (i === 0) setFirstFrameReady(true);
      };
      images[i] = img;
    }

    return () => {
      cancelled = true;
    };
  }, [active]);

  // Size the canvas to its displayed box (accounting for device pixel ratio).
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const resize = () => {
      const box = canvas.parentElement;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const ctx = canvas.getContext("2d");
      const frame = getDrawableFrame(frameIndexRef.current);
      if (ctx && frame) {
        drawContain(ctx, frame, canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [active, firstFrameReady]);

  // Drive the frame index from scroll position — clamped to the
  // ANIMATION_VH portion of the pin, so once the last frame is reached the
  // index simply holds there for the remaining HOLD_VH of scroll instead
  // of continuing to chase scroll position.
  useEffect(() => {
    if (!active) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let lastDrawnIndex = -1;

    const render = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = -rect.top;
      const animScrollPx = (ANIMATION_VH / 100) * vh;
      const progress =
        animScrollPx > 0 ? Math.min(1, Math.max(0, scrolled / animScrollPx)) : 0;

      const loaded = loadedCountRef.current;
      const targetIndex = Math.round(progress * (FRAME_COUNT - 1));
      // Never jump ahead of what's actually loaded yet.
      const index = Math.min(targetIndex, Math.max(loaded - 1, 0));
      frameIndexRef.current = index;

      if (index !== lastDrawnIndex) {
        const frame = getDrawableFrame(index);
        if (frame) {
          drawContain(ctx, frame, canvas.width, canvas.height);
          lastDrawnIndex = index;
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [active, firstFrameReady]);

  return (
    <div
      ref={wrapRef}
      className="relative hidden lg:block"
      style={{ height: `${ANIMATION_VH + HOLD_VH + 100}vh` }}
    >
      {/* `alignItems: "safe center"`, not `items-center`: on a short/wide
          viewport the left copy + phone can be taller than the 100vh
          sticky box. Plain centering would push the overflow equally
          above *and* below — and "above" here means bleeding into the
          sticky Header. "safe center" centers when it fits and falls
          back to start-alignment (top) instead of overflowing the start
          edge when it doesn't, so any excess is guaranteed to land at
          the *bottom* only, never the top. (Set via inline style, not a
          Tailwind class: `items-[safe_center]` silently fails to compile
          — Tailwind's arbitrary-value parser doesn't accept the two-word
          "safe center" — and falls back to the default `normal`/stretch,
          which is what let content overflow in the first place.)
          overflow-hidden then clips that bottom excess instead of
          letting it paint past this box's end and bleed into whatever
          section comes after the pinned hero in the document. */}
      <div className="sticky top-0 flex h-screen overflow-hidden" style={{ alignItems: "safe center" }}>
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-3 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          {left}
          <PhoneVisual canvasRef={canvasRef} />
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile hero: no scroll-jacking — the phone renders as a single static
 * composed frame (the final, fully-assembled one) that fades/scales in
 * once it scrolls into view, same motion language as the rest of the site
 * (see Reveal). Scroll-scrubbing a pinned section feels worse on small
 * screens, so it's skipped entirely rather than just shortened.
 */
function StaticHero({ left }: { left: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.decoding = "async";
    img.src = frameSrc(FRAME_COUNT - 1);

    let keyed: HTMLCanvasElement | null = null;
    const draw = () => {
      const box = canvas.parentElement;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      if (rect.width === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const ctx = canvas.getContext("2d");
      if (ctx && keyed) drawContain(ctx, keyed, canvas.width, canvas.height);
    };

    img.onload = () => {
      keyed = keyOutBackdrop(img);
      draw();
    };

    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [visible]);

  return (
    <div ref={ref} className="lg:hidden">
      <div className="mx-auto max-w-[1280px] px-6 pt-14 sm:pt-20">{left}</div>
      <div
        className={`px-2 pt-12 pb-16 transition-all duration-700 ease-out sm:px-6 sm:pb-20 ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.96] opacity-0"
        }`}
      >
        <PhoneVisual canvasRef={canvasRef} />
      </div>
    </div>
  );
}

export default function Hero({ left }: { left: React.ReactNode }) {
  // Both variants are always mounted (toggled purely by CSS breakpoint, via
  // each variant's own lg:hidden / hidden lg:block classes) so there is
  // never a hydration mismatch. `active` only gates the expensive work
  // (100-frame preload, the scroll rAF loop) so mobile visitors don't pay
  // for the desktop-only pinned animation.
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setActive(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      <PinnedHero left={left} active={active} />
      <StaticHero left={left} />
    </>
  );
}
