
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Smartphone, ShoppingCart, Code2, Palette, Zap, Bot, Wrench } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: t('services.portfolio.title'),
      description: t('services.portfolio.description'),
      features: [
        t('services.portfolio.feature1'),
        t('services.portfolio.feature2'),
        t('services.portfolio.feature3'),
        t('services.portfolio.feature4')
      ]
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        t('services.web.feature1'),
        t('services.web.feature2'),
        t('services.web.feature3'),
        t('services.web.feature4')
      ]
    },
    {
      icon: ShoppingCart,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      features: [
        t('services.ecommerce.feature1'),
        t('services.ecommerce.feature2'),
        t('services.ecommerce.feature3'),
        t('services.ecommerce.feature4')
      ]
    },
    {
      icon: Code2,
      title: t('services.webapp.title'),
      description: t('services.webapp.description'),
      features: [
        t('services.webapp.feature1'),
        t('services.webapp.feature2'),
        t('services.webapp.feature3'),
        t('services.webapp.feature4')
      ]
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: [
        t('services.mobile.feature1'),
        t('services.mobile.feature2'),
        t('services.mobile.feature3'),
        t('services.mobile.feature4')
      ]
    },
    {
      icon: Zap,
      title: t('services.fullstack.title'),
      description: t('services.fullstack.description'),
      features: [
        t('services.fullstack.feature1'),
        t('services.fullstack.feature2'),
        t('services.fullstack.feature3'),
        t('services.fullstack.feature4')
      ]
    },
    // {
    //   icon: Bot,
    //   title: t('services.ai.title'),
    //   description: t('services.ai.description'),
    //   features: [
    //     t('services.ai.feature1'),
    //     t('services.ai.feature2'),
    //     t('services.ai.feature3'),
    //     t('services.ai.feature4')
    //   ]
    // },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      features: [
        t('services.maintenance.feature1'),
        t('services.maintenance.feature2'),
        t('services.maintenance.feature3'),
        t('services.maintenance.feature4')
      ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs">
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
