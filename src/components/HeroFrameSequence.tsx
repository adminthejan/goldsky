"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 100;
const frameSrc = (i: number) =>
  `/hero-frames/frame-${String(i + 1).padStart(3, "0")}.jpg`;

/** Draws `img` onto the canvas cropped to fill it (like CSS object-fit: cover). */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number
) {
  const canvasRatio = cw / ch;
  const imgRatio = img.width / img.height;
  let sx: number, sy: number, sw: number, sh: number;
  if (imgRatio > canvasRatio) {
    sh = img.height;
    sw = sh * canvasRatio;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / canvasRatio;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

/**
 * Classic "scroll-scrubbed" hero: a sequence of pre-rendered frames is
 * preloaded, then painted onto a canvas frame-by-frame as the user scrolls
 * through a tall pinned section — the phone teardown plays out entirely
 * driven by scroll position, not by a timer or a <video> seek.
 */
export default function HeroFrameSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const frameIndexRef = useRef(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Preload every frame.
  useEffect(() => {
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
  }, []);

  // Size the canvas to its displayed box (accounting for device pixel ratio).
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const resize = () => {
      const sticky = canvas.parentElement;
      if (!sticky) return;
      const rect = sticky.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const ctx = canvas.getContext("2d");
      const img = imagesRef.current[frameIndexRef.current];
      if (ctx && img && img.complete && img.naturalWidth > 0) {
        drawCover(ctx, img, canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [firstFrameReady]);

  // Drive the frame index from scroll position.
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let lastDrawnIndex = -1;

    const render = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = wrap.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;

      const loaded = loadedCountRef.current;
      const targetIndex = Math.round(progress * (FRAME_COUNT - 1));
      // Never jump ahead of what's actually loaded yet.
      const index = Math.min(targetIndex, Math.max(loaded - 1, 0));
      frameIndexRef.current = index;

      if (index !== lastDrawnIndex) {
        const img = imagesRef.current[index];
        if (img && img.complete && img.naturalWidth > 0) {
          drawCover(ctx, img, canvas.width, canvas.height);
          lastDrawnIndex = index;
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [firstFrameReady]);

  return (
    <div ref={wrapRef} style={{ height: "260vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: "96px",
          width: "100%",
          maxWidth: "420px",
          marginLeft: "auto",
          aspectRatio: "9/16",
          background: "#F7F6F3",
          border: "1px solid #E4E2DD",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>
    </div>
  );
}
