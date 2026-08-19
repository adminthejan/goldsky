import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import LocationMap, { MAPS_DIRECTIONS_URL, SHOP_ADDRESS_LINE, SHOP_PLUS_CODE } from "@/components/LocationMap";

export const metadata: Metadata = {
  title: "Eheliyagoda — Service Area",
};

const NEARBY = ["Ratnapura", "Avissawella", "Kuruwita", "Kegalle", "Pelmadulla"];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"https://schema.org","@type":"LocalBusiness","name":"GoldSky","address":{"@type":"PostalAddress","streetAddress":"Ratnapura Road","addressLocality":"Eheliyagoda","addressRegion":"Ratnapura","addressCountry":"LK"},"telephone":"+9476933255","openingHours":"Mo-Sa 09:00-19:00"}',
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Phone Repair in Eheliyagoda" }]} />

      <section className="mx-auto max-w-[1280px] px-6 pt-8 pb-14 sm:pt-10 sm:pb-16">
        <Reveal>
          <h1 className="mb-6 max-w-2xl font-display text-[38px] font-semibold tracking-tight text-ink sm:text-[48px]">
            Phone Repair in Eheliyagoda
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            GoldSky&apos;s workshop sits on Ratnapura Road in Eheliyagoda, serving customers across Ratnapura
            District with chip-level phone repair and genuine parts. Whether it&apos;s a cracked screen, a
            dead battery, or a board that won&apos;t power on, our technicians diagnose and fix it on-site
            with microscope-level tools most shops in the area don&apos;t carry.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 sm:pb-24">
        <Reveal>
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
            <LocationMap ratio="4/3" />
            <div>
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
                className="link-underline mb-7 inline-block text-[14px] font-medium text-gold"
              >
                Get Directions →
              </a>
              <a
                href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
                className="btn-whatsapp w-full !justify-center !py-3"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:pb-32">
        <Reveal>
          <div className="border-t border-line pt-10">
            <h2 className="mb-3 font-display text-xl font-semibold text-ink">Also serving nearby towns</h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Customers regularly travel to our Eheliyagoda counter from{" "}
              {NEARBY.map((town, i) => (
                <span key={town}>
                  <Link href="/locations/eheliyagoda" className="link-underline font-medium text-ink">
                    {town}
                  </Link>
                  {i < NEARBY.length - 2 ? ", " : i === NEARBY.length - 2 ? " and " : ""}
                </span>
              ))}
              . Parts orders from these areas ship by courier within 1–2 business days — see our{" "}
              <Link href="/delivery" className="link-underline font-medium text-ink">
                delivery information
              </Link>{" "}
              for charges by region.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
