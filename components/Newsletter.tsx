"use client";
import { motion } from "framer-motion";
// IMPORT THE ICONS
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Newsletter() {
  const socialLinks = [
    { icon: <FaXTwitter />, label: "X" },
    { icon: <FaInstagram />, label: "IG" },
    { icon: <FaFacebookF />, label: "F" },
    { icon: <FaLinkedinIn />, label: "IN" },
  ];

  return (
    <>
      <section className="bg-transparent px-6 py-28 md:px-10 lg:px-14">
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
            className="text-[44px] text-[#4b1d58] uppercase"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            SHELFIE
          </h2>

          {/* TAGLINE */}
          <p className="mt-2 text-[18px] text-[#4b1d58] font-[1000] uppercase tracking-widest">
            Your Shelf. Your Story.
          </p>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] text-black font-bold">
            Beyond the page. Connecting readers and writers through meaningful
            conversations and interactive storytelling.
          </p>

          <div className="h-[32px] w-full block clear-both" aria-hidden="true" />

          {/* NEWSLETTER BOX - FIXED: Changed parent <p> to <div> */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-12 max-w-[560px] rounded-[20px] bg-[#f7f4ee] px-8 py-20 shadow-sm"
          >
            {/* FIXED: Swapped <p> for <div> to allow internal div spacers */}
            <div className="mb-8 text-[13px] font-semibold tracking-[0.2em] text-[#d56600]">
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />
              SUBSCRIBE TO OUR NEWSLETTER
            </div>
            <div className="h-[16px] w-full block clear-both" aria-hidden="true" />
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-[48px] flex-1 rounded-full border border-black/5 bg-white/90 px-5 text-[14px] outline-none placeholder:text-gray-400 focus:border-[#d56600] transition-all"
              />
              <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#3a153d] text-white text-[18px] transition-transform hover:scale-110 active:scale-95">
                →
              </button>
            </div>
            <div className="h-[32px] w-full block clear-both" aria-hidden="true" />
          </motion.div>

          {/* CONTACT - FIXED: Changed parent <p> to <div> */}
          <div className="h-[32px] w-full block clear-both" aria-hidden="true" />
          <div className="mt-10">
            <div className="text-[14px] font-bold text-black">
              <span className="bg-[#f7f4ee] px-4 py-2 rounded-md inline-block decoration-clone">
                Let’s connect at{" "}
                <span className="text-[#d56600] font-black hover:underline cursor-pointer">
                  hello@shelfiebooks.in
                </span>
              </span>
            </div>
          </div>

          {/* SOCIAL ICONS - UPDATED SECTION */}
          <div className="h-[32px] w-full block clear-both" aria-hidden="true" />
      <div className="mt-8 flex justify-center gap-6">
        {socialLinks.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-[#ede7f3] text-[#4b1d58] text-[18px] transition-colors hover:bg-[#4b1d58] hover:text-white shadow-sm"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

        </motion.div>
      </section>

      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}