"use client";

import { useState } from "react";

const services = [
  {
    title: "Oil Change",
    desc: "Keep your engine running smooth with regular oil changes using quality oils and filters.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Brake Service",
    desc: "Brake pad replacement, rotor resurfacing, and complete brake system inspections.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
  {
    title: "Engine Diagnostics",
    desc: "Check engine light on? We use advanced diagnostic tools to identify and fix the issue.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Tire Service",
    desc: "Tire rotation, balancing, alignment, and new tire installation at competitive prices.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "AC & Heating",
    desc: "Stay comfortable year-round. We diagnose and repair climate control systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
  {
    title: "Pre-Purchase Inspection",
    desc: "Buying a car elsewhere? Bring it in for a thorough inspection before you commit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function ServicePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Service Center</h1>
            <p className="text-lg text-muted">
              Keep your vehicle running like new. Our certified technicians handle everything from routine maintenance to major repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service.title} className="bg-card border border-card-border rounded-xl p-6 hover:border-red/20 transition-colors">
                <div className="text-red mb-3">{service.icon}</div>
                <h3 className="font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours callout */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red/10 to-transparent border border-red/20 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Service Hours</h3>
              <p className="text-muted text-sm">Mon - Fri: 9AM - 5PM &middot; Sat: 9AM - 2PM &middot; Sun: Closed</p>
            </div>
            <a
              href="tel:3474850898"
              className="bg-red hover:bg-red-hover text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shrink-0"
            >
              Call to Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Request Service</h2>

          {submitted ? (
            <div className="bg-card border border-green-500/30 rounded-xl p-10 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
              <p className="text-muted">We&apos;ll contact you to confirm your appointment. Thank you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted mb-1.5">Name *</label>
                  <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1.5">Phone *</label>
                  <input required type="tel" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1.5">Email</label>
                  <input type="email" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1.5">Vehicle (Year Make Model)</label>
                  <input type="text" placeholder="e.g. 2019 Nissan Altima" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-red/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted mb-1.5">Service Needed *</label>
                <select required className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 appearance-none cursor-pointer">
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-muted mb-1.5">Describe the Issue</label>
                <textarea rows={4} className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 resize-none" placeholder="Tell us what's going on with your vehicle..." />
              </div>
              <button
                type="submit"
                className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer"
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
