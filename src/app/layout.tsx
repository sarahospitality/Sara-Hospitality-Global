import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { generateMetadata as generateSiteMetadata, siteConfig, generateOrganizationSchema, createJsonLd } from '@/lib/metadata';
import './globals.css';

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
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(organizationSchema)}
        />
      </head>
      <body className="bg-white text-gray-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
