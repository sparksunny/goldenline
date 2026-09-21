import React from 'react';
import { useApp } from '../context/AppContext';
import { aboutImage } from '../data/defaultData';
import { ShieldCheck, Clock, Users, ArrowUpRight, Building2 } from 'lucide-react';

export const AboutCompany: React.FC = () => {
  const { companyInfo } = useApp();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#ffffff] text-slate-900 relative overflow-hidden">
      {/* Decorative corporate geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-bl-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-64 h-64 bg-slate-100/80 rounded-tr-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003882]/10 text-[#003882] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#003882]" />
              <span>Established in {companyInfo.establishedYear}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1526] tracking-tight font-sans">
              ABOUT <br />
              <span className="text-[#003882]">COMPANY</span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
              <p className="font-medium text-slate-800 border-l-4 border-[#003882] pl-4">
                {companyInfo.aboutText1}
              </p>
              <p>
                {companyInfo.aboutText2}
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                <Clock className="w-5 h-5 text-[#003882] mb-2" />
                <h4 className="font-bold text-sm text-slate-900">Punctuality</h4>
                <p className="text-xs text-slate-500 mt-1">Guaranteed on-time arrivals</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#003882] mb-2" />
                <h4 className="font-bold text-sm text-slate-900">Safety First</h4>
                <p className="text-xs text-slate-500 mt-1">Vetted drivers & clean fleet</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors col-span-2 sm:col-span-1">
                <Users className="w-5 h-5 text-[#003882] mb-2" />
                <h4 className="font-bold text-sm text-slate-900">Satisfaction</h4>
                <p className="text-xs text-slate-500 mt-1">Tailored for VIP clients</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[#003882] hover:text-[#00285d] font-bold text-sm group"
              >
                <span>Explore all 9 transportation services</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image Container - Clean, Frameless */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl relative">
              <img
                src={aboutImage}
                alt="Executive chauffeur service by First Golden Line Transport"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#111827]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                      Serving Saudi Arabia
                    </div>
                    <div className="text-sm font-bold text-white">
                      Tabuk • NEOM • AlUla • Duba • Riyadh
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#003882] flex items-center justify-center text-white font-bold text-sm shadow">
                    24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
