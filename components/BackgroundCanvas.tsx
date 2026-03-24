"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundCanvas() {
  // 1. This hook tracks how far you've scrolled (0 is top, 1 is bottom)
  const { scrollYProgress } = useScroll();

  // 2. Video 1: Visible at start (1), fades out by 50% scroll (0)
  const opacity1 = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);

  // 3. Video 2: Starts invisible (0), fades in at 50% scroll (1)
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f7f4ee]">
      
      {/* FIRST VIDEO */}
      <motion.video
        autoPlay loop muted playsInline
        style={{ opacity: opacity1 }}
        className="absolute inset-0 h-full w-full object-cover grayscale invert mix-blend-multiply opacity-20"
      >
        <source src="/videos/bg-video-1.mp4" type="video/mp4" />
      </motion.video>

      {/* SECOND VIDEO */}
      <motion.video
        autoPlay loop muted playsInline
        style={{ opacity: opacity2 }}
        className="absolute inset-0 h-full w-full object-cover grayscale invert mix-blend-multiply opacity-20"
      >
        <source src="/videos/bg-video-2.mp4" type="video/mp4" />
      </motion.video>

      {/* TEXTURE OVERLAY (The 'Boutique' Grain) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" /></filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}