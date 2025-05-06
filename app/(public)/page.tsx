"use client";

import { HeroSection } from "@/components/home/hero-section/HeroSection";
import { Forms } from "@/components/home/forms/page";
import { OpenData } from "@/components/home/open-data/page";
import { News } from "@/components/home/news/page";
import { Awards } from "@/components/home/awards/Awards";
import { WebsiteRegion } from "@/components/home/website-region/WebsiteRegion";
import { RegionalDeviceWebsite } from "@/components/home/regional-device-website/RegionalDeviceWebsite"
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Forms */}
      <main className="container mx-auto px-6 py-12">
        <Forms />
        <div className="relative overflow-hidden rounded-md	overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 text-white my-10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 rounded">
            <div className="absolute inset-0 rounded" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative pb-8">
            {/* Partner Logos */}
            <div className="container mx-auto px-6">
              <OpenData />
            </div>
          </div>
        </div>
        <News />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Custom easing untuk efek lebih dramatis
          }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-900 to-blue-800 text-white my-16 shadow-2xl"
        >
          {/* Background Pattern dengan Animasi Paralaks */}
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 50v-6h-4v6h-6v4h6v6h4v-6h6v-4h-6zM10 10V0h-4v10H0v4h10v10h4V14h10v-4H14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Floating Highlight Circles */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white opacity-10 blur-lg"
          />

          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-lg"
          />

          {/* Content Container */}
          <div className="relative py-12 px-6">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                type: "spring",
                bounce: 0.4
              }}
              className="container mx-auto"
            >
              {/* Border Pulse Effect */}
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 0.3 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Awards />
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 pointer-events-none"
          />
        </motion.div>
        <WebsiteRegion />
        <RegionalDeviceWebsite />
      </main>
    </div>
  );
}
