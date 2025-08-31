import { Card, CardContent } from "@/components/ui/card";
import breakfastImage from "@/assets/breakfast.jpg";
import lunchImage from "@/assets/lunch.jpg";
import dinnerImage from "@/assets/dinner.jpg";
import coffeeImage from "@/assets/coffee-break.jpg";

const MenuSection = () => {
  const menuItems = [
    {
      title: "Café da Manhã",
      image: breakfastImage,
      description: "Opções nutritivas e saborosas para começar o dia com energia"
    },
    {
      title: "Almoço",
      image: lunchImage,
      description: "Pratos balanceados e completos para o meio do dia"
    },
    {
      title: "Lanche e...",
      image: dinnerImage,
      description: "Opções leves e saborosas para os intervalos"
    },
    {
      title: "Jantar e Ceias",
      image: dinnerImage,
      description: "Refeições completas e reconfortantes para o final do dia"
    },
    {
      title: "Coffee Break",
      image: coffeeImage,
      description: "Seleções especiais para eventos e reuniões corporativas"
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossas Receitas de Sabor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma grande variedade de pratos saborosos e nutritivos, preparados com ingredientes 
            frescos e de qualidade. Nossa equipe de chefs altamente qualificados está sempre desenvolvendo novas 
            opções para satisfazer todos os paladares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover-scale transition-smooth shadow-soft hover:shadow-elegant">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-dark opacity-40 group-hover:opacity-60 transition-smooth"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2 gradient-primary px-4 py-2 rounded-lg inline-block">
                    {item.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;