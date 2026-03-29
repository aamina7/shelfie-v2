"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", 
          toggleActions: "play none none none",
        }
      });

      tl.from(".footer-line", {
        scaleX: 0,
        duration: 1.5,
        // Using power4.inOut for that smooth reveal
        ease: "power4.inOut",
      })
      .from(".footer-text", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-transparent px-6 pb-16 md:px-10 lg:px-14 mt-auto">
      <div className="mx-auto max-w-[1100px] text-center">

        {/* LINE with Reveal Animation */}
        <div className="footer-line mb-8 border-t border-black/10 origin-center" />

        {/* TEXT with Slide Reveal & Beige Highlight */}
        <div className="overflow-hidden">
          {/* UPDATED: Changed parent p tag color to text-black to ensure inheritance */}
          <p className="footer-text text-[14px] text-black tracking-wide">
            {/* UPDATED: Added inline style to force black color no matter what */}
            <span style={{ color: 'black' }} className="bg-[#f7f4ee] px-4 py-2 rounded-md inline-block decoration-clone">
              A product by{" "}
              {/* UPDATED: Added link to JAC Magnus */}
              <a 
                href="https://www.jacmagnus.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d56600] font-semibold uppercase tracking-wider hover:underline transition-all"
              >
                JAC Magnus Private Limited
              </a>
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}