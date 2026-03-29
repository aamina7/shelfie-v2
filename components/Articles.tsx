"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Articles() {
  const sectionRef = useRef(null);

  const articles = [
    {
      image: "/images/reader-girl.jpeg",
      date: "13 jan, 2026",
      title: "READING BOOKS ALWAYS MAKES THE MOMENTS HAPPY",
      category: "Inspiration",
    },
    {
      image: "/images/reader-man.jpeg",
      date: "2 feb, 2026",
      title: "READING BOOKS ALWAYS MAKES THE MOMENTS HAPPY",
      category: "Inspiration",
    },
    {
      image: "/images/article-reader.jpg", 
      date: "14 feb, 2026",
      title: "READING BOOKS ALWAYS MAKES THE MOMENTS HAPPY",
      category: "Inspiration",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".article-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      gsap.from(".heading-reveal", {
        scaleX: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-[#f7f4ee]/50 px-6 py-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1200px]">

          {/* Heading Section */}
          <div className="mb-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-10">
              <div className="heading-reveal h-[1px] flex-1 max-w-[300px] bg-[#d9d0ea] origin-right" />
              {/* UPDATED: Changed text-[#7b6f8c] to text-black */}
              <p className="text-[13px] uppercase tracking-[0.25em] text-black whitespace-nowrap">
                READ OUR ARTICLES
              </p>
              <div className="heading-reveal h-[1px] flex-1 max-w-[300px] bg-[#d9d0ea] origin-left" />
            </div>

            <h2
              className="text-[64px] leading-none text-[#1f1f1f] uppercase font-bebas"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              LATEST ARTICLES
            </h2>
          </div>

          {/* Cards Container - FIXED ALIGNMENT */}
          <div className="flex flex-row flex-nowrap justify-between w-full items-start">
            {articles.map((article, index) => (
              <div 
                key={index} 
                className="article-card group cursor-pointer"
                style={{ width: '31%' }} 
              >
                {/* Image Wrapper */}
                <div className="overflow-hidden rounded-[18px] aspect-[1.4/1] w-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Date */}
                <p className="mt-5 text-[14px] text-[#d56600] font-semibold uppercase">
                  {article.date}
                </p>

                {/* Title */}
                <h3
                  className={`mt-3 text-[24px] leading-[1.1] text-[#1f1f1f] transition-colors group-hover:text-[#4b1d58] font-bebas`}
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {article.title}
                </h3>

                {/* Category */}
                {/* UPDATED: Changed text-[#7b6f8c] to text-black */}
                <p className="mt-3 text-[14px] text-black font-medium">
                  {article.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}