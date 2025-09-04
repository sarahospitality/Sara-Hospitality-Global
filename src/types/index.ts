// Type definitions for the Sara Global Hospitality project

export interface Product {
  id: string;
  name: string;
  description?: string;
  category: 'Casegoods' | 'Seating' | 'Outdoor' | 'Lighting';
  imageUrl?: string;
  specifications?: string;
  brochureUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  brandName?: string;
  location?: string;
  scope?: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  videoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  category: 'Hospitality Design Trends' | 'Sustainability' | 'Case Studies' | 'Global Expansion News';
  author?: string;
  imageUrl?: string;
  slug: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Inquiry {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country: string;
  message?: string;
  department?: 'Sales' | 'Partnerships' | 'Support';
  ipAddress?: string;
  createdAt: Date;
}

export interface QuoteRequest {
  id: string;
  inquiryId: string;
  productIds: string[];
  status: 'pending' | 'processing' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export type Country = 'ca' | 'us' | 'uk' | 'ae' | 'au';

export interface CountryConfig {
  code: Country;
  name: string;
  flag: string;
  currency: string;
  timezone: string;
}
