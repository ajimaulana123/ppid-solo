'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const router = useRouter();
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  // Animasi floating dengan TypeScript-safe approach
  useEffect(() => {
    const updateFloating = () => {
      floatingElementsRef.current.forEach((el) => {
        if (el) {
          el.style.transform = `translateY(${Math.random() * 10 - 5}px) rotate(${Math.random() * 6 - 3}deg)`;
        }
      });
    };

    const interval = setInterval(updateFloating, 2000);
    return () => clearInterval(interval);
  }, []);

  const addToFloatingRefs = (el: HTMLDivElement | null) => {
    if (el) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center relative">
        {/* Floating elements dengan ref yang aman */}
        <motion.div
          ref={addToFloatingRefs}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div
          ref={addToFloatingRefs}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />

        {/* Main content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="relative z-10"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            404
          </div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Halaman Tidak Ditemukan
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
          >
            Sepertinya Anda tersesat di dunia digital. Mari kita bantu Anda kembali ke rumah.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              onClick={() => router.push('/')}
              className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition-all"
            >
              Kembali ke Beranda
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated astronaut */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-400"
        >
          <motion.path
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            d="M12 2.5c-1.5 0-3 .5-4 1.5-2 2-2 5-2 7 0 1.5.5 3 1.5 4 1 1 2.5 1.5 4 1.5s3-.5 4-1.5c1-1 1.5-2.5 1.5-4 0-2 0-5-2-7-1-1-2.5-1.5-4-1.5z"
          />
          <motion.circle
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            cx="12"
            cy="8.5"
            r="1"
          />
          <motion.path
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            d="M8 15s1.5 2 4 2 4-2 4-2"
          />
        </svg>
      </motion.div>
    </div>
  );
}