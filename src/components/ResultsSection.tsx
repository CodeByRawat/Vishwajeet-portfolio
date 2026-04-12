'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const results = [
  { spend: '$18,200', revenue: '$112,400', roas: '6.2x', niche: 'E-Commerce Fashion', months: '3 months', growth: '+480%' },
  { spend: '$42,500', revenue: '$318,750', roas: '7.5x', niche: 'Skincare Brand', months: '4 months', growth: '+615%' },
  { spend: '$8,950', revenue: '$49,200', roas: '5.5x', niche: 'Digital Courses', months: '2 months', growth: '+290%' },
  { spend: '$31,000', revenue: '$186,000', roas: '6.0x', niche: 'Real Estate Leads', months: '5 months', growth: '+372%' },
];

export default function ResultsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results" className="py-32 relative overflow-hidden" ref={ref}>
      {/* BG Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Proof of Results
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-5xl lg:text-6xl font-light leading-tight mb-6">
            Real Numbers.{' '}
            <span className="font-bold italic text-[var(--accent)]">Real Growth.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every number below is from a real client campaign. No projections. No fluff.
          </p>
        </motion.div>

        {/* Results Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-8 border border-white/8 hover:border-[var(--accent)]/20 transition-colors"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-white/40 text-sm mb-1">{r.niche}</p>
                  <p className="text-white/30 text-xs">{r.months} campaign</p>
                </div>
                <span className="bg-green-500/10 text-green-400 text-sm font-semibold px-3 py-1 rounded-full border border-green-500/20">
                  {r.growth} revenue
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <p className="text-white/40 text-xs mb-2 uppercase tracking-wide">Ad Spend</p>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-red-400">{r.spend}</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-green-500/5 border border-green-500/10">
                  <p className="text-white/40 text-xs mb-2 uppercase tracking-wide">Revenue</p>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-green-400">{r.revenue}</p>
                </div>
                <div className="text-center p-4 rounded-2xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
                  <p className="text-white/40 text-xs mb-2 uppercase tracking-wide">ROAS</p>
                  <p className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--accent)]">{r.roas}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-white/30 mb-2">
                  <span>Spend → Revenue ratio</span>
                  <span>{r.roas} return</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${Math.min(parseFloat(r.roas) * 12, 100)}%` } : {}}
                    transition={{ delay: i * 0.12 + 0.4, duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[var(--accent)] to-green-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
