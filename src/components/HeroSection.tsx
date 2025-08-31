import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional kitchen staff preparing meals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-60"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 gradient-primary rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-24 h-24 gradient-secondary rounded-full opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-pulse-glow">
          CRS Alimentos
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Nossos principais ingredientes são qualidade e carinho. Somos apaixonados por servir bem e 
          oferecemos a melhor experiência que sua empresa pode ter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <MessageCircle className="mr-2" />
            Entre em Contato
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Conheça Nossos Serviços
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;