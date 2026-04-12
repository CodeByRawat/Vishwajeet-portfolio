'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  'Quick Links': ['Home', 'About', 'Services', 'Results', 'Testimonials', 'Contact'],
  'Social Media': ['Instagram', 'LinkedIn', 'YouTube', 'Facebook', 'Twitter / X'],
  'Free Resources': ['Ad Scaling Toolkit', 'ROAS Calculator', 'Ad Copy Library', 'Account Audit Guide', 'Free Webinar'],
  'Explore More': ['FAQs', 'Success Hub', 'Tools & Calculators', 'Partner with Me', 'Privacy Policy'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[var(--bg-dark)] pt-20 pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

      <div className="container mx-auto px-6">
        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-20 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-purple-900/20 to-[var(--accent)]/10" />
          <div className="absolute inset-0 border border-[var(--accent)]/20 rounded-3xl" />
          <div className="relative z-10">
            <h3 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-light mb-4">
              Not Ready for a Call Yet? Start with<br />
              <span className="font-bold italic text-[var(--accent)]">This Free Audit Guide.</span>
            </h3>
            <p className="text-white/40 mb-8">Get my proven 5-Step Account Audit Template & Start Finding Hidden Revenue Today</p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-black/60 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-black hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              Download the Free Guide →
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 font-[family-name:var(--font-outfit)] font-bold text-xl text-white mb-4">
              <span className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-black font-black">V</span>
              Vishwajeet
            </a>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Meta Ads Expert helping brands scale revenue predictably through data-driven advertising.
            </p>
            <div className="flex gap-3">
              {['f', 'in', 'yt', 'x'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 border border-white/5 transition-colors text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-[family-name:var(--font-outfit)] font-semibold text-white mb-5">{col}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/30 hover:text-[var(--accent)] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">©copyright 2026 Vishwajeet. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-white/20 hover:text-white/50 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
