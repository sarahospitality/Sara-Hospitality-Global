import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { generateMetadata as generateSiteMetadata, siteConfig, generateOrganizationSchema, createJsonLd } from '@/lib/metadata';
import './globals.css';

// Optimize Inter font with font-display: swap to prevent render blocking
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  // Load only essential weights to reduce payload
  weight: ['400', '600', '700'],
  fallback: ['system-ui', 'arial', 'sans-serif'],
});

interface RootLayoutProps {
  children: ReactNode;
}

// ============================================
// METADATA CONFIGURATION
// ============================================
export const metadata: Metadata = generateSiteMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  canonical: siteConfig.url,
  noIndex: true, // Remove this when going live - currently blocking search engines
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ============================================
// ROOT LAYOUT
// ============================================
export default function RootLayout({ children }: RootLayoutProps) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Resource Hints - Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://supabase.co" />
        
        {/* JSON-LD Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(organizationSchema)}
        />
      </head>
      <body className={`bg-white text-gray-900 ${inter.className}`} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
