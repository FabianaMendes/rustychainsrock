import { Play, Youtube, ExternalLink } from 'lucide-react';

const VideosSection = () => {
  const videos = [
    {
      id: "fMxX_Lc2Y5M",
      title: "Killing in the Name - RATM (Cover)",
      description: "Nossa versão pesada do clássico do Rage Against The Machine",
      isShorts: true
    },
    {
      id: "KHPUieeaZAU", 
      title: "We Die Young - Alice in Chains (Cover)",
      description: "Cover do clássico que define nossa essência grunge",
      isShorts: true
    }
  ];

  return (
    <section className="section-grunge bg-background/50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-rust-primary/10 via-transparent to-rust-primary/5" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-grunge text-4xl md:text-5xl mb-16 text-center text-rust-primary">
            Assista Rusty Chains
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="card-grunge relative group overflow-hidden hover:scale-[1.02] transition-all duration-500">
                <div className="relative">
                  {/* Video Thumbnail with Custom Play Button */}
                  <div className="relative aspect-video bg-metal-dark/30 overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-500"
                      onError={(e) => {
                        // Fallback to standard quality thumbnail
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    
                    {/* Custom Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-background/20 group-hover:bg-background/10 transition-all duration-300">
                      <div className="w-20 h-20 bg-rust-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play size={32} className="text-background ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Shorts Badge */}
                    {video.isShorts && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        SHORTS
                      </div>
                    )}
                    
                    {/* Click to Play */}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 cursor-pointer"
                      aria-label={`Assistir ${video.title}`}
                    />
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-t from-background/95 to-background/90">
                  <h3 className="font-grunge text-xl text-foreground mb-3 group-hover:text-rust-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
                
                {/* Rust Chain decoration */}
                <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-rust-primary rounded-full bg-background flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-rust-primary rounded-full animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel Button */}
          <div className="text-center">
            <a
              href="https://www.youtube.com/@RustyChainsRock"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-3 group/btn relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rust-primary/20 to-rust-secondary/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
              <Youtube size={24} className="z-10 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="z-10">Visite nosso canal no YouTube</span>
              <ExternalLink size={18} className="z-10 opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
            
            <p className="text-muted-foreground text-sm mt-4 italic">
              "Descubra mais performances e conteúdo exclusivo"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;