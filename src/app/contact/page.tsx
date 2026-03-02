"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-surface border border-white/[0.06] rounded-sm px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-red/40 transition-colors";

export default function ContactPage() {
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
          <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Get In Touch</div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4">Contact Us</h1>
          <p className="text-white/35 text-lg">
            Questions? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Phone */}
              <div className="bg-card border border-white/[0.04] rounded-sm p-7 hover:border-white/[0.08] transition-all duration-500">
                <div className="text-[11px] text-white/25 uppercase tracking-[0.2em] font-medium mb-3">Phone</div>
                <a href="tel:3474850898" className="text-xl text-white font-semibold hover:text-red transition-colors duration-300 tracking-tight">
                  (347) 485-0898
                </a>
              </div>

              {/* Address */}
              <div className="bg-card border border-white/[0.04] rounded-sm p-7 hover:border-white/[0.08] transition-all duration-500">
                <div className="text-[11px] text-white/25 uppercase tracking-[0.2em] font-medium mb-3">Visit Us</div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  2145 NW Broad St<br />
                  Murfreesboro, TN 37129
                </p>
                <a
                  href="https://maps.google.com/?q=2145+NW+Broad+St+Murfreesboro+TN+37129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-red hover:text-red-hover font-semibold uppercase tracking-[0.15em] transition-colors"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-card border border-white/[0.04] rounded-sm p-7 hover:border-white/[0.08] transition-all duration-500">
                <div className="text-[11px] text-white/25 uppercase tracking-[0.2em] font-medium mb-4">Hours</div>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex justify-between">
                    <span className="text-white/30">Mon — Fri</span>
                    <span className="text-white/70 font-medium">9:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/30">Saturday</span>
                    <span className="text-white/70 font-medium">9:00 AM – 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/30">Sunday</span>
                    <span className="text-red/70 font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="bg-card border border-white/[0.04] rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.8!2d-86.42!3d35.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUyJzEyLjAiTiA4NsKwMjUnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eagles Automotive location"
                  className="grayscale opacity-70"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card border border-green-500/20 rounded-sm p-12 text-center">
                  <div className="w-16 h-16 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 tracking-tight">Message Sent</h2>
                  <p className="text-white/35">We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <div className="bg-card border border-white/[0.04] rounded-sm p-8 sm:p-10">
                  <h2 className="text-xl font-semibold tracking-tight mb-8">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Full Name *</label>
                        <input required type="text" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Email *</label>
                        <input required type="email" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Phone</label>
                      <input type="tel" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Subject</label>
                      <select className={`${inputClass} appearance-none cursor-pointer`}>
                        <option value="">Select a topic</option>
                        <option value="inventory">Vehicle Inquiry</option>
                        <option value="financing">Financing Question</option>
                        <option value="service">Service Appointment</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">Message *</label>
                      <textarea required rows={5} className={`${inputClass} resize-none`} placeholder="How can we help?" />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,141,184,0.2)] cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
