"use client";

import { useState } from "react";

export default function ContactPage() {
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
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-lg text-muted">
            Have a question? We&apos;d love to hear from you. Reach out by phone, visit us, or send a message below.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Phone</h3>
                </div>
                <a href="tel:3474850898" className="text-lg text-red hover:text-red-hover font-semibold transition-colors">
                  (347) 485-0898
                </a>
              </div>

              {/* Address */}
              <div className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Address</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  2145 NW Broad St<br />
                  Murfreesboro, TN 37129
                </p>
                <a
                  href="https://maps.google.com/?q=2145+NW+Broad+St+Murfreesboro+TN+37129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-red hover:text-red-hover font-semibold mt-3 transition-colors"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Hours */}
              <div className="bg-card border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Hours</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted">Sunday</span>
                    <span className="text-red font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-card border border-card-border rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.8!2d-86.42!3d35.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUyJzEyLjAiTiA4NsKwMjUnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eagles Automotive location"
                  className="grayscale"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card border border-green-500/30 rounded-xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-muted">We&apos;ll get back to you as soon as possible. Thank you!</p>
                </div>
              ) : (
                <div className="bg-card border border-card-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-muted mb-1.5">Full Name *</label>
                        <input required type="text" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                      </div>
                      <div>
                        <label className="block text-sm text-muted mb-1.5">Email *</label>
                        <input required type="email" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-1.5">Phone</label>
                      <input type="tel" className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-1.5">Subject</label>
                      <select className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 appearance-none cursor-pointer">
                        <option value="">Select a topic</option>
                        <option value="inventory">Vehicle Inquiry</option>
                        <option value="financing">Financing Question</option>
                        <option value="service">Service Appointment</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-1.5">Message *</label>
                      <textarea required rows={5} className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 resize-none" placeholder="How can we help you?" />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer"
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
