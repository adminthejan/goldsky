import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Chip-Level Motherboard Repair",
};

const FAULTS = [
  "No power / dead board",
  "Boot looping or stuck on logo",
  "Charging IC failure",
  "Corrosion damage after water exposure",
  "Backlight failure not caused by the display itself",
  "Short circuits from previous repair attempts",
];

const RELATED = [
  { name: "Water Damage Recovery", desc: "Often paired with board repair", href: "/services" },
  { name: "Data Recovery", desc: "Recover data before board repair", href: "/services" },
  {
    name: "Need a replacement part instead?",
    desc: "Browse displays & components",
    href: "/products/samsung-galaxy-a54-oled-display",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"https://schema.org","@type":"Service","serviceType":"Chip-Level Motherboard Repair","provider":{"@type":"LocalBusiness","name":"GoldSky"},"areaServed":"Eheliyagoda, Ratnapura, Sri Lanka"}',
        }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Repair Services", href: "/services" },
          { label: "Chip-Level Motherboard Repair" },
        ]}
      />

      <section className="mx-auto grid max-w-[1280px] gap-14 px-6 pt-8 pb-24 sm:grid-cols-[1.4fr_1fr] sm:gap-16 sm:pt-10 sm:pb-32">
        <Reveal>
          <p className="eyebrow mb-4">Repair Service</p>
          <h1 className="mb-6 font-display text-[36px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[46px]">
            Chip-Level Motherboard Repair
          </h1>
          <p className="mb-12 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            When a phone won&apos;t power on, won&apos;t charge, or boot-loops after a drop or liquid
            exposure, the fault is usually on the board itself. We diagnose and repair at the component
            level under a microscope, using hot-air rework and micro-soldering — work most shops in
            Ratnapura and Eheliyagoda can&apos;t do in-house.
          </p>

          <h2 className="mb-4 font-display text-xl font-semibold text-ink">Common faults we treat</h2>
          <ul className="mb-12 grid gap-3 sm:grid-cols-2">
            {FAULTS.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-pill bg-gold" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mb-3 font-display text-xl font-semibold text-ink">Our process</h2>
          <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Every board is inspected under magnification and tested with a bench power supply to isolate
            the fault before any soldering begins. We quote after diagnosis — if a repair isn&apos;t
            viable, there&apos;s no charge for the inspection.
          </p>

          <div className="border-t border-line pt-6">
            <h2 className="mb-2 text-[15px] font-semibold text-ink">Warranty</h2>
            <p className="max-w-md text-[14px] leading-relaxed text-ink-soft">
              90 days on workmanship and any components we replace. Warranty is void if the board shows
              new physical or liquid damage after the repair.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-md bg-bone-soft p-8 sm:sticky sm:top-28">
            <div className="mb-1 font-display text-[30px] font-semibold tabular-nums text-gold">
              from LKR 3,500
            </div>
            <div className="mb-7 text-[14px] text-ink-soft">Typical turnaround: 24–48 hours</div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20book%3A%20Chip-Level%20Motherboard%20Repair%20for%20my%20%5Bdevice%20model%5D.%20Please%20advise%20on%20cost%20and%20turnaround."
                className="btn-primary !bg-whatsapp-deep hover:!bg-whatsapp-deep/90"
              >
                Book This Repair on WhatsApp
              </a>
              <a href="tel:+9476933255" className="btn-secondary">
                Call 076 933 255
              </a>
              <Link href="/book-repair" className="link-underline text-center text-[13px] text-ink-soft">
                Or use the booking form
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow mb-6">Related</p>
          <div className="grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {RELATED.map((r) => (
              <Link key={r.name} href={r.href} className="group">
                <h3 className="link-underline mb-1.5 inline-block font-display text-[16px] font-medium text-ink">
                  {r.name}
                </h3>
                <p className="text-[13px] text-ink-soft">{r.desc}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
