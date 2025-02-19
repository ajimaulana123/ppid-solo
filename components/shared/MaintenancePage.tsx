"use client";

import { motion } from "framer-motion";

export const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="relative z-10 p-8">
              <div className="text-6xl mb-6 group-hover:text-white transition-colors">🚧</div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors">
                Halaman Dalam Pengembangan
              </h1>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                Mohon maaf, halaman ini sedang dalam tahap pengembangan. Tim kami sedang bekerja keras untuk menyediakan informasi yang lengkap dan akurat. Silakan kunjungi kembali dalam waktu dekat.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 