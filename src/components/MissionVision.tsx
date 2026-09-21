import React from 'react';
import { useApp } from '../context/AppContext';
import { Target, Compass, Sparkles } from 'lucide-react';

export const MissionVision: React.FC = () => {
  const { companyInfo } = useApp();

  return (
    <section id="mission-vision" className="py-16 sm:py-24 bg-[#0d121c] text-white relative overflow-hidden">
      {/* Background architectural accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-3.5 py-1.5 rounded-full border border-[#d4af37]/20">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 font-sans">
            MISSION & <span className="text-[#3b82f6]">VISION</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            The driving principles behind First Golden Line Transport since our inception in 2020.
          </p>
        </div>

        {/* Dual Cards matching PDF aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card - Dark Charcoal with Blue & Gold accents */}
          <div className="relative rounded-3xl bg-[#141b27] border border-slate-700/70 p-8 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-[#003882] transition-colors">
            {/* Geometric top corner badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#003882] flex items-center justify-center text-white shadow-lg">
                  <Target className="w-7 h-7 text-[#ffd700]" />
                </div>
                <span className="text-4xl font-extrabold text-slate-800/80 font-serif select-none">
                  01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                OUR MISSION
              </h3>

              <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans relative">
                <span className="text-3xl text-blue-500/40 font-serif leading-none mr-1">“</span>
                {companyInfo.mission}
                <span className="text-3xl text-blue-500/40 font-serif leading-none ml-1">”</span>
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reliable • Safe • Affordable Transportation</span>
            </div>
          </div>

          {/* Vision Card - Deep Corporate Blue theme */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#003882] to-[#002253] border border-blue-400/30 p-8 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden group">
            {/* Geometric corner badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <span className="text-4xl font-extrabold text-white/20 font-serif select-none">
                  02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                OUR VISION
              </h3>

              <blockquote className="text-blue-50 text-base sm:text-lg leading-relaxed font-sans relative">
                <span className="text-3xl text-white/40 font-serif leading-none mr-1">“</span>
                {companyInfo.vision}
                <span className="text-3xl text-white/40 font-serif leading-none ml-1">”</span>
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
              <span>Connecting Communities • Hassle-Free & Worry-Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
