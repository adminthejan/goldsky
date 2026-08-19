import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="mx-auto max-w-[720px] px-6 pt-10 pb-4 sm:pt-16">
        <Reveal>
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="mb-10 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[54px]">
            About GoldSky
          </h1>
          <p className="mb-6 text-[17px] leading-[1.85] text-ink-soft">
            GoldSky started as a small repair counter on Main Street in Eheliyagoda, fixing phones for the
            local community. As board-level faults became more common — devices that couldn&apos;t be
            repaired with parts alone — we invested in microscope and hot-air rework equipment to handle
            chip-level diagnostics in-house, rather than sending boards away.
          </p>
          <p className="text-[17px] leading-[1.85] text-ink-soft">
            Today we run two sides of the same business: a repair workshop for screens, batteries, ports
            and board-level faults, and a parts counter supplying technicians and repair shops across
            Ratnapura District with genuine and OEM-grade components — retail and wholesale.
          </p>
        </Reveal>
      </section>

      {/* Pull-quote + image break between the intro and "The Workshop". */}
      <section className="mx-auto max-w-[1000px] px-6 py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-center sm:gap-14">
            <PlaceholderImage ratio="4/5" label="Workbench, Eheliyagoda" />
            <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-[30px]">
              &ldquo;A phone that comes in for a screen replacement gets checked for underlying board
              issues at the same time — no separate trip needed.&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[720px] px-6 pt-4 pb-24 sm:pb-32">
        <Reveal>
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
            The workshop
          </h2>
          <p className="mb-16 text-[17px] leading-[1.85] text-ink-soft">
            Every board repair happens under magnification at a dedicated soldering station, with hot-air
            rework stations, a regulated bench power supply for fault isolation, and an ultrasonic cleaner
            for corrosion and water damage cases. Screens and batteries are fitted at a separate
            cosmetic-repair bench to keep dust away from board work.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
            The team
          </h2>
          <p className="text-[17px] leading-[1.85] text-ink-soft">
            Our technicians handle both cosmetic repairs and chip-level diagnostics, so a phone that comes
            in for a screen replacement gets checked for underlying board issues at the same time — no
            separate trip needed.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <CTABand
          title="Come see the workshop"
          subtitle="Ratnapura Road, Eheliyagoda — open Mon–Sat, 9AM–7PM."
          primaryHref="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
          primaryLabel="Order on WhatsApp"
        />
      </Reveal>
    </>
  );
}
