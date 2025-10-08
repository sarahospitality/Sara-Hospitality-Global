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

  return (
    <div className="min-h-screen flex flex-col">
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

