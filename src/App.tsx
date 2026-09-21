import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickContactBar } from './components/QuickContactBar';
import { AboutCompany } from './components/AboutCompany';
import { MissionVision } from './components/MissionVision';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { DestinationsSection } from './components/DestinationsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminModal } from './components/admin/AdminModal';

const MainLayout: React.FC = () => {
  const { openAdminModal } = useApp();

  // Listen for /admin or #admin in URL to open admin panel automatically
  useEffect(() => {
    if (
      window.location.pathname === '/admin' ||
      window.location.hash === '#admin' ||
      window.location.search.includes('admin=true')
    ) {
      openAdminModal();
    }
  }, [openAdminModal]);

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] font-sans selection:bg-[#003882] selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Content Flow matching PDF Company Profile Structure */}
      <main className="flex-grow">
        {/* 1. Hero Showcase */}
        <Hero />

        {/* 2. Quick Dispatch Bar */}
        <QuickContactBar />

        {/* 3. About Company (from PDF Page 4) */}
        <AboutCompany />

        {/* 4. Mission & Vision (from PDF Page 5) */}
        <MissionVision />

        {/* 5. Services (from PDF Pages 6-10) */}
        <ServicesSection />

        {/* 6. Fleet (from PDF Pages 13-14) */}
        <FleetSection />

        {/* 7. Destinations (from PDF Page 12) */}
        <DestinationsSection />

        {/* 8. Why Choose Us (from PDF Pages 15-16) */}
        <WhyChooseUs />

        {/* 9. Clients (from PDF Page 11) */}
        <ClientsSection />

        {/* 10. Contact & Booking Form (from PDF Page 17) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp */}
      <FloatingWhatsApp />

      {/* Admin Panel Modal (/admin) */}
      <AdminModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
