"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-surface border border-white/[0.06] rounded-sm px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-red/40 transition-colors";

export default function FinancingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Finance Center</div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">Get Approved</h1>
            <p className="text-white/35 text-lg leading-relaxed">
              We work with all credit types. Complete the application below and our team will reach out with tailored options.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "01", title: "All Credit Welcome", desc: "Good credit, bad credit, or first-time buyer — we find a path." },
              { num: "02", title: "Fast Decisions", desc: "Get a response quickly so you can drive away the same day." },
              { num: "03", title: "Best Rates", desc: "We work with multiple lenders to secure the most competitive rate." },
            ].map((item) => (
              <div key={item.num} className="bg-card border border-white/[0.04] rounded-sm p-6 hover:border-white/[0.08] transition-all duration-500">
                <div className="text-[11px] font-bold text-red/40 mb-3 tabular-nums">{item.num}</div>
                <h3 className="font-semibold mb-1.5 tracking-tight">{item.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-card border border-green-500/20 rounded-sm p-12 text-center">
              <div className="w-16 h-16 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 tracking-tight">Application Received</h2>
              <p className="text-white/35">Our finance team will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Info */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold text-red/50 tabular-nums">01</span>
                  <h2 className="text-lg font-semibold tracking-tight">Personal Information</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">First Name *</label>
                    <input required type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Last Name *</label>
                    <input required type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Email *</label>
                    <input required type="email" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Phone *</label>
                    <input required type="tel" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Date of Birth</label>
                    <input type="date" className={inputClass} />
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.04]" />

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold text-red/50 tabular-nums">02</span>
                  <h2 className="text-lg font-semibold tracking-tight">Address</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Street Address *</label>
                    <input required type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">City *</label>
                    <input required type="text" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">State *</label>
                      <input required type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Zip *</label>
                      <input required type="text" className={inputClass} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.04]" />

              {/* Employment */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold text-red/50 tabular-nums">03</span>
                  <h2 className="text-lg font-semibold tracking-tight">Employment &amp; Income</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Employer</label>
                    <input type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Job Title</label>
                    <input type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Monthly Income</label>
                    <input type="text" placeholder="$" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Time at Job</label>
                    <input type="text" placeholder="e.g. 2 years" className={inputClass} />
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.04]" />

              {/* Vehicle Interest */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold text-red/50 tabular-nums">04</span>
                  <h2 className="text-lg font-semibold tracking-tight">Vehicle Interest</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Desired Vehicle</label>
                    <input type="text" placeholder="e.g. 2020 Toyota Camry" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Down Payment</label>
                    <input type="text" placeholder="$" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Additional Notes</label>
                    <textarea rows={3} className={`${inputClass} resize-none`} />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,16,46,0.2)] cursor-pointer"
              >
                Submit Application
              </button>
              <p className="text-[11px] text-white/20 text-center tracking-wide">
                Your information is encrypted and secure. We will never share your data.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
