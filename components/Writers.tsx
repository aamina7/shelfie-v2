"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Writers() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
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
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.6")
      .from(".store-btn", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      }, "-=0.4");

      gsap.to(imageRef.current, {
        y: -60,
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
      {/* UPDATED: Added id="author-join" for auto-scroll functionality */}
      <section id="author-join" ref={sectionRef} className="bg-transparent px-6 py-28 md:px-10 lg:px-14 overflow-hidden">
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

            {/* HIGHLIGHTED PARAGRAPH 1 */}
            <p className="writer-text mt-8 text-[22px] text-black font-bold leading-[1.8]">
              <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                Shelfie helps emerging & established writers go beyond publishing.
              </span>
            </p>

            {/* HIGHLIGHTED PARAGRAPH 2 */}
            <p className="writer-text mt-4 max-w-[600px] text-[17px] leading-[1.8] text-black/80 font-medium">
              <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                Share your stories, connect directly with readers, and build a
                community around your work. Our platform is designed to turn passive
                readers into active participants in your creative journey.
              </span>
            </p>

          {/* STAGGERED CARDS */}
          <div className="mt-12 flex mb-12" style={{ gap: '24px' }}> 
            <div className="writer-card rounded-[24px] p-8 w-[280px] bg-[#4b1d58] backdrop-blur-md border border-white/10 shadow-xl">
              <h3 className="text-[18px] font-black tracking-tighter text-white m-0">
                DIRECT CONNECTION
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white">
                Talk to your audience without intermediaries.
              </p>
            </div>

            <div className="writer-card rounded-[24px] p-8 w-[280px] bg-[#4b1d58] backdrop-blur-md border border-white/10 shadow-xl">
              <h3 className="text-[18px] font-black tracking-tighter text-white m-0">
                COMMUNITY BUILDING
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white">
                Foster a loyal following that grows with every chapter.
              </p>
            </div>
          </div>
          <div className="h-[32px] w-full block clear-both" aria-hidden="true" />

            {/* UPDATED: Added direct store links */}
            <div className="flex gap-4">
              <a href="https://apps.apple.com/in/app/shelfie-author/id6758301712" target="_blank" rel="noopener noreferrer">
                <img src="/images/app-store.svg" alt="App Store" className="store-btn h-[52px] cursor-pointer hover:scale-105 transition-transform" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.jac.authorapp" target="_blank" rel="noopener noreferrer">
                <img src="/images/google-play.png" alt="Google Play" className="store-btn h-[52px] cursor-pointer hover:scale-105 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE WITH PARALLAX */}
          <div className="w-[40%] flex justify-end">
            <div ref={imageRef} className="relative">
              <div className="absolute -right-4 top-4 h-full w-full rounded-[24px] bg-black/20 blur-xl" />
              <img
                src="/images/book2.jpeg"
                alt="Book Cover"
                className="relative z-10 h-[520px] w-[360px] rounded-[24px] object-cover shadow-2xl border border-white/10"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="h-[160px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}