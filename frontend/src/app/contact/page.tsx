import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import LocationMap, { SHOP_ADDRESS_LINE, SHOP_PLUS_CODE } from "@/components/LocationMap";

export const metadata: Metadata = {
  title: "Contact Us",
};

const fieldClass =
  "w-full rounded-xs border border-line bg-transparent px-3.5 py-3 text-[14px] outline-none placeholder:text-ink-faint focus:border-ink/40";
const labelClass = "mb-2 block text-[13px] font-medium text-ink";

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="mx-auto grid max-w-[1280px] gap-14 px-6 pt-8 pb-24 sm:grid-cols-2 sm:gap-16 sm:pt-10 sm:pb-32">
        <Reveal>
          <h1 className="mb-8 font-display text-[36px] font-semibold tracking-tight text-ink sm:text-[42px]">
            Contact Us
          </h1>
          <form className="mb-6 flex flex-col gap-6">
            <div>
              <label className={labelClass}>Name</label>
              <input type="text" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Phone or Email</label>
              <input type="text" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Message</label>
              <textarea rows={4} className={`${fieldClass} resize-y`} />
            </div>
            <button type="button" className="btn-primary">
              Send Message
            </button>
          </form>
          <a
            href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
            className="btn-whatsapp w-full !justify-center !py-3"
          >
            Message Us on WhatsApp Instead
          </a>
        </Reveal>

        <Reveal delay={100}>
          <LocationMap ratio="4/3" className="mb-7" />
          <p className="mb-1 text-[15px] font-medium text-ink">GoldSky</p>
          <p className="mb-1 text-[15px] leading-relaxed text-ink-soft">{SHOP_ADDRESS_LINE}</p>
          <p className="mb-6 text-[13px] text-ink-faint">Plus Code: {SHOP_PLUS_CODE}</p>
          <p className="mb-6 text-[15px] text-ink">076 933 255</p>
          <div className="divide-y divide-line border-y border-line text-[14px]">
            <div className="flex justify-between py-2.5">
              <span className="text-ink-soft">Mon – Sat</span>
              <span>9:00 AM – 7:00 PM</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-ink-soft">Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
