'use client';

import ScrollReveal from './ScrollReveal';

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
          <ScrollReveal direction="left" duration={0.8}>
            <span className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm">About the Expert</span>
            <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-light mt-4 mb-8">
              Performance-Driven. Results-Obsessed. <br/> <em className="not-italic font-bold text-[var(--accent)]">The Expert Behind the Growth!</em>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              I'm a <strong className="text-white font-medium">Meta Ads Performance Specialist</strong>. I've seen the platforms evolve from simple button-pushing to the complex, AI-driven ecosystems they are today. My philosophy is simple: <strong className="text-white font-medium">Creative is the new targeting</strong>—the bridge between raw data and measurable revenue.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              With years of experience navigating complex international markets, I help businesses scale through high-converting Meta Ads. My approach is rooted in performance, not guesswork. Whether it's high-stakes B2B lead generation or scaling premium D2C brands, I ensure every campaign is optimized for maximum ROI and sustainable scale.
            </p>
            <div className="flex flex-wrap gap-4">
              {BADGES.map((badge, i) => (
                <ScrollReveal key={badge} direction="up" delay={i * 0.08}>
                  <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="text-white/80 text-sm font-medium">{badge}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Lead Gen Form */}
          <ScrollReveal direction="right" delay={0.15} duration={0.8}>
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--accent)]/10 blur-[80px] rounded-full" />
              <div className="glass p-10 rounded-[40px] border-white/10 relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Stop guessing.<br/><span className="text-[var(--accent)]">Start scaling.</span></h3>
                  <div className="h-1 w-20 bg-[var(--accent)] rounded-full mt-4" />
                </div>
                <form action="#contact" className="space-y-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">What's your main objective?</label>
                    <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                      <option value="" disabled>Select an objective...</option>
                      <option value="High-Intent B2B Lead Generation">High-Intent B2B Lead Generation</option>
                      <option value="Scalable D2C Revenue Growth">Scalable D2C Revenue Growth</option>
                      <option value="B2C Customer Acquisition & Sales">B2C Customer Acquisition & Sales</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Choose your Industry</label>
                    <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                      <option value="" disabled>Select an industry...</option>
                      <option value="Architecture & Construction">Architecture & Construction</option>
                      <option value="Baby & Kids Products">Baby & Kids Products</option>
                      <option value="Beauty & Skincare">Beauty & Skincare</option>
                      <option value="Education & Coaching">Education & Coaching</option>
                      <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                      <option value="Events & Entertainment">Events & Entertainment</option>
                      <option value="Fashion & Apparel">Fashion & Apparel</option>
                      <option value="Food & Beverage Brands">Food & Beverage Brands</option>
                      <option value="Finance & Insurance">Finance & Insurance</option>
                      <option value="Fitness & Wellness">Fitness & Wellness</option>
                      <option value="Fragrance & Personal Care">Fragrance & Personal Care</option>
                      <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                      <option value="Home Decor & Furniture">Home Decor & Furniture</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Jewelry & Accessories">Jewelry & Accessories</option>
                      <option value="Logistics & Fleet Management">Logistics & Fleet Management</option>
                      <option value="Marketing & Agencies">Marketing & Agencies</option>
                      <option value="Pet Products">Pet Products</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="SaaS / Tech Services">SaaS / Tech Services</option>
                    </select>
                  </div>
                  <button type="submit" onClick={(e) => { e.preventDefault(); window.document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-[var(--accent)] text-black font-semibold py-4 rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_var(--accent)] hover:shadow-none mt-4">
                    Request a Strategy Call
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
