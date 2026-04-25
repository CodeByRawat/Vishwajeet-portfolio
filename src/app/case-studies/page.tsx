'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const caseStudies = [
  {
    id: 1,
    client: 'Pancharatna Properties',
    location: 'Dubai, UAE',
    industry: 'Real Estate',
    category: 'Real Estate',
    tagline: 'From Low-Quality Leads to High-Intent Investors in 60 Days',
    challenge:
      'Pancharatna was spending heavily on Meta Ads but attracting unqualified leads unable to afford premium Dubai properties. CPL was high and sales cycle was broken.',
    solution:
      'Built an NRI investor targeting architecture using interest stacking, lookalike audiences from past buyers, and a multi-stage lead qualification funnel with landing page A/B testing.',
    metrics: [
      { label: 'ROAS', value: '6.2x' },
      { label: 'Qualified Leads', value: '340+' },
      { label: 'CPA Reduction', value: '52%' },
      { label: 'Timeline', value: '60 Days' },
    ],
    color: 'from-[#4b2312]/60 to-[#1a0a04]/80',
    accentColor: '#fff500',
  },
  {
    id: 2,
    client: 'City Dental Clinics',
    location: 'India',
    industry: 'Healthcare',
    category: 'Healthcare',
    tagline: '3x Qualified Booking Volume in Under 2 Months',
    challenge:
      'City Dental had multiple clinic locations but inconsistent patient flow. Generic ads were generating curiosity clicks, not appointment bookings.',
    solution:
      'Deployed hyper-local geo-targeting per clinic, built a retargeting sequence for website visitors, and restructured lead forms to pre-qualify high-intent patients before they contacted the clinic.',
    metrics: [
      { label: 'Booking Volume', value: '3x' },
      { label: 'CPL Reduction', value: '40%' },
      { label: 'Clinics Scaled', value: '4' },
      { label: 'Timeline', value: '8 Weeks' },
    ],
    color: 'from-[#0a1a0a]/80 to-[#4b2312]/40',
    accentColor: '#fff500',
  },
  {
    id: 3,
    client: 'Interio Haven',
    location: 'Dubai, UAE',
    industry: 'Luxury Interiors',
    category: 'D2C & Luxury',
    tagline: '4.1x ROAS & 30% Lower CPA for a Premium Interior Studio',
    challenge:
      'Interio Haven offers high-ticket interior design services but was targeting broad audiences, resulting in low-quality inquiries and wasted budget on unqualified prospects.',
    solution:
      'Crafted a luxury creative strategy using cinematic project showcase videos, targeted UAE\'s affluent homeowner segment, and built a full-funnel from awareness to DM conversion.',
    metrics: [
      { label: 'ROAS', value: '4.1x' },
      { label: 'CPA Reduction', value: '30%' },
      { label: 'Project Inquiries', value: '85+' },
      { label: 'Timeline', value: '45 Days' },
    ],
    color: 'from-[#4b2312]/50 to-[#2a1208]/70',
    accentColor: '#fff500',
  },
  {
    id: 4,
    client: 'Loan EG',
    location: 'Canada',
    industry: 'Financial Services',
    category: 'B2B Lead Gen',
    tagline: '500+ Mortgage Leads at 45% Lower CPL in the Canadian Market',
    challenge:
      'The Canadian mortgage market is highly competitive. Loan EG was struggling to differentiate and attract borrowers actively looking for refinancing and home loan solutions.',
    solution:
      'Built intent-based audience segments targeting life events (new home searches, refinancing intent), designed high-converting lead forms with pre-qualification questions, and ran multi-variant creative tests.',
    metrics: [
      { label: 'ROAS', value: '5.3x' },
      { label: 'Mortgage Leads', value: '500+' },
      { label: 'CPL Reduction', value: '45%' },
      { label: 'Timeline', value: '90 Days' },
    ],
    color: 'from-[#0d0d1a]/80 to-[#4b2312]/50',
    accentColor: '#fff500',
  },
  {
    id: 5,
    client: 'Bawri Banjari',
    location: 'India',
    industry: 'Jewellery',
    category: 'D2C & Luxury',
    tagline: '4.8x ROAS & 1,200+ Orders for an Emerging Jewellery Brand',
    challenge:
      'Bawri Banjari had beautiful products but poor visibility. Their catalogue ads were delivering low ROAS and the brand was struggling to scale beyond a small loyal customer base.',
    solution:
      'Switched to a creative-first strategy using UGC-style product videos, built structured retargeting sequences for add-to-cart abandoners, and tested Advantage+ Shopping Campaigns for broad scaling.',
    metrics: [
      { label: 'ROAS', value: '4.8x' },
      { label: 'Orders Generated', value: '1,200+' },
      { label: 'Revenue Growth', value: '3x' },
      { label: 'Timeline', value: '75 Days' },
    ],
    color: 'from-[#4b2312]/60 to-[#0a0a0a]/80',
    accentColor: '#fff500',
  },
  {
    id: 6,
    client: 'Shiv Shankar Ayurveda',
    location: 'India',
    industry: 'Wellness',
    category: 'D2C & Luxury',
    tagline: '5.1x ROAS & 35% CAC Reduction for an Ayurvedic Wellness Brand',
    challenge:
      'Shiv Shankar Ayurveda had strong word-of-mouth but was unable to scale paid acquisition profitably. Rising CPMs and creative fatigue were eating into margins.',
    solution:
      'Introduced rapid creative velocity testing — launching 15+ ad variations per week, identified 3 winning hooks, rebuilt the account structure around Broad + Advantage+ campaigns, and slashed creative fatigue.',
    metrics: [
      { label: 'ROAS', value: '5.1x' },
      { label: 'Monthly Orders', value: '800+' },
      { label: 'CAC Reduction', value: '35%' },
      { label: 'Timeline', value: '60 Days' },
    ],
    color: 'from-[#1a0f00]/80 to-[#4b2312]/50',
    accentColor: '#fff500',
  },
];

const categories = ['All', 'Real Estate', 'Healthcare', 'D2C & Luxury', 'B2B Lead Gen'];

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    active === 'All' ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Minimal Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-outfit)] font-bold text-lg text-white">
          <span className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-black text-sm font-black">V</span>
          Vishwajeet
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">
            ← Back to Home
          </Link>
          <Link
            href="/#contact"
            className="bg-[var(--accent)] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300"
          >
            Book Free Audit
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" style={{ background: 'rgba(75,35,18,0.4)' }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm"
          >
            Proven Results
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-outfit)] text-5xl lg:text-7xl font-light mt-4 mb-6 leading-tight"
          >
            Case <span className="font-bold text-[var(--accent)]">Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Real campaigns. Real numbers. See exactly how we've helped businesses across industries
            scale revenue and generate high-quality leads through Meta Ads.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === cat
                  ? 'bg-[var(--accent)] text-black border-[var(--accent)]'
                  : 'bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs, index) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative rounded-3xl overflow-hidden border border-white/8 group cursor-pointer"
                onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
              >
                {/* Card gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cs.color}`} />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 p-8">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase">{cs.industry}</span>
                      <h2 className="text-2xl font-bold text-white mt-1">{cs.client}</h2>
                      <p className="text-white/40 text-sm mt-1 flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {cs.location}
                      </p>
                    </div>
                    <span className={`text-white/40 text-xl transition-transform duration-300 ${expanded === cs.id ? 'rotate-45' : ''}`}>+</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{cs.tagline}"</p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-black/40 rounded-2xl p-3 text-center border border-white/5">
                        <div className="text-[var(--accent)] font-black text-lg leading-none">{m.value}</div>
                        <div className="text-white/40 text-[10px] mt-1 uppercase tracking-wide leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === cs.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 pt-6 space-y-5">
                          <div>
                            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">The Challenge</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{cs.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Our Approach</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{cs.solution}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-white/30 text-xs">{expanded === cs.id ? 'Click to collapse' : 'Click to read full study'}</span>
                    <Link
                      href="/#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[var(--accent)] text-sm font-semibold hover:underline"
                    >
                      Get Similar Results →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/15 via-[#4b2312]/30 to-[var(--accent)]/10" />
            <div className="absolute inset-0 border border-[var(--accent)]/20 rounded-3xl" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-light mb-4">
                Want Results Like These<br />
                <span className="font-bold text-[var(--accent)]">for Your Business?</span>
              </h2>
              <p className="text-white/40 mb-8 max-w-xl mx-auto">
                Book a free 30-minute Meta Ads strategy audit. I'll review your account and show you exactly where your next growth lever is.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Book a Free Strategy Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
