import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Search",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-[720px] px-6 pt-12 pb-24 sm:pt-16">
      <Reveal>
        <h1 className="mb-8 font-display text-[32px] font-semibold tracking-tight text-ink">Search</h1>
        <input
          type="text"
          defaultValue="display"
          className="mb-2 w-full rounded-xs border border-line bg-transparent px-4 py-3.5 text-[15px] outline-none focus:border-ink/40"
        />
        <div className="mb-10 text-[14px] text-ink-faint">1 result for &ldquo;display&rdquo;</div>

        <div className="mb-14 max-w-[280px]">
          <ProductCard
            href="/products/samsung-galaxy-a54-oled-display"
            fitLine="Fits Galaxy A54 / A546"
            name="Samsung Galaxy A54 OLED Display"
            retailPrice={12500}
            wholesalePrice={9800}
          />
        </div>

        <div className="border-t border-line pt-8 text-center">
          <p className="mb-2 text-[14px] text-ink-soft">
            No luck finding a part? Our catalogue is growing — ask us directly and we&apos;ll check stock.
          </p>
          <a
            href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27m%20looking%20for%20a%20part%20that%27s%20not%20listed%20on%20the%20site."
            className="link-underline text-[14px] font-medium text-gold"
          >
            Ask us on WhatsApp →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
