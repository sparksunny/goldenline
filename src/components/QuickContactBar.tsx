import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

export const QuickContactBar: React.FC = () => {
  const { companyInfo } = useApp();

  const cleanPhone1 = companyInfo.phonePrimary.replace(/\s+/g, '');
  const cleanPhone2 = companyInfo.phoneSecondary.replace(/\s+/g, '');
  const whatsappNumber = companyInfo.phonePrimary.replace(/[^0-9]/g, '');

  return (
    <div id="quick-contact-strip" className="bg-[#0b1322] border-y border-slate-800 text-slate-300 py-3.5 relative z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center text-xs sm:text-sm">
          {/* Primary Phone */}
          <a
            href={`tel:${cleanPhone1}`}
            className="flex items-center gap-2 text-slate-200 hover:text-[#d4af37] transition-colors group"
          >
            <div className="w-7 h-7 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Call Direct</span>
              <span className="font-semibold text-slate-100">{companyInfo.phonePrimary}</span>
            </div>
          </a>

          {/* Secondary Phone */}
          <a
            href={`tel:${cleanPhone2}`}
            className="flex items-center gap-2 text-slate-200 hover:text-[#d4af37] transition-colors group"
          >
            <div className="w-7 h-7 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">2nd Line</span>
              <span className="font-semibold text-slate-100">{companyInfo.phoneSecondary}</span>
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              'Hello First Golden Line Transport, I would like to inquire about your transportation and vehicle rental services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300">
              <MessageCircle className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">WhatsApp</span>
              <span className="font-semibold text-emerald-300">Chat Instantly</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="hidden md:flex items-center gap-2 text-slate-200 hover:text-[#d4af37] transition-colors group truncate"
          >
            <div className="w-7 h-7 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300 flex-shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Email</span>
              <span className="font-semibold text-slate-100 truncate">{companyInfo.email}</span>
            </div>
          </a>

          {/* Location / Headquarters */}
          <div className="hidden lg:flex items-center gap-2 text-slate-300">
            <div className="w-7 h-7 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Headquarters</span>
              <span className="font-semibold text-slate-100">{companyInfo.headquarters}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
