'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    
    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 1000); // Delay minimal untuk animasi
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setIsLoading(false), 1000);
      });
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: -100,
              opacity: 0,
              transition: { 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] 
              }
            }}
            className="text-center"
          >
            <Image
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjRjejY4a2x2YXNmNmExcmgxNGw0bGI4eDQ2bW42d29sbHBqMjliZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H4uL1fB0CjNIma7min/giphy.gif"
              alt="Loading"
              width={300}
              height={300}
              unoptimized
              priority
              className="mx-auto"
            />
            <motion.p
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-gray-600"
            >
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
