export default function TopBar() {
  const items = [
    "076 933 255",
    "Open Mon–Sat 9AM–7PM",
    "Islandwide delivery",
    "Wholesale enquiries welcome",
  ];

  return (
    <div className="hidden border-b border-line bg-bone-soft py-2 text-ink-soft sm:block">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-3 px-6 text-[11px] tracking-wide">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            {i > 0 && <span className="text-line" aria-hidden>
              ·
            </span>}
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
