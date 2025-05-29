
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const PortfolioSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      description: t('portfolio.project1.description'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Framer Motion", "Tailwind", "TypeScript"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      description: t('portfolio.project3.description'),
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "Biometric"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: t('portfolio.project4.title'),
      category: t('portfolio.project4.category'),
      description: t('portfolio.project4.description'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: t('portfolio.project5.title'),
      category: t('portfolio.project5.category'),
      description: t('portfolio.project5.description'),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Next.js", "Prisma", "WebRTC", "AWS"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: t('portfolio.project6.title'),
      category: t('portfolio.project6.category'),
      description: t('portfolio.project6.description'),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["React", "Strapi", "i18n", "SEO"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('portfolio.view')}
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      <Github className="w-4 h-4 mr-2" />
                      {t('portfolio.code')}
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            {t('portfolio.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
