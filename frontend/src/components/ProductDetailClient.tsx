"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { formatLkr, type Product } from "@/lib/api";

const TABS = ["Description", "Compatible Models", "Specifications", "Warranty & Returns"];

const STOCK_DOT: Record<string, string> = {
  "In Stock": "bg-emerald-600",
  "Low Stock": "bg-amber-500",
  "Out of Stock": "bg-red-500",
};

const STOCK_TEXT: Record<string, string> = {
  "In Stock": "text-emerald-700",
  "Low Stock": "text-amber-700",
  "Out of Stock": "text-red-600",
};

const SPEC_ICONS = {
  grade: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2 14.6 8.6 22 9.3 16.5 14 18.2 21 12 17.3 5.8 21 7.5 14 2 9.3 9.4 8.6Z" />
    </svg>
  ),
  warranty: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 4 6v6c0 4.5 3.2 7.9 8 9 4.8-1.1 8-4.5 8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  compatibility: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10 18h4" />
    </svg>
  ),
  stock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7 12 3l9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </svg>
  ),
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const [tab, setTab] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(
    product.variants && product.variants.length > 0 ? 0 : null
  );

  const images = product.images && product.images.length > 0 ? product.images : null;
  const heroImage = images?.find((img) => img.is_primary) ?? images?.[0];
  const thumbImages = images?.filter((img) => img.id !== heroImage?.id) ?? [];

  const variant =
    selectedVariant !== null && product.variants ? product.variants[selectedVariant] : null;
  const variantSuffix = variant ? ` in ${variant.label}` : "";

  const onSale = !!product.compare_at_price && product.compare_at_price > product.retail_price;
  const discountPercent = onSale
    ? Math.round((1 - product.retail_price / product.compare_at_price!) * 100)
    : 0;

  const whatsappMessage = encodeURIComponent(
    `Hi GoldSky, I'd like to order: ${product.name}${variantSuffix} (Part: ${product.part_number}). Quantity: ___. Please confirm price and availability.`
  );
  const whatsappBulkMessage = encodeURIComponent(
    `Hi GoldSky, I'd like to ask about bulk pricing for the ${product.name}.`
  );

  const categoryCrumb = product.category
    ? [{ label: product.category.name, href: "/products" }]
    : [];

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          ...categoryCrumb,
          { label: product.name },
        ]}
      />

      {/* ------------------------------------------------------------ *
       * Gallery + buy box — full-bleed image on a transparent/soft
       * ground, no diagonal-striped frame. Right column is a clean
       * vertical stack: name, price, wholesale tier, two CTAs.
       * ------------------------------------------------------------ */}
      <section className="mx-auto grid max-w-[1280px] gap-12 px-6 pt-8 pb-20 sm:grid-cols-2 sm:gap-16 sm:pt-10 sm:pb-28">
        <Reveal>
          <PlaceholderImage
            ratio="1/1"
            label={heroImage ? undefined : "Front, full screen"}
            src={heroImage?.url}
            alt={product.name}
            className="mb-3"
          />
          {thumbImages.length > 0 && (
            <div className="grid grid-cols-4 gap-3">
              {thumbImages.slice(0, 4).map((img) => (
                <PlaceholderImage key={img.id} ratio="1/1" src={img.url} alt={product.name} rounded="rounded-sm" />
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow mb-4 inline-block rounded-pill bg-gold-soft px-3 py-1 !text-gold-deep">
            {product.quality_grade} Grade
          </span>
          <h1 className="mb-2 font-display text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
            {product.name}
          </h1>
          <div className="mb-4 text-[13px] tabular-nums text-ink-faint">Part No. {product.part_number}</div>
          <span
            className={`mb-7 inline-flex items-center gap-1.5 text-[13px] font-medium ${STOCK_TEXT[product.stock_status] ?? "text-ink-soft"}`}
          >
            <span className={`h-1.5 w-1.5 rounded-pill ${STOCK_DOT[product.stock_status] ?? "bg-ink-faint"}`} />
            {product.stock_status}
          </span>

          {/* Quick-spec row — at-a-glance facts, adapted from a phone-spec
              row (screen/camera/RAM/battery) to what actually matters for
              a part: grade, warranty, fit and stock. */}
          <div className="mb-7 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4 sm:divide-x sm:divide-line">
            {[
              { icon: SPEC_ICONS.grade, value: product.quality_grade, label: "Grade" },
              { icon: SPEC_ICONS.warranty, value: "90 Days", label: "Warranty" },
              {
                icon: SPEC_ICONS.compatibility,
                value: product.device_model?.name ?? "Universal",
                label: "Compatibility",
              },
              { icon: SPEC_ICONS.stock, value: String(product.stock_quantity), label: "In Stock" },
            ].map((spec) => (
              <div key={spec.label} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <div className="mb-2 text-ink-faint">{spec.icon}</div>
                <div className="font-display text-[15px] font-semibold text-ink">{spec.value}</div>
                <div className="text-[12px] text-ink-faint">{spec.label}</div>
              </div>
            ))}
          </div>

          {product.variants && product.variants.length > 0 && (
            <div className="mb-7">
              <div className="mb-2.5 text-[13px] font-medium text-ink">
                {variant ? `Color — ${variant.label}` : "Color"}
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {product.variants.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    title={v.label}
                    aria-label={v.label}
                    aria-pressed={selectedVariant === i}
                    onClick={() => setSelectedVariant(i)}
                    className={`h-7 w-7 shrink-0 rounded-full border transition-all duration-200 ${
                      selectedVariant === i ? "border-ink ring-1 ring-ink ring-offset-2" : "border-line"
                    }`}
                    style={{ backgroundColor: v.swatch_hex ?? "var(--color-bone-soft)" }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-7 border-y border-line py-6">
            <div className="mb-1 flex items-baseline gap-2 text-[15px] text-ink-soft">
              <span>
                Retail <span className="font-medium text-ink">{formatLkr(product.retail_price)}</span>
              </span>
              {onSale && (
                <>
                  <span className="text-ink-faint line-through">{formatLkr(product.compare_at_price!)}</span>
                  <span className="eyebrow rounded-pill bg-gold px-2 py-0.5 !text-ink-inverse">
                    −{discountPercent}%
                  </span>
                </>
              )}
            </div>
            {product.wholesale_price && (
              <>
                <div className="mb-3 font-display text-3xl font-semibold tabular-nums text-gold sm:text-4xl">
                  Wholesale from {formatLkr(product.wholesale_price)}
                </div>
                <span className="eyebrow inline-block rounded-pill bg-gold-soft px-3 py-1 !text-gold-deep">
                  Wholesale · {product.wholesale_min_qty ?? 1}+ units
                </span>
                <p className="mt-3 text-[13px] text-ink-soft">Bulk and dealer rates on WhatsApp.</p>
              </>
            )}
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/9476933255?text=${whatsappMessage}`}
              className="btn-primary flex-1 !bg-whatsapp-deep hover:!bg-whatsapp-deep/90"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.19c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.77-4.14-4.91-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.26.6.87 2.02.95 2.17.08.15.13.32.03.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.29.15.46.13.64-.05.18-.19.75-.87.95-1.17.2-.29.39-.24.65-.14.26.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
              </svg>
              Order on WhatsApp
            </a>
            <a href="tel:+9476933255" className="btn-secondary flex-1">
              Call 076 933 255
            </a>
          </div>
          <a
            href={`https://wa.me/9476933255?text=${whatsappBulkMessage}`}
            className="link-underline mb-8 inline-block text-[13px] font-medium text-ink-soft"
          >
            Ask about bulk pricing
          </a>

          <p className="text-[13px] leading-relaxed text-ink-faint">
            Ships islandwide by courier · Available for pickup at our Eheliyagoda counter.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ *
       * Detail tabs
       * ------------------------------------------------------------ */}
      <section className="mx-auto max-w-[1280px] px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="flex gap-8 overflow-x-auto border-b border-line text-[14px]">
            {TABS.map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                className={`-mb-px shrink-0 whitespace-nowrap border-b-2 py-4 font-medium transition-colors duration-300 ${
                  tab === i ? "border-gold text-ink" : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="max-w-[760px] py-9 text-[15px] leading-relaxed text-ink-soft">
            {tab === 0 && (
              <p>
                {product.description ??
                  `This ${product.quality_grade.toLowerCase()}-grade part is tested before dispatch. Message us on WhatsApp if you'd like more detail before ordering.`}
              </p>
            )}
            {tab === 1 && (
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  <tr className="border-b border-line text-ink">
                    <th className="py-3 text-left font-medium">Brand</th>
                    <th className="py-3 text-left font-medium">Model</th>
                  </tr>
                  {product.device_model ? (
                    <tr>
                      <td className="py-3">{product.device_model.brand?.name ?? product.brand?.name ?? "—"}</td>
                      <td className="py-3">{product.device_model.name}</td>
                    </tr>
                  ) : (
                    <tr>
                      <td className="py-3" colSpan={2}>
                        {product.brand ? `${product.brand.name} — universal fit` : "Universal fit, not model-specific"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
            {tab === 2 && (
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  {[
                    ["Part number", product.part_number],
                    ["Quality grade", product.quality_grade],
                    ["Category", product.category?.name ?? "—"],
                    ["Part type", product.part_type?.name ?? "—"],
                  ].map(([k, v], i, arr) => (
                    <tr key={k} className={i < arr.length - 1 ? "border-b border-line" : ""}>
                      <td className="py-3 pr-6 text-ink-faint">{k}</td>
                      <td className="py-3 text-ink">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {tab === 3 && (
              <div className="flex flex-col gap-4">
                <p>
                  <strong className="text-ink">Coverage period:</strong> 90 days from the date of purchase
                  or fitting.
                </p>
                <p>
                  <strong className="text-ink">What&apos;s covered:</strong> Manufacturing faults and
                  workmanship issues under normal use.
                </p>
                <p>
                  <strong className="text-ink">What voids it:</strong> Physical damage after installation,
                  liquid damage, or fitting by a third party without our supervision.
                </p>
                <p>
                  <strong className="text-ink">Return process:</strong> Bring the part and your receipt to
                  our Eheliyagoda counter, or message us on WhatsApp to arrange a courier return. Faulty
                  units are replaced or refunded after inspection, typically within 3 business days.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ *
       * Fitting service cross-sell — hairline divider, no bordered card.
       * ------------------------------------------------------------ */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-center justify-between gap-6 border-t border-b border-line py-8">
            <div>
              <h2 className="mb-1 font-display text-xl font-semibold text-ink">
                Get this fitted at our shop
              </h2>
              <p className="text-[14px] text-ink-soft">
                Book a repair and we&apos;ll fit this part at our Eheliyagoda counter.
              </p>
            </div>
            <Link href="/services" className="btn-primary shrink-0">
              View Repair Services
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ *
       * Sticky mobile order bar — glassmorphism, only place this
       * treatment appears on this page.
       * ------------------------------------------------------------ */}
      <div
        data-pdp-sticky-bar
        className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-line bg-bone/80 px-4 pt-3 backdrop-blur-md sm:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="min-w-0 flex-1">
          <div className="truncate text-[12px] text-ink-faint">
            {product.wholesale_price ? "Wholesale from" : "Retail price"}
          </div>
          <div className="font-display text-[15px] font-semibold text-gold">
            {formatLkr(product.wholesale_price ?? product.retail_price)}
          </div>
        </div>
        <a
          href={`https://wa.me/9476933255?text=${whatsappMessage}`}
          className="btn-primary shrink-0 !bg-whatsapp-deep !py-3 hover:!bg-whatsapp-deep/90"
        >
          Order on WhatsApp
        </a>
      </div>
    </>
  );
}
