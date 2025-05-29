
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/contexts/TranslationContext';

const TechnologiesSection = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      category: t('technologies.frontend'),
      techs: [
        { 
          name: 'React', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: 'from-blue-400 to-blue-600' 
        },
        { 
          name: 'TypeScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          color: 'from-blue-500 to-blue-700' 
        },
        { 
          name: 'JavaScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          color: 'from-yellow-400 to-yellow-600' 
        },
        { 
          name: 'Tailwind CSS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          color: 'from-cyan-400 to-cyan-600' 
        }
      ]
    },
    {
      category: t('technologies.backend'),
      techs: [
        { 
          name: 'Node.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          color: 'from-green-400 to-green-600' 
        },
        { 
          name: 'AdonisJS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg',
          color: 'from-purple-400 to-purple-600' 
        }
      ]
    },
    {
      category: t('technologies.database'),
      techs: [
        { 
          name: 'PostgreSQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          color: 'from-blue-600 to-indigo-600' 
        },
        { 
          name: 'SQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          color: 'from-gray-400 to-gray-600' 
        }
      ]
    },
    {
      category: t('technologies.ai'),
      techs: [
        { 
          name: 'Python', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          color: 'from-yellow-500 to-orange-500' 
        },
        { 
          name: 'Autogen', 
          logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=48&h=48&fit=crop&crop=center',
          color: 'from-indigo-400 to-purple-600' 
        }
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
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center p-1`}>
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                          }}
                        />
                        <div className="w-full h-full bg-white rounded flex items-center justify-center text-gray-800 font-bold text-xs hidden">
                          {tech.name.charAt(0)}
                        </div>
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
