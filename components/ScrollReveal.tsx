"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: Props) {
  return (
    <div className="overflow-hidden"> {/* This acts as a 'mask' */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: 1.2, 
          delay: delay,
          ease: [0.22, 1, 0.36, 1] // The 'Boutique' Quintic Ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}