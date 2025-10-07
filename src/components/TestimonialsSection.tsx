import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "O som mais pesado e verdadeiro que já vi ao vivo. Rusty Chains trouxe toda a energia do grunge clássico de volta.",
      author: "João Silva",
      role: "Produtor Musical, Uberlândia"
    },
    {
      text: "Finalmente uma banda que entende o espírito do grunge. Cada apresentação é uma experiência visceral única.",
      author: "Maria Santos",
      role: "Jornalista Musical"
    },
    {
      text: "Rusty Chains conseguiu capturar a essência dos anos 90 e trazer para os dias de hoje. Som autêntico e poderoso.",
      author: "Pedro Costa",
      role: "Organizador de Eventos"
    }
  ];

  return (
    <section className="section-grunge bg-metal-dark/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-grunge text-4xl md:text-5xl mb-16 text-center text-rust-primary">
            O que falam sobre nós
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-grunge relative">
                <Quote className="text-rust-primary mb-4 opacity-50" size={32} />
                
                <blockquote className="text-foreground/90 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-border/30 pt-4">
                  <cite className="not-italic">
                    <div className="font-heavy text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </cite>
                </div>
                
                {/* Decorative chain element */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-rust-primary rounded-full bg-background" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Quer adicionar seu depoimento? Entre em contato conosco!
            </p>
            <a
              href="mailto:rustychainsrock@gmail.com?subject=Depoimento sobre Rusty Chains"
              className="link-grunge text-rust-primary"
            >
              Enviar Depoimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;