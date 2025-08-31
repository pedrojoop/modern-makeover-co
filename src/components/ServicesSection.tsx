import { Users, Utensils, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Consultoria Personalizada",
      description: "Nos reunimos com sua equipe para entender a realidade da sua empresa e compreender suas necessidades. Essa fase é muito importante para o planejamento.",
      number: "1"
    },
    {
      icon: <Utensils className="w-12 h-12 text-primary" />,
      title: "Cardápios Nutritivos",
      description: "Com base nisso, nossos nutricionistas preparam um cardápio de alimentação balanceada, saudável e com muito sabor. Ser delicioso não basta, nós seguimos um padrão rígido de qualidade.",
      number: "2"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Experiência Completa",
      description: "Apresentamos o cardápio preparado especialmente para você, definimos os últimos detalhes para atender sua expectativa da melhor forma possível, com intuito de melhorar a alimentação dos colaboradores.",
      number: "3"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Como Podemos Lhe Ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma grande variedade de pratos saborosos e nutritivos, preparados com ingredientes 
            frescos e de qualidade. Nossa equipe de chefs altamente qualificados está sempre desenvolvendo novas 
            opções para satisfazer todos os paladares.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover-scale transition-smooth shadow-soft hover:shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-smooth">
                  {service.number}
                </div>
                
                <div className="mb-6 flex justify-center">
                  <div className="p-4 gradient-primary rounded-2xl animate-pulse-glow">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="gradient-secondary rounded-2xl p-8 max-w-2xl mx-auto shadow-elegant">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Sabia que tudo isso pode custar bem menos que você imagina?
            </h3>
            <p className="text-lg text-accent-foreground">
              O nosso segredo é a eficiência. Fale conosco e entenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;