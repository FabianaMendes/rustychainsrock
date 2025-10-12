import mascot from '@/assets/mascot-real.png';
const AboutSection = () => {
  return <section id="about" className="section-grunge">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-grunge text-4xl md:text-5xl mb-8 text-rust-primary">
              Sobre a Banda
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Formada no final de 2024 em Uberlândia-MG, <span className="text-rust-primary font-heavy">Rusty Chains</span> revive 
                a atmosfera densa e visceral do grunge dos anos 90. Inspirada por Alice in Chains, 
                Audioslave, Stone Temple Pilots, Soundgarden e outros ícones, apresenta um repertório 
                marcante, com a energia crua que define o rock alternativo dessa era.
              </p>
              
              <p className="text-muted-foreground">Cada música com a autenticidade que o grunge sempre representou.</p>
              
              <p className="text-foreground/90">
                Do underground de Uberlândia para os palcos do Brasil, <span className="text-rust-primary font-heavy">Rusty Chains </span> 
                promete entregar uma experiência sonora intensa e verdadeira para todos os amantes 
                do rock alternativo.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="card-grunge">
              <img src={mascot} alt="Rusty Chains Mascot" className="w-full h-auto rounded-sm filter grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-sm" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-muted-foreground italic">
                  "Correntes que aprisionam, som que liberta"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;