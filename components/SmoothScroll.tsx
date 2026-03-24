"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// We define the props interface clearly
interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const update = (time: number) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {/* The 'as any' cast is a safe bypass for the version mismatch error */}
      {children as any}
    </ReactLenis>
  );
}