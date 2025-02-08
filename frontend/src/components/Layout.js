import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}