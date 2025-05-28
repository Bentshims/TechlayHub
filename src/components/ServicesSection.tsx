
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Smartphone, ShoppingCart, Code2, Palette, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Sites Portfolio",
      description: "Créez votre vitrine professionnelle avec un design unique qui reflète votre personnalité et vos compétences.",
      features: ["Design sur mesure", "Responsive design", "SEO optimisé", "Portfolio interactif"]
    },
    {
      icon: Globe,
      title: "Sites Web Dynamiques",
      description: "Développement de sites web modernes avec des fonctionnalités avancées et une expérience utilisateur exceptionnelle.",
      features: ["CMS personnalisé", "Interface admin", "Base de données", "API intégrées"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Solutions complètes de commerce électronique pour développer votre business en ligne efficacement.",
      features: ["Boutique en ligne", "Paiement sécurisé", "Gestion stocks", "Analytics avancées"]
    },
    {
      icon: Code2,
      title: "Applications Web",
      description: "Applications web complexes et performantes adaptées à vos besoins métier spécifiques.",
      features: ["SaaS développement", "Dashboard admin", "API REST", "Cloud deployment"]
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Applications mobiles natives et hybrides pour iOS et Android avec une expérience utilisateur optimale.",
      features: ["iOS & Android", "UI/UX design", "Push notifications", "Store deployment"]
    },
    {
      icon: Zap,
      title: "Web & Mobile",
      description: "Solutions complètes combinant web et mobile pour une présence digitale totale et cohérente.",
      features: ["Écosystème complet", "Synchronisation", "Design uniforme", "Performance optimisée"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la conception à la mise en ligne, nous accompagnons votre projet digital 
            avec expertise et passion pour créer des solutions qui dépassent vos attentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
