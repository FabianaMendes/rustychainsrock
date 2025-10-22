import { Download, FileText, Calendar } from 'lucide-react';
const MediaKitSection = () => {
  return <section id="media-kit" className="section-grunge">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-grunge text-4xl md:text-5xl mb-8 text-rust-primary">
            Media Kit
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tudo que você precisa saber sobre a Rusty Chains em um só lugar. 
            Material completo para imprensa, produtores e organizadores de eventos.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-grunge">
              <div className="flex items-center mb-4">
                <FileText className="text-rust-primary mr-3" size={32} />
                <h3 className="font-grunge text-xl text-foreground">Apresentação Oficial</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Press kit completo com biografia, fotos profissionais, repertório e informações técnicas.
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <span>Formato: PDF</span>
                <span>Tamanho: ~2.7MB</span>
                <span>Atualizado: Dez 2024</span>
              </div>
              
              <a href="/media/Media_Kit_Rusty_Chains_20251012.pdf" download="Media_Kit_Rusty_Chains_20251012.pdf" className="btn-hero w-full flex items-center justify-center">
                <Download className="mr-2" size={20} />
                Download Media Kit
              </a>
            </div>

            <div className="card-grunge">
              <div className="flex items-center mb-4">
                <Calendar className="text-rust-primary mr-3" size={32} />
                <h3 className="font-grunge text-xl text-foreground">Booking Info</h3>
              </div>
              
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-heavy text-foreground mb-1">Região de Atuação</h4>
                  <p className="text-muted-foreground">Minas Gerais e todo o Brasil</p>
                </div>
                
                <div>
                  <h4 className="font-heavy text-foreground mb-1">Tipos de Evento</h4>
                  <p className="text-muted-foreground">Shows, festivais, casas noturnas, eventos corporativos</p>
                </div>
                
                <div>
                  <h4 className="font-heavy text-foreground mb-1">Duração do Set</h4>
                  <p className="text-muted-foreground">2 horas (flexível)</p>
                </div>
              </div>
              
              <a href="https://wa.me/5534999999999?text=Olá! Gostaria de informações sobre booking da Rusty Chains." target="_blank" rel="noopener noreferrer" className="btn-hero w-full mt-6 inline-block text-center">
                Solicitar Orçamento
              </a>
            </div>
          </div>

          <div className="card-grunge">
            <h3 className="font-grunge text-2xl text-rust-primary mb-4">Rider Técnico</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-heavy text-foreground mb-2">Setup Básico</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 2 microfones vocais + pedestais</li>
                  <li>• Sistema de retorno (monitor)</li>
                  <li>• Mesa de som 16 canais mínimo</li>
                  <li>• Sistema PA adequado ao local</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heavy text-foreground mb-2">Instrumentos</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 2 amplificadores para guitarra</li>
                  <li>• 1 amplificador para baixo</li>
                  <li>• Bateria completa</li>
                  <li>• Cabos e acessórios básicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MediaKitSection;