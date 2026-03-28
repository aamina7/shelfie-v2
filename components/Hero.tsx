"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  { title: "WHERE AUTHORS AND READERS CONNECT", image: "/images/book1.jpeg" },
  { title: "STORIES WERE NEVER MEANT TO BE ONE-WAY", image: "/images/book2.jpeg" },
  { title: "READING THAT ACTUALLY LISTENS BACK", image: "/images/book3.jpeg" },
];

export default function Hero({ onOpenDialog }: { onOpenDialog: () => void }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.4 } });
      tl.from(".reveal-text", { y: 120, skewY: 7, stagger: 0.1, opacity: 0 })
        .from(".reveal-sub", { y: 30, opacity: 0 }, "-=1")
        .from(imageContainerRef.current, { scale: 1.1, opacity: 0, duration: 2 }, "-=1.4");

      gsap.to(imageContainerRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [current]);

  return (
    <div ref={containerRef} className="relative">
      <section className="bg-transparent pb-36 pt-32"> 
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="flex items-start justify-between gap-10">
            <div className="w-[60%] pt-10">
              <div className="overflow-hidden">
                <h1 ref={titleRef} className="reveal-text text-[56px] leading-[0.95] text-[#1f1f1f] uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                  {slides[current].title}
                </h1>
              </div>
              
              {/* Added relative z-30 and isolate to keep the button on top */}
              <div className="reveal-sub relative z-30 isolate">
                <p className="mt-6 text-[18px] text-black leading-[1.8] max-w-[560px] font-medium">
                  <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                    On <span className="font-bold text-[#2b1648]">Shelfie</span>, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors.
                  </span>
                </p>
                
                {/* DIRECT EVENT HANDLER: e.stopPropagation() stops other layers from blocking the click */}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenDialog();
                  }} 
                  className="mt-10 rounded-full bg-[#c85f00] px-28 py-11 text-[14px] text-white font-bold uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center cursor-pointer pointer-events-auto relative overflow-hidden"
                >
                  Get Started on Shelfie
                </button>
              </div>
            </div>

            <div ref={imageContainerRef} className="relative w-[280px] h-[440px] shrink-0 -mt-10 overflow-hidden z-10">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt="book"
                  className={`absolute top-0 left-0 w-full h-full object-contain rounded-[18px] transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    index === current ? "opacity-100 translate-x-0 z-20" : "opacity-0 translate-x-full z-10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div> 
      </section> 
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </div>
  );
}