import Link from "next/link";

/**
 * Shared closing/enquiry band — used at the foot of About, Services, and
 * the homepage. Quiet off-white ground with a hairline top border instead
 * of the old bordered white card floating on a bordered white page.
 */
export default function CTABand({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  whatsapp = true,
  footnote,
}: {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  whatsapp?: boolean;
  footnote?: string;
}) {
  return (
    <div className="border-t border-line bg-bone-soft px-6 py-16 text-center sm:py-20">
      <h2 className="mx-auto mb-3 max-w-lg font-display text-[28px] font-semibold tracking-tight text-ink sm:text-[34px]">
        {title}
      </h2>
      <p className="mx-auto mb-9 max-w-md text-[15px] leading-relaxed text-ink-soft">
        {subtitle}
      </p>
      <Link
        href={primaryHref}
        className={whatsapp ? "btn-whatsapp !px-6 !py-3 !text-[14px]" : "btn-primary"}
      >
        {primaryLabel}
      </Link>
      {footnote && <div className="mt-6 text-[13px] text-ink-faint">{footnote}</div>}
    </div>
  );
}
