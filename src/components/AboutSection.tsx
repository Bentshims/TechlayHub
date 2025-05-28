
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const AboutSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.description')
    },
    {
      icon: Users,
      title: t('about.team.title'),
      description: t('about.team.description')
    },
    {
      icon: Lightbulb,
      title: t('about.innovation.title'),
      description: t('about.innovation.description')
    },
    {
      icon: Award,
      title: t('about.quality.title'),
      description: t('about.quality.description')
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 px-4 py-2 rounded-full">
                <span className="text-blue-700 dark:text-blue-300 font-medium">React</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/20 px-4 py-2 rounded-full">
                <span className="text-purple-700 dark:text-purple-300 font-medium">Node.js</span>
              </div>
              <div className="bg-cyan-100 dark:bg-cyan-900/20 px-4 py-2 rounded-full">
                <span className="text-cyan-700 dark:text-cyan-300 font-medium">TypeScript</span>
              </div>
              <div className="bg-emerald-100 dark:bg-emerald-900/20 px-4 py-2 rounded-full">
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
