import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollHint from "@/components/ScrollHint";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTABand from "@/components/CTABand";
import BrandMarquee, { type BrandLogo } from "@/components/BrandMarquee";
import LocationMap, { MAPS_DIRECTIONS_URL, SHOP_ADDRESS_LINE, SHOP_PLUS_CODE } from "@/components/LocationMap";
import { getProduct, getProducts, getServices, formatLkr, type Product, type Service } from "@/lib/api";

export const metadata: Metadata = {
  title: "GoldSky — Phone Parts & Repair, Eheliyagoda",
};

const FEATURES = [
  {
    title: "Chip-Level Board Repair",
    desc: "Micro-soldering and component-level diagnostics for logic board faults other shops turn away.",
    icon: <div className="h-11 w-11 rounded-full border-[1.5px] border-ink" />,
  },
  {
    title: "Screen & Battery Replacement",
    desc: "Same-day fitting with genuine and OEM-grade parts, backed by a 90-day warranty.",
    icon: <div className="h-11 w-11 rounded-sm border-[1.5px] border-ink" />,
  },
  {
    title: "Data Recovery",
    desc: "Recovery from water damage, dead boards and corrupted storage before we begin any repair.",
    icon: <div className="h-8 w-8 rotate-45 border-[1.5px] border-ink" />,
  },
];

// Source logos are flat PNG/JPG on a white canvas at wildly different
// aspect ratios (a wide wordmark vs. a square mark) — object-contain in a
// fixed-height box normalizes them to the same visual weight regardless.
const BRAND_LOGOS: BrandLogo[] = [
  { name: "Samsung", src: "/logo/samsung.jpg" },
  { name: "Apple", src: "/logo/apple.png" },
  { name: "Xiaomi", src: "/logo/xiaomi.jpg" },
  { name: "Oppo", src: "/logo/oppo.png" },
  { name: "Vivo", src: "/logo/vivo.png" },
  { name: "Huawei", src: "/logo/huawei.png" },
  { name: "Realme", src: "/logo/realme.png" },
  { name: "Infinix", src: "/logo/infinix.jpg", invert: true },
  { name: "Tecno", src: "/logo/tecno.png" },
  { name: "Nokia", src: "/logo/nokia.png" },
];

const WHOLESALE_TIERS = [
  {
    tier: "5–19 units",
    desc: "Standard trade discount off retail — a straightforward starting tier for independent repair shops.",
  },
  {
    tier: "20–49 units",
    desc: "Deeper discount plus priority stock holds for shops placing regular monthly orders.",
    featured: true,
  },
  {
    tier: "50+ units",
    desc: "Best available pricing, a dedicated account contact, and custom part sourcing on request.",
  },
];

// Fallback content shown only if the API is unreachable, so the homepage
// never renders empty sections.
const FALLBACK_SERVICES: Service[] = [
  { id: 0, name: "Chip-Level Motherboard Repair", slug: "", description: null, price_from: 3500, turnaround_time: "24–48 hrs", icon: null, is_featured: true },
  { id: 0, name: "Screen Replacement", slug: "screen-replacement", description: null, price_from: 4500, turnaround_time: "Same day", icon: null, is_featured: true },
  { id: 0, name: "Battery Replacement", slug: "", description: null, price_from: 2800, turnaround_time: "Same day", icon: null, is_featured: true },
];

const WHY_GOLDSKY = [
  { title: "Microscope-level soldering", desc: "Board faults diagnosed and repaired under magnification, not guessed at." },
  { title: "Original & OEM-grade parts", desc: "Every part graded and disclosed — no unmarked substitutes." },
  { title: "90-day warranty", desc: "Parts and workmanship covered on every job we complete." },
  { title: "Same-day service", desc: "Most screen, battery and port repairs done while you wait." },
];

const TESTIMONIALS = [
  {
    quote: "Board repair on my phone was fixed in a day when two other shops said it was unfixable. Fair price too.",
    author: "K. Perera, Ratnapura",
  },
  {
    quote: "We order displays wholesale for our shop every month. Consistent quality and quick WhatsApp replies.",
    author: "Repair shop owner, Avissawella",
  },
  {
    quote: "Screen and battery done same day, delivered to Kegalle by courier the next morning.",
    author: "N. Fernando, Kegalle",
  },
];

export default async function Page() {
  const [featuredProductFromSlug, servicesResult] = await Promise.all([
    getProduct("samsung-galaxy-a54-oled-display"),
    getServices(),
  ]);

  let featuredProduct: Product | null = featuredProductFromSlug;
  if (!featuredProduct) {
    const { items } = await getProducts({ per_page: 1 });
    featuredProduct = items[0] ?? null;
  }

  const services = servicesResult.length > 0 ? servicesResult.slice(0, 8) : FALLBACK_SERVICES;

  return (
    <>
      {/* No `geo` lat/long here — a Plus Code (see SHOP_PLUS_CODE) doesn't
          decode to coordinates without a geocoding call, and a guessed
          pair would be worse for local SEO than omitting it. The address
          fields plus the Google Maps embed below are enough for search
          engines and visitors to find the actual place. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"GoldSky\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Ratnapura Road\",\"addressLocality\":\"Eheliyagoda\",\"addressRegion\":\"Ratnapura\",\"addressCountry\":\"LK\"},\"telephone\":\"+9476933255\",\"openingHours\":\"Mo-Sa 09:00-19:00\"}" }} />

      <section className="relative">
        {/* Faint large-scale gradient wash behind the whole hero for depth.
            (No overflow-hidden on this section — it would break the sticky
            positioning the scroll-scrubbed product image relies on.) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 -z-10 h-[640px] w-[640px] max-w-[60vw] -translate-x-1/3 -translate-y-1/3 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 10%, transparent) 0%, transparent 70%)",
          }}
        />

        <Hero
          left={
            <div>
              <p className="eyebrow mb-5">Chip-Level Repair · Genuine Parts · Wholesale</p>

              <h1 className="mb-6 font-display text-[13vw] font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
                Phone parts and board-level repair, done right.
              </h1>

              <p className="mb-8 max-w-[440px] text-[17px] leading-relaxed text-ink-soft">
                Serving Eheliyagoda, Ratnapura and surrounding towns with micro-soldering repair and genuine phone parts — in-store and islandwide by courier.
              </p>

              <div className="mb-10 flex flex-wrap items-center gap-4">
                <Link href="/products" className="btn-primary">
                  Browse Products
                </Link>
                <Link href="/book-repair" className="btn-secondary">
                  Book a Repair
                </Link>
                <a
                  href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.19c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.77-4.14-4.91-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.26.6.87 2.02.95 2.17.08.15.13.32.03.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.29.15.46.13.64-.05.18-.19.75-.87.95-1.17.2-.29.39-.24.65-.14.26.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
                  </svg>
                  Order on WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">
                    <Counter target={10000} suffix="+" />
                  </div>
                  <div className="mt-1 text-[13px] text-ink-soft">Repairs completed</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">
                    <Counter target={90} suffix="-day" />
                  </div>
                  <div className="mt-1 text-[13px] text-ink-soft">Warranty on every job</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-ink">Microscope</div>
                  <div className="mt-1 text-[13px] text-ink-soft">&amp; hot-air rework</div>
                </div>
              </div>
            </div>
          }
        />

        <ScrollHint />
      </section>

      {/* ---------------------------------------------------------------- *
       * Why GoldSky, quick version — three pillars separated by hairline
       * dividers instead of bordered boxes.
       * ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <div className="grid gap-14 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="sm:px-10 sm:first:pl-0 sm:last:pr-0">
                <div className="mb-6">{f.icon}</div>
                <h3 className="mb-3 font-display text-[20px] font-semibold text-ink">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Browse by Brand — a standalone "in stock" banner for the brand
       * we're pushing this cycle, then every brand as a slow two-row
       * marquee instead of a fixed grid. A grid of 10 logos always
       * leaves a dead cell at some column count (the old 4-column grid
       * had one every time) — a marquee has no cell count to overflow,
       * so there's never an empty tile to explain away.
       * ---------------------------------------------------------------- */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <p className="eyebrow mb-3">Browse by Brand</p>
            <h2 className="mb-10 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Parts for every major brand
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href="/products"
              className="group mb-14 flex items-center justify-between gap-6 rounded-md border border-line bg-paper px-8 py-7 transition-colors duration-300 hover:bg-bone-soft sm:px-10 sm:py-9"
            >
              <span>
                <span className="eyebrow mb-2 block text-gold">In Stock Now</span>
                <span className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  Samsung
                </span>
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="shrink-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="border-y border-line">
            <BrandMarquee brands={BRAND_LOGOS} />
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- *
       * Featured Product — full editorial treatment, no bordered card.
       * ---------------------------------------------------------------- */}
      {featuredProduct && (
        <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
          <Reveal>
            <p className="eyebrow mb-3">Featured Product</p>
            <h2 className="mb-10 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              In the shop right now
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href={`/products/${featuredProduct.slug}`}
              className="group grid gap-10 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:gap-16"
            >
              <div className="relative max-w-[380px] overflow-hidden rounded-md">
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <PlaceholderImage
                    ratio="1/1"
                    label={featuredProduct.primary_image_url ? undefined : "Product photo"}
                    src={featuredProduct.primary_image_url}
                    alt={featuredProduct.name}
                  />
                </div>
                <span className="absolute top-4 left-4 rounded-pill bg-bone/90 px-3 py-1 text-[11px] font-medium text-ink-soft backdrop-blur-sm">
                  {featuredProduct.stock_status}
                </span>
              </div>
              <div>
                {featuredProduct.device_model && (
                  <div className="mb-2 text-[13px] tracking-wide text-ink-faint">
                    Fits {featuredProduct.device_model.name}
                  </div>
                )}
                <h3 className="link-underline mb-6 inline-block font-display text-[26px] font-semibold leading-snug text-ink sm:text-[30px]">
                  {featuredProduct.name}
                </h3>
                <div className="mb-7 border-t border-line pt-6">
                  <div className="mb-1 text-[15px] text-ink-soft">
                    Retail <span className="font-medium text-ink">{formatLkr(featuredProduct.retail_price)}</span>
                  </div>
                  {featuredProduct.wholesale_price && (
                    <>
                      <div className="font-display text-3xl font-semibold tabular-nums text-gold">
                        Wholesale from {formatLkr(featuredProduct.wholesale_price)}
                      </div>
                      <span className="eyebrow mt-3 inline-block rounded-pill bg-gold-soft px-3 py-1 !text-gold-deep">
                        Wholesale · {featuredProduct.wholesale_min_qty ?? 1}+ units
                      </span>
                    </>
                  )}
                </div>
                <span className="btn-primary">View Details</span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* ---------------------------------------------------------------- *
       * Wholesale — light band, tiers separated by dividers only.
       * ---------------------------------------------------------------- */}
      <section className="border-y border-line bg-bone-soft px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <p className="eyebrow mb-3 !text-gold">Wholesale</p>
            <h2 className="mb-16 max-w-2xl font-display text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[42px]">
              Wholesale rates for repair shops, technicians and resellers.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mb-14 grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
              {WHOLESALE_TIERS.map((t) => (
                <div key={t.tier} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
                  <h3
                    className={`mb-3 font-display text-xl font-semibold ${
                      t.featured ? "text-gold" : "text-ink"
                    }`}
                  >
                    {t.tier}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft">{t.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20the%20wholesale%20price%20list."
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-[14px] font-medium text-ink-inverse transition-colors duration-300 hover:bg-gold-deep"
            >
              Get the Wholesale Price List on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Repair Services — horizontal strip, no boxes.
       * ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-3">Repair Services</p>
          <h2 className="mb-10 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Board-level to cosmetic, all under one roof
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex gap-8 overflow-x-auto pb-4">
            {services.map((s) => (
              <Link
                key={s.name}
                href="/services"
                className="group w-[220px] shrink-0 border-t border-line pt-6 transition-colors duration-300"
              >
                <h3 className="link-underline mb-3 inline-block font-display text-[16px] font-medium leading-snug text-ink">
                  {s.name}
                </h3>
                <div className="text-[14px] font-medium text-gold">from {formatLkr(s.price_from)}</div>
                <div className="mt-1 text-[13px] text-ink-faint">{s.turnaround_time}</div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- *
       * Visit the counter.
       * ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <LocationMap ratio="4/3" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Visit our Eheliyagoda counter
            </h2>
            <p className="mb-1 text-[15px] font-medium text-ink">GoldSky</p>
            <p className="mb-1 text-[15px] leading-relaxed text-ink-soft">{SHOP_ADDRESS_LINE}</p>
            <p className="mb-6 text-[13px] text-ink-faint">Plus Code: {SHOP_PLUS_CODE}</p>
            <div className="mb-6 divide-y divide-line border-y border-line text-[14px]">
              <div className="flex justify-between py-2.5">
                <span className="text-ink-soft">Mon – Sat</span>
                <span>9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-ink-soft">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-block text-[14px] font-medium text-gold"
            >
              Get Directions →
            </a>
            <p className="mt-8 text-[14px] leading-relaxed text-ink-soft">
              Based in{" "}
              <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                Eheliyagoda
              </Link>
              , GoldSky serves customers across{" "}
              <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                Ratnapura
              </Link>
              ,{" "}
              <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                Avissawella
              </Link>
              ,{" "}
              <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                Kuruwita
              </Link>
              ,{" "}
              <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                Kegalle
              </Link>{" "}
              and{" "}
              <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                Pelmadulla
              </Link>
              , with islandwide courier delivery for parts orders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Why GoldSky — trust pillars.
       * ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <Reveal>
          <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why GoldSky
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid gap-10 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-line">
            {WHY_GOLDSKY.map((w) => (
              <div key={w.title} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <h3 className="mb-2 text-[15px] font-semibold text-ink">{w.title}</h3>
                <p className="text-[14px] leading-relaxed text-ink-soft">{w.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- *
       * Testimonials.
       * ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <Reveal>
          <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What customers say
          </h2>
        </Reveal>
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <div className="border-t border-line pt-6">
                <div className="mb-4 text-[13px] tracking-[0.2em] text-gold">★★★★★</div>
                <p className="mb-5 text-[15px] leading-relaxed text-ink">{t.quote}</p>
                <div className="text-[13px] text-ink-faint">— {t.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Closing CTA.
       * ---------------------------------------------------------------- */}
      <Reveal>
        <CTABand
          title="Need a part or a repair?"
          subtitle="Message us on WhatsApp — we reply within the hour during shop hours."
          primaryHref="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
          primaryLabel="Order on WhatsApp"
          footnote="076 933 255 · Ratnapura Road, Eheliyagoda"
        />
      </Reveal>
    </>
  );
}
