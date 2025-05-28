
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CEO, Fashion Boutique',
      content: 'TECHLAY HUB a transformé notre présence en ligne. Notre site e-commerce est magnifique et performant.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Pierre Martin',
      role: 'Fondateur, StartupTech',
      content: 'Une équipe professionnelle qui comprend nos besoins. Notre application mobile dépasse nos attentes.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Sophie Lambert',
      role: 'Directrice Marketing',
      content: 'Un service client exceptionnel et des résultats à la hauteur. Je recommande vivement TECHLAY HUB.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
