import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossas Receitas de Sabor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Temos muito orgulho em ser conhecidos por preparar refeições deliciosas e ficamos felizes em 
            compartilhar com você algumas de nossas receitas especiais. Conheça o nosso tempero!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Garantindo a Satisfação de Nossos Clientes
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ingredientes Frescos</h4>
                  <p className="text-muted-foreground">
                    Utilizamos apenas ingredientes frescos e de alta qualidade em todas as nossas preparações.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Equipe Qualificada</h4>
                  <p className="text-muted-foreground">
                    Nossa equipe de chefs altamente qualificados está sempre desenvolvendo novas opções para satisfazer todos os paladares.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Gestão Eficiente</h4>
                  <p className="text-muted-foreground">
                    Consideramos uma gestão eficiente e máxima satisfação dos funcionários como base do nosso sucesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="gradient-secondary rounded-2xl p-8 shadow-elegant hover-scale transition-smooth">
              <div className="text-6xl text-primary mb-4">"</div>
              <blockquote className="text-lg italic text-foreground mb-6">
                A CRS Alimentos nos fornece refeições de qualidade, e preza pelos seus compromissos e certificados no 
                prazo, garantindo a satisfação dos nossos colaboradores.
              </blockquote>
              <cite className="text-sm font-semibold text-primary">
                Julieny Carvalho de Brito<br />
                <span className="text-muted-foreground font-normal">
                  Supervisora de Remuneração & Benefícios - Hidracor
                </span>
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;