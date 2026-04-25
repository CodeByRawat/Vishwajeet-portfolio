'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(75,35,18,0.15), transparent)' }} />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-6">
              Book a Free Audit
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-5xl lg:text-6xl font-light leading-tight mb-6">
              Let&apos;s Scale Your{' '}
              <span className="font-bold italic text-[var(--accent)]">Revenue Together.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Book a free 30-minute Meta Ads audit. I&apos;ll review your account, find hidden
              waste, and show you exactly where your next growth lever is hiding — no strings attached.
            </p>

            {/* What you get */}
            <div className="space-y-4">
              {[
                'Full account structure review',
                'Audience & targeting analysis',
                'Creative performance teardown',
                'Your custom 90-day growth roadmap',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              action="https://formsubmit.co/your@email.com"
              method="POST"
              className="glass border border-white/10 rounded-3xl p-8 space-y-5"
            >
              <input type="hidden" name="_subject" value="New Meta Ads Audit Request from Portfolio" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@yourcompany.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Monthly Ad Budget</label>
                <select
                  name="budget"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
                >
                  <option value="" className="bg-black">Select budget range</option>
                  <option value="under_500" className="bg-black">Under $500/mo</option>
                  <option value="500_2k" className="bg-black">$500 – $2,000/mo</option>
                  <option value="2k_10k" className="bg-black">$2,000 – $10,000/mo</option>
                  <option value="10k_plus" className="bg-black">$10,000+/mo</option>
                </select>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Business / Niche</label>
                <input
                  type="text"
                  name="business"
                  placeholder="E.g. E-commerce Skincare Brand"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">Message (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell me about your current challenges..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[var(--accent)]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-black font-bold py-4 rounded-2xl hover:bg-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Book Free Audit →
              </button>

              <p className="text-white/20 text-xs text-center">
                No spam. No commitments. Just actionable insights delivered in 24hrs.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
