import React from 'react';
import { useApp } from '../context/AppContext';
import heroBannerImg from '../assets/images/riyadh_highway_banner_1790023615123.jpg';
import { ArrowRight, ShieldCheck, Clock, MapPin, Sparkles, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const { companyInfo } = useApp();

  const whatsappUrl = `https://wa.me/${companyInfo.phonePrimary.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello First Golden Line Transport, I would like to inquire about your transportation and vehicle rental services.'
  )}`;

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0f19]">
      {/* Background Image with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBannerImg}
          alt="First Golden Line Transport - Saudi Arabia Modern Transit and Highways"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] scale-105 filter brightness-85 contrast-105 animate-subtleZoom"
        />
        {/* Multilayer gradient matching PDF color system: Corporate Navy & Deep Charcoal */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/95 via-[#0b162c]/85 md:via-[#0b162c]/75 to-[#070b12]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f19] via-transparent to-[#070b12]/60" />

        {/* Geometric Blue Polygon Graphic matching PDF Page 1 & 2 Cover Style */}
        <div className="hidden lg:block absolute -bottom-24 -right-24 w-96 h-96 bg-[#003882]/25 rounded-[80px] transform rotate-12 blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Badge & Arabic Subtitle */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="tracking-wide">{companyInfo.nameAr}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Est. {companyInfo.establishedYear}</span>
          </div>

          {/* Main Title matching PDF page 1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 font-sans">
            FIRST GOLDEN <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-200 to-white bg-clip-text text-transparent">
              LINE TRANSPORT
            </span>
          </h1>

          {/* Subtitle & Tagline */}
          <p className="text-lg sm:text-xl font-medium text-slate-200 mb-2 max-w-2xl leading-relaxed">
            {companyInfo.tagline}
          </p>

          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#d4af37] mb-8">
            <span>Reliable</span>
            <span className="text-slate-500">/</span>
            <span>Safe</span>
            <span className="text-slate-500">/</span>
            <span>Comfortable</span>
            <span className="text-slate-500">/</span>
            <span>Punctual</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 mb-12">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#003882] via-[#004bb1] to-[#005cd8] hover:from-[#002d69] hover:to-[#0047a0] text-white font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 border border-blue-400/40"
              id="hero-cta-request"
            >
              <span>Request a Vehicle</span>
              <ArrowRight className="w-4 h-4 text-[#ffd700]" />
            </a>

            <a
              href="#fleet"
              className="px-6 sm:px-7 py-3.5 sm:py-4 bg-slate-900/70 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-sm sm:text-base rounded-xl border border-slate-700/80 backdrop-blur-sm transition-all"
            >
              Explore Our Fleet
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 sm:py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold text-sm sm:text-base rounded-xl border border-emerald-500/40 backdrop-blur-sm flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Instant WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights from PDF */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
              <div className="p-2 rounded-md bg-[#003882]/40 text-blue-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">24/7 Availability</div>
                <div className="text-[11px] text-slate-400">Round-the-clock dispatch</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
              <div className="p-2 rounded-md bg-[#003882]/40 text-blue-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">Safety & Comfort</div>
                <div className="text-[11px] text-slate-400">Vetted drivers & luxury fleet</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
              <div className="p-2 rounded-md bg-[#003882]/40 text-blue-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">Tabuk • NEOM • KSA</div>
                <div className="text-[11px] text-slate-400">Strategic Northwest coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
