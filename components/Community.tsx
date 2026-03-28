"use client";
import { motion, Variants } from "framer-motion";

export default function Community() {
  const listItems = [
    { id: "01", text: "Discover new writers" },
    { id: "02", text: "Explore their work" },
    { id: "03", text: "Take part in conversations that bring stories to life" },
  ];

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
      {/* UPDATED: Added id="community" so the Navbar can find this section */}
      <section id="community" className="bg-transparent px-6 py-20 md:px-10 lg:px-14">
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
              className="text-[64px] font-black leading-[0.9] text-[#c85f00] md:text-[82px] lg:text-[96px] uppercase"
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
                  className={`grid grid-cols-[48px_1fr] items-center gap-4 py-4 px-6 bg-[#f7f4ee] border-b border-black/5 
                    ${index === 0 ? "rounded-t-xl" : ""} 
                    ${index === listItems.length - 1 ? "rounded-b-xl border-b-0" : ""}`}
                >
                  <span className="text-[15px] font-bold text-[#c85f00]">{item.id}</span>
                  <p className="text-[15px] text-[#1f1f1f]">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 max-w-[700px]"
            >
              <p className="text-[19px] leading-[1.8] text-black font-bold">
                <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                  Shelfie allows readers to ask questions, share perspectives, and
                  interact with authors without expensive paywalls or exclusivity.
                </span>
              </p>

              <div className="mt-8 flex items-start gap-4">
                <div className="h-8 w-[4px] bg-[#c85f00] mt-1" />
                <p className="text-[16px] italic font-bold text-[#1f1f1f]">
                  <span className="bg-[#f7f4ee] px-2 py-1 rounded-md inline decoration-clone">
                    Reading on Shelfie isn&apos;t passive, it&apos;s personal.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* UPDATED: Added real store links */}
            <div className="mt-12 flex items-center gap-6">
              <a 
                href="https://apps.apple.com/in/app/shelfie-reader/id6758462759" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.img 
                  whileHover={{ y: -5 }} 
                  src="/images/app-store.svg" 
                  alt="App Store" 
                  className="h-[52px] cursor-pointer" 
                />
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.jac.readerapp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.img 
                  whileHover={{ y: -5 }} 
                  src="/images/google-play.png" 
                  alt="Google Play" 
                  className="h-[52px] cursor-pointer" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}