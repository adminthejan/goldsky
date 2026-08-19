import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a Repair",
};

const fieldClass =
  "w-full rounded-xs border border-line bg-transparent px-3.5 py-3 text-[14px] outline-none placeholder:text-ink-faint focus:border-ink/40";
const labelClass = "mb-2 block text-[13px] font-medium text-ink";

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Book a Repair" }]} />

      <section className="mx-auto max-w-[560px] px-6 pt-8 pb-24 sm:pt-10">
        <Reveal>
          <h1 className="mb-3 font-display text-[36px] font-semibold tracking-tight text-ink sm:text-[42px]">
            Book a Repair
          </h1>
          <p className="mb-10 text-[15px] leading-relaxed text-ink-soft">
            Tell us about the issue and we&apos;ll get back to you with a quote and timeframe. For a
            faster reply, message us directly on WhatsApp.
          </p>

          <form className="mb-8 flex flex-col gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" placeholder="Your name" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input type="tel" placeholder="07X XXX XXXX" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Device Model</label>
              <input type="text" placeholder="e.g. Samsung Galaxy A54" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Describe the Issue</label>
              <textarea rows={4} placeholder="What's wrong with the phone?" className={`${fieldClass} resize-y`} />
            </div>
            <div>
              <label className={labelClass}>Preferred Date</label>
              <input type="date" className={fieldClass} />
            </div>
            <button type="button" className="btn-primary">
              Submit Booking Request
            </button>
          </form>

          <div className="mb-4 text-center text-[14px] text-ink-soft">Prefer not to fill in a form?</div>
          <a
            href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20book%20a%20repair."
            className="btn-whatsapp w-full !justify-center !py-3"
          >
            Message Us on WhatsApp Instead
          </a>
        </Reveal>
      </section>
    </>
  );
}
