"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Repair Services" },
  { href: "/wholesale", label: "Wholesale", badge: "Tiers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-bone/85 shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-16px_rgba(0,0,0,0.15)] backdrop-blur-md"
          : "border-transparent bg-bone/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" aria-label="GoldSky home" className="text-ink transition-opacity duration-200 hover:opacity-80">
          <Logo className="text-[21px]" iconClassName="h-7 w-7" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.09em] text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              {link.badge && (
                <span className="rounded-xs bg-gold-soft px-1.5 py-0.5 text-[9px] font-semibold tracking-normal text-gold-deep normal-case">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <form action="/search" className="hidden items-center lg:flex">
            <div className="flex items-center gap-2 rounded-pill border border-line bg-bone-soft px-3.5 py-2 transition-colors duration-200 focus-within:border-ink/30">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-ink-faint">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                name="q"
                placeholder="Search parts..."
                aria-label="Search parts"
                className="w-40 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-faint xl:w-56"
              />
            </div>
          </form>

          <Link
            href="/search"
            aria-label="Search parts"
            className="hidden items-center gap-2 text-[12px] font-medium uppercase tracking-[0.09em] text-ink-soft transition-colors duration-200 hover:text-ink sm:flex lg:hidden"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>

          <a
            href="https://wa.me/9476933255?text=Hi%20GoldSky%2C%20I%27d%20like%20to%20enquire."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.19c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.77-4.14-4.91-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.26.6.87 2.02.95 2.17.08.15.13.32.03.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.29.15.46.13.64-.05.18-.19.75-.87.95-1.17.2-.29.39-.24.65-.14.26.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
            </svg>
            WhatsApp
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ink transition-transform duration-300 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-ink transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-px w-5 bg-ink transition-transform duration-300 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-80 border-line opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-2.5 text-[13px] font-medium uppercase tracking-[0.09em] text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              {link.badge && (
                <span className="rounded-xs bg-gold-soft px-1.5 py-0.5 text-[9px] font-semibold tracking-normal text-gold-deep normal-case">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            className="py-2.5 text-[13px] font-medium uppercase tracking-[0.09em] text-ink-soft transition-colors duration-200 hover:text-ink sm:hidden"
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}
