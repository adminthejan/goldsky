import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Samsung Displays",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Samsung", href: "/products" },
          { label: "Displays" },
        ]}
      />

      <section className="mx-auto max-w-[1280px] px-6 pt-8 pb-14 sm:pt-10 sm:pb-16">
        <Reveal>
          <p className="eyebrow mb-3">Brand + Category</p>
          <h1 className="mb-6 font-display text-[38px] font-semibold tracking-tight text-ink sm:text-[48px]">
            Samsung Display Panels
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Replacement OLED and LCD panels for the Samsung Galaxy A, M and S series, stocked at our
            Eheliyagoda workshop and shipped islandwide. Ratnapura and Colombo repair shops order these in
            bulk at wholesale rates — message us for current dealer pricing.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <Reveal>
          <div className="mb-6 text-[14px] text-ink-soft">1 result</div>
          <div className="mb-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
            <ProductCard
              href="/products/samsung-galaxy-a54-oled-display"
              fitLine="Fits Galaxy A54 / A546"
              name="Samsung Galaxy A54 OLED Display"
              retailPrice={12500}
              wholesalePrice={9800}
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-12 border-t border-line pt-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">Related categories</h2>
              <div className="flex flex-col gap-2.5 text-[14px]">
                <Link href="/categories/displays" className="link-underline inline-block w-fit text-ink">
                  All Displays
                </Link>
                <Link href="/products" className="link-underline inline-block w-fit text-ink">
                  Samsung Batteries
                </Link>
                <Link href="/products" className="link-underline inline-block w-fit text-ink">
                  Samsung Charging Ports
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">Get it fitted</h2>
              <p className="text-[14px] leading-relaxed text-ink-soft">
                Buying the part and want it installed same day? Our{" "}
                <Link href="/services/screen-replacement" className="link-underline font-medium text-ink">
                  screen replacement service
                </Link>{" "}
                covers fitting and calibration.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
