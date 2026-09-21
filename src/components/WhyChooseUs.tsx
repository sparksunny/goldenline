import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Clock, Headphones, Award, CheckCircle2, PhoneCall } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { companyInfo } = useApp();

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#ffffff] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Intro Section */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#003882] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Uncompromising Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1526] mt-3 tracking-tight font-sans">
            WHY <span className="text-[#003882]">CHOOSE US</span>
          </h2>
          <div className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {companyInfo.whyChooseUsIntro}
          </div>
        </div>

        {/* 3 Pillars matching PDF Page 15 & 16 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 01 Reliability and Punctuality */}
          <div className="relative rounded-3xl bg-[#131926] text-white p-8 sm:p-9 shadow-xl border border-slate-700/80 flex flex-col justify-between overflow-hidden group hover:border-[#003882] transition-colors">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#003882]/20 rounded-bl-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-14 h-14 rounded-full bg-[#003882] text-white text-xl font-extrabold flex items-center justify-center shadow-lg font-mono border-2 border-white/20">
                  01
                </span>
                <Clock className="w-7 h-7 text-[#d4af37]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Reliability & Punctuality
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At First Golden Line Transport we prioritize reliability and punctuality above all else. Our experienced drivers and modern fleet ensure that you always reach your destination on time, every time.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-blue-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Delay Dispatch Promise</span>
            </div>
          </div>

          {/* 02 Safety First */}
          <div className="relative rounded-3xl bg-[#131926] text-white p-8 sm:p-9 shadow-xl border border-slate-700/80 flex flex-col justify-between overflow-hidden group hover:border-[#003882] transition-colors">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#003882]/20 rounded-bl-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-14 h-14 rounded-full bg-[#003882] text-white text-xl font-extrabold flex items-center justify-center shadow-lg font-mono border-2 border-white/20">
                  02
                </span>
                <ShieldCheck className="w-7 h-7 text-[#d4af37]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {companyInfo.safetyTitle}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {companyInfo.safetyText}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-blue-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Rigorous Driver Vetting & Inspections</span>
            </div>
          </div>

          {/* 03 Customer Service */}
          <div className="relative rounded-3xl bg-[#131926] text-white p-8 sm:p-9 shadow-xl border border-slate-700/80 flex flex-col justify-between overflow-hidden group hover:border-[#003882] transition-colors">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#003882]/20 rounded-bl-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-14 h-14 rounded-full bg-[#003882] text-white text-xl font-extrabold flex items-center justify-center shadow-lg font-mono border-2 border-white/20">
                  03
                </span>
                <Headphones className="w-7 h-7 text-[#d4af37]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {companyInfo.customerServiceTitle}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {companyInfo.customerServiceText}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24/7 Dedicated Support</span>
              </div>
              <a
                href={`tel:${companyInfo.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
