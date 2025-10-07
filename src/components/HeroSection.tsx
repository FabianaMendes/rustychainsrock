import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import mascot from '@/assets/mascot-real.png';
import logo from '@/assets/logo-real.png';
const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden grain-overlay parallax-container" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      
      {/* Mascot in background */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 parallax-element" style={{
      backgroundImage: `url(${mascot})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat'
    }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <img src={logo} alt="Rusty Chains Logo" className="h-32 w-32 mx-auto mb-8 animate-text-glow" />
          
          <h1 className="font-grunge text-6xl md:text-8xl mb-6 text-rust leading-none">
            Rusty Chains
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-heavy text-foreground/90 max-w-2xl mx-auto leading-relaxed">GRUNGE</p>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-xl mx-auto">Formada em Uberlândia-MG no final de 2024, revivendo a atmosfera densa do GRUNGRdos anos 90</p>

          <a href="https://wa.me/5534991510660?text=Olá! Gostaria de contratar a Rusty Chains para um evento." target="_blank" rel="noopener noreferrer" className="btn-hero inline-block mb-16">
            Contratar Agora
          </a>
        </div>

        {/* Scroll indicator */}
        <button onClick={scrollToAbout} className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2" aria-label="Scroll to about section">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>;
};
export default HeroSection;