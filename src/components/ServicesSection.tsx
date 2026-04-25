'use client';

import ScrollReveal from './ScrollReveal';

const services = [
  {
    number: '01',
    title: 'Creative-Led Targeting',
    description: "Moving beyond manual segments and building creative assets that act as the targeting mechanism, leveraging Meta's AI to identify and capture high-intent audiences automatically.",
    icon: '🎯',
    color: 'from-[#4b2312]/50 to-[#c45a28]/10'
  },
  {
    number: '02',
    title: 'Data-Driven Velocity',
    description: 'Eliminating guesswork with rigorous testing frameworks and identifying winning variables early to scale budget into proven performers with surgical precision.',
    icon: '📈',
    color: 'from-[#c45a28]/15 to-[#4b2312]/40'
  },
  {
    number: '03',
    title: 'Behavioral Creative Strategy',
    description: 'Visuals that demand attention merge behavioral psychology with performance data to engineer creatives that lower CPAs and increase brand resonance.',
    icon: '🎨',
    color: 'from-[#4b2312]/60 to-[#c45a28]/8'
  },
  {
    number: '04',
    title: 'Full-Funnel Transparency',
    description: 'Beyond basic metrics, custom dashboards tracking the numbers that actually matter — CAC, LTV, & ROAS — ensuring every dollar spent is an investment in growth.',
    icon: '📊',
    color: 'from-[#c45a28]/12 to-[#4b2312]/50'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <span className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm">
              Expertise
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold mt-4">
              Strategic Core
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="text-white/40 mt-3 text-lg font-light">
              Built for Scalable Performance
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={index * 0.12}>
              <div className="glass p-8 rounded-3xl group hover:border-[var(--accent)]/30 transition-all duration-500 h-full">
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm italic">
                  &ldquo;{service.description}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
