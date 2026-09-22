import React from 'react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './common/BrandLogo';
import { Phone, Mail, MapPin, Globe, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { companyInfo, openAdminModal, isAdminLoggedIn } = useApp();

  return (
    <footer className="bg-[#070b13] text-slate-400 text-xs sm:text-sm border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block group focus:outline-none" id="footer-brand-logo-link" aria-label="First Golden Line Transport">
              <BrandLogo className="h-14 sm:h-16 w-auto transform group-hover:scale-[1.02] transition-transform duration-200" />
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Established in 2020. Providing dependable, safe, and luxurious transportation solutions across Tabuk, NEOM, AlUla, and throughout the Kingdom of Saudi Arabia.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Commercial Transportation License • Kingdom of Saudi Arabia</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Company</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">Vehicle Fleet</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Point-to-Point Transit</li>
              <li>Airport VIP Transfers</li>
              <li>Corporate Delegations</li>
              <li>24/7 On-Demand Chauffeur</li>
              <li>Long-Term Vehicle Rentals</li>
              <li>Event Logistics & Coaches</li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Dispatch
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0" />
                <a href={`tel:${companyInfo.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-white text-slate-300">
                  {companyInfo.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0" />
                <a href={`tel:${companyInfo.phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white text-slate-300">
                  {companyInfo.phoneSecondary}
                </a>
              </li>
              <li className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white text-slate-300 truncate">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0" />
                <span className="text-slate-300">{companyInfo.website}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3b82f6] flex-shrink-0" />
                <span className="text-slate-300">{companyInfo.headquarters}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Admin Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyInfo.nameEn}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openAdminModal}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-300 transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{isAdminLoggedIn ? 'Admin Panel (Logged In)' : 'Admin Portal'}</span>
            </button>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-300">Book Ride</a>
            <span>•</span>
            <a href="#home" className="hover:text-slate-300">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
