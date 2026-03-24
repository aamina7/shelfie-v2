"use client";

import { useEffect, useState } from "react";

const phoneSlides = [
  "/images/app-screen.jpeg",
  "/images/app-screen-2.png",
];

export default function AuthorJoin() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phoneSlides.length);
    }, 1000); // speed of switching

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="bg-[#f7f4ee] px-6 py-24 md:px-10 lg:px-14 font-sans">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-14">
          
          {/* LEFT PHONE IMAGE (INSTANT SWITCH) */}
          <div className="w-[40%] flex justify-center">
            <img
              src={phoneSlides[current]}
              alt="Shelfie mobile screen"
              className="h-[420px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="w-[50%]">
            <h2
              className="text-[52px] leading-[0.95] text-[#1f1f1f]"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              JOIN AS AN AUTHOR
            </h2>

            <p className="mt-2 text-[15px] text-[#4b5563]">
              Start your storytelling journey with Shelfie today.
            </p>

            <div className="mt-8 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[44px] w-full rounded-[10px] border border-black/10 bg-[#f4f2f6] px-4 text-[14px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#3a153d]/40"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-[44px] w-full rounded-[10px] border border-black/10 bg-[#f4f2f6] px-4 text-[14px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#3a153d]/40"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="h-[44px] w-full rounded-[10px] border border-black/10 bg-[#f4f2f6] px-4 text-[14px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#3a153d]/40"
              />

              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="h-[44px] w-full rounded-[10px] border border-black/10 bg-[#f4f2f6] px-4 pr-10 text-[14px] outline-none placeholder:text-[#8a8f98] focus:ring-1 focus:ring-[#3a153d]/40"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] text-[#7b8190]">
                  🌍
                </span>
              </div>
            </div>

            <button className="mt-8 w-full md:w-auto rounded-full bg-[#3a153d] px-10 py-3 text-[14px] font-semibold tracking-wide text-white transition-all hover:bg-[#5a255d]">
              CREATE AUTHOR ACCOUNT
            </button>
          </div>
        </div>
      </section>

      {/* 3 LINES OF EMPTY SPACE (160px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}