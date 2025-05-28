
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Combien de temps faut-il pour développer un site web ?',
      answer: 'Le délai varie selon la complexité du projet. Un site vitrine simple prend 2-3 semaines, tandis qu\'un site e-commerce complet peut prendre 6-8 semaines.'
    },
    {
      question: 'Proposez-vous la maintenance après livraison ?',
      answer: 'Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et le bon fonctionnement de votre site.'
    },
    {
      question: 'Mes sites seront-ils optimisés pour mobile ?',
      answer: 'Absolument ! Tous nos sites sont développés avec une approche "mobile-first" et sont entièrement responsives.'
    },
    {
      question: 'Puis-je modifier mon site moi-même après livraison ?',
      answer: 'Nous intégrons des CMS intuitifs qui vous permettent de modifier facilement le contenu. Nous vous formons également à leur utilisation.'
    },
    {
      question: 'Quels sont vos tarifs ?',
      answer: 'Nos tarifs varient selon vos besoins. Contactez-nous pour un devis personnalisé et gratuit adapté à votre projet.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
