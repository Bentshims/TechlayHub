
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Smartphone, ShoppingCart, Code2, Palette, Zap } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: t('services.portfolio.title'),
      description: t('services.portfolio.description'),
      features: ["Design sur mesure", "Responsive design", "SEO optimisé", "Portfolio interactif"]
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: ["CMS personnalisé", "Interface admin", "Base de données", "API intégrées"]
    },
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      features: ["Boutique en ligne", "Paiement sécurisé", "Gestion stocks", "Analytics avancées"]
    },
    {
      icon: Code2,
      title: t('services.webapp.title'),
      description: t('services.webapp.description'),
      features: ["SaaS développement", "Dashboard admin", "API REST", "Cloud deployment"]
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: ["iOS & Android", "UI/UX design", "Push notifications", "Store deployment"]
    },
    {
      icon: Zap,
      title: t('services.fullstack.title'),
      description: t('services.fullstack.description'),
      features: ["Écosystème complet", "Synchronisation", "Design uniforme", "Performance optimisée"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
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
