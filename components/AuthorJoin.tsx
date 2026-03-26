"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phoneSlides = [
  "/images/app-screen.jpeg",
  "/images/app-screen-2.png",
];

export default function AuthorJoin() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phoneSlides.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="bg-transparent px-6 py-24 md:px-10 lg:px-14 font-sans">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-14">
          
          {/* LEFT PHONE IMAGE */}
          <div className="w-[40%] flex justify-center relative h-[480px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={phoneSlides[current]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                alt="Shelfie mobile screen"
                className="absolute h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </AnimatePresence>
          </div>

          {/* RIGHT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[55%]"
          >
            <h2
              className="text-[56px] leading-[0.95] text-[#1f1f1f] uppercase"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              JOIN AS AN AUTHOR
            </h2>

            <p className="mt-4 text-[16px] text-black font-bold">
              Start your storytelling journey with Shelfie today.
            </p>

            {/* UPDATED: Increased gap-y-6 for the specific spacing in your screenshot */}
            <div className="mt-10 flex flex-col gap-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#4b1d58]/40 shadow-sm"
              />
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />

              <input
                type="email"
                placeholder="Email Address"
                className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#4b1d58]/40 shadow-sm"
              />
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />

              <input
                type="text"
                placeholder="Phone Number"
                className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#4b1d58]/40 shadow-sm"
              />
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />

              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#4b1d58]/40 shadow-sm"
                />
              </div>
            </div>
            <div className="h-[32px] w-full block clear-both" aria-hidden="true" />

          {/* MAXIMUM BOLD: The "High-Impact" Fat Button */}
<div className="mt-12 flex justify-center w-full">
  <button className="h-[64px] px-16 rounded-full bg-[#4b1d58] flex items-center justify-center text-[16px] font-black uppercase tracking-[-0.02em] text-white shadow-xl transition-all hover:scale-105 hover:bg-[#5b246a] active:scale-95 border-b-2 border-black/10">
    Create Author Account
  </button>
</div>
          </motion.div>
        </div>
      </section>

      {/* 3 LINES OF EMPTY SPACE */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}