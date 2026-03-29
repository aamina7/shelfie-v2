"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuccessDialogueBox from "./SuccessDialogueBox";

const phoneSlides = [
  "/images/app-screen.jpeg",
  "/images/app-screen-2.png",
];

export default function AuthorJoin() {
  const [current, setCurrent] = useState(0);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // UPDATED: Processing state

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phoneSlides.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true); // Start processing

    // Simulate an API call / database save
    setTimeout(() => {
      setIsProcessing(false); // Stop processing
      setIsSuccessOpen(true); // Show success toast

      // Auto-hide the success toast after 3 seconds
      setTimeout(() => {
        setIsSuccessOpen(false);
      }, 3000);

      (e.target as HTMLFormElement).reset();
    }, 1500); // 1.5-second processing delay for a more natural feel
  };

  return (
    <>
      <section id="authorjoin" className="bg-transparent px-6 py-24 md:px-10 lg:px-14 font-sans">
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
            <h2 className="text-[56px] leading-[0.95] text-[#1f1f1f] uppercase font-bebas" style={{ fontFamily: "var(--font-bebas)" }}>
              JOIN AS AN AUTHOR
            </h2>

            <p className="mt-4 text-[16px] text-black font-bold">
              Start your storytelling journey with Shelfie today.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-y-6">
              <input required type="text" placeholder="Full Name" className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none shadow-sm focus:ring-1 focus:ring-[#4b1d58]/40" />
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />

              <input required type="email" placeholder="Email Address" className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none shadow-sm focus:ring-1 focus:ring-[#4b1d58]/40" />
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />

              <input type="text" placeholder="Phone Number" className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none shadow-sm focus:ring-1 focus:ring-[#4b1d58]/40" />
              <div className="h-[16px] w-full block clear-both" aria-hidden="true" />

              <div className="relative">
                <input type="text" placeholder="Location" className="h-[52px] w-full rounded-[12px] border border-black/10 bg-white px-5 text-[15px] outline-none shadow-sm focus:ring-1 focus:ring-[#4b1d58]/40" />
              </div>

              <div className="h-[32px] w-full block clear-both" aria-hidden="true" />

              <div className="mt-12 flex justify-center w-full">
                {/* FIXED: Added inline style to force white text color */}
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  style={{ color: '#ffffff' }}
                  className="h-[64px] min-w-[300px] px-16 rounded-full bg-[#4b1d58] flex items-center justify-center text-[16px] font-black uppercase tracking-[-0.02em] text-white shadow-xl transition-all hover:scale-105 active:scale-95 border-b-2 border-black/10 disabled:opacity-90 disabled:cursor-wait"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-3">
                      {/* FIXED: Ensured SVG uses white for the spinner */}
                      <svg className="animate-spin h-5 w-5" style={{ color: '#ffffff' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="animate-pulse">Processing...</span>
                    </div>
                  ) : (
                    "Create Author Account"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <SuccessDialogueBox 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />

      <div className="h-[96px] w-full block clear-both" aria-hidden="true" />
    </>
  );
}