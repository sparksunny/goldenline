import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Service } from '../types';
import {
  Navigation,
  Plane,
  Compass,
  Briefcase,
  Clock,
  Sliders,
  Key,
  CalendarCheck,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, setBookingPrefill } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Corporate' | 'Rental' | 'Chauffeur'>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Navigation':
        return <Navigation className="w-5 h-5" />;
      case 'Plane':
        return <Plane className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5" />;
      case 'Key':
        return <Key className="w-5 h-5" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const handleRequestService = (serviceTitle: string) => {
    setBookingPrefill({ service: serviceTitle });
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeServices = services.filter((s) => s.active);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003882]/10 text-[#003882] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Spectrum Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1526] tracking-tight">
              OUR <span className="text-[#003882]">SERVICES</span>
            </h2>
            <p className="text-slate-600 mt-2 text-base max-w-xl">
              Comprehensive, punctual, and flexible transportation solutions across Saudi Arabia for VIP individuals, corporate accounts, and large delegations.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>9 Specialized Services Available 24/7</span>
          </div>
        </div>

        {/* Services Grid matching PDF pages 6-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeServices.map((service, index) => {
            // Alternate subtle styling to reflect the PDF's editorial card feel
            const isDarkCard = index === 3 || index === 7;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between border ${
                  isDarkCard
                    ? 'bg-[#111827] text-white border-slate-700/80 shadow-xl'
                    : 'bg-white text-slate-800 border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200'
                }`}
              >
                <div>
                  {/* Service Image with curved border accent */}
                  <div className="relative h-52 overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Numeric badge matching PDF layout (01, 02, 03) */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#003882] text-white font-extrabold text-xs flex items-center justify-center shadow-md border border-white/20 font-mono">
                        {service.numberPrefix || `0${index + 1}`}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm text-[#003882] flex items-center justify-center shadow">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold tracking-tight mb-3 ${
                        isDarkCard ? 'text-white' : 'text-slate-900 group-hover:text-[#003882]'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-5 line-clamp-4 ${
                        isDarkCard ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {service.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-medium">
                          <CheckCircle className={`w-3.5 h-3.5 ${isDarkCard ? 'text-blue-400' : 'text-[#003882]'}`} />
                          <span className={isDarkCard ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className={`px-6 pb-6 pt-0`}>
                  <button
                    onClick={() => handleRequestService(service.title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isDarkCard
                        ? 'bg-[#003882] hover:bg-[#004bb1] text-white shadow-md'
                        : 'bg-slate-100 hover:bg-[#003882] text-slate-800 hover:text-white border border-slate-200 hover:border-transparent'
                    }`}
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
