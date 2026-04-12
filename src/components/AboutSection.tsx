'use client';

import { motion } from 'framer-motion';

const BADGES = [
  'Certified Meta Partner',
  '5+ Years Experience',
  '95% Client Retention',
  'Global Reach'
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm">About the Expert</span>
            <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-light mt-4 mb-8">
              Turning Ad Spend into <em className="not-italic font-bold text-[var(--accent)]">Scalable Profit</em>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              With over half a decade in the trenches of Meta Ads, I've seen the platforms evolve from simple button-pushing to the complex, AI-driven ecosystems they are today. My philosophy is simple: 
              <span className="text-white font-medium"> Creative is the new targeting.</span>
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              I don't just manage budgets; I build growth engines. By combining behavioral psychology with rigorous data testing, I help brands find their "winning" creative velocity and scale profitably.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 glass px-4 py-2 rounded-full border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/80 text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Vision/Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[var(--accent)]/10 blur-[80px] rounded-full" />
            <div className="glass p-10 rounded-[40px] border-white/10 relative z-10">
              <div className="mb-8">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-white mb-2">The Methodology</h3>
                <div className="h-1 w-20 bg-[var(--accent)] rounded-full" />
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-[var(--accent)] font-bold">01</div>
                  <p className="text-white/70 italic text-sm">"Algorithm-first approach using Advantage+ and broad targeting to let Meta's AI find your winners."</p>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--accent)] font-bold">02</div>
                  <p className="text-white/70 italic text-sm">"Creative velocity testing ensuring your message never goes stale and CPA stays low."</p>
                </li>
                <li className="flex gap-4">
                  <div className="text-[var(--accent)] font-bold">03</div>
                  <p className="text-white/70 italic text-sm">"Full-funnel optimization, because even the best ads can't save a landing page that doesn't convert."</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
