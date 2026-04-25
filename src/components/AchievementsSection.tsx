'use client';

import ScrollReveal from './ScrollReveal';

const achievements = [
  { title: "Clients Globally",    value: "50+",      description: "Trusted worldwide",                  icon: "🌍" },
  { title: "Ad Spend Managed",    value: "$2M+",     description: "Scaling profitable campaigns",       icon: "💰" },
  { title: "Qualified Leads",     value: "50,000+",  description: "High-intent prospects generated",    icon: "🎯" },
  { title: "Orders Generated",    value: "2,000+",   description: "Driven through Meta Ads",            icon: "📦" },
  { title: "Retention Rate",      value: "95%",      description: "Long-term client success",           icon: "🤝" },
];

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.title} direction="up" delay={index * 0.1} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-black text-white mb-2">
                {item.value}
              </div>
              <div className="text-[var(--accent)] font-bold tracking-widest uppercase text-xs mb-3">
                {item.title}
              </div>
              <p className="text-white/40 text-sm max-w-[200px] mx-auto">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
