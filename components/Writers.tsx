"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Writers() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. STAGGERED REVEAL SYSTEM
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Starts when section is 75% down the viewport
          toggleActions: "play none none none",
        }
      });

      tl.from(".writer-heading", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })
      .from(".writer-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8")
      .from(".writer-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Cards pop one after another
        ease: "back.out(1.7)" // Adds a slight "boutique" bounce
      }, "-=0.6")
      .from(".store-btn", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      }, "-=0.4");

      // 2. PARALLAX DEPTH (The Right Image)
      gsap.to(imageRef.current, {
        y: -60, // Moves upward as you scroll down
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-[#f7f4ee] px-6 py-28 md:px-10 lg:px-14 overflow-hidden">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-20">
          
          {/* LEFT CONTENT */}
          <div className="w-[60%]">
            <div className="overflow-hidden">
              <h2
                className="writer-heading text-[64px] leading-[0.95] text-[#4b1d58] uppercase"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                FOR WRITERS WHO WANT REAL <br /> READER ENGAGEMENT
              </h2>
            </div>

            <p className="writer-text mt-8 text-[18px] text-[#1f1f1f] font-medium">
              Shelfie helps emerging & established writers go beyond publishing.
            </p>

            <p className="writer-text mt-4 max-w-[600px] text-[17px] leading-[1.8] text-[#5b6472]">
              Share your stories, connect directly with readers, and build a
              community around your work. Our platform is designed to turn passive
              readers into active participants in your creative journey.
            </p>

            {/* STAGGERED CARDS */}
            <div className="mt-12 flex mb-12" style={{ gap: '24px' }}> 
              <div className="writer-card rounded-[20px] p-8 w-[280px] bg-[#3a153d]">
                <h3 className="text-[18px] font-bold tracking-wide text-white m-0">
                  DIRECT CONNECTION
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/90">
                  Talk to your audience without intermediaries.
                </p>
              </div>

              <div className="writer-card rounded-[20px] p-8 w-[280px] bg-[#3a153d]">
                <h3 className="text-[18px] font-bold tracking-wide text-white m-0">
                  COMMUNITY BUILDING
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/90">
                  Foster a loyal following that grows with every chapter.
                </p>
              </div>
            </div>

            {/* STORE BUTTONS */}
            <div className="flex gap-4">
              <img src="/images/app-store.svg" alt="App Store" className="store-btn h-[52px] cursor-pointer" />
              <img src="/images/google-play.png" alt="Google Play" className="store-btn h-[52px] cursor-pointer" />
            </div>
          </div>

          {/* RIGHT IMAGE WITH PARALLAX */}
          <div className="w-[40%] flex justify-end">
            <div ref={imageRef} className="relative">
              <div className="absolute -right-4 top-4 h-full w-full rounded-[24px] bg-[#ece2d5]" />
              <img
                src="/images/book2.jpeg"
                alt="Book Cover"
                className="relative z-10 h-[520px] w-[360px] rounded-[24px] object-cover shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="h-[160px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}