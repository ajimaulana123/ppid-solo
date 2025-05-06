import React from 'react';
import { Dataset1 } from "./Dataset1";
import { Dataset2 } from "./Dataset2";
import { Dataset3 } from "./Dataset3";

// Komponen Link Lihat Semua yang dimemoisasi
const SeeAllLink = React.memo(function SeeAllLink() {
  return (
    <a 
      href="/dataset" 
      className="text-white-600 hover:text-white-700 font-medium flex items-center gap-2 group"
      aria-label="Lihat semua dataset"
    >
      Lihat Semua »
    </a>
  );
});

// Komponen utama dengan optimasi
export const OpenData = React.memo(function OpenData() {
  // Memoisasi komponen dataset untuk menghindari pembuatan ulang
  const Datasets = React.useMemo(() => [
    <Dataset1 key="dataset1" />,
    <Dataset2 key="dataset2" />,
    <Dataset3 key="dataset3" />
  ], []);

  return (
    <div className="mt-7">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">Open Data</h2>
        <SeeAllLink />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Datasets}
      </div>
    </div>
  );
});