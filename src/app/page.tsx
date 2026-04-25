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
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import Divider from '@/components/Divider';
import FloatingWidgets from '@/components/FloatingWidgets';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-dark)]">
      <ParticleCanvas />
      <Navbar />
      <HeroSection />
      <Divider />
      <StatsBanner />
      <Divider />
      <AchievementsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <PremiumClientsSection />
      <Divider />
      <ClientBanner />
      <Divider />
      <ServicesSection />
      <Divider />
      <TestimonialSection />
      <Divider />
      <FAQSection />
      <Divider />
      <ContactSection />
      <Divider />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}
