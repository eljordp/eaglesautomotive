"use client";

import { useState, useMemo } from "react";
import { vehicles, makes, bodyTypes } from "@/data/vehicles";
import VehicleCard from "../components/VehicleCard";

const inputClass =
  "w-full bg-surface border border-white/[0.06] rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-red/40 transition-colors";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedBody, setSelectedBody] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("price-asc");

  const filtered = useMemo(() => {
    let result = vehicles.filter((v) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        `${v.year} ${v.make} ${v.model} ${v.trim}`.toLowerCase().includes(q);
      const matchesMake = !selectedMake || v.make === selectedMake;
      const matchesBody = !selectedBody || v.bodyType === selectedBody;
      const matchesPrice = !maxPrice || v.price <= Number(maxPrice);
      return matchesSearch && matchesMake && matchesBody && matchesPrice;
    });

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [search, selectedMake, selectedBody, maxPrice, sortBy]);

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-red font-semibold mb-3">Our Collection</div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-3">Inventory</h1>
          <p className="text-white/35 text-lg">
            {vehicles.length} premium pre-owned vehicles
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[82px] z-40 bg-[#06080b]/95 backdrop-blur-xl border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search make, model, year..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${inputClass} pl-10`}
              />
            </div>

            <select value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)} className={`${inputClass} appearance-none cursor-pointer lg:w-40`}>
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>

            <select value={selectedBody} onChange={(e) => setSelectedBody(e.target.value)} className={`${inputClass} appearance-none cursor-pointer lg:w-36`}>
              <option value="">All Types</option>
              {bodyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={`${inputClass} appearance-none cursor-pointer lg:w-40`}>
              <option value="">Any Price</option>
              <option value="15000">Under $15,000</option>
              <option value="20000">Under $20,000</option>
              <option value="25000">Under $25,000</option>
              <option value="30000">Under $30,000</option>
              <option value="35000">Under $35,000</option>
            </select>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={`${inputClass} appearance-none cursor-pointer lg:w-44`}>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="year-desc">Year: Newest</option>
              <option value="mileage-asc">Mileage: Lowest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] text-white/25 uppercase tracking-[0.2em] font-medium mb-8">
            {filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-2xl font-bold mb-2">No vehicles match</p>
              <p className="text-white/30 mb-8">Try adjusting your filters</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedMake("");
                  setSelectedBody("");
                  setMaxPrice("");
                }}
                className="bg-red hover:bg-red-hover text-white px-8 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
