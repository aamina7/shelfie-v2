"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    const ctx = gsap.context(() => {
      // Staggered reveal for the cards
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

      // Subtle reveal for the lines and heading
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
      <section ref={sectionRef} className="bg-transparent px-6 py-28 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1200px]">

          {/* Heading */}
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-6">
              <div className="heading-reveal h-[1px] w-[200px] bg-[#d9d0ea] origin-right" />
              <p className="text-[13px] uppercase tracking-[0.25em] text-[#7b6f8c]">
                READ OUR ARTICLES
              </p>
              <div className="heading-reveal h-[1px] w-[200px] bg-[#d9d0ea] origin-left" />
            </div>

            <h2
              className="text-[64px] leading-none text-[#1f1f1f] uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              LATEST ARTICLES
            </h2>
          </div>

          {/* Cards */}
          <div className="flex gap-8">
            {articles.map((article, index) => (
              <div key={index} className="article-card w-[33.33%] group cursor-pointer">
                
                {/* Image Wrapper for Hover Effect */}
                <div className="overflow-hidden rounded-[12px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Date */}
                <p className="mt-4 text-[13px] text-[#d56600] font-medium">
                  {article.date}
                </p>

                {/* Title */}
                <h3
                  className="mt-2 text-[26px] leading-[1.05] text-[#1f1f1f] transition-colors group-hover:text-[#4b1d58]"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {article.title}
                </h3>

                {/* Category */}
                <p className="mt-3 text-[15px] text-[#7b6f8c] font-medium">
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