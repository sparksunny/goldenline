import React from 'react';
import { useApp } from '../context/AppContext';
import { Building2, ShieldCheck, CheckCircle } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const { clients } = useApp();
  const activeClients = clients.filter((c) => c.active);

  return (
    <section id="clients" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#003882] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1526] mt-3 tracking-tight font-sans">
            OUR <span className="text-[#003882]">CLIENTS</span>
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Proud to deliver mission-critical transportation logistics for leading engineering, energy, media, and infrastructure organizations across Saudi Arabia.
          </p>
        </div>

        {/* 6 Client Cards matching PDF page 11 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {activeClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl border-2 border-slate-200/90 hover:border-[#003882] p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 min-h-[160px] group"
            >
              <div className="w-full flex items-center justify-center py-4">
                {/* Visual badge replicating PDF page 11 client logos */}
                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0a1526] font-sans tracking-tight group-hover:text-[#003882] transition-colors">
                    {client.logoText}
                  </div>
                  {client.subtitle && (
                    <div className="text-[11px] text-slate-500 font-medium mt-1.5 max-w-xs">
                      {client.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {client.category && (
                <div className="mt-3 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-[11px] text-[#003882] font-semibold">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>{client.category}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
