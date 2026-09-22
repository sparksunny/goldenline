import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Users, Briefcase, Calendar, ShieldCheck, Check, ArrowRight, Car } from 'lucide-react';

export const FleetSection: React.FC = () => {
  const { vehicles, setBookingPrefill } = useApp();
  const [filter, setFilter] = useState<string>('All');

  const filterCategories = ['All', 'Van', 'Minibus', 'Luxury Coach', 'Large SUV', 'Luxury', 'SUV', 'Sedan', 'Available'];

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (filter === 'All') return true;
    if (filter === 'Available') return vehicle.available;
    return vehicle.category.toLowerCase() === filter.toLowerCase();
  });

  const handleRequestVehicle = (vehicleName: string) => {
    setBookingPrefill({ vehicle: vehicleName });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#ffffff] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching PDF page 13 & 14 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#003882] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Official Corporate & Executive Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1526] mt-3 tracking-tight font-sans">
              OUR <span className="text-[#003882]">FLEET</span>
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl">
              From flagship VIP coaches and commuter vans to executive SUVs and sedans, our modern, meticulously maintained fleet delivers uncompromised safety, comfort, and reliability across Saudi Arabia.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[#003882] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              id={`vehicle-card-${vehicle.id}`}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const filename = vehicle.image ? vehicle.image.split('/').pop()?.split('?')[0] : '';
                      if (filename && !target.src.includes(`/vehicles/${filename}`)) {
                        target.src = `/vehicles/${filename}`;
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#0a1120]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase">
                    {vehicle.category}
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-3 right-3">
                    {vehicle.available ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center bg-amber-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        Booked
                      </span>
                    )}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight font-sans uppercase">
                    {vehicle.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Capacity Specs (Admin Editable in Panel) */}
                  <div className="grid grid-cols-3 gap-2 my-4 py-3 px-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <div>
                      <div className="flex items-center justify-center text-slate-400 mb-1">
                        <Users className="w-3.5 h-3.5 text-[#003882]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800">
                        {vehicle.passengers >= 100 ? `${vehicle.passengers}+ Seats` : `${vehicle.passengers} Seats`}
                      </span>
                    </div>

                    <div className="border-x border-slate-200">
                      <div className="flex items-center justify-center text-slate-400 mb-1">
                        <Briefcase className="w-3.5 h-3.5 text-[#003882]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800">
                        {vehicle.luggage >= 80 ? `${vehicle.luggage}+ Bags` : `${vehicle.luggage} Bags`}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center justify-center text-slate-400 mb-1">
                        <Calendar className="w-3.5 h-3.5 text-[#003882]" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-800">{vehicle.modelYear}</span>
                    </div>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {vehicle.features.slice(0, 2).map((f, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleRequestVehicle(vehicle.name)}
                  className="w-full py-2.5 px-4 bg-[#003882] hover:bg-[#002d69] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2 group-hover:shadow-blue-900/20"
                  id={`btn-request-${vehicle.id}`}
                >
                  <span>Request This Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffd700]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
