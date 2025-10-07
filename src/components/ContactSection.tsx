import { Instagram, Mail, MessageCircle, Youtube, MapPin } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="section-grunge">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-grunge text-4xl md:text-5xl mb-8 text-rust-primary">
            Contato & Social
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conecte-se conosco nas redes sociais e acompanhe toda nossa jornada. 
            Para bookings e parcerias, entre em contato diretamente.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="https://www.instagram.com/rustychainsrock" target="_blank" rel="noopener noreferrer" className="card-grunge hover:border-rust-primary/50 transition-all duration-300 group">
              <Instagram className="text-rust-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-grunge text-xl text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm">@rustychainsrock</p>
            </a>

            <div className="card-grunge hover:border-rust-primary/50 transition-all duration-300 group">
              <MessageCircle className="text-rust-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-grunge text-xl text-foreground mb-2">WhatsApp</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <a href="https://wa.me/5534991510660" target="_blank" rel="noopener noreferrer" className="block hover:text-rust-primary transition-colors">
                  Lucas: (34) 99151-0660
                </a>
                <a href="https://wa.me/5534988552660" target="_blank" rel="noopener noreferrer" className="block hover:text-rust-primary transition-colors">
                  Raphael: (34) 98855-2660
                </a>
                <a href="https://wa.me/5534991152568" target="_blank" rel="noopener noreferrer" className="block hover:text-rust-primary transition-colors">
                  Luciano: (34) 99115-2568
                </a>
                <a href="https://wa.me/5534988844224" target="_blank" rel="noopener noreferrer" className="block hover:text-rust-primary transition-colors">
                  Faby: (34) 98884-4224
                </a>
              </div>
            </div>

            <a href="mailto:rustychainsrock@gmail.com" className="card-grunge hover:border-rust-primary/50 transition-all duration-300 group">
              <Mail className="text-rust-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
              <h3 className="font-grunge text-xl text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">rustychainsrock@gmail.com</p>
            </a>

            <div className="card-grunge group cursor-default">
              <Youtube className="text-rust-primary mx-auto mb-4" size={48} />
              <h3 className="font-grunge text-xl text-foreground mb-2">YouTube</h3>
              <p className="text-muted-foreground text-sm">Em breve</p>
            </div>
          </div>

          <div className="card-grunge max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-rust-primary mr-3" size={24} />
              <h3 className="font-grunge text-xl text-foreground">Localização</h3>
            </div>
            
            <p className="text-muted-foreground mb-4">
              <span className="text-rust-primary font-heavy">Uberlândia-MG, Brasil</span>
            </p>
            
            
          </div>

          <div className="mt-12">
            <h3 className="font-grunge text-2xl text-rust-primary mb-6">Para Bookings</h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5534991510660?text=Olá! Gostaria de contratar a Rusty Chains para um evento." target="_blank" rel="noopener noreferrer" className="btn-hero">
                Contratar via WhatsApp
              </a>
              
              <a href="mailto:rustychainsrock@gmail.com?subject=Booking Rusty Chains" className="btn-hero bg-secondary hover:bg-secondary/80">
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;