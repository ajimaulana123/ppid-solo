import React from 'react';
import { DialogFormPengajuan } from "./DialogFormPengajuan";

// Komponen SVG yang dimemoisasi
const DocumentIcon = React.memo(() => (
  <svg 
    className="w-8 h-8 text-purple-600" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
    />
  </svg>
));
DocumentIcon.displayName = 'DocumentIcon';

// Komponen utama dengan optimasi
const FormPengajuan = React.memo(() => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1"
      role="region" 
      aria-label="Formulir Pengajuan Keberatan"
    >
      <div 
        className="bg-blue-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
        aria-hidden="true"
      >
        <DocumentIcon />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">Form Pengajuan</h3>
      <p className="text-sm text-gray-600 mb-4">Keberatan</p>
     
      <DialogFormPengajuan />
    </div>
  );
});
FormPengajuan.displayName = 'FormPengajuan';

export { FormPengajuan };