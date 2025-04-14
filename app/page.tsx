"use client";

import { HeroSection } from "@/components/home/hero-section/HeroSection";
import { Forms } from "@/components/home/forms/page";
import { OpenData } from "@/components/home/open-data/page";
import { News } from "@/components/home/news/page";
import { Awards  } from "@/components/home/awards/Awards";
import { WebsiteRegion } from "@/components/home/website-region/WebsiteRegion";
import { RegionalDeviceWebsite } from "@/components/home/regional-device-website/RegionalDeviceWebsite"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      {/* Forms */}
      <main className="container mx-auto px-6 py-12">
        <Forms />
        <OpenData />
        <News />
        <Awards />
        <WebsiteRegion />
        <RegionalDeviceWebsite />
      </main>
    </div>
  );
}
