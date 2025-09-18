"use client";

import { ReactNode, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import QuotePopup from '@/components/QuotePopup';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const handleQuoteRequest = () => {
    setIsQuotePopupOpen(true);
  };

  const handleCloseQuotePopup = () => {
    setIsQuotePopupOpen(false);
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
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
      </body>
    </html>
  );
}
