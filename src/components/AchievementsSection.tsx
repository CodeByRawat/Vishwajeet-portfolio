'use client';

import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Leads Generated",
    value: "10,000+",
    description: "Generated in 90 days for a single client",
    icon: "🔥"
  },
  {
    title: "ROAS achieved",
    value: "4.6x",
    description: "Consistent return within 90 days",
    icon: "🚀"
  },
  {
    title: "International ROI",
    value: "Scalable",
    description: "Proven results for global brands",
    icon: "🌍"
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-[var(--bg-mid)] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-[family-name:var(--font-outfit)] text-5xl font-black text-white mb-2">
                {item.value}
              </div>
              <div className="text-[var(--accent)] font-bold tracking-widest uppercase text-xs mb-3">
                {item.title}
              </div>
              <p className="text-white/40 text-sm max-w-[200px] mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
