import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red rounded-lg flex items-center justify-center font-bold text-white text-lg">
                EA
              </div>
              <div>
                <div className="text-lg font-bold">Eagles Automotive</div>
                <div className="text-xs text-muted">Inc.</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Quality used vehicles at unbeatable prices in Murfreesboro, Tennessee. Your trusted local dealership since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/inventory", label: "Browse Inventory" },
                { href: "/financing", label: "Get Financing" },
                { href: "/service", label: "Service Center" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Business Hours</h3>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">9AM - 5PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9AM - 2PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:3474850898" className="flex items-start gap-2 text-muted hover:text-white transition-colors">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (347) 485-0898
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=2145+NW+Broad+St+Murfreesboro+TN+37129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  2145 NW Broad St<br />Murfreesboro, TN 37129
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Eagles Automotive Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Murfreesboro, Tennessee
          </p>
        </div>
      </div>
    </footer>
  );
}
