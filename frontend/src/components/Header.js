import React from 'react';
import { Briefcase } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center">
          <Briefcase className="h-8 w-8 text-blue-600" />
          <h1 className="ml-3 text-2xl font-bold text-gray-900">Resume Analyzer</h1>
        </div>
      </div>
    </header>
  );
}