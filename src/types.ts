export interface Vehicle {
  id: string;
  name: string;
  category: 'SUV' | 'Large SUV' | 'Sedan' | 'Luxury';
  image: string;
  description: string;
  passengers: number;
  luggage: number;
  modelYear: string;
  features: string[];
  available: boolean;
  featured: boolean;
  order: number;
}

export interface Service {
  id: string;
  title: string;
  numberPrefix?: string;
  image: string;
  description: string;
  iconName: string;
  highlights: string[];
  order: number;
  active: boolean;
}

export interface Destination {
  id: string;
  name: string;
  nameArabic?: string;
  region: string;
  tagline: string;
  image: string;
  highlights: string[];
  popularFor: string;
  active: boolean;
  order: number;
}

export interface Client {
  id: string;
  name: string;
  subtitle?: string;
  category?: string;
  logoText: string;
  active: boolean;
  order: number;
}

export interface Inquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  vehicleRequired: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  message?: string;
  createdAt: string;
  status: 'New' | 'In Progress' | 'Confirmed' | 'Completed';
}

export interface CompanyInfo {
  nameEn: string;
  nameAr: string;
  tagline: string;
  establishedYear: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  website: string;
  headquarters: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  mission: string;
  vision: string;
  whyChooseUsIntro: string;
  safetyTitle: string;
  safetyText: string;
  customerServiceTitle: string;
  customerServiceText: string;
}
