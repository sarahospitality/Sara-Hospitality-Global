import { Country, CountryConfig } from '@/types';

export const COUNTRIES: Record<Country, CountryConfig> = {
  ca: {
    code: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    timezone: 'America/Toronto',
  },
  us: {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    timezone: 'America/New_York',
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    timezone: 'Europe/London',
  },
  ae: {
    code: 'ae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: 'AED',
    timezone: 'Asia/Dubai',
  },
  au: {
    code: 'au',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    timezone: 'Australia/Sydney',
  },
};

export const PRODUCT_CATEGORIES = [
  'Casegoods',
  'Seating',
  'Outdoor',
  'Lighting',
] as const;

export const BLOG_CATEGORIES = [
  'Hospitality Design Trends',
  'Sustainability',
  'Case Studies',
  'Global Expansion News',
] as const;

export const DEPARTMENTS = [
  'Sales',
  'Partnerships',
  'Support',
] as const;
