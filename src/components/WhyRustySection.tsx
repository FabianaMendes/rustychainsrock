import { Link2 } from 'lucide-react';

const WhyRustySection = () => {
  return (
    <section id="why-rusty" className="section-grunge bg-metal-dark/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Link2 className="text-rust-primary mr-4" size={48} />
            <h2 className="font-grunge text-4xl md:text-5xl text-rust-primary">
              Por que "Rusty Chains"?
            </h2>
            <Link2 className="text-rust-primary ml-4" size={48} />
          </div>
          
          <div className="card-grunge max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-6">
              O nome <span className="text-rust-primary font-heavy">"Rusty Chains"</span> homenageia 
              diretamente o som sujo de <span className="italic">"Rusty Cage"</span> e o visual 
              icônico de <span className="text-rust-primary font-heavy">Alice in Chains</span>.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-rust-primary to-transparent mb-6" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As correntes simbolizam <span className="text-foreground font-heavy">prisão</span>, 
              <span className="text-foreground font-heavy"> peso</span> e 
              <span className="text-rust-primary font-heavy"> libertação</span> — o espírito do grunge 
              em forma de imagem e som. Cada apresentação é um ato de quebrar essas correntes, 
              liberando toda a energia represada do rock alternativo dos anos 90.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="card-grunge text-center">
              <h3 className="font-grunge text-xl text-rust-primary mb-3">Prisão</h3>
              <p className="text-muted-foreground">As amarras do cotidiano que nos prendem</p>
            </div>
            
            <div className="card-grunge text-center">
              <h3 className="font-grunge text-xl text-rust-primary mb-3">Peso</h3>
              <p className="text-muted-foreground">A densidade sonora que nos define</p>
            </div>
            
            <div className="card-grunge text-center">
              <h3 className="font-grunge text-xl text-rust-primary mb-3">Libertação</h3>
              <p className="text-muted-foreground">A música como forma de escape</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRustySection;