'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const BADGE_AVATARS = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-dark)]"
    >
      {/* Purple ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none glow-animate" />
      {/* Gold accent glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <motion.div style={{ y, opacity, scale }} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="text-sm text-white/70 font-medium">Meta Certified Ads Expert</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-outfit)] text-5xl lg:text-7xl font-light leading-[1.05] mb-6"
            >
              Driving Scalable{' '}
              <em className="not-italic font-bold text-[var(--accent)]">Growth</em>
              <br />
              <em className="not-italic font-bold italic text-[var(--accent)]">with Data-Driven</em>
              <br />
              <span className="text-white/90">Marketing Mastery.</span>
            </motion.h1>

            {/* Sub - Premium & Subtle Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mb-12 max-w-lg"
            >
              <div className="pl-6 border-l border-white/10 relative">
                {/* Elegant subtle accent marker on the line */}
                <div className="absolute top-2 -left-[2px] w-[3px] h-4 bg-[var(--accent)]/80 rounded-full shadow-[0_0_8px_var(--accent)]" />
                <p className="text-white/50 text-[16px] md:text-[17px] leading-[1.8] font-light tracking-wide">
                  We generated <strong className="text-white font-normal">10,000+ leads</strong> in just <strong className="text-white font-normal">90 days</strong> for one of our International clients, achieving a staggering <span className="text-[var(--accent)] font-medium">4.6x ROAS</span>.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group flex items-center gap-2 bg-[var(--accent)] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Get Free Ad Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-2 glass text-white font-medium px-8 py-4 rounded-full hover:border-white/30 transition-all duration-300"
              >
                How I can help you
              </a>
            </motion.div>

            {/* Removed internal stats row - shifted to external banner component */}
          </div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Rotating ring decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border border-[var(--accent)]/10 spin-slow" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/10 counter-spin" />
            </div>

            {/* Portrait */}
            <div className="relative w-[340px] h-[440px] float-animate">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-[var(--accent)]/20 to-transparent rounded-3xl blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-white/10">
                <Image
                  src="/vishwajeet.png"
                  alt="Vishwajeet Singh - Meta Ads Expert"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Mask gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 right-0 glass rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10"
            >
              <div className="flex -space-x-2">
                {BADGE_AVATARS.map((src, i) => (
                  <img key={i} src={src} alt="Client" className="w-8 h-8 rounded-full border-2 border-black" />
                ))}
              </div>
              <div>
                <div className="text-[var(--accent)] text-sm">★★★★★</div>
                <div className="text-white/60 text-xs">50+ Happy Clients</div>
              </div>
            </motion.div>

            {/* ROAS floating card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-12 -left-6 glass rounded-2xl px-5 py-3 border border-white/10"
            >
              <div className="text-xs text-white/50 mb-1">Avg. ROAS</div>
              <div className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--accent)]">4.6x</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-green-400 text-xs">↑ 280%</span>
                <span className="text-white/40 text-xs">vs industry</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
