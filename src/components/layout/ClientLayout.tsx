"use client";

import { ReactNode, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import QuotePopup from '@/components/QuotePopup';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const handleQuoteRequest = () => {
    setIsQuotePopupOpen(true);
  };

  const handleCloseQuotePopup = () => {
    setIsQuotePopupOpen(false);
  };

  // Expose a global opener so any button can trigger the popup without prop drilling
  // This keeps existing pages unchanged while enabling country-specific pages to call it
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).openQuotePopup = handleQuoteRequest;
  }

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Header onQuoteRequest={handleQuoteRequest} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      {/* Global Floating Action Buttons */}
      <FloatingActionButtons onQuoteRequest={handleQuoteRequest} />
      
      {/* Global Quote Popup */}
      <QuotePopup isOpen={isQuotePopupOpen} onClose={handleCloseQuotePopup} />
    </div>
  );
}

