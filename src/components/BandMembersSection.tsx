import { Guitar, Mic, Music, Users } from 'lucide-react';
import bandPhoto from '@/assets/band-photo.png';

const BandMembersSection = () => {
  const members = [{
    name: "Lucas Botelho",
    role: "Vocalista",
    icon: <Mic className="text-rust-primary" size={32} />,
    description: "Com mais de 10 anos de experiência em shows ao vivo, conhecido por sua energia no palco.",
    highlight: "A voz que dá vida às correntes da Rusty Chains",
    position: "left-[33%] top-[13%]",
    tooltipPosition: "-translate-x-1/2"
  }, {
    name: "Raphael Danneman", 
    role: "Guitarrista",
    icon: <Guitar className="text-rust-primary" size={32} />,
    description: "12 anos de experiência na guitarra. Influências: Alice in Chains, Tool e Black Sabbath.",
    highlight: "O som pesado que define nossa identidade",
    position: "left-[12%] top-[20%]",
    tooltipPosition: "-translate-x-1/4"
  }, {
    name: "Fabiana Mendes",
    role: "Baterista", 
    icon: <Music className="text-rust-primary" size={32} />,
    description: "Vive seu momento mais intenso de dedicação ao instrumento. Influências do metal ao progressivo.",
    highlight: "Nunca é tarde para seguir o que faz a alma vibrar",
    position: "right-[42%] top-[18%]",
    tooltipPosition: "-translate-x-1/2"
  }, {
    name: "Luciano",
    role: "Baixista",
    icon: <Users className="text-rust-primary" size={32} />,
    description: "6 anos de experiência. Base sólida que mistura peso e groove, do nu metal ao stoner.",
    highlight: "Técnica, improviso e sonoridade crua",
    position: "right-[20%] top-[12%]",
    tooltipPosition: "-translate-x-2/3"
  }];

  return <section className="section-grunge bg-metal-dark/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-grunge text-4xl md:text-5xl mb-16 text-center text-rust-primary">
            A Corrente
          </h2>
          
          {/* Interactive Band Photo */}
          <div className="relative mb-16 group">
            <div className="card-grunge overflow-visible">
              <img 
                src={bandPhoto} 
                alt="Rusty Chains Band Members" 
                className="w-full h-auto filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Interactive Member Overlays */}
              {members.map((member, index) => (
                <div
                  key={index}
                  className={`absolute ${member.position} group/member`}
                >
                  <div className="relative group/member">
                    <div className="w-4 h-4 bg-rust-primary rounded-full animate-pulse cursor-pointer hover:scale-140 transition-transform duration-300"/>
                    {/* Tooltip */}
                    <div className={`absolute bottom-6 ${member.tooltipPosition} left-1/2 transform hidden group-hover/member:block transition-opacity duration-300 z-10`}>
                      <div className="bg-background/95 border border-rust-primary/30 rounded-lg p-3 min-w-64 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          {member.icon}
                          <div>
                            <h4 className="font-grunge text-lg text-rust-primary">{member.name}</h4>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground/90 mb-2">{member.description}</p>
                        <p className="text-xs text-rust-primary/80 italic">"{member.highlight}"</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-sm pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-muted-foreground italic text-center">
                "Passe o mouse sobre os pontos para conhecer cada integrante"
              </p>
            </div>
          </div>

          {/* Member Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
            {members.map((member, index) => (
              <div key={index} className="card-grunge relative group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 p-4 bg-rust-primary/10 rounded-full group-hover:bg-rust-primary/20 transition-colors duration-300">
                    {member.icon}
                  </div>
                  
                  <h3 className="font-grunge text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-rust-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <p className="text-xs text-rust-primary/70 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4">
                    "{member.highlight}"
                  </p>
                </div>
                
                {/* Chain decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-rust-primary rounded-full bg-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-rust-primary rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default BandMembersSection;