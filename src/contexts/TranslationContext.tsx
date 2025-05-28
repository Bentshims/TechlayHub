
import React, { createContext, useContext, useState } from 'react';

export type Language = 'fr' | 'en' | 'pt' | 'es' | 'zh';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['fr'][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Témoignages',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Votre Vision,',
    'hero.subtitle': 'Notre Code',
    'hero.description': 'TECHLAY HUB transforme vos idées en solutions digitales innovantes. Spécialisés dans le développement web et mobile de haute qualité.',
    'hero.cta.services': 'Découvrir nos services',
    'hero.cta.portfolio': 'Voir notre portfolio',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.subtitle': 'Découvrez les retours de nos clients satisfaits',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Trouvez les réponses à vos questions',
    
    // Pricing
    'pricing.title': 'Nos Tarifs',
    'pricing.subtitle': 'Des solutions adaptées à tous les budgets',
    'pricing.starter': 'Starter',
    'pricing.professional': 'Professionnel',
    'pricing.enterprise': 'Entreprise',
    'pricing.contact': 'Nous contacter',
    'pricing.getStarted': 'Commencer',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Vision,',
    'hero.subtitle': 'Our Code',
    'hero.description': 'TECHLAY HUB transforms your ideas into innovative digital solutions. Specialized in high-quality web and mobile development.',
    'hero.cta.services': 'Discover our services',
    'hero.cta.portfolio': 'View our portfolio',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Discover feedback from our satisfied clients',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to your questions',
    
    // Pricing
    'pricing.title': 'Our Pricing',
    'pricing.subtitle': 'Solutions adapted to all budgets',
    'pricing.starter': 'Starter',
    'pricing.professional': 'Professional',
    'pricing.enterprise': 'Enterprise',
    'pricing.contact': 'Contact Us',
    'pricing.getStarted': 'Get Started',
  },
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.portfolio': 'Portfólio',
    'nav.testimonials': 'Depoimentos',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Preços',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Sua Visão,',
    'hero.subtitle': 'Nosso Código',
    'hero.description': 'TECHLAY HUB transforma suas ideias em soluções digitais inovadoras. Especializados em desenvolvimento web e mobile de alta qualidade.',
    'hero.cta.services': 'Descobrir nossos serviços',
    'hero.cta.portfolio': 'Ver nosso portfólio',
    
    // Testimonials
    'testimonials.title': 'O Que Nossos Clientes Dizem',
    'testimonials.subtitle': 'Descubra o feedback de nossos clientes satisfeitos',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Encontre respostas para suas perguntas',
    
    // Pricing
    'pricing.title': 'Nossos Preços',
    'pricing.subtitle': 'Soluções adaptadas a todos os orçamentos',
    'pricing.starter': 'Iniciante',
    'pricing.professional': 'Profissional',
    'pricing.enterprise': 'Empresarial',
    'pricing.contact': 'Entre em Contato',
    'pricing.getStarted': 'Começar',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.portfolio': 'Portafolio',
    'nav.testimonials': 'Testimonios',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Tu Visión,',
    'hero.subtitle': 'Nuestro Código',
    'hero.description': 'TECHLAY HUB transforma tus ideas en soluciones digitales innovadoras. Especializados en desarrollo web y móvil de alta calidad.',
    'hero.cta.services': 'Descubrir nuestros servicios',
    'hero.cta.portfolio': 'Ver nuestro portafolio',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Descubre los comentarios de nuestros clientes satisfechos',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Encuentra respuestas a tus preguntas',
    
    // Pricing
    'pricing.title': 'Nuestros Precios',
    'pricing.subtitle': 'Soluciones adaptadas a todos los presupuestos',
    'pricing.starter': 'Inicial',
    'pricing.professional': 'Profesional',
    'pricing.enterprise': 'Empresarial',
    'pricing.contact': 'Contáctanos',
    'pricing.getStarted': 'Comenzar',
  },
  zh: {
    // Header
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.portfolio': '作品集',
    'nav.testimonials': '客户评价',
    'nav.faq': '常见问题',
    'nav.pricing': '价格',
    'nav.contact': '联系我们',
    
    // Hero Section
    'hero.title': '您的愿景，',
    'hero.subtitle': '我们的代码',
    'hero.description': 'TECHLAY HUB 将您的想法转化为创新的数字解决方案。专注于高质量的网络和移动开发。',
    'hero.cta.services': '了解我们的服务',
    'hero.cta.portfolio': '查看我们的作品集',
    
    // Testimonials
    'testimonials.title': '客户评价',
    'testimonials.subtitle': '了解我们满意客户的反馈',
    
    // FAQ
    'faq.title': '常见问题',
    'faq.subtitle': '找到您问题的答案',
    
    // Pricing
    'pricing.title': '我们的价格',
    'pricing.subtitle': '适合所有预算的解决方案',
    'pricing.starter': '入门版',
    'pricing.professional': '专业版',
    'pricing.enterprise': '企业版',
    'pricing.contact': '联系我们',
    'pricing.getStarted': '开始',
  },
};
