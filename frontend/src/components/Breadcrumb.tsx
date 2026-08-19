import Link from "next/link";

/**
 * Slim breadcrumb trail shared by every interior page — replaces the old
 * one-off inline-styled <nav> repeated at the top of each route.
 */
export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-[1280px] px-6 pt-6 text-[12px] tracking-wide text-ink-faint"
    >
      {items.map((item, i) => (
        <span key={item.label}>
          {i > 0 && <span className="mx-2 text-line">/</span>}
          {item.href ? (
            <Link href={item.href} className="link-underline hover:text-ink-soft">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink-soft">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
