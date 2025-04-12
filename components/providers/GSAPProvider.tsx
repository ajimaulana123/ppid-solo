// providers/GSAPProvider.tsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

export default function GSAPProvider({ children }: { children: ReactNode }) {
  const container = useRef(null);

  useGSAP(() => {
    // Register plugins sekali saja
    gsap.registerPlugin(ScrollTrigger);

    // Animasi global bisa ditambahkan di sini
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}
