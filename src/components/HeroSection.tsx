
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Code className="w-16 h-16 text-white animate-float" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Zap className="w-12 h-12 text-white animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Users className="w-14 h-14 text-white animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container pt-10 md:pt-auto  mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-left md:text-center text-5xl md:text-7xl font-bold mb-6 w-[90%] animate-fade-in">
            {t('hero.title')}
            {/* <br /> */}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3">
              {t('hero.cta.services')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-blue-900 dark:text-white hover:bg-white hover:text-blue-900 dark:hover:bg-blue-500 font-semibold px-8 py-3 backdrop-blur-sm">
              {t('hero.cta.portfolio')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300">50+</div>
              <div className="text-blue-100">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-300">100%</div>
              <div className="text-blue-100">{t('hero.stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300">24/7</div>
              <div className="text-blue-100">{t('hero.stats.support')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-300">3+</div>
              <div className="text-blue-100">{t('hero.stats.experience')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
