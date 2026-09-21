import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Navigation, ArrowRight, Sparkles, Search, Compass, CheckCircle2 } from 'lucide-react';

type RegionFilter = 'all' | 'giga_northwest' | 'central' | 'western' | 'eastern_south';

export const DestinationsSection: React.FC = () => {
  const { destinations, setBookingPrefill } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<RegionFilter>('all');

  const handleSelectDestination = (destName: string) => {
    setBookingPrefill({ service: `Destination Transit: ${destName}` });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeDestinations = useMemo(() => {
    return destinations.filter((d) => d.active);
  }, [destinations]);

  // Categorize destinations for easy navigation
  const getCategory = (dest: typeof activeDestinations[0]): RegionFilter => {
    const id = dest.id.toLowerCase();
    const region = dest.region.toLowerCase();

    if (
      id.includes('tabuk') ||
      id.includes('neom') ||
      id.includes('oxagon') ||
      id.includes('trojena') ||
      id.includes('duba') ||
      id.includes('alula') ||
      region.includes('northwest') ||
      region.includes('giga')
    ) {
      return 'giga_northwest';
    }

    if (id.includes('riyadh') || id.includes('hail') || region.includes('central') || region.includes('capital')) {
      return 'central';
    }

    if (
      id.includes('jeddah') ||
      id.includes('makkah') ||
      id.includes('madinah') ||
      id.includes('red-sea') ||
      id.includes('yanbu') ||
      region.includes('western') ||
      region.includes('holy') ||
      region.includes('ecotourism')
    ) {
      return 'western';
    }

    return 'eastern_south';
  };

  const filteredDestinations = useMemo(() => {
    return activeDestinations.filter((dest) => {
      // Category filter
      if (selectedFilter !== 'all') {
        const cat = getCategory(dest);
        if (cat !== selectedFilter) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dest.name.toLowerCase().includes(query);
        const matchesArabic = dest.nameArabic ? dest.nameArabic.includes(query) : false;
        const matchesRegion = dest.region.toLowerCase().includes(query);
        const matchesTagline = dest.tagline.toLowerCase().includes(query);
        const matchesPopular = dest.popularFor.toLowerCase().includes(query);
        const matchesHighlights = dest.highlights.some((h) => h.toLowerCase().includes(query));

        return matchesName || matchesArabic || matchesRegion || matchesTagline || matchesPopular || matchesHighlights;
      }

      return true;
    });
  }, [activeDestinations, selectedFilter, searchQuery]);

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-[#0b121f] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-96 h-96 bg-[#003882]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-700/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Kingdom of Saudi Arabia Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            OUR <span className="text-[#3b82f6]">DESTINATIONS</span>
          </h2>

          <p className="text-slate-400 mt-3 text-base sm:text-lg leading-relaxed">
            Connecting major metropolitan centers, international airports, mega-project construction corridors, industrial ports, and world-renowned heritage sites across Saudi Arabia with luxury chauffeur excellence.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#111827] p-3 sm:p-4 rounded-2xl border border-slate-800">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, airport, landmark, or region (e.g. Riyadh, Neom, TUU, Airport)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#0b101c] border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                id="destination-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Count Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141d2e] border border-slate-700/60 text-xs text-slate-300 whitespace-nowrap">
              <Compass className="w-3.5 h-3.5 text-[#ffd700]" />
              <span>
                Showing <strong className="text-white">{filteredDestinations.length}</strong> of{' '}
                <strong className="text-white">{activeDestinations.length}</strong> Destinations
              </span>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all border ${
                selectedFilter === 'all'
                  ? 'bg-[#003882] text-white border-blue-500 shadow-md shadow-blue-900/30'
                  : 'bg-[#141c2c] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              All Destinations ({activeDestinations.length})
            </button>
            <button
              onClick={() => setSelectedFilter('giga_northwest')}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all border ${
                selectedFilter === 'giga_northwest'
                  ? 'bg-[#003882] text-white border-blue-500 shadow-md shadow-blue-900/30'
                  : 'bg-[#141c2c] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              Northwest & Giga-Projects
            </button>
            <button
              onClick={() => setSelectedFilter('central')}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all border ${
                selectedFilter === 'central'
                  ? 'bg-[#003882] text-white border-blue-500 shadow-md shadow-blue-900/30'
                  : 'bg-[#141c2c] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              Central & Capital
            </button>
            <button
              onClick={() => setSelectedFilter('western')}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all border ${
                selectedFilter === 'western'
                  ? 'bg-[#003882] text-white border-blue-500 shadow-md shadow-blue-900/30'
                  : 'bg-[#141c2c] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              Western & Holy Cities
            </button>
            <button
              onClick={() => setSelectedFilter('eastern_south')}
              className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all border ${
                selectedFilter === 'eastern_south'
                  ? 'bg-[#003882] text-white border-blue-500 shadow-md shadow-blue-900/30'
                  : 'bg-[#141c2c] text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              Eastern & South
            </button>
          </div>
        </div>

        {/* Destination Cards Grid - Clean, Architectural (NO background images) */}
        {filteredDestinations.length === 0 ? (
          <div className="bg-[#131b2c] border border-slate-800 rounded-2xl p-12 text-center max-w-md mx-auto">
            <Compass className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No destinations match your search</h3>
            <p className="text-xs text-slate-400 mb-4">Try searching with a different city name or reset the filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group bg-[#121927] border border-slate-800 hover:border-blue-500/70 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:shadow-blue-950/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top card glow line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/80 to-transparent transition-all duration-300" />

                <div>
                  {/* Top Header Row: Pin & Name & Arabic */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-red-600/15 border border-red-500/30 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/25 transition-colors">
                        <MapPin className="w-4 h-4 fill-red-500 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors font-sans leading-tight">
                          {dest.name}
                        </h3>
                        <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                          {dest.region}
                        </div>
                      </div>
                    </div>

                    {dest.nameArabic && (
                      <span className="text-xs font-semibold text-[#ffd700] px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 whitespace-nowrap font-sans">
                        {dest.nameArabic}
                      </span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-slate-300 font-medium mb-3 leading-relaxed min-h-[32px]">
                    {dest.tagline}
                  </p>

                  {/* Focus Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60 text-[11px] font-medium text-slate-300 w-full truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#ffd700] flex-shrink-0" />
                      <span className="truncate">{dest.popularFor}</span>
                    </div>
                  </div>

                  {/* Highlights / Hubs */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-800/80 pt-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Key Corridors & Hubs
                    </div>
                    {dest.highlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Navigation className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    onClick={() => handleSelectDestination(dest.name)}
                    className="w-full py-2.5 px-3 bg-[#182235] hover:bg-[#003882] text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 shadow-sm"
                    id={`book-ride-${dest.id}`}
                  >
                    <span>Book Ride to {dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
