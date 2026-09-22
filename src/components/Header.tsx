import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './common/BrandLogo';
import { Phone, Menu, X, Shield, ChevronRight, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const { companyInfo, openAdminModal, isAdminLoggedIn } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f141d]/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3.5'
          : 'bg-gradient-to-b from-[#0a0e17]/90 via-[#0a0e17]/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo replacing old emblem and text with exact provided unified logo */}
        <a href="#home" className="flex items-center group focus:outline-none py-1 flex-shrink-0" id="brand-logo-link" aria-label="First Golden Line Transport">
          <BrandLogo className="h-11 sm:h-13 lg:h-15 w-auto transform group-hover:scale-[1.02] transition-transform duration-200" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#d4af37] transition-colors rounded-md hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Admin link */}
          <button
            onClick={openAdminModal}
            title={isAdminLoggedIn ? 'Admin Dashboard (Active)' : 'Admin Login'}
            className={`p-2 rounded-lg transition-all ${
              isAdminLoggedIn
                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
            id="admin-button-header"
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Direct Call Button */}
          <a
            href={`tel:${companyInfo.phonePrimary.replace(/\s+/g, '')}`}
            className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>{companyInfo.phonePrimary}</span>
          </a>

          {/* Book / Request CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#003882] to-[#0052be] hover:from-[#002d69] hover:to-[#00429c] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-blue-900/30 transition-all transform hover:-translate-y-0.5 border border-blue-400/30"
            id="btn-book-vehicle-nav"
          >
            <Calendar className="w-4 h-4 text-[#ffd700]" />
            <span>Book a Vehicle</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openAdminModal}
            className={`p-2 rounded-lg ${
              isAdminLoggedIn
                ? 'text-blue-400 bg-blue-900/30'
                : 'text-slate-400 hover:text-white'
            }`}
            aria-label="Admin Portal"
          >
            <Shield className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle navigation"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f18] border-b border-slate-800 px-5 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          <div className="pb-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>{companyInfo.headquarters}</span>
            <span className="text-[#d4af37] font-semibold">{companyInfo.establishedYear} Established</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#003882] to-[#0052be] text-white text-sm font-bold rounded-lg shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#ffd700]" />
              <span>Book a Vehicle / Request Quote</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${companyInfo.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Primary</span>
              </a>
              <a
                href={`https://wa.me/${companyInfo.phonePrimary.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello First Golden Line Transport, I would like to inquire about your transportation and vehicle rental services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
