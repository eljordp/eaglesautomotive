import type { Vehicle } from "@/data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="group relative bg-card rounded-sm overflow-hidden border border-white/[0.04] hover:border-red/20 transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Price badge */}
        <div className="absolute bottom-3 left-3">
          <div className="text-2xl font-black text-white tracking-tight">
            ${vehicle.price.toLocaleString()}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-white/50 font-medium">+ tax &amp; fees</div>
        </div>

        {/* Body type tag */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] uppercase tracking-wider text-white/70 font-medium px-2.5 py-1 rounded-sm">
          {vehicle.bodyType}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-base font-semibold mb-0.5 tracking-tight">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-xs text-gold/80 font-medium tracking-wide uppercase mb-4">{vehicle.trim}</p>

        {/* Specs row */}
        <div className="flex items-center gap-3 text-[11px] text-muted">
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red/60" />
            {vehicle.mileage.toLocaleString()} mi
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red/60" />
            {vehicle.transmission}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red/60" />
            {vehicle.fuelType}
          </span>
        </div>

        {/* Divider + CTA */}
        <div className="mt-4 pt-4 border-t border-white/[0.04]">
          <button className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/40 hover:text-red group-hover:text-red transition-colors duration-300 cursor-pointer py-1">
            View Details
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
