import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-bold text-primary">CRS Alimentos</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-smooth">
            Início
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-smooth">
            Sobre
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-smooth">
            Serviços
          </a>
          <a href="#recipes" className="text-foreground hover:text-primary transition-smooth">
            Receitas
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
            Contato
          </a>
        </nav>
        
        <Button variant="hero" className="hidden md:flex">
          Entre em Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;