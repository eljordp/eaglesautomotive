import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#040406] border-t border-white/[0.04]">
      {/* Red accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-red/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Eagles Automotive Inc"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-muted/70 leading-relaxed max-w-xs">
              Your trusted destination for premium pre-owned vehicles in Middle Tennessee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">Navigate</h3>
            <ul className="space-y-3">
              {[
                { href: "/inventory", label: "Inventory" },
                { href: "/financing", label: "Financing" },
                { href: "/service", label: "Service" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted/60 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-muted/60">
                <span>Mon — Fri</span>
                <span className="text-white/80 font-medium">9 AM – 5 PM</span>
              </li>
              <li className="flex justify-between text-muted/60">
                <span>Saturday</span>
                <span className="text-white/80 font-medium">9 AM – 2 PM</span>
              </li>
              <li className="flex justify-between text-muted/60">
                <span>Sunday</span>
                <span className="text-red/70 font-medium">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">Reach Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:3474850898" className="text-white/80 hover:text-red transition-colors duration-300 font-medium">
                  (347) 485-0898
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=2145+NW+Broad+St+Murfreesboro+TN+37129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted/60 hover:text-white transition-colors duration-300 leading-relaxed"
                >
                  2145 NW Broad St<br />Murfreesboro, TN 37129
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/20 tracking-wider">
            &copy; {new Date().getFullYear()} Eagles Automotive Inc.
          </p>
          <p className="text-[11px] text-white/20 tracking-wider">
            Murfreesboro, Tennessee
          </p>
        </div>
      </div>
    </footer>
  );
}
