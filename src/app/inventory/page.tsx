"use client";

import { useState, useMemo } from "react";
import { vehicles, makes, bodyTypes } from "@/data/vehicles";
import VehicleCard from "../components/VehicleCard";

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
      <section className="pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-2">Our Inventory</h1>
          <p className="text-muted text-lg">
            Browse {vehicles.length} quality pre-owned vehicles
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by make, model, year..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card border border-card-border rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-muted focus:outline-none focus:border-red/50"
              />
            </div>

            {/* Make filter */}
            <select
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              className="bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 appearance-none cursor-pointer"
            >
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>

            {/* Body type filter */}
            <select
              value={selectedBody}
              onChange={(e) => setSelectedBody(e.target.value)}
              className="bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              {bodyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Max price */}
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 appearance-none cursor-pointer"
            >
              <option value="">Any Price</option>
              <option value="15000">Under $15,000</option>
              <option value="20000">Under $20,000</option>
              <option value="25000">Under $25,000</option>
              <option value="30000">Under $30,000</option>
              <option value="35000">Under $35,000</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red/50 appearance-none cursor-pointer"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest</option>
              <option value="mileage-asc">Mileage: Lowest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted mb-6">
            Showing {filtered.length} vehicle{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-bold mb-2">No vehicles found</p>
              <p className="text-muted mb-6">Try adjusting your search filters</p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedMake("");
                  setSelectedBody("");
                  setMaxPrice("");
                }}
                className="bg-red hover:bg-red-hover text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
