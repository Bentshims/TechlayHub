
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
      image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1748946707/ScreenShot_Tool_-20250603115022_ecalqn.png",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.description'),
      image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1748953721/drdeborakayembe_wmx5eu.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500"
    },
    // {
    //   title: t('portfolio.project3.title'),
    //   category: t('portfolio.project3.category'),
    //   description: t('portfolio.project3.description'),
    //   image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop",
    //   tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    //   color: "from-emerald-500 to-teal-500"
    // },
    // {
    //   title: t('portfolio.project4.title'),
    //   category: t('portfolio.project4.category'),
    //   description: t('portfolio.project4.description'),
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    //   tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Python"],
    //   color: "from-orange-500 to-red-500"
    // },
    {
      title: t('portfolio.project5.title'),
      category: t('portfolio.project5.category'),
      description: t('portfolio.project5.description'),
      image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1748946874/ScreenShot_Tool_-20250531163942_1_jhn4yu.png",
      tags: ["React", "TypeScript", "AdonisJS", "PostgreSQL", "Tailwind CSS"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: t('portfolio.project6.title'),
      category: t('portfolio.project6.category'),
      description: t('portfolio.project6.description'),
      image: "https://res.cloudinary.com/drsd8adkq/image/upload/v1748952610/dktzwklmb4rcp6vatwaj.png",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
                      className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
{/* 
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            {t('portfolio.viewAll')}
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;
