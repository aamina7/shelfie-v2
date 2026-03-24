"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "WHERE AUTHORS AND READERS CONNECT",
    image: "/images/book1.jpeg",
  },
  {
    title: "STORIES WERE NEVER MEANT TO BE ONE-WAY",
    image: "/images/book2.jpeg",
  },
  {
    title: "READING THAT ACTUALLY LISTENS BACK",
    image: "/images/book3.jpeg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="bg-[#f7f4ee] pb-36"> 
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          
          {/* FLEX ROW */}
          <div className="flex items-start justify-between gap-10">
            
            {/* LEFT TEXT (unchanged to prevent layout shift) */}
            <div className="w-[60%] pt-10">
              <h1
                className="text-[72px] leading-[0.95] text-[#1f1f1f]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {slides[current].title}
              </h1>

              <p className="mt-6 text-[18px] text-[#4b5563] leading-[1.6] max-w-[520px]">
                On <span className="font-semibold text-[#2b1648]">Shelfie</span>, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors through conversations that continue beyond the page.
              </p>

              <button className="mt-8 rounded-full bg-[#c85f00] px-8 py-3 text-white font-semibold">
                Get Started on Shelfie
              </button>
            </div>

            {/* RIGHT IMAGE SLIDER */}
            <div className="relative w-[280px] h-[440px] shrink-0 -mt-10">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt="book"
                  className={`absolute top-0 left-0 w-full h-full object-contain rounded-[18px] transition-all duration-700 ${
                    index === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 LINES OF EXTRA EMPTY SPACE BELOW HERO */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}