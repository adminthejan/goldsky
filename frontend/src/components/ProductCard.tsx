"use client";

import { useState } from "react";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { formatLkr, type ProductVariant } from "@/lib/api";

/**
 * Shared product tile — homepage, listing, and search all render the same
 * card. No border, no bordered "photo box": image floats on a soft
 * skeleton ground, hover only lifts the image and reveals the CTA cue.
 */
export default function ProductCard({
  href,
  status = "In Stock",
  fitLine,
  name,
  retailPrice,
  compareAtPrice,
  wholesalePrice,
  imageSrc,
  variants,
}: {
  href: string;
  status?: string;
  fitLine: string;
  name: string;
  retailPrice: number;
  /** Former/list price, shown struck through — only when it's genuinely higher than retailPrice. */
  compareAtPrice?: number | null;
  wholesalePrice: number | null;
  imageSrc?: string | null;
  variants?: ProductVariant[];
}) {
  const [selectedVariant, setSelectedVariant] = useState(0);

  const onSale = !!compareAtPrice && compareAtPrice > retailPrice;
  const discountPercent = onSale ? Math.round((1 - retailPrice / compareAtPrice!) * 100) : 0;

  return (
    <Link href={href} className="group block">
      <div className="relative mb-5 overflow-hidden rounded-md">
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <PlaceholderImage ratio="1/1" src={imageSrc} alt={name} />
        </div>
        {status && (
          <span className="absolute top-3 left-3 rounded-pill bg-bone/90 px-2.5 py-1 text-[10px] font-medium tracking-wide text-ink-soft backdrop-blur-sm">
            {status}
          </span>
        )}
        {onSale && (
          <span className="absolute top-3 right-3 rounded-pill bg-gold px-2.5 py-1 text-[10px] font-semibold tracking-wide text-ink-inverse">
            −{discountPercent}%
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-xs bg-ink/80 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.08em] text-ink-inverse backdrop-blur-sm">
          90-Day Warranty
        </span>
      </div>

      <div className="text-[12px] tracking-wide text-ink-faint">{fitLine}</div>
      <h3 className="link-underline mt-1 mb-2 font-display text-[17px] font-medium leading-snug text-ink">
        {name}
      </h3>

      {variants && variants.length > 0 && (
        <div className="mb-2 flex items-center gap-1.5">
          {variants.map((variant, i) => (
            <button
              key={variant.id}
              type="button"
              title={variant.label}
              aria-label={variant.label}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant(i);
              }}
              className={`h-4 w-4 shrink-0 rounded-full border transition-all duration-200 ${
                selectedVariant === i ? "border-ink ring-1 ring-ink ring-offset-1" : "border-line"
              }`}
              style={{ backgroundColor: variant.swatch_hex ?? "var(--color-bone-soft)" }}
            />
          ))}
        </div>
      )}

      <div className="flex items-baseline gap-2 text-[13px] text-ink-faint">
        <span>Retail {formatLkr(retailPrice)}</span>
        {onSale && <span className="text-ink-faint/70 line-through">{formatLkr(compareAtPrice!)}</span>}
      </div>
      <div className="font-display text-[19px] font-semibold tabular-nums text-gold">
        from {formatLkr(wholesalePrice ?? retailPrice)}
      </div>
    </Link>
  );
}
