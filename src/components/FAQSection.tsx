'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "What's the typical timeline to see results?",
    answer: "Our creative velocity testing usually identifies winning creatives within the first 14 days. From there, we start scaling, and most clients see a significant improvement in ROAS within the first 30 to 45 days."
  },
  {
    question: "Do you handle the ad creatives?",
    answer: "Yes. We believe 'creative is the new targeting'. We work with your team or use our own network of creators to build high-converting assets tailored for Meta's algorithm."
  },
  {
    question: "What ad spend levels do you manage?",
    answer: "We typically work with brands spending anywhere from $10k to $100k+ per month. We focus on scaling profitable spend, not just maintaining it."
  },
  {
    question: "How do we communicate during the campaign?",
    answer: "We set up a dedicated Slack/WhatsApp channel for real-time communication, along with bi-weekly strategy calls and a live reporting dashboard so you always know where your money is going."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <span className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm block">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-light mt-4">
              Common <span className="font-bold text-[var(--accent)]">Questions</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.08}>
              <div className="glass rounded-2xl border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <span className="text-[var(--accent)] text-2xl transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-white/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
