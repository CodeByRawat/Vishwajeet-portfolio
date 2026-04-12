'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const metrics = ["ROAS 4.6x", "CTR 8.4%", "CPA -30%", "10k+ Leads"];

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [metricIndex, setMetricIndex] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);
    document.addEventListener('mouseleave', onMouseLeave);

    const interval = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 2500);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
      document.removeEventListener('mouseleave', onMouseLeave);
      clearInterval(interval);
    };
  }, [isVisible]);

  // Don't render cursor logic on mobile touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * {
          cursor: none !important;
        }
      `}} />
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
        animate={{
          x: mousePosition.x - 24, // subtract half of w-12 (48px)
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.1
        }}
      >
        <motion.div 
           className="relative w-12 h-12 flex items-center justify-center mix-blend-difference drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]"
           animate={{ scale: isHovering ? 1.3 : 1, rotate: isHovering ? 45 : 0 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Subtle Pulse Center Dot */}
          <div className="absolute w-2.5 h-2.5 bg-[var(--accent)] rounded-full animate-ping opacity-60" />
          <div className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_var(--accent)]" />

          {/* Outer Concentric Ring */}
          <div className="absolute w-full h-full rounded-full border border-white/40" />
          
          {/* Inner Concentric Ring */}
          <div className="absolute w-6 h-6 rounded-full border border-white/20" />

          {/* Crosshairs - X & Y */}
          <div className="absolute w-full h-[1px] bg-white/50" />
          <div className="absolute h-full w-[1px] bg-white/50" />

          {/* Precision Targeting Corner brackets (Meta UI style) */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)]" />
        </motion.div>

        {/* Floating Metric Tag */}
        <motion.div 
          className="absolute top-8 left-8"
          animate={{ opacity: isHovering ? 0 : 1, y: isHovering ? 10 : 0 }}
        >
          <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[var(--accent)]/40 shadow-[0_8px_25px_rgba(0,0,0,0.8)] flex items-center justify-center min-w-[90px] h-[34px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={metricIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-bold text-[var(--accent)] tracking-widest whitespace-nowrap block drop-shadow-md"
              >
                {metrics[metricIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
