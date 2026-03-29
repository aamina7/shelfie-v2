"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function SuccessDialogueBox({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // THE 3-SECOND AUTO-DISAPPEAR LOGIC
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      // Start 3000ms countdown when the box opens
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }

    // Cleanup: Stop the timer if the user closes it manually or leaves the page
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div 
          style={{ 
            position: 'fixed',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999999,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            pointerEvents: 'none' 
          }}
        >
          <motion.div 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            onClick={onClose} // Optional: Click to hide immediately
            style={{
              backgroundColor: '#43a047',
              color: 'white',
              padding: '14px 36px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
              pointerEvents: 'auto', // Allows the click-to-dismiss
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}
          >
            {/* WHITE TICK ICON */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              style={{ width: '22px', height: '22px' }}
            >
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>

            <span style={{ fontSize: '16px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Thank you! Registration successful.
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}