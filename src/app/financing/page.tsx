"use client";

import { useState } from "react";

export default function FinancingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">Get Financing</h1>
            <p className="text-lg text-muted">
              We work with all credit types. Fill out the application below and our finance team will reach out with your options.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "All Credit Welcome", desc: "Good, bad, or no credit — we can help." },
              { title: "Quick Approval", desc: "Get a decision fast so you can drive today." },
              { title: "Competitive Rates", desc: "We shop multiple lenders to find you the best deal." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-card-border rounded-xl p-6">
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-card border border-green-500/30 rounded-xl p-10 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
              <p className="text-muted">Our finance team will contact you within 24 hours. Thank you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red rounded-lg flex items-center justify-center text-sm font-bold text-white">1</span>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">First Name *</label>
                    <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Last Name *</label>
                    <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Email *</label>
                    <input required type="email" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Phone *</label>
                    <input required type="tel" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Date of Birth</label>
                    <input type="date" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red rounded-lg flex items-center justify-center text-sm font-bold text-white">2</span>
                  Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm text-muted mb-1.5">Street Address *</label>
                    <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">City *</label>
                    <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted mb-1.5">State *</label>
                      <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                    </div>
                    <div>
                      <label className="block text-sm text-muted mb-1.5">Zip *</label>
                      <input required type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Employment */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red rounded-lg flex items-center justify-center text-sm font-bold text-white">3</span>
                  Employment &amp; Income
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Employer</label>
                    <input type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Job Title</label>
                    <input type="text" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Monthly Income</label>
                    <input type="text" placeholder="$" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Time at Job</label>
                    <input type="text" placeholder="e.g. 2 years" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-red/50" />
                  </div>
                </div>
              </div>

              {/* Vehicle Interest */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red rounded-lg flex items-center justify-center text-sm font-bold text-white">4</span>
                  Vehicle Interest
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Desired Vehicle</label>
                    <input type="text" placeholder="e.g. 2020 Toyota Camry" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-red/50" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Down Payment</label>
                    <input type="text" placeholder="$" className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-red/50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm text-muted mb-1.5">Additional Comments</label>
                    <textarea rows={3} className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 resize-none" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer"
              >
                Submit Application
              </button>
              <p className="text-xs text-muted text-center">
                Your information is secure and will only be used to process your financing application.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
