import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wholesale",
};

const fieldClass =
  "w-full rounded-xs border border-line bg-transparent px-3.5 py-3 text-[14px] outline-none placeholder:text-ink-faint focus:border-ink/40";
const labelClass = "mb-2 block text-[13px] font-medium text-ink";

const TIERS = [
  {
    tier: "Starter",
    volume: "5–19 units per order",
    detail: "Standard trade discount off retail pricing",
  },
  {
    tier: "Trade",
    volume: "20–49 units per order",
    detail: "Deeper discount plus priority stock holds for regular monthly orders",
    featured: true,
  },
  {
    tier: "Dealer",
    volume: "50+ units per order",
    detail: "Best available pricing, dedicated account contact and custom part sourcing",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wholesale" }]} />

      <section className="mx-auto max-w-[1280px] px-6 pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Reveal>
          <p className="eyebrow mb-3">Dealer Programme</p>
          <h1 className="mb-6 max-w-2xl font-display text-[38px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[48px]">
            Wholesale rates for repair shops, technicians and resellers.
          </h1>
          <p className="max-w-xl text-[16px] leading-relaxed text-ink-soft">
            We supply independent repair shops and resellers across Ratnapura, Colombo and beyond with
            genuine and OEM-grade parts at tiered wholesale pricing. No minimum order to get started —
            pricing improves as your monthly volume grows.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
            {TIERS.map((t) => (
              <div key={t.tier} className="border-t border-line pt-6 sm:border-t-0 sm:px-8 sm:pt-0 sm:first:pl-0 sm:last:pr-0">
                <h3
                  className={`mb-1 font-display text-xl font-semibold ${t.featured ? "text-gold" : "text-ink"}`}
                >
                  {t.tier}
                </h3>
                <div className="mb-4 text-[13px] tracking-wide text-ink-faint">{t.volume}</div>
                <p className="text-[14px] leading-relaxed text-ink-soft">{t.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <div className="grid gap-14 border-t border-line pt-16 sm:grid-cols-2 sm:gap-20">
          <Reveal>
            <h2 className="mb-6 font-display text-xl font-semibold text-ink">Dealer Enquiry Form</h2>
            <form className="flex flex-col gap-6">
              <div>
                <label className={labelClass}>Business Name</label>
                <input type="text" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Contact Person</label>
                <input type="text" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input type="tel" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Estimated Monthly Volume</label>
                <input type="text" placeholder="e.g. 30 units / month" className={fieldClass} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea rows={3} className={`${fieldClass} resize-y`} />
              </div>
              <button type="button" className="btn-primary">
                Submit Enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-4 font-display text-xl font-semibold text-ink">Or go straight to WhatsApp</h2>
            <p className="mb-7 text-[14px] leading-relaxed text-ink-soft">
              Most dealer accounts start with a quick WhatsApp conversation — tell us your shop location
              and typical monthly volume, and we&apos;ll send current wholesale pricing.
            </p>
            <a
              href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20the%20wholesale%20price%20list."
              className="btn-whatsapp w-full !justify-center !py-3"
            >
              Get the Wholesale Price List on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
