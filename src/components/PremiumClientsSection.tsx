'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

const premiumClients = [
  { name: "Loan EG", location: "Canada", industry: "Real Estate & Mortgage Loan", logoText: "LEG", color: "from-[#4b2312] to-[#6b3318]", rating: "9.8" },
  { name: "SSD GPS", location: "Philippines", industry: "AI Logistics", logoText: "SSD", color: "from-[#3a1b0e] to-[#5c2a15]", rating: "9.6" },
  { name: "MADS Creations", location: "India", industry: "Luxury Interiors", logoText: "MADS", color: "from-[#6b3318] to-[#4b2312]", rating: "9.9" },
  { name: "Pancharatna", location: "Dubai", industry: "Real Estate", logoText: "PRE", color: "from-[#4b2312] to-[#2a1208]", rating: "9.5" },
  { name: "Interio Haven", location: "Dubai", industry: "Luxury Interiors", logoText: "IH", color: "from-[#5c2a15] to-[#3a1b0e]", rating: "9.7" },
  { name: "City Dental", location: "India", industry: "Healthcare", logoText: "CDC", color: "from-[#2a1208] to-[#4b2312]", rating: "9.4" },
  { name: "Scrap Yodha", location: "India", industry: "B2B Scrap Dealer", logoText: "SY", color: "from-[#4b2312] to-[#3a1b0e]", rating: "9.2" },
  { name: "Nikita Greentech", location: "India", industry: "Manufacturing", logoText: "NGR", color: "from-[#3a1b0e] to-[#6b3318]", rating: "9.3" },
  { name: "Bawri Banjari", location: "India", industry: "Jewellery Brand", logoText: "BB", color: "from-[#6b3318] to-[#2a1208]", rating: "9.6" },
  { name: "Shiv Shankar", location: "India", industry: "Wellness Brand", logoText: "SSA", color: "from-[#2a1208] to-[#5c2a15]", rating: "9.5" }
];

export default function PremiumClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % premiumClients.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + premiumClients.length) % premiumClients.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="results" className="py-24 relative overflow-hidden bg-[var(--bg-dark)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <span className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm">
              Portfolio Spotlight
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-light mt-4 mb-4">
              Premium Brands. <em className="not-italic font-bold text-white">Global Reach.</em><br />Proven Results.
            </h2>
          </ScrollReveal>
        </div>

        {/* 3D Stacked Carousel Container */}
        <div className="relative h-[650px] w-full max-w-[1000px] mx-auto flex items-center justify-center">
          
          {/* Navigation Controls Context */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-between z-40 lg:-mx-12">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10 shadow-2xl backdrop-blur-md z-40 text-white/50"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10 shadow-2xl backdrop-blur-md z-40 text-white/50"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Cards Area */}
          <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
            {premiumClients.map((client, index) => {
              const diff = (index - currentIndex + premiumClients.length) % premiumClients.length;
              
              let position = "hidden";
              if (diff === 0) position = "active";
              else if (diff === 1) position = "right";
              else if (diff === premiumClients.length - 1) position = "left";

              const variants = {
                active: { 
                  x: 0, 
                  y: 0, 
                  scale: 1.05, 
                  rotateZ: 0, 
                  rotateY: 0,
                  zIndex: 30, 
                  opacity: 1, 
                  filter: "brightness(1) blur(0px)",
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.9)"
                },
                right: { 
                  x: "70%", 
                  y: 20, 
                  scale: 0.85, 
                  rotateZ: 0, 
                  rotateY: 0,
                  zIndex: 20, 
                  opacity: 0.8, 
                  filter: "brightness(0.3) blur(2px)",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.7)"
                },
                left: { 
                  x: "-70%", 
                  y: 20, 
                  scale: 0.85, 
                  rotateZ: 0, 
                  rotateY: 0,
                  zIndex: 20, 
                  opacity: 0.8, 
                  filter: "brightness(0.3) blur(2px)",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.7)"
                },
                hidden: { 
                  x: 0, 
                  y: 40, 
                  scale: 0.6, 
                  rotateZ: 0, 
                  rotateY: 0,
                  zIndex: 0, 
                  opacity: 0, 
                  filter: "brightness(0) blur(8px)",
                  boxShadow: "none"
                }
              };

              return (
                <motion.div
                  key={client.name}
                  animate={position}
                  variants={variants}
                  transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                  className={`absolute w-full max-w-[340px] md:max-w-[380px] aspect-[10/13] rounded-[32px] overflow-hidden flex flex-col cursor-pointer transition-colors
                    ${position === 'active' ? 'cursor-default pointer-events-auto' : 'pointer-events-auto'}`}
                  onClick={() => {
                    if (position === "right") nextSlide();
                    if (position === "left") prevSlide();
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Poster Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-80`} />
                  <div className="absolute inset-0 bg-black/30" /> {/* Vignette */}

                  {/* Center Massive Text (Like a movie poster) */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center select-none z-0">
                    <h2 className="text-6xl md:text-7xl font-black tracking-widest text-white/90 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] opacity-80 mix-blend-overlay">
                      {client.logoText}
                    </h2>
                  </div>
                  
                  {/* Bottom Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-32 flex flex-col z-10 transition-opacity duration-300">
                    <h3 className="text-3xl font-bold text-white mb-1 shadow-black drop-shadow-md">
                      {client.name}
                    </h3>
                    
                    <p className="text-white/80 text-xs font-medium mb-3 flex items-center gap-2 drop-shadow-md">
                      <span>{client.industry}</span>
                    </p>
                    
                    <p className="text-white/60 text-[12px] leading-relaxed mb-6 line-clamp-2 min-h-[36px]">
                      A leading industry powerhouse in {client.industry}, operating smoothly out of {client.location} to deliver continuous growth.
                    </p>
                    
                    {/* Actions - Only visible on active but we keep them accessible and animated */}
                    <div className={`flex items-center gap-3 w-full transition-all duration-500 ${position === 'active' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <a href="#contact" className="flex-1 bg-white text-black font-bold py-3.5 rounded-full text-sm text-center hover:scale-[1.02] flex items-center justify-center active:scale-[0.98] transition-all shadow-xl">
                        Contact Me
                      </a>
                      <a href="#contact" className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all shadow-xl">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Component End */}
      </div>
    </section>
  );
}
