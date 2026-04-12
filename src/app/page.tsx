import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import PremiumClientsSection from '@/components/PremiumClientsSection';
import ServicesSection from '@/components/ServicesSection';
import ClientBanner from '@/components/ClientBanner';
import TestimonialSection from '@/components/TestimonialSection';
import StatsBanner from '@/components/StatsBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-dark)]">
      <ParticleCanvas />
      <Navbar />
      <HeroSection />
      <StatsBanner />
      <AchievementsSection />
      <AboutSection />
      <PremiumClientsSection />
      <ClientBanner />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
