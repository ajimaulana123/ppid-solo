import React from 'react';
import { DialogFormPermohonan } from "./DialogFormPermohonan";

// Memoized DocumentIcon component with display name
const DocumentIcon = React.memo(() => (
  <svg 
    className="w-8 h-8 text-blue-600" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
    />
  </svg>
));
DocumentIcon.displayName = 'DocumentIcon';

// Main component with optimization and display name
const FormPermohonan = React.memo(function FormPermohonan() {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1"
      role="region"
      aria-label="Form Permohonan Informasi Publik"
    >
      <div 
        className="bg-blue-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
        aria-hidden="true"
      >
        <DocumentIcon />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">Form Permohonan</h3>
      <p className="text-sm text-gray-600 mb-4">Informasi Publik</p>
     
      <DialogFormPermohonan />
    </div>
  );
});
FormPermohonan.displayName = 'FormPermohonan';

export { FormPermohonan };