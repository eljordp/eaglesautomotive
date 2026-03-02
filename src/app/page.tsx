import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "./components/VehicleCard";

export default function Home() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(224,32,32,0.15),_transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-muted mb-8">
            <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
            Now serving Murfreesboro &amp; Middle Tennessee
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9]">
            DRIVE YOUR
            <br />
            <span className="text-red">DREAM CAR</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
            Quality pre-owned vehicles at prices you can afford. Browse our inventory, get approved for financing, and drive away happy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inventory"
              className="w-full sm:w-auto bg-red hover:bg-red-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Browse Inventory
            </Link>
            <Link
              href="/financing"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Get Pre-Approved
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16">
            {[
              { value: "70+", label: "Vehicles" },
              { value: "4.7", label: "Rating" },
              { value: "53+", label: "Reviews" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-2">Featured Vehicles</h2>
              <p className="text-muted">Hand-picked from our latest arrivals</p>
            </div>
            <Link
              href="/inventory"
              className="hidden sm:inline-flex items-center gap-2 text-red hover:text-red-hover font-semibold text-sm transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/inventory" className="inline-flex items-center gap-2 text-red font-semibold">
              View All Inventory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Why Eagles Automotive?</h2>
            <p className="text-muted max-w-xl mx-auto">
              We&apos;re not just selling cars &mdash; we&apos;re building trust with every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Quality Inspected",
                desc: "Every vehicle goes through a thorough multi-point inspection before it hits our lot.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Affordable Pricing",
                desc: "Competitive pricing on every vehicle. We work with all credit types to get you approved.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                ),
                title: "Customer First",
                desc: "4.7 stars with 53+ reviews. Our customers come back because we treat them right.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-card-border rounded-xl p-8 hover:border-red/20 transition-colors">
                <div className="text-red mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "They sold me a great car for a good price, they have quality cars. Highly recommend!",
                name: "Happy Customer",
                rating: 5,
              },
              {
                text: "Very professional and easy to work with. Found exactly what I was looking for at a fair price.",
                name: "Satisfied Buyer",
                rating: 5,
              },
              {
                text: "Great selection of vehicles and the staff was extremely helpful. Will definitely come back.",
                name: "Returning Customer",
                rating: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="text-sm font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-red/20 via-red/10 to-transparent border border-red/20 rounded-2xl p-10 sm:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Find Your Next Car?</h2>
              <p className="text-muted mb-8 max-w-xl">
                Visit us at 2145 NW Broad St in Murfreesboro or give us a call. We&apos;re here to help you drive away happy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3474850898"
                  className="bg-red hover:bg-red-hover text-white px-8 py-4 rounded-xl font-bold text-center transition-colors"
                >
                  Call (347) 485-0898
                </a>
                <Link
                  href="/contact"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-center transition-colors"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
