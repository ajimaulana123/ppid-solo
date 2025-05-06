import React from 'react';
import { DialogStatistik } from "./DialogStatistik";

// Memoized SVG component to prevent unnecessary re-renders
const StatsIcon = React.memo(() => (
  <svg 
    className="w-8 h-8 text-orange-600" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    aria-hidden="true" // Since this is decorative
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
    />
  </svg>
));
StatsIcon.displayName = 'StatsIcon';

const Statistik = React.memo(function Statistik() {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1"
      role="region" 
      aria-label="Statistik Layanan Informasi"
    >
      <div 
        className="bg-blue-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
        aria-hidden="true"
      >
        <StatsIcon />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">Statistik</h3>
      <p className="text-sm text-gray-600 mb-4">Layanan Informasi</p>

      <DialogStatistik />
    </div>
  );
});

export { Statistik };