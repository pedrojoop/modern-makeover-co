import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 gradient-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <MessageCircle className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Nossos principais ingredientes são qualidade e carinho. Somos apaixonados por servir bem e 
            oferecemos a melhor experiência que sua empresa pode ter, considerando uma gestão 
            eficiente e máxima satisfação dos funcionários.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-elegant bg-accent/10 border-accent/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/20 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent transition-smooth"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/20 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent transition-smooth"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Digite sua mensagem aqui..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/20 border-accent/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent transition-smooth resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="contact" 
                  size="lg" 
                  className="w-full md:w-auto px-12 py-4 text-lg font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Company Info */}
          <div className="space-y-8">
            {/* Verified Supplier Badge */}
            <Card className="gradient-secondary shadow-elegant">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-bold text-accent-foreground mb-2">
                  Fornecedor Verificado
                </h3>
                <p className="text-accent-foreground/80">
                  Certificado de qualidade e confiança
                </p>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefone</h4>
                  <p className="text-primary-foreground/80">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-primary-foreground/80">contato@crsalimentos.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Localização</h4>
                  <p className="text-primary-foreground/80">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;