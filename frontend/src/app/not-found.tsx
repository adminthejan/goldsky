import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[520px] px-6 py-32 text-center sm:py-40">
      <div className="font-display text-[88px] font-semibold leading-none tracking-tight text-line">
        404
      </div>
      <h1 className="mt-4 mb-3 font-display text-[28px] font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mb-10 text-[15px] leading-relaxed text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist. It may have been moved, or the link might be
        outdated.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
        <a
          href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
          className="btn-whatsapp"
        >
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}
