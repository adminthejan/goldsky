import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Displays",
};

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line pb-6">
      <div className="mb-4 text-[13px] font-medium text-ink">{label}</div>
      {children}
    </div>
  );
}

function FilterCheckbox({ label, count, checked = false }: { label: string; count: number; checked?: boolean }) {
  return (
    <label className="flex items-center justify-between py-1.5 text-[14px] text-ink-soft">
      <span className="flex items-center gap-2.5">
        <input type="checkbox" defaultChecked={checked} className="h-3.5 w-3.5 accent-ink" />
        {label}
      </span>
      <span className="text-[13px] text-ink-faint">({count})</span>
    </label>
  );
}

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Displays" }]} />

      <section className="mx-auto max-w-[1280px] px-6 pt-8 pb-10 sm:pt-10">
        <Reveal>
          <h1 className="mb-4 font-display text-[38px] font-semibold tracking-tight text-ink sm:text-[48px]">
            Phone Displays &amp; LCD Screens
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Genuine and OEM-grade replacement displays for Samsung, Apple, Xiaomi and more, in stock at our
            Eheliyagoda counter and available islandwide by courier. Every panel is tested for touch
            response and colour accuracy before it leaves the shop.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 pb-24 sm:grid-cols-[260px_1fr] sm:items-start sm:gap-12 sm:pb-32">
        <aside className="flex flex-col gap-6 sm:sticky sm:top-28">
          <FilterGroup label="Brand">
            <FilterCheckbox label="Samsung" count={1} checked />
          </FilterGroup>
          <div>
            <div className="mb-3 text-[13px] font-medium text-ink">Quality Grade</div>
            <FilterCheckbox label="OEM" count={1} checked />
          </div>
        </aside>

        <main>
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
            <div className="border-t border-line pt-10">
              <h2 className="mb-3 font-display text-xl font-semibold text-ink">
                Understanding display quality grades
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                An Original panel is pulled from a factory-sealed unit. OEM means the panel is manufactured
                to the phone maker&apos;s specification by a licensed supplier — the grade we stock most,
                balancing price and reliability. Incell panels are aftermarket with the touch digitiser
                bonded into the LCD layer, common on older or budget models. Aftermarket is the lowest tier
                — functional, but with visible differences in colour or touch sensitivity. We disclose the
                grade on every listing so you know exactly what&apos;s being fitted.
              </p>
            </div>
          </Reveal>
        </main>
      </div>
    </>
  );
}
