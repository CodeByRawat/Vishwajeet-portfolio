'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    company: "Elevate Real Estate",
    content: "Working with Vishwajeet completely transformed our lead generation pipeline. The 4.6x ROAS wasn't just an empty promise, it was confidently delivered within the first quarter."
  },
  {
    company: "Luxe Interiors",
    content: "His data-driven approach to Meta Ads scaling is absolutely phenomenal. We broke through our previous revenue ceilings while actually lowering our overall CPA by 30%."
  },
  {
    company: "GlobalTech Solutions",
    content: "If you want an expert who treats your ad spend like their own money, this is the team. Their strategic mastery in penetrating international markets is unmatched."
  },
  {
    company: "City Dental Clinics",
    content: "By far the most transparent and effective media buyer we've contracted. They heavily scaled our qualified booking volume by 3x within two months of taking over the accounts."
  },
  {
    company: "Pancharatna Properties",
    content: "Vishwajeet’s grasp on international premium real estate audiences is incredible. Direct high-intent leads and deposits started flowing in within the very first week."
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[var(--bg-dark)] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 border-none">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm"
          >
            Client Success Stories
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-light text-white mt-4"
          >
            Don't Just Take <em className="not-italic font-bold">My Word For It</em>
          </motion.h2>
        </div>
      </div>

      {/* Auto Playing Carousel */}
      <div className="relative flex overflow-hidden py-4 w-full">
        {/* Edge masks for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-stretch cursor-default hover:[animation-play-state:paused]"
        >
           {/* Duplicate the array twice for seamless loop */}
           {[...Array(2)].map((_, groupIndex) => (
             <div key={groupIndex} className="flex gap-8 pr-8 items-stretch">
                {testimonials.map((test, i) => (
                  <div
                    key={i}
                    className="glass w-[320px] md:w-[400px] p-8 rounded-3xl border border-white/5 relative group hover:border-[var(--accent)]/50 transition-all shadow-2xl flex flex-col whitespace-normal"
                  >
                    <div className="absolute -top-4 right-8 text-[var(--accent)] text-8xl opacity-10 font-serif leading-none select-none">"</div>
                    <p className="text-white/80 leading-relaxed pt-2 mb-8 flex-grow text-lg italic font-light relative z-10">
                      "{test.content}"
                    </p>
                    <div className="pt-6 border-t border-white/10 mt-auto relative z-10">
                      <div className="text-[var(--accent)] font-bold text-xl tracking-wide">
                        {test.company}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
