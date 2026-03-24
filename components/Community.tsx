"use client";
import { motion, Variants } from "framer-motion"; // Added Variants import

export default function Community() {
  const listItems = [
    { id: "01", text: "Discover new writers" },
    { id: "02", text: "Explore their work" },
    { id: "03", text: "Take part in conversations that bring stories to life" },
  ];

  // Explicitly typing this as 'Variants' fixes the TypeScript error
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    })
  };

  return (
    <>
      <section className="bg-transparent px-6 py-20 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] items-start justify-between">
          
          {/* LEFT SIDE: IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[35%] flex justify-start"
          >
            <div className="relative group">
              <div className="absolute left-4 top-4 h-full w-full rounded-[24px] bg-[#eadac7]" />
              <img
                src="/images/book4.png"
                alt="Crown of Thorns and Starlight"
                className="relative z-10 h-auto w-full max-w-[340px] rounded-[24px] object-cover shadow-xl"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="w-[60%] pt-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[52px] font-black leading-[0.95] text-[#c85f00] md:text-[72px] lg:text-[84px] uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              FOR THOSE PASSIONATE <br /> READERS WHO WANT TO
            </motion.h2>

            <div className="mt-12 space-y-0">
              {listItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-black/10 py-6"
                >
                  <span className="text-[20px] font-bold text-[#c85f00]">{item.id}</span>
                  <p className="text-[20px] text-[#1f1f1f]">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 max-w-[700px] text-[19px] leading-[1.7] text-[#5b6472]"
            >
              Shelfie allows readers to ask questions, share perspectives, and
              interact with authors without expensive paywalls or exclusivity.
            </motion.p>

            <div className="mt-10 flex items-start gap-4">
              <div className="h-8 w-[4px] bg-[#c85f00] mt-1" />
              <p className="text-[20px] italic text-[#1f1f1f]">
                Reading on Shelfie isn&apos;t passive, it&apos;s personal.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <motion.img whileHover={{ y: -5 }} src="/images/app-store.svg" alt="App Store" className="h-[52px] cursor-pointer" />
              <motion.img whileHover={{ y: -5 }} src="/images/google-play.png" alt="Google Play" className="h-[52px] cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* RESTORED: 3 LINES OF EMPTY SPACE (approx 160px) */}
      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}