"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="bg-transparent px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1200px] flex items-start justify-between gap-16">
          
          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[48%]"
          >
            <div className="mb-6 h-[3px] w-10 bg-[#d56600]" />

            <h2
              className="text-[72px] leading-[0.92] text-[#4b1d58]"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              WHAT IS SHELFIE
            </h2>

            {/* UPDATED: text-[26px] for a much larger, bolder subtitle */}
            <p className="mt-6 text-[22px] uppercase tracking-[-0.05em] text-[#4b1d58] font-black leading-tight">
              A SHARED SPACE FOR READERS AND WRITERS
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-[52%]"
          >
            {/* HIGHLIGHTED SUBHEADING */}
            <h3 className="text-[28px] font-semibold leading-[1.4] text-[#1f1f1f]">
              <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                Shelfie is an interactive storytelling platform built for both
                readers and writers.
              </span>
            </h3>

            {/* HIGHLIGHTED BODY TEXT */}
            <p className="mt-8 text-[18px] leading-[1.8] tracking-tight font-bold text-black">
              <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                Writers can share their books, stories, and ideas, while readers can
                engage directly with authors through meaningful interactions. Unlike
                traditional eBooks platforms, Shelfie focuses on connection,
                dialogue, and community, not just content distribution.
              </span>
            </p>

            <div className="mt-12 h-[3px] w-16 bg-[#d8a878]" />
          </motion.div>
        </div>
      </section>

      {/* 3 LINES OF EMPTY SPACE (96px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}