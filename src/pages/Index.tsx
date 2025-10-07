import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyRustySection from '@/components/WhyRustySection';
import BandMembersSection from '@/components/BandMembersSection';
import VideosSection from '@/components/VideosSection';
import MediaKitSection from '@/components/MediaKitSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyRustySection />
        <BandMembersSection />
        <VideosSection />
        <MediaKitSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;