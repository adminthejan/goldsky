import Link from "next/link";
import Logo from "@/components/Logo";

const COLUMNS = [
  {
    heading: "Product Categories",
    links: [
      { label: "Displays", href: "/categories/displays" },
      { label: "Batteries", href: "/products" },
      { label: "Motherboards & ICs", href: "/products" },
      { label: "Charging Ports", href: "/products" },
      { label: "Back Glass & Housings", href: "/products" },
      { label: "All Products →", href: "/products" },
    ],
  },
  {
    heading: "Repair Services",
    links: [
      { label: "Chip-Level Motherboard Repair", href: "/services/screen-replacement" },
      { label: "Screen Replacement", href: "/services" },
      { label: "Battery Replacement", href: "/services" },
      { label: "Water Damage Recovery", href: "/services" },
      { label: "Book a Repair →", href: "/book-repair" },
    ],
  },
  {
    heading: "Service Areas",
    links: [
      { label: "Eheliyagoda", href: "/locations/eheliyagoda" },
      { label: "Ratnapura", href: "/locations/eheliyagoda" },
      { label: "Avissawella", href: "/locations/eheliyagoda" },
      { label: "Kuruwita", href: "/locations/eheliyagoda" },
      { label: "Kegalle", href: "/locations/eheliyagoda" },
      { label: "Pelmadulla", href: "/locations/eheliyagoda" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone-soft text-ink-soft">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:grid-cols-4 sm:gap-10">
        <div>
          <Logo className="mb-4 text-xl text-ink" iconClassName="h-6 w-6" />
          <p className="mb-4 text-[14px] leading-relaxed">
            Ratnapura Road, Eheliyagoda,
            <br />
            Ratnapura District, Sri Lanka
          </p>
          <p className="mb-1 text-[14px]">076 933 255</p>
          <p className="text-[14px]">Mon–Sat 9AM–7PM</p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <div className="eyebrow mb-5 !text-ink-faint">{col.heading}</div>
            <div className="flex flex-col gap-3 text-[14px]">
              {col.links.map((link, i) => (
                <Link key={i} href={link.href} className="link-underline w-fit transition-colors duration-200 hover:text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-6 text-[13px] text-ink-faint">
        <span>© 2026 GoldSky. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/delivery" className="link-underline hover:text-ink">
            Delivery Information
          </Link>
          <span>Made in Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
