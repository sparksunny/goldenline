import React, { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle, Service, Destination, Client, CompanyInfo, Inquiry } from '../types';
import {
  initialCompanyInfo,
  initialVehicles,
  initialServices,
  initialDestinations,
  initialClients,
  initialInquiries,
} from '../data/defaultData';

interface AppContextType {
  companyInfo: CompanyInfo;
  vehicles: Vehicle[];
  services: Service[];
  destinations: Destination[];
  clients: Client[];
  inquiries: Inquiry[];
  isAdminLoggedIn: boolean;
  isAdminModalOpen: boolean;
  bookingPrefill: { service?: string; vehicle?: string };
  // Actions
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  setBookingPrefill: (data: { service?: string; vehicle?: string }) => void;
  submitInquiry: (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
  deleteInquiry: (id: string) => void;
  // CRUD Vehicles
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => void;
  updateVehicle: (id: string, vehicle: Partial<Vehicle>) => void;
  deleteVehicle: (id: string) => void;
  // CRUD Services
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  // CRUD Destinations
  addDestination: (dest: Omit<Destination, 'id'>) => void;
  updateDestination: (id: string, dest: Partial<Destination>) => void;
  deleteDestination: (id: string) => void;
  // CRUD Clients
  addClient: (client: Omit<Client, 'id'>) => void;
  updateClient: (id: string, client: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  // Company Info
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from localStorage or fallback to defaults
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem('fglt_company_info');
      return saved ? JSON.parse(saved) : initialCompanyInfo;
    } catch {
      return initialCompanyInfo;
    }
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    try {
      const saved = localStorage.getItem('fglt_vehicles');
      return saved ? JSON.parse(saved) : initialVehicles;
    } catch {
      return initialVehicles;
    }
  });

  const [services, setServices] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem('fglt_services');
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [destinations, setDestinations] = useState<Destination[]>(() => {
    try {
      const saved = localStorage.getItem('fglt_destinations_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 12) {
          return parsed;
        }
      }
      return initialDestinations;
    } catch {
      return initialDestinations;
    }
  });

  const [clients, setClients] = useState<Client[]>(() => {
    try {
      const saved = localStorage.getItem('fglt_clients');
      return saved ? JSON.parse(saved) : initialClients;
    } catch {
      return initialClients;
    }
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('fglt_inquiries');
      return saved ? JSON.parse(saved) : initialInquiries;
    } catch {
      return initialInquiries;
    }
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('fglt_admin_session') === 'true';
  });
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{ service?: string; vehicle?: string }>({});

  // Persist to localStorage on changes
  useEffect(() => {
    localStorage.setItem('fglt_company_info', JSON.stringify(companyInfo));
  }, [companyInfo]);

  useEffect(() => {
    localStorage.setItem('fglt_vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem('fglt_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('fglt_destinations_v2', JSON.stringify(destinations));
  }, [destinations]);

  useEffect(() => {
    localStorage.setItem('fglt_clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem('fglt_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Auth: username Admin, password adnan12345
  const loginAdmin = (password: string) => {
    if (password === 'adnan12345') {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('fglt_admin_session', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('fglt_admin_session');
  };

  const openAdminModal = () => setIsAdminModalOpen(true);
  const closeAdminModal = () => setIsAdminModalOpen(false);

  const submitInquiry = async (inquiryData: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'New',
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    return true;
  };

  const updateInquiryStatus = (id: string, status: Inquiry['status']) => {
    setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status } : inq)));
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
  };

  // Vehicles CRUD
  const addVehicle = (vehicle: Omit<Vehicle, 'id'>) => {
    const newV: Vehicle = { ...vehicle, id: `v-${Date.now()}` };
    setVehicles((prev) => [...prev, newV]);
  };

  const updateVehicle = (id: string, updated: Partial<Vehicle>) => {
    setVehicles((prev) => prev.map((v) => (v.id === id ? { ...v, ...updated } : v)));
  };

  const deleteVehicle = (id: string) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  // Services CRUD
  const addService = (service: Omit<Service, 'id'>) => {
    const newS: Service = { ...service, id: `s-${Date.now()}` };
    setServices((prev) => [...prev, newS]);
  };

  const updateService = (id: string, updated: Partial<Service>) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  // Destinations CRUD
  const addDestination = (dest: Omit<Destination, 'id'>) => {
    const newD: Destination = { ...dest, id: `dest-${Date.now()}` };
    setDestinations((prev) => [...prev, newD]);
  };

  const updateDestination = (id: string, updated: Partial<Destination>) => {
    setDestinations((prev) => prev.map((d) => (d.id === id ? { ...d, ...updated } : d)));
  };

  const deleteDestination = (id: string) => {
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  };

  // Clients CRUD
  const addClient = (client: Omit<Client, 'id'>) => {
    const newC: Client = { ...client, id: `client-${Date.now()}` };
    setClients((prev) => [...prev, newC]);
  };

  const updateClient = (id: string, updated: Partial<Client>) => {
    setClients((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteClient = (id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCompanyInfo = (updated: Partial<CompanyInfo>) => {
    setCompanyInfo((prev) => ({ ...prev, ...updated }));
  };

  const resetToDefaults = () => {
    setCompanyInfo(initialCompanyInfo);
    setVehicles(initialVehicles);
    setServices(initialServices);
    setDestinations(initialDestinations);
    setClients(initialClients);
    setInquiries(initialInquiries);
    localStorage.clear();
  };

  return (
    <AppContext.Provider
      value={{
        companyInfo,
        vehicles,
        services,
        destinations,
        clients,
        inquiries,
        isAdminLoggedIn,
        isAdminModalOpen,
        bookingPrefill,
        loginAdmin,
        logoutAdmin,
        openAdminModal,
        closeAdminModal,
        setBookingPrefill,
        submitInquiry,
        updateInquiryStatus,
        deleteInquiry,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        addService,
        updateService,
        deleteService,
        addDestination,
        updateDestination,
        deleteDestination,
        addClient,
        updateClient,
        deleteClient,
        updateCompanyInfo,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
