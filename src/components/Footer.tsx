import { ChevronUp, Link2 } from 'lucide-react';
import logo from '@/assets/logo-header.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img src={logo} alt="Rusty Chains Logo" className="h-12 w-12 mr-3" />
            <span className="font-grunge text-2xl text-rust-primary">Rusty Chains</span>
          </div>
          
          <blockquote className="text-xl md:text-2xl font-heavy italic text-foreground/90 mb-6 max-w-2xl mx-auto">
            "Correntes que aprisionam, som que liberta."
          </blockquote>
          
          <div className="flex items-center justify-center mb-8">
            <Link2 className="text-rust-primary mr-2" size={20} />
            <span className="text-muted-foreground">Grunge brasileiro pesado e visceral, direto de Uberlândia para o mundo.</span>
            <Link2 className="text-rust-primary ml-2" size={20} />
          </div>
        </div>

        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Rusty Chains. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                Formada em Uberlândia-MG • Brasil
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="mailto:rustychainsrock@gmail.com"
                className="text-sm text-muted-foreground hover:text-rust-primary transition-colors"
              >
                rustychainsrock@gmail.com
              </a>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-secondary/50 hover:bg-rust-primary/20 rounded-full transition-colors group"
                aria-label="Voltar ao topo"
              >
                <ChevronUp className="text-rust-primary group-hover:text-rust-primary" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Desenvolvido com{' '}
            <span className="text-rust-primary">♠</span>
            {' '}para a cena grunge brasileira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;