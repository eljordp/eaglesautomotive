"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-surface border border-white/[0.06] rounded-sm px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-red/40 transition-colors";

const serviceList = [
  { title: "Oil Change", desc: "Keep your engine running smooth with quality oils and filters." },
  { title: "Brake Service", desc: "Pad replacement, rotor resurfacing, and full brake inspections." },
  { title: "Engine Diagnostics", desc: "Advanced tools to identify check engine lights and issues." },
  { title: "Tire Service", desc: "Rotation, balancing, alignment, and new tire installation." },
  { title: "AC & Heating", desc: "Climate control diagnostics and repair for year-round comfort." },
  { title: "Pre-Purchase Inspection", desc: "Thorough inspection before you commit to buying elsewhere." },
];

export default function ServicePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-2 sm:mb-3">Maintenance &amp; Repair</div>
            <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-3 sm:mb-4">Service Center</h1>
            <p className="text-white/35 text-sm sm:text-lg leading-relaxed">
              Expert technicians handling everything from routine maintenance to complex repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceList.map((service, i) => (
              <div key={service.title} className="bg-card border border-white/[0.04] rounded-sm p-7 hover:border-red/15 transition-all duration-500 group">
                <div className="text-[11px] font-bold text-red/30 mb-4 tabular-nums">0{i + 1}</div>
                <h3 className="font-semibold mb-2 tracking-tight group-hover:text-red transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours callout */}
      <section className="pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative bg-card border border-white/[0.04] rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red" />
            <div className="pl-4">
              <h3 className="text-lg font-semibold tracking-tight mb-1">Service Hours</h3>
              <p className="text-white/30 text-sm">Mon – Fri: 9 AM – 5 PM &middot; Sat: 9 AM – 2 PM &middot; Sun: Closed</p>
            </div>
            <a
              href="tel:3474850898"
              className="bg-red hover:bg-red-hover text-white px-8 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 shrink-0"
            >
              Call to Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Book Appointment</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">Request Service</h2>

          {submitted ? (
            <div className="bg-card border border-green-500/20 rounded-sm p-12 text-center">
              <div className="w-16 h-16 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Request Received</h3>
              <p className="text-white/35">We&apos;ll contact you to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Name *</label>
                  <input required type="text" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Phone *</label>
                  <input required type="tel" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Email</label>
                  <input type="email" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Vehicle</label>
                  <input type="text" placeholder="e.g. 2019 Nissan Altima" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Service Needed *</label>
                <select required className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select a service</option>
                  {serviceList.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Describe the Issue</label>
                <textarea rows={4} className={`${inputClass} resize-none`} placeholder="What's going on with your vehicle?" />
              </div>
              <button
                type="submit"
                className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,141,184,0.2)] cursor-pointer"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
