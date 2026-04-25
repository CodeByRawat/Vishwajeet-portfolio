'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden bg-black"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(75,35,18,0.45)' }}
      />

      <motion.div style={{ opacity }} className="relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 min-h-screen flex flex-col lg:flex-row lg:items-center">

          {/* Mobile image — above headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden flex justify-center pt-28 pb-2"
          >
            <div className="relative w-[240px] h-[310px]">
              <Image
                src="/new.png"
                alt="Vishwajeet Singh - Meta Ads Expert"
                fill
                className="object-contain object-bottom"
                priority
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
                style={{ background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.7) 40%, transparent 100%)' }}
              />
              {/* Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap"
                style={{
                  background: 'rgba(255,245,0,0.06)',
                  border: '1px solid rgba(255,245,0,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="text-[#fff500]/90 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Meta Ads Performance Specialist
                </span>
              </div>
            </div>
          </motion.div>

          {/* Left content */}
          <div className="flex-1 pb-16 lg:pb-0 lg:pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-outfit)] font-bold text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.07] mb-8"
            >
              <span className="text-white">Driving Scalable</span><br />
              <span style={{ color: '#fff500' }}>Growth through</span><br />
              <span style={{ color: '#fff500' }}>Performance-Driven</span><br />
              <span className="text-white">Meta Ads.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-[480px]"
            >
              Trusted by <span className="text-white/80 font-semibold">60+ Global Businesses</span> to Scale Conversions & High-Quality Lead Pipelines
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 font-[family-name:var(--font-outfit)] font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110 text-sm md:text-base"
                style={{ background: '#fff500', color: '#000' }}
              >
                Book a Free Strategy Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/case-studies"
                className="flex items-center gap-2 font-[family-name:var(--font-outfit)] font-semibold px-6 py-3.5 rounded-full border border-white/20 text-white/80 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                View Case Studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Desktop image — absolute bottom-right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center absolute right-10 bottom-0"
          >
            <div className="relative w-[560px] h-[720px]">
              <Image
                src="/new.png"
                alt="Vishwajeet Singh - Meta Ads Expert"
                fill
                className="object-contain object-bottom"
                priority
              />

              {/* Soft left/right edge vignette */}
              <div className="absolute inset-0 pointer-events-none z-10"
                style={{ background: 'radial-gradient(ellipse 90% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)' }}
              />

              {/* Primary bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-[48%] pointer-events-none z-20"
                style={{ background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.2) 70%, transparent 100%)' }}
              />

              {/* Warm ambient base glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[120px] pointer-events-none z-20"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(75,35,18,0.35) 0%, transparent 70%)' }}
              />

              {/* Label over image */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full whitespace-nowrap z-30"
                style={{
                  background: 'rgba(255,245,0,0.06)',
                  border: '1px solid rgba(255,245,0,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span className="w-px h-4 rounded-full" style={{ background: 'rgba(255,245,0,0.4)' }} />
                <span className="text-[#fff500]/90 text-[11px] font-semibold tracking-[0.2em] uppercase">
                  Meta Ads Performance Specialist
                </span>
                <span className="w-px h-4 rounded-full" style={{ background: 'rgba(255,245,0,0.4)' }} />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
