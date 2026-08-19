import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { getServices, formatLkr } from "@/lib/api";

export const metadata: Metadata = {
  title: "Repair Services",
};

// A small rotating set of decorative icon shapes — the API doesn't model
// per-service iconography, so we cycle through these to keep the original
// editorial look instead of leaving every card unmarked.
const ICONS = [
  <div key="a" className="h-9 w-9 rounded-sm border-[1.5px] border-ink" />,
  <div key="b" className="h-9 w-9 rounded-full border-[1.5px] border-ink" />,
  <div key="c" className="h-6 w-9 rotate-45 border-[1.5px] border-ink" />,
  <div key="d" className="h-9 w-9 rounded-[40%_60%_60%_40%] border-[1.5px] border-ink" />,
  <div key="e" className="h-9 w-9 rounded-full border-[1.5px] border-ink border-dashed" />,
  <div key="f" className="h-9 w-9 rounded-sm border-[1.5px] border-ink" style={{ borderRadius: "8px 2px 8px 2px" }} />,
];

export default async function Page() {
  const services = await getServices();
  const [featured, ...rest] = services;

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Repair Services" }]} />

      <section className="mx-auto max-w-[1280px] px-6 pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Reveal>
          <p className="eyebrow mb-3">Repair Services</p>
          <h1 className="mb-6 max-w-2xl font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[52px]">
            Board-level to cosmetic, all under one roof
          </h1>
          <p className="max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Micro-soldering to cosmetic replacement, done at our Eheliyagoda workshop under a microscope.
            Most repairs are completed the same day.
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ *
       * Featured service — large asymmetric tile, minimal outline
       * instead of the old amber-bordered box.
       * ------------------------------------------------------------ */}
      {featured && (
        <section className="mx-auto max-w-[1280px] px-6 pb-6">
          <Reveal>
            <Link
              href="/services"
              className="group grid gap-8 border-t border-b border-line py-10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-12 sm:py-14"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-pill border border-gold/40">
                <div className="h-7 w-7 rounded-sm border-[1.5px] border-gold" />
              </div>
              <div>
                <span className="eyebrow mb-2 inline-block !text-gold">Most Requested</span>
                <h2 className="link-underline mb-2 inline-block font-display text-2xl font-semibold tracking-tight text-ink sm:text-[32px]">
                  {featured.name}
                </h2>
                <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {featured.description ?? "Ask us on WhatsApp for details on this service."}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-8 sm:flex-col sm:items-end sm:gap-2">
                <div className="font-display text-xl font-semibold text-gold">from {formatLkr(featured.price_from)}</div>
                <div className="text-[13px] text-ink-faint">{featured.turnaround_time}</div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* ------------------------------------------------------------ *
       * Remaining services — editorial list, hairline dividers only.
       * ------------------------------------------------------------ */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        {rest.length > 0 ? (
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {rest.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 80}>
                <Link href="/services" className="group flex gap-5 border-t border-line pt-8">
                  <div className="mt-1 shrink-0">{ICONS[i % ICONS.length]}</div>
                  <div>
                    <h3 className="link-underline mb-2 inline-block font-display text-[19px] font-semibold text-ink">
                      {s.name}
                    </h3>
                    <p className="mb-4 max-w-md text-[14px] leading-relaxed text-ink-soft">
                      {s.description ?? "Ask us on WhatsApp for details on this service."}
                    </p>
                    <div className="flex items-center gap-4 text-[13px]">
                      <span className="font-medium text-gold">from {formatLkr(s.price_from)}</span>
                      <span className="text-ink-faint">{s.turnaround_time}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          !featured && (
            <p className="border-t border-line pt-10 text-center text-[15px] text-ink-soft">
              Services are being updated — message us on WhatsApp for current pricing.
            </p>
          )
        )}
      </section>

      <Reveal>
        <CTABand
          title="Not sure what's wrong with your phone?"
          subtitle="Book a repair and describe the issue — we'll diagnose it at the counter."
          primaryHref="/book-repair"
          primaryLabel="Book a Repair"
          whatsapp={false}
        />
      </Reveal>
    </>
  );
}
