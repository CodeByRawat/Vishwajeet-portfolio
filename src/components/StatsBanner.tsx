'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '10,000+', label: 'Leads in 90 Days' },
  { value: '4.6x', label: 'Avg. ROAS' },
  { value: '50+', label: 'Global Clients' },
  { value: 'ROI', label: 'International Impact' }
];

export default function StatsBanner() {
  return (
    <div className="w-full py-8 bg-[var(--accent)]/5 border-y border-[var(--accent)]/10 overflow-hidden relative flex">
      {/* Edge Fades for smoothness */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap w-max items-center"
      >
        <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
          {stats.map((s, i) => (
            <div key={`s1-${i}`} className="flex items-center gap-3 cursor-default select-none hover:scale-105 transition-transform duration-300">
              <span className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-black text-[var(--accent)] drop-shadow-xl">{s.value}</span>
              <span className="text-white/60 text-lg md:text-xl font-medium tracking-wide uppercase mt-1">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
          {stats.map((s, i) => (
            <div key={`s2-${i}`} className="flex items-center gap-3 cursor-default select-none hover:scale-105 transition-transform duration-300">
              <span className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-black text-[var(--accent)] drop-shadow-xl">{s.value}</span>
              <span className="text-white/60 text-lg md:text-xl font-medium tracking-wide uppercase mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
