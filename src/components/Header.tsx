import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-heavy' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Rusty Chains Logo" className="h-10 w-10" />
          <span className="font-grunge text-xl text-rust-primary">Rusty Chains</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="link-grunge text-sm"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('why-rusty')}
            className="link-grunge text-sm"
          >
            Por que Rusty?
          </button>
          <button 
            onClick={() => scrollToSection('media-kit')}
            className="link-grunge text-sm"
          >
            Media Kit
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="link-grunge text-sm"
          >
            Contato
          </button>
        </nav>

        <a
          href="https://wa.me/5534999999999?text=Olá! Gostaria de contratar a Rusty Chains para um evento."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero text-sm px-6 py-2"
        >
          Contratar
        </a>
      </div>
    </header>
  );
};

export default Header;