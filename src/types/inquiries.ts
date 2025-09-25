// Types for the inquiries table matching the Supabase schema

export interface InquiryData {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  status?: 'new' | 'contacted' | 'qualified' | 'archived';
  source?: string;
  ip?: string;
  user_agent?: string;
  category?: InquiryCategory;
}

export type InquiryCategory = 
  | 'Casegoods'
  | 'Bedroom Furniture'
  | 'Outdoor Furniture'
  | 'FF&E'
  | 'Restaurant Furniture'
  | 'Custom Solutions'
  | 'Reception Items'
  | 'Lobby Items';

export interface FormData {
  full_name: string;
  email: string;
  phone: string;
  message: string;
  category: InquiryCategory[];
}

export interface FormErrors {
  full_name?: string;
  email?: string;
  phone?: string;
  message?: string;
  category?: string;
  general?: string;
}

export interface SubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
