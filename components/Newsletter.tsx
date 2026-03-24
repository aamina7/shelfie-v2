"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <>
      <section className="bg-[#f7f4ee] px-6 py-28 md:px-10 lg:px-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >

          {/* TOP BORDER LINE */}
          <div className="mb-16 border-t-[2px] border-[#d56600] rounded-t-[30px]" />

          {/* TITLE */}
          <h2
            className="text-[44px] text-[#4b1d58]"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            SHELFIE
          </h2>

          {/* TAGLINE */}
          <p className="mt-2 text-[14px] text-[#4b1d58]">
            Your Shelf. Your Story.
          </p>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.7] text-[#6b7280]">
            Beyond the page. Connecting readers and writers through meaningful
            conversations and interactive storytelling.
          </p>

          {/* NEWSLETTER BOX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-12 max-w-[560px] rounded-[20px] bg-white/40 px-8 py-10 shadow-sm"
          >

            <p className="mb-6 text-[13px] font-semibold tracking-[0.2em] text-[#d56600]">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>

            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-[48px] flex-1 rounded-full border border-black/10 bg-[#f4f2f6] px-5 text-[14px] outline-none"
              />

              <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#3a153d] text-white text-[18px] transition-transform hover:scale-110 active:scale-95">
                →
              </button>
            </div>
          </motion.div>

          {/* CONTACT */}
          <p className="mt-10 text-[14px] text-[#6b7280]">
            Let’s connect at{" "}
            <span className="text-[#d56600] font-medium">
              hello@shelfiebooks.in
            </span>
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex justify-center gap-6">
            {["X", "IG", "F", "IN"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-[#ede7f3] text-[#4b1d58] text-[14px] font-semibold transition-colors hover:bg-[#4b1d58] hover:text-white"
              >
                {item}
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* 3 LINES OF EMPTY SPACE (160px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}