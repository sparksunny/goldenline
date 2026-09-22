import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Lock,
  LayoutDashboard,
  Car,
  Layers,
  MapPin,
  Building2,
  FileText,
  Inbox,
  LogOut,
  Plus,
  Trash2,
  Edit2,
  Check,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Vehicle, Service, Destination, Client, Inquiry } from '../../types';

export const AdminModal: React.FC = () => {
  const {
    isAdminLoggedIn,
    isAdminModalOpen,
    closeAdminModal,
    loginAdmin,
    logoutAdmin,
    companyInfo,
    updateCompanyInfo,
    vehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    services,
    addService,
    updateService,
    deleteService,
    destinations,
    addDestination,
    updateDestination,
    deleteDestination,
    clients,
    addClient,
    updateClient,
    deleteClient,
    inquiries,
    updateInquiryStatus,
    deleteInquiry,
    resetToDefaults,
  } = useApp();

  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'vehicles' | 'services' | 'destinations' | 'clients' | 'content' | 'inquiries'
  >('dashboard');

  // Form states for adding items
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, 'id'>>({
    name: '',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    description: '',
    passengers: 7,
    luggage: 5,
    modelYear: '2024',
    features: ['Premium Leather Interior', 'Multi-Zone Climate'],
    available: true,
    featured: false,
    order: vehicles.length + 1,
  });

  const [showAddDest, setShowAddDest] = useState(false);
  const [newDest, setNewDest] = useState<Omit<Destination, 'id'>>({
    name: '',
    nameArabic: '',
    region: 'Saudi Arabia',
    tagline: 'VIP Chauffeur & Logistics',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Airport Transfers', 'Executive Transport'],
    popularFor: 'Business & VIP Travel',
    active: true,
    order: destinations.length + 1,
  });

  const [showAddClient, setShowAddClient] = useState(false);
  const [newClient, setNewClient] = useState<Omit<Client, 'id'>>({
    name: '',
    subtitle: '',
    category: 'Corporate Partner',
    logoText: '',
    active: true,
    order: clients.length + 1,
  });

  // Content form state
  const [contentForm, setContentForm] = useState(companyInfo);
  const [contentSavedAlert, setContentSavedAlert] = useState(false);

  if (!isAdminModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (username.trim().toLowerCase() !== 'admin') {
      setLoginError('Invalid username. Use Admin');
      return;
    }
    const success = loginAdmin(password);
    if (!success) {
      setLoginError('Incorrect password. Demo password is: adnan12345');
    }
  };

  const handleSaveContent = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo(contentForm);
    setContentSavedAlert(true);
    setTimeout(() => setContentSavedAlert(false), 3000);
  };

  const handleCreateVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVehicle.name) return;
    addVehicle(newVehicle);
    setShowAddVehicle(false);
    setNewVehicle({
      name: '',
      category: 'SUV',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      description: '',
      passengers: 7,
      luggage: 5,
      modelYear: '2024',
      features: ['Air Conditioning', 'Leather Seats'],
      available: true,
      featured: false,
      order: vehicles.length + 2,
    });
  };

  const handleCreateDestination = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDest.name) return;
    addDestination(newDest);
    setShowAddDest(false);
    setNewDest({
      name: '',
      nameArabic: '',
      region: 'Saudi Arabia',
      tagline: 'VIP Chauffeur & Logistics',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Airport Transfers', 'Executive Transport'],
      popularFor: 'Business & VIP Travel',
      active: true,
      order: destinations.length + 2,
    });
  };

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name) return;
    addClient({
      ...newClient,
      logoText: newClient.logoText || newClient.name,
    });
    setShowAddClient(false);
    setNewClient({
      name: '',
      subtitle: '',
      category: 'Corporate Partner',
      logoText: '',
      active: true,
      order: clients.length + 2,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0f1523] border border-slate-700/80 w-full max-w-6xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#141c2e] border-b border-slate-700/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#003882] flex items-center justify-center text-white font-bold text-sm shadow">
              GL
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>First Golden Line Transport</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono">
                  Admin Portal
                </span>
              </h2>
              <div className="text-[11px] text-slate-400">Manage Fleet, Services, Destinations & Inquiries</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && (
              <button
                onClick={logoutAdmin}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors border border-rose-500/30"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            )}

            <button
              onClick={closeAdminModal}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              id="close-admin-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Not Logged In: Login Form */}
        {!isAdminLoggedIn ? (
          <div className="p-8 sm:p-12 flex items-center justify-center flex-1">
            <div className="w-full max-w-md bg-[#131b2c] p-8 rounded-2xl border border-slate-700/80 shadow-xl text-center">
              <div className="w-14 h-14 bg-blue-900/30 text-blue-400 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Lock className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">Administrative Access</h3>
              <p className="text-xs text-slate-400 mb-6">
                Enter your credentials to access fleet management, bookings, and live site configuration.
              </p>

              {loginError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-900/40 border border-rose-700/60 text-rose-200 text-xs flex items-center gap-2 text-left">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    placeholder="Admin"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0d1320] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter password"
                  />
                </div>

                {/* Prompt Demo Hint */}
                <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/40 text-[11px] text-blue-300">
                  <span className="font-bold">Prompt Demo Credentials:</span> User: <code className="text-white">Admin</code>, Pass: <code className="text-white">adnan12345</code>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#003882] hover:bg-[#004bb1] text-white font-bold text-sm rounded-xl transition-colors shadow-lg"
                  id="admin-login-submit"
                >
                  Sign In to Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Logged In: Full Management Dashboard */
          <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 bg-[#111726] border-r border-slate-800 p-4 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'dashboard'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('inquiries')}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'inquiries'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-4 h-4" />
                  <span>Inquiries</span>
                </div>
                {inquiries.filter((i) => i.status === 'New').length > 0 && (
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500 text-white font-bold">
                    {inquiries.filter((i) => i.status === 'New').length} New
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('vehicles')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'vehicles'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Vehicles ({vehicles.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'services'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Services ({services.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('destinations')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'destinations'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>Destinations ({destinations.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('clients')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'clients'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Clients ({clients.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('content')}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === 'content'
                    ? 'bg-[#003882] text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Content & PDF Info</span>
              </button>

              <div className="hidden lg:block mt-auto pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    if (confirm('Reset all edited data back to initial PDF defaults?')) {
                      resetToDefaults();
                    }
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restore PDF Defaults</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto max-h-[75vh]">
              {/* Tab 1: Dashboard Overview */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">System Overview</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Real-time status of fleet, destinations, and active booking requests.
                    </p>
                  </div>

                  {/* 6 Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="bg-[#141c2c] border border-slate-700/80 p-4 rounded-2xl">
                      <div className="text-xs text-slate-400">Total Vehicles</div>
                      <div className="text-2xl font-extrabold text-white mt-1">{vehicles.length}</div>
                      <div className="text-[10px] text-blue-400 mt-1">PDF Fleet Models</div>
                    </div>

                    <div className="bg-[#141c2c] border border-slate-700/80 p-4 rounded-2xl">
                      <div className="text-xs text-slate-400">Active Vehicles</div>
                      <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                        {vehicles.filter((v) => v.available).length}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Available for dispatch</div>
                    </div>

                    <div className="bg-[#141c2c] border border-slate-700/80 p-4 rounded-2xl">
                      <div className="text-xs text-slate-400">Services</div>
                      <div className="text-2xl font-extrabold text-white mt-1">{services.length}</div>
                      <div className="text-[10px] text-blue-400 mt-1">From Company Profile</div>
                    </div>

                    <div className="bg-[#141c2c] border border-slate-700/80 p-4 rounded-2xl">
                      <div className="text-xs text-slate-400">Destinations</div>
                      <div className="text-2xl font-extrabold text-white mt-1">{destinations.length}</div>
                      <div className="text-[10px] text-blue-400 mt-1">Tabuk, NEOM, AlUla...</div>
                    </div>

                    <div className="bg-[#141c2c] border border-slate-700/80 p-4 rounded-2xl">
                      <div className="text-xs text-slate-400">Clients</div>
                      <div className="text-2xl font-extrabold text-white mt-1">{clients.length}</div>
                      <div className="text-[10px] text-blue-400 mt-1">Egis, Turner & Townsend...</div>
                    </div>

                    <div className="bg-[#141c2c] border border-slate-700/80 p-4 rounded-2xl">
                      <div className="text-xs text-slate-400">Inquiries</div>
                      <div className="text-2xl font-extrabold text-[#ffd700] mt-1">{inquiries.length}</div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {inquiries.filter((i) => i.status === 'New').length} pending review
                      </div>
                    </div>
                  </div>

                  {/* Recent Inquiries preview */}
                  <div className="bg-[#141c2c] border border-slate-700/80 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white">Latest Customer Inquiries</h4>
                      <button
                        onClick={() => setActiveTab('inquiries')}
                        className="text-xs text-blue-400 hover:underline"
                      >
                        View all
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {inquiries.slice(0, 3).map((inq) => (
                        <div
                          key={inq.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#0e1422] border border-slate-800 text-xs gap-2"
                        >
                          <div>
                            <span className="font-bold text-white">{inq.fullName}</span>
                            <span className="text-slate-400 mx-2">•</span>
                            <span className="text-blue-300">{inq.serviceRequired}</span>
                            <span className="text-slate-400 mx-2">•</span>
                            <span className="text-slate-300">{inq.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                inq.status === 'New'
                                  ? 'bg-blue-600/30 text-blue-400'
                                  : inq.status === 'In Progress'
                                  ? 'bg-amber-600/30 text-amber-300'
                                  : 'bg-emerald-600/30 text-emerald-400'
                              }`}
                            >
                              {inq.status}
                            </span>
                            <span className="text-slate-500 text-[11px]">{inq.createdAt}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Inquiries Manager */}
              {activeTab === 'inquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Customer Inquiries Inbox</h3>
                      <p className="text-xs text-slate-400">All submissions from the public website booking form.</p>
                    </div>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-sm">
                      No inquiries submitted yet.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="bg-[#141c2c] border border-slate-700/80 rounded-2xl p-5 text-xs space-y-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                            <div>
                              <span className="text-sm font-bold text-white mr-2">{inq.fullName}</span>
                              <span className="text-slate-400">{inq.createdAt}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Status changer */}
                              <select
                                value={inq.status}
                                onChange={(e) =>
                                  updateInquiryStatus(inq.id, e.target.value as Inquiry['status'])
                                }
                                className="bg-[#0b101c] border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                              >
                                <option value="New">Status: New</option>
                                <option value="In Progress">Status: In Progress</option>
                                <option value="Confirmed">Status: Confirmed</option>
                                <option value="Completed">Status: Completed</option>
                              </select>

                              <button
                                onClick={() => deleteInquiry(inq.id)}
                                className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg"
                                title="Delete inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300">
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Phone</span>
                              <a href={`tel:${inq.phone}`} className="font-semibold text-blue-400 hover:underline">
                                {inq.phone}
                              </a>
                            </div>
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Email</span>
                              <span className="font-semibold text-white">{inq.email}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Service</span>
                              <span className="font-semibold text-white">{inq.serviceRequired}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Vehicle</span>
                              <span className="font-semibold text-[#ffd700]">{inq.vehicleRequired}</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300 bg-[#0d1320] p-3 rounded-xl">
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Pickup Location</span>
                              <span className="font-medium text-white">{inq.pickupLocation}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Destination</span>
                              <span className="font-medium text-white">{inq.destination}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Date & Time</span>
                              <span className="font-medium text-white">
                                {inq.pickupDate} at {inq.pickupTime}
                              </span>
                            </div>
                            <div>
                              <span className="block text-[10px] text-slate-500 uppercase">Passengers</span>
                              <span className="font-medium text-white">{inq.passengers}</span>
                            </div>
                          </div>

                          {inq.message && (
                            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300">
                              <span className="font-bold text-[10px] text-slate-500 uppercase block mb-1">
                                Client Notes
                              </span>
                              {inq.message}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Vehicles Management */}
              {activeTab === 'vehicles' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Fleet Management</h3>
                      <p className="text-xs text-slate-400">
                        Add, modify specs, passenger capacity, or toggle vehicle availability.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddVehicle(!showAddVehicle)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#003882] hover:bg-[#004bb1] text-white text-xs font-bold rounded-xl shadow"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Vehicle</span>
                    </button>
                  </div>

                  {/* Add Vehicle Form Drawer */}
                  {showAddVehicle && (
                    <form onSubmit={handleCreateVehicle} className="bg-[#141c2c] border border-blue-500/40 p-5 rounded-2xl space-y-3">
                      <h4 className="text-sm font-bold text-white">Add New Vehicle to Fleet</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Vehicle Name (e.g. CADILLAC ESCALADE)"
                          value={newVehicle.name}
                          onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <select
                          value={newVehicle.category}
                          onChange={(e) =>
                            setNewVehicle({ ...newVehicle, category: e.target.value as Vehicle['category'] })
                          }
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        >
                          <option value="Van">Van</option>
                          <option value="Minibus">Minibus</option>
                          <option value="Luxury Coach">Luxury Coach</option>
                          <option value="Large SUV">Large SUV</option>
                          <option value="Luxury">Luxury</option>
                          <option value="SUV">SUV</option>
                          <option value="Sedan">Sedan</option>
                          <option value="Fleet">Fleet</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Image URL"
                          value={newVehicle.image}
                          onChange={(e) => setNewVehicle({ ...newVehicle, image: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="number"
                          placeholder="Passengers"
                          value={newVehicle.passengers}
                          onChange={(e) => setNewVehicle({ ...newVehicle, passengers: Number(e.target.value) })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="number"
                          placeholder="Luggage"
                          value={newVehicle.luggage}
                          onChange={(e) => setNewVehicle({ ...newVehicle, luggage: Number(e.target.value) })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Model Year"
                          value={newVehicle.modelYear}
                          onChange={(e) => setNewVehicle({ ...newVehicle, modelYear: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <textarea
                        placeholder="Description..."
                        value={newVehicle.description}
                        onChange={(e) => setNewVehicle({ ...newVehicle, description: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        rows={2}
                      />

                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowAddVehicle(false)}
                          className="px-3 py-1.5 bg-slate-800 text-xs rounded-xl"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-[#003882] text-white text-xs font-bold rounded-xl"
                        >
                          Save Vehicle
                        </button>
                      </div>
                    </form>
                  )}

                  {/* List of Vehicles */}
                  <div className="space-y-3">
                    {vehicles.map((v) => (
                      <div
                        key={v.id}
                        className="bg-[#141c2c] border border-slate-700/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={v.image}
                            alt={v.name}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const filename = v.image ? v.image.split('/').pop()?.split('?')[0] : '';
                              if (filename && !target.src.includes(`/vehicles/${filename}`)) {
                                target.src = `/vehicles/${filename}`;
                              }
                            }}
                            className="w-16 h-12 object-cover rounded-lg bg-slate-800"
                          />
                          <div>
                            <div className="text-sm font-bold text-white uppercase">{v.name}</div>
                            <div className="text-slate-400">
                              {v.category} • {v.passengers} Seats • {v.luggage} Bags • {v.modelYear}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateVehicle(v.id, { available: !v.available })}
                            className={`px-3 py-1.5 rounded-lg font-bold ${
                              v.available
                                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {v.available ? 'Available' : 'Booked'}
                          </button>

                          <button
                            onClick={() => deleteVehicle(v.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-400"
                            title="Delete vehicle"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Destinations Management */}
              {activeTab === 'destinations' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Destinations Management</h3>
                      <p className="text-xs text-slate-400">
                        Add new KSA cities or modify route descriptions and imagery.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddDest(!showAddDest)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#003882] hover:bg-[#004bb1] text-white text-xs font-bold rounded-xl shadow"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Destination</span>
                    </button>
                  </div>

                  {showAddDest && (
                    <form onSubmit={handleCreateDestination} className="bg-[#141c2c] border border-blue-500/40 p-5 rounded-2xl space-y-3">
                      <h4 className="text-sm font-bold text-white">Add New Saudi City / Destination</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="City Name (e.g. Riyadh)"
                          value={newDest.name}
                          onChange={(e) => setNewDest({ ...newDest, name: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Arabic Name (e.g. الرياض)"
                          value={newDest.nameArabic}
                          onChange={(e) => setNewDest({ ...newDest, nameArabic: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Region"
                          value={newDest.region}
                          onChange={(e) => setNewDest({ ...newDest, region: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Tagline / Short description"
                        value={newDest.tagline}
                        onChange={(e) => setNewDest({ ...newDest, tagline: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />

                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowAddDest(false)}
                          className="px-3 py-1.5 bg-slate-800 text-xs rounded-xl"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-[#003882] text-white text-xs font-bold rounded-xl"
                        >
                          Save Destination
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {destinations.map((d) => (
                      <div
                        key={d.id}
                        className="bg-[#141c2c] border border-slate-700/80 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-900/40 text-blue-400 flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">
                              {d.name} <span className="text-xs text-[#d4af37]">{d.nameArabic}</span>
                            </div>
                            <div className="text-xs text-slate-400">{d.region}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteDestination(d.id)}
                          className="p-1.5 text-slate-500 hover:text-rose-400"
                          title="Delete destination"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Clients Management */}
              {activeTab === 'clients' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Clients Management</h3>
                      <p className="text-xs text-slate-400">
                        Manage corporate partner badges and logos.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddClient(!showAddClient)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#003882] hover:bg-[#004bb1] text-white text-xs font-bold rounded-xl shadow"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Client</span>
                    </button>
                  </div>

                  {showAddClient && (
                    <form onSubmit={handleCreateClient} className="bg-[#141c2c] border border-blue-500/40 p-5 rounded-2xl space-y-3">
                      <h4 className="text-sm font-bold text-white">Add Client / Corporate Partner</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Client / Company Name"
                          value={newClient.name}
                          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Subtitle / Scope of work"
                          value={newClient.subtitle}
                          onChange={(e) => setNewClient({ ...newClient, subtitle: e.target.value })}
                          className="bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setShowAddClient(false)}
                          className="px-3 py-1.5 bg-slate-800 text-xs rounded-xl"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-[#003882] text-white text-xs font-bold rounded-xl"
                        >
                          Save Client
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {clients.map((c) => (
                      <div
                        key={c.id}
                        className="bg-[#141c2c] border border-slate-700/80 rounded-xl p-4 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold text-white">{c.name}</div>
                          <div className="text-xs text-slate-400">{c.subtitle}</div>
                        </div>

                        <button
                          onClick={() => deleteClient(c.id)}
                          className="p-1.5 text-slate-500 hover:text-rose-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 6: Content Editor */}
              {activeTab === 'content' && (
                <form onSubmit={handleSaveContent} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Company Content Editor</h3>
                      <p className="text-xs text-slate-400">
                        Update company profile texts, contact lines, mission & vision.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#003882] hover:bg-[#004bb1] text-white font-bold text-xs rounded-xl shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>

                  {contentSavedAlert && (
                    <div className="p-3 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Changes saved successfully to live website.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#141c2c] p-5 rounded-2xl border border-slate-700/80">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Company English Name</label>
                      <input
                        type="text"
                        value={contentForm.nameEn}
                        onChange={(e) => setContentForm({ ...contentForm, nameEn: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Company Arabic Name</label>
                      <input
                        type="text"
                        value={contentForm.nameAr}
                        onChange={(e) => setContentForm({ ...contentForm, nameAr: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Phone</label>
                      <input
                        type="text"
                        value={contentForm.phonePrimary}
                        onChange={(e) => setContentForm({ ...contentForm, phonePrimary: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Secondary Phone</label>
                      <input
                        type="text"
                        value={contentForm.phoneSecondary}
                        onChange={(e) => setContentForm({ ...contentForm, phoneSecondary: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                      <input
                        type="email"
                        value={contentForm.email}
                        onChange={(e) => setContentForm({ ...contentForm, email: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Headquarters</label>
                      <input
                        type="text"
                        value={contentForm.headquarters}
                        onChange={(e) => setContentForm({ ...contentForm, headquarters: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="bg-[#141c2c] p-5 rounded-2xl border border-slate-700/80 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">About Text (Paragraph 1)</label>
                      <textarea
                        rows={3}
                        value={contentForm.aboutText1}
                        onChange={(e) => setContentForm({ ...contentForm, aboutText1: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">About Text (Paragraph 2)</label>
                      <textarea
                        rows={3}
                        value={contentForm.aboutText2}
                        onChange={(e) => setContentForm({ ...contentForm, aboutText2: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Mission Statement</label>
                      <textarea
                        rows={3}
                        value={contentForm.mission}
                        onChange={(e) => setContentForm({ ...contentForm, mission: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Vision Statement</label>
                      <textarea
                        rows={3}
                        value={contentForm.vision}
                        onChange={(e) => setContentForm({ ...contentForm, vision: e.target.value })}
                        className="w-full bg-[#0b101c] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>
                </form>
              )}

              {/* Tab 7: Services Management */}
              {activeTab === 'services' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Services Management</h3>
                      <p className="text-xs text-slate-400">All 9 services sourced from company profile.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {services.map((s) => (
                      <div
                        key={s.id}
                        className="bg-[#141c2c] border border-slate-700/80 rounded-xl p-4 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 font-mono font-bold flex items-center justify-center">
                            {s.numberPrefix}
                          </span>
                          <div>
                            <div className="font-bold text-white text-sm">{s.title}</div>
                            <div className="text-slate-400 line-clamp-1 max-w-lg">{s.description}</div>
                          </div>
                        </div>

                        <button
                          onClick={() => updateService(s.id, { active: !s.active })}
                          className={`px-3 py-1.5 rounded-lg font-bold ${
                            s.active
                              ? 'bg-emerald-600/20 text-emerald-400'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {s.active ? 'Active' : 'Hidden'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
