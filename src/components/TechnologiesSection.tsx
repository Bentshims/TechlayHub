
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
          logo: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png',
          color: 'from-white to-white' 
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
    // {
    //   category: t('technologies.ai'),
    //   techs: [
    //     { 
    //       name: 'Python', 
    //       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    //       color: 'from-yellow-500 to-orange-500' 
    //     },
    //     { 
    //       name: 'Autogen', 
    //       logo: 'data:image/jpeg;base64,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',
    //       color: 'from-indigo-400 to-purple-600' 
    //     }
    //   ]
    // }
  ];

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('technologies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:w-[80%]">
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
