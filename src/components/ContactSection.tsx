import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, MessageCircle, Calendar, Users, Car, ShieldAlert } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { companyInfo, vehicles, services, bookingPrefill, submitInquiry } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState('');
  const [vehicleRequired, setVehicleRequired] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Sync prefill from other sections (e.g. clicking "Request Service" or "Request This Vehicle")
  useEffect(() => {
    if (bookingPrefill.service) {
      setServiceRequired(bookingPrefill.service);
    }
    if (bookingPrefill.vehicle) {
      setVehicleRequired(bookingPrefill.vehicle);
    }
  }, [bookingPrefill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    await submitInquiry({
      fullName,
      phone,
      email: email || 'Not provided',
      serviceRequired: serviceRequired || 'General Transportation',
      vehicleRequired: vehicleRequired || 'Best Available Fleet',
      pickupLocation: pickupLocation || 'Tabuk / Regional',
      destination: destination || 'As requested',
      pickupDate: pickupDate || new Date().toISOString().split('T')[0],
      pickupTime: pickupTime || 'Immediate',
      passengers: Number(passengers) || 1,
      message,
    });

    setIsSubmitting(false);
    setSubmittedSuccess(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${companyInfo.phonePrimary.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello First Golden Line Transport, I would like to book transportation for ${fullName || 'a client'}. Service: ${serviceRequired || 'Chauffeur/Rental'}, Vehicle: ${vehicleRequired || 'Luxury SUV'}, Pickup: ${pickupLocation || 'Tabuk'}, Date: ${pickupDate || 'Soon'}.`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a101b] text-white relative overflow-hidden">
      {/* PDF Cover Geometry Echo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#003882]/20 rounded-bl-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#003882]/15 rounded-tr-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Details from PDF Page 17 */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-700/50">
                <span>Direct Coordination</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
                GET IN <span className="text-[#3b82f6]">TOUCH</span>
              </h2>
              <p className="text-slate-400 mt-3 text-base leading-relaxed">
                Connect with our dispatch managers for immediate bookings, executive quotes, airport transfers, or corporate long-term contracts across Saudi Arabia.
              </p>
            </div>

            {/* Contact Cards matching PDF details */}
            <div className="space-y-4">
              {/* Primary Phone */}
              <a
                href={`tel:${companyInfo.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#131a29] border border-slate-700/80 hover:border-[#3b82f6] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003882] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-[#ffd700]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Primary Dispatch Line</div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                    {companyInfo.phonePrimary}
                  </div>
                </div>
              </a>

              {/* Secondary Phone */}
              <a
                href={`tel:${companyInfo.phoneSecondary.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#131a29] border border-slate-700/80 hover:border-[#3b82f6] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003882] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-[#ffd700]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Secondary Line</div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                    {companyInfo.phoneSecondary}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#131a29] border border-slate-700/80 hover:border-[#3b82f6] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003882] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-[#ffd700]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Official Email</div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              {/* Headquarters Location from PDF */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#131a29] border border-slate-700/80">
                <div className="w-12 h-12 rounded-xl bg-[#003882] flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#ffd700]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Headquarters</div>
                  <div className="text-base font-bold text-white">
                    {companyInfo.headquarters}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-3 shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Dispatch Support</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry / Vehicle Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#131a29] border border-slate-700/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              {submittedSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{fullName}</span>. Our 24/7 dispatch coordinator has logged your request and will contact you promptly at <span className="font-semibold text-white">{phone}</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFullName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Request a Vehicle or Transportation</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill in your journey requirements. We respond within 15 minutes.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Abdullah Al-Mansoor"
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      >
                        <option value="">Select Service...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Vehicle Required & Passengers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Vehicle Required
                      </label>
                      <select
                        value={vehicleRequired}
                        onChange={(e) => setVehicleRequired(e.target.value)}
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      >
                        <option value="">Select Preferred Vehicle...</option>
                        {vehicles.map((v) => (
                          <option key={v.id} value={v.name}>
                            {v.name} ({v.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Number of Passengers
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>
                  </div>

                  {/* Pickup & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        placeholder="e.g. Tabuk Airport / Hotel / Residence"
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Destination
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="e.g. NEOM Community, AlUla, Duba Port"
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Date
                      </label>
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Pickup Time
                      </label>
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Special amenities, flight number, child safety seats, luggage count..."
                      className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#003882] via-[#004bb1] to-[#005cd8] hover:from-[#002d69] hover:to-[#0047a0] text-white font-bold text-sm sm:text-base rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 border border-blue-400/40"
                    id="submit-inquiry-btn"
                  >
                    <Send className="w-4 h-4 text-[#ffd700]" />
                    <span>{isSubmitting ? 'Submitting Request...' : 'Send Request / Book Vehicle'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
