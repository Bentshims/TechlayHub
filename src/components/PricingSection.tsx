
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const PricingSection = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.starter'),
      price: '€999',
      description: 'Parfait pour les petites entreprises',
      features: [
        'Site vitrine responsive',
        'Jusqu\'à 5 pages',
        'Optimisation SEO de base',
        'Formulaire de contact',
        'Support 3 mois'
      ],
      popular: false
    },
    {
      name: t('pricing.professional'),
      price: '€2499',
      description: 'Idéal pour les entreprises en croissance',
      features: [
        'Site web dynamique',
        'Jusqu\'à 15 pages',
        'CMS intégré',
        'Optimisation SEO avancée',
        'Analytics intégrés',
        'Support 6 mois'
      ],
      popular: true
    },
    {
      name: t('pricing.enterprise'),
      price: 'Sur devis',
      description: 'Solutions sur mesure',
      features: [
        'Application web complète',
        'Pages illimitées',
        'Fonctionnalités sur mesure',
        'Intégrations API',
        'Formation équipe',
        'Support 12 mois'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-shadow duration-300 ${
                plan.popular ? 'border-2 border-primary shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === 'Sur devis' ? t('pricing.contact') : t('pricing.getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
