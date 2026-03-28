"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function HeroDialogueBox({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div 
          data-lenis-prevent 
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 1000000, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* DARK OVERLAY WITH BLUR */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              cursor: 'pointer'
            }}
          />

          {/* THE WHITE BOX */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-[480px] rounded-[32px] shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#ffffff', padding: '24px 30px 40px 30px' }}
          >
            <button 
              onClick={onClose} 
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 100,
                background: 'none',
                border: 'none',
                color: '#9ca3af',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '10px',
                lineHeight: 1
              }}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="text-center w-full">
              <h2 className="text-[32px] font-bold text-[#3d1a4d] uppercase tracking-tight leading-none mt-6">
                Join Shelfie Today
              </h2>
              <p className="mt-2 text-[14px] text-gray-500 font-medium mb-8">
                Choose your role to download the app.
              </p>
            </div>

            <div className="flex flex-row gap-4 justify-center items-stretch">
              {/* READER BOX */}
              <div className="flex-1 rounded-[24px] bg-[#fcfcfc] p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm">
                <span className="text-[18px] font-bold text-black uppercase">Reader</span>
                <p className="text-[10px] text-gray-400 mt-1 mb-6 font-medium uppercase tracking-wider leading-tight">
                  For book lovers &<br />explorers.
                </p>
                <div className="flex flex-col gap-3 w-full items-center mt-auto">
                  <a href="https://apps.apple.com/in/app/shelfie-reader/id6758462759" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                    <img src="/images/app-store.svg" alt="App Store" style={{ width: '120px' }} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.jac.readerapp" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                    <img src="/images/google-play.png" alt="Google Play" style={{ width: '120px' }} />
                  </a>
                  <div className="h-[16px] w-full block clear-both" aria-hidden="true" />
                </div>
              </div>

              {/* AUTHOR BOX */}
              <div className="flex-1 rounded-[24px] bg-[#fcfcfc] p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm">
                <span className="text-[18px] font-bold text-black uppercase">Author</span>
                <p className="text-[9px] text-gray-400 mt-1 mb-6 font-medium uppercase tracking-wider leading-tight">
                  For writers &<br />storytellers.
                </p>
                <div className="flex flex-col gap-3 w-full items-center mt-auto">
                  {/* Updated with Author specific links */}
                  <a href="https://apps.apple.com/in/app/shelfie-author/id6758301712" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                    <img src="/images/app-store.svg" alt="App Store" style={{ width: '120px' }} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.jac.authorapp" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                    <img src="/images/google-play.png" alt="Google Play" style={{ width: '120px' }} />
                  </a>
                  <div className="h-[16px] w-full block clear-both" aria-hidden="true" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}