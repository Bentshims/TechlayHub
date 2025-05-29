
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/contexts/TranslationContext';

const TechnologiesSection = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      category: t('technologies.frontend'),
      techs: [
        { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
        { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      category: t('technologies.backend'),
      techs: [
        { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
        { name: 'AdonisJS', icon: '🏛️', color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      category: t('technologies.database'),
      techs: [
        { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
        { name: 'SQL', icon: '🗄️', color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
      category: t('technologies.ai'),
      techs: [
        { name: 'Python', icon: '🐍', color: 'from-yellow-500 to-orange-500' },
        { name: 'Autogen', icon: '🤖', color: 'from-indigo-400 to-purple-600' }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('technologies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center text-lg`}>
                        {tech.icon}
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
