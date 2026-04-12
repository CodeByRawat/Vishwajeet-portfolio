'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Precision Targeting',
    description: 'Custom audience architectures built around your funnel — from cold awareness to warm retargeting sequences that convert.',
    icon: '🎯',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Data-Driven Scaling',
    description: 'Replace guesswork with clean metrics. Systematic A/B testing and budget scaling that multiplies your best performers.',
    icon: '📈',
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    title: 'Creative Strategy',
    description: 'Ads that stop the scroll. I combine psychological triggers with data insights to build creatives that lower your CPA.',
    icon: '🎨',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Transparent Reporting',
    description: 'Custom dashboards tracking ROAS, CPL, CAC, and LTV — every metric that proves your investment is working.',
    icon: '📊',
    color: 'from-rose-500/20 to-pink-500/20'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[var(--bg-mid)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-light mt-4"
          >
            Built for <em className="not-italic font-bold text-white">Maximum Impact</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-[var(--accent)]/30 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
