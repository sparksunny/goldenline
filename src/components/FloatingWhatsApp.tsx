import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { companyInfo } = useApp();

  const whatsappNumber = companyInfo.phonePrimary.replace(/[^0-9]/g, '');
  const message = encodeURIComponent(
    'Hello First Golden Line Transport, I would like to inquire about your transportation and vehicle rental services.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <aside
      aria-label="Contact actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with First Golden Line Transport on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-full shadow-2xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-200 group border-2 border-white/30"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm">
          WhatsApp 24/7
        </span>
      </a>
    </aside>
  );
};
