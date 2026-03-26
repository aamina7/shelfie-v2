"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LibraryScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 192; 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const currentFrame = { frame: 0 };
    let loadedCount = 0;

    const renderImage = (index: number) => {
      const safeIndex = Math.min(frameCount - 1, Math.max(0, Math.round(index)));
      const img = imagesRef.current[safeIndex];
      
      if (img && img.complete && context && canvas) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
        }
        
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/drone-video/${i.toString().padStart(4, '0')}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === 1) renderImage(0); 
          if (loadedCount === frameCount) setImagesLoaded(true);
        };
        imagesRef.current.push(img);
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderImage(currentFrame.frame);
    };

    preloadImages();
    window.addEventListener("resize", resize);
    resize();

    const tl = gsap.to(currentFrame, {
      frame: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger: "#transparent-zone",
        start: "top top",
        end: "bottom bottom", 
        scrub: 0.8,
        onUpdate: () => renderImage(currentFrame.frame),
      },
    });

    return () => {
      window.removeEventListener("resize", resize);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-black overflow-hidden pointer-events-none">
      {/* - brightness(0.7): Lowered even more to kill "whiteness" and glare.
          - contrast(2.0): Doubled to eliminate "greyness" and muddy mid-tones.
          - saturate(2.1): Pushed high to keep wood tones warm and "gold" in the dark.
          - sepia(0.2): Subtle antique wash to make the library feel more "Classic/Premium".
      */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block object-cover" 
        style={{ 
          opacity: 0.5,
          filter: 'brightness(0.7) contrast(2.0) saturate(2.1) sepia(0.2)',
          WebkitFilter: 'brightness(0.7) contrast(2.0) saturate(2.1) sepia(0.2)' 
        }}
      />

      {/* HEAVY VIGNETTE: 
          Uses a high-alpha black to mask the edges, forcing focus 
          on the center while hiding visual noise on the sides.
      */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.95) 100%),
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)
          `
        }}
      />
      
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50 text-white font-serif italic text-2xl">
          Deepening the Atmosphere...
        </div>
      )}
    </div>
  );
}