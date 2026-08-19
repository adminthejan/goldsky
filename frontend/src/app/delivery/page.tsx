import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Delivery Information",
};

const REGIONS = [
  { region: "Colombo & Western Province", charge: "LKR 350", time: "1–2 days" },
  { region: "Ratnapura, Kegalle & Sabaragamuwa", charge: "LKR 300", time: "Same to next day" },
  { region: "Other provinces", charge: "LKR 450", time: "2–3 days" },
  { region: "Remote / rural areas", charge: "LKR 600", time: "3–5 days" },
];

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Delivery Information" }]} />

      <section className="mx-auto max-w-[720px] px-6 pt-8 pb-24 sm:pt-10 sm:pb-32">
        <Reveal>
          <h1 className="mb-14 font-display text-[38px] font-semibold tracking-tight text-ink sm:text-[46px]">
            Delivery Information
          </h1>
        </Reveal>

        <Reveal>
          <div className="border-t border-line pt-8">
            <h2 className="mb-3 font-display text-xl font-semibold text-ink">Courier Partners</h2>
            <p className="mb-12 text-[15px] leading-relaxed text-ink-soft">
              We ship parts orders islandwide through Domex and Koombiyo Delivery, with Sri Lanka Post used
              for remote or rural addresses where courier coverage is limited.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mb-3 font-display text-xl font-semibold text-ink">Dispatch Cut-off Times</h2>
          <p className="mb-12 text-[15px] leading-relaxed text-ink-soft">
            Orders confirmed before 3:00 PM on a business day are dispatched the same day. Orders
            confirmed after 3:00 PM or on a Sunday go out the following business day.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="mb-5 font-display text-xl font-semibold text-ink">Delivery Charges by Region</h2>
          <div className="mb-12 divide-y divide-line border-y border-line">
            <div className="flex py-2.5 text-[12px] font-medium uppercase tracking-wide text-ink-faint">
              <span className="flex-1">Region</span>
              <span className="w-24">Charge</span>
              <span className="w-32 text-right">Typical Time</span>
            </div>
            {REGIONS.map((r) => (
              <div key={r.region} className="flex items-center py-3.5 text-[14px]">
                <span className="flex-1 pr-4 text-ink">{r.region}</span>
                <span className="w-24 tabular-nums text-ink-soft">{r.charge}</span>
                <span className="w-32 text-right text-ink-soft">{r.time}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mb-3 font-display text-xl font-semibold text-ink">Cash on Delivery</h2>
          <p className="mb-12 text-[15px] leading-relaxed text-ink-soft">
            Cash on delivery is available islandwide for retail orders. A COD handling fee of LKR 150
            applies. Wholesale orders are settled by bank transfer before dispatch.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="mb-3 font-display text-xl font-semibold text-ink">Bulk & Wholesale Shipments</h2>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Wholesale orders are packed with extra protective padding per unit and shipped via courier or
            arranged bus parcel service for larger volumes. For dealer accounts placing frequent orders, we
            can arrange a fixed weekly or fortnightly dispatch schedule — ask on WhatsApp to set this up.
          </p>
        </Reveal>
      </section>
    </>
  );
}
