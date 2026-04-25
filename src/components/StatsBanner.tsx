'use client';

import { motion } from 'framer-motion';

const industries = [
  "Real Estate", "Interior Design", "Financial Services", "Healthcare",
  "Events & Hospitality", "Travel & Tourism", "Home Décor", "Electrical & Hardware",
  "Fashion & Apparel", "Jewellery", "Beauty & Skincare", "Recycling"
];

export default function StatsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 bg-[var(--bg-dark)] border-y border-[var(--accent)]/10 overflow-hidden relative flex"
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap w-max items-center"
      >
        <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
          {industries.map((ind, i) => (
            <div key={`s1-${i}`} className="flex items-center gap-4 cursor-default select-none hover:scale-105 transition-transform duration-300">
              <span className="text-[var(--accent)] text-xl md:text-2xl font-black drop-shadow-xl">•</span>
              <span className="text-white/80 text-lg md:text-xl font-medium tracking-wide uppercase mt-1">{ind}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
          {industries.map((ind, i) => (
            <div key={`s2-${i}`} className="flex items-center gap-4 cursor-default select-none hover:scale-105 transition-transform duration-300">
              <span className="text-[var(--accent)] text-xl md:text-2xl font-black drop-shadow-xl">•</span>
              <span className="text-white/80 text-lg md:text-xl font-medium tracking-wide uppercase mt-1">{ind}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
