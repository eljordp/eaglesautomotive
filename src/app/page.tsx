import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "./components/VehicleCard";

export default function Home() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 8);

  return (
    <>
      {/* Hero — cinematic fullscreen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden noise">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')",
          }}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080b] via-[#06080b]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080b]/80 via-transparent to-[#06080b]/80" />

        {/* Red accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/[0.07] rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-white/40 font-medium mb-10">
            <span className="w-1.5 h-1.5 bg-red rounded-full" />
            Murfreesboro&apos;s Trusted Dealership
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[110px] font-black tracking-[-0.03em] mb-6 leading-[0.85]">
            <span className="text-white/90">FIND YOUR</span>
            <br />
            <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
              PERFECT RIDE
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light">
            Premium pre-owned vehicles, transparent pricing, and financing options built around you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inventory"
              className="w-full sm:w-auto bg-red hover:bg-red-hover text-white px-10 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,141,184,0.3)]"
            >
              Explore Inventory
            </Link>
            <Link
              href="/financing"
              className="w-full sm:w-auto border border-white/[0.12] hover:border-white/30 text-white/70 hover:text-white px-10 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              Get Pre-Approved
            </Link>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center sm:justify-between py-8 border-t border-white/[0.06]">
              <div className="flex items-center gap-10 sm:gap-16">
                {[
                  { value: "70+", label: "Vehicles in Stock" },
                  { value: "4.7★", label: "Google Rating" },
                  { value: "53+", label: "Happy Reviews" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                    <div className="text-[10px] sm:text-[11px] text-white/30 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a
                href="tel:3474850898"
                className="hidden lg:flex items-center gap-3 text-white/50 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">Call Now</div>
                  <div className="text-sm font-medium text-white/70">(347) 485-0898</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Curated Selection</div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Featured Vehicles</h2>
            </div>
            <Link
              href="/inventory"
              className="hidden sm:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-white/30 hover:text-red font-medium transition-colors duration-300"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/inventory" className="inline-flex items-center gap-2 text-red font-semibold text-sm uppercase tracking-wider">
              View All Inventory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us — editorial layout */}
      <section className="relative py-28 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface to-surface/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Why Eagles</div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
                Not Just a Dealership.<br />
                <span className="text-white/40">A Different Experience.</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-10 max-w-md">
                We&apos;ve built our reputation on honest deals and quality vehicles. Every car is inspected, every price is fair, and every customer is family.
              </p>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Multi-Point Inspection", desc: "Every vehicle is thoroughly inspected before it reaches our lot." },
                  { num: "02", title: "Transparent Pricing", desc: "No hidden fees, no surprises. The price you see is the price you get." },
                  { num: "03", title: "Flexible Financing", desc: "We work with all credit types and multiple lenders to get you approved." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 group">
                    <div className="text-[11px] font-bold text-red/40 pt-1 tabular-nums">{item.num}</div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide mb-1 group-hover:text-red transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image + stats */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
                  alt="Premium vehicle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080b] via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute bottom-8 left-0 sm:-left-8 glass border border-white/[0.06] rounded-sm px-8 py-6">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">4.7</span>
                </div>
                <div className="text-[11px] text-white/40 tracking-wide">53+ Reviews on Google</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </section>

      {/* Testimonials */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Testimonials</div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Straight From Our Customers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "They sold me a great car for a good price — quality cars all around. Can't recommend them enough.",
                name: "Verified Buyer",
              },
              {
                text: "Very professional and easy to work with. Found exactly what I was looking for at a fair price. No pressure at all.",
                name: "Google Review",
              },
              {
                text: "Great selection of vehicles and the staff was extremely helpful throughout the whole process. Will definitely be back.",
                name: "Returning Customer",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="relative bg-card border border-white/[0.04] rounded-sm p-8 hover:border-white/[0.08] transition-all duration-500"
              >
                {/* Quote mark */}
                <div className="text-6xl font-serif text-red/10 leading-none mb-4">&ldquo;</div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] text-white/30 uppercase tracking-wider font-medium">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-width cinematic */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080b] via-transparent to-[#06080b]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[0.95]">
            Ready to Drive<br />
            <span className="text-red">Something Better?</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto leading-relaxed">
            Visit us at 2145 NW Broad St in Murfreesboro, Tennessee. Open Monday through Saturday.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3474850898"
              className="w-full sm:w-auto bg-red hover:bg-red-hover text-white px-10 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,141,184,0.3)]"
            >
              Call (347) 485-0898
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/[0.12] hover:border-white/30 text-white/70 hover:text-white px-10 py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
