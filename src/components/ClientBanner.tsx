'use client';

import { motion } from 'framer-motion';

const allClients = [
  "Loan EG", "SSD GPS", "Nikita Greentech Recycling", "Cheer Spark", "Happinzo",
  "Quirky Flooring", "World Art Design", "Genius Cables", "Amalvees", "Wedding Shutters",
  "Sang Sur", "Apni Chatt", "IG Lite Global", "Plivana", "Bawri Banjari",
  "Shiv Shankar Ayurveda", "MyFinvision", "Book Online Trip", "Alpiene Thrills",
  "Travel In Go Pedia", "Astro Guide Academy", "Blush n Brush Makeover",
  "Govind Collection", "Ritu Yogic Therapy Centre", "Brands at Home",
  "The Expert Hair", "Ally's Textile"
];

export default function ClientBanner() {
  return (
    <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
          Trusted by Emerging & Established Brands Everywhere
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap w-max items-center"
        >
          <div className="flex items-center gap-16 pr-16">
            {allClients.map((client, i) => (
              <span key={`first-${i}`} className="text-white/20 text-xl font-[family-name:var(--font-outfit)] font-semibold hover:text-[var(--accent)]/50 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-16 pr-16">
            {allClients.map((client, i) => (
              <span key={`second-${i}`} className="text-white/20 text-xl font-[family-name:var(--font-outfit)] font-semibold hover:text-[var(--accent)]/50 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

