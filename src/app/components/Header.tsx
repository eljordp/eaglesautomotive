"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/financing", label: "Financing" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-[#06080b]/90 backdrop-blur-xl border-b border-white/[0.04] shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-red to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <img
              src="/logo.png"
              alt="Eagles Automotive Inc"
              className="h-10 sm:h-14 w-auto group-hover:brightness-110 transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] uppercase tracking-wider font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-red"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-red rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:3474850898"
            className="hidden lg:flex items-center gap-2.5 border border-red/30 hover:border-red hover:bg-red/5 text-white px-5 py-2.5 rounded-sm font-medium text-sm tracking-wide transition-all duration-300"
          >
            <svg className="w-4 h-4 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (347) 485-0898
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h8" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — fullscreen overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[66px] bg-[#06080b] z-50 overflow-y-auto">
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-4 text-base uppercase tracking-wider font-medium transition-colors border-l-2 ${
                  pathname === link.href
                    ? "border-red text-red bg-red/5"
                    : "border-transparent text-white/50 active:text-white active:border-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Phone CTA in mobile menu */}
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href="tel:3474850898"
                className="flex items-center justify-center gap-3 bg-red/10 border border-red/20 text-white font-semibold text-sm tracking-wide rounded-sm px-6 py-4"
              >
                <svg className="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (347) 485-0898
              </a>
            </div>

            <div className="pt-4 text-center">
              <p className="text-[11px] text-white/20 tracking-wider">2145 NW Broad St, Murfreesboro TN</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
