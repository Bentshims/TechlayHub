
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
    'hero.stats.projects': 'Projets réalisés',
    'hero.stats.satisfaction': 'Satisfaction client',
    'hero.stats.support': 'Support technique',
    'hero.stats.experience': 'Années d\'expérience',
    
    // Services Section
    'services.title': 'Nos Services',
    'services.subtitle': 'De la conception à la mise en ligne, nous accompagnons votre projet digital avec expertise et passion pour créer des solutions qui dépassent vos attentes.',
    'services.portfolio.title': 'Sites Portfolio',
    'services.portfolio.description': 'Créez votre vitrine professionnelle avec un design unique qui reflète votre personnalité et vos compétences.',
    'services.web.title': 'Sites Web Dynamiques',
    'services.web.description': 'Développement de sites web modernes avec des fonctionnalités avancées et une expérience utilisateur exceptionnelle.',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description': 'Solutions complètes de commerce électronique pour développer votre business en ligne efficacement.',
    'services.webapp.title': 'Applications Web',
    'services.webapp.description': 'Applications web complexes et performantes adaptées à vos besoins métier spécifiques.',
    'services.mobile.title': 'Applications Mobile',
    'services.mobile.description': 'Applications mobiles natives et hybrides pour iOS et Android avec une expérience utilisateur optimale.',
    'services.fullstack.title': 'Web & Mobile',
    'services.fullstack.description': 'Solutions complètes combinant web et mobile pour une présence digitale totale et cohérente.',
    
    // About Section
    'about.title': 'À propos de TECHLAY HUB',
    'about.description1': 'Fondée avec la vision de démocratiser l\'accès aux technologies web de pointe, TECHLAY HUB est votre partenaire de confiance pour tous vos projets digitaux. Nous combinons créativité, expertise technique et approche client-centrique pour créer des expériences digitales exceptionnelles.',
    'about.description2': 'Notre approche collaborative nous permet de comprendre parfaitement vos besoins et de vous accompagner à chaque étape de votre transformation digitale. De la conception à la maintenance, nous sommes là pour faire de votre vision une réalité.',
    'about.mission.title': 'Mission',
    'about.mission.description': 'Transformer les idées en solutions digitales innovantes qui propulsent votre business vers le succès.',
    'about.team.title': 'Équipe',
    'about.team.description': 'Une équipe passionnée de développeurs et designers experts dans les dernières technologies web.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'Nous restons à la pointe des technologies pour vous offrir des solutions modernes et performantes.',
    'about.quality.title': 'Qualité',
    'about.quality.description': 'Chaque projet est traité avec le plus grand soin pour garantir un résultat à la hauteur de vos attentes.',
    
    // Portfolio Section
    'portfolio.title': 'Notre Portfolio',
    'portfolio.subtitle': 'Découvrez quelques-uns de nos projets récents qui illustrent notre expertise et notre capacité à créer des solutions digitales innovantes.',
    'portfolio.viewAll': 'Voir tous nos projets',
    'portfolio.view': 'Voir',
    'portfolio.code': 'Code',
    
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
    'pricing.popular': 'Populaire',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à donner vie à votre projet ? Discutons ensemble de vos besoins et découvrons comment nous pouvons vous aider à atteindre vos objectifs.',
    'contact.info.title': 'Restons en contact',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.address': 'Adresse',
    'contact.info.follow': 'Suivez-nous',
    'contact.form.name': 'Nom complet',
    'contact.form.namePlaceholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'votre@email.com',
    'contact.form.subject': 'Sujet',
    'contact.form.subjectPlaceholder': 'Sujet de votre message',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Décrivez votre projet ou posez vos questions...',
    'contact.form.send': 'Envoyer le message',
    'contact.form.success.title': 'Message envoyé !',
    'contact.form.success.description': 'Nous vous répondrons dans les plus brefs délais.',
    
    // Footer
    'footer.description': 'Votre partenaire de confiance pour tous vos projets digitaux. Nous transformons vos idées en solutions web innovantes et performantes.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.legal': 'Légal',
    'footer.copyright': 'Tous droits réservés.',
    'footer.madeWith': 'Fait avec ❤️ à Paris',
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
    'hero.stats.projects': 'Completed projects',
    'hero.stats.satisfaction': 'Client satisfaction',
    'hero.stats.support': 'Technical support',
    'hero.stats.experience': 'Years of experience',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'From conception to deployment, we accompany your digital project with expertise and passion to create solutions that exceed your expectations.',
    'services.portfolio.title': 'Portfolio Sites',
    'services.portfolio.description': 'Create your professional showcase with a unique design that reflects your personality and skills.',
    'services.web.title': 'Dynamic Websites',
    'services.web.description': 'Development of modern websites with advanced features and exceptional user experience.',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description': 'Complete e-commerce solutions to develop your online business efficiently.',
    'services.webapp.title': 'Web Applications',
    'services.webapp.description': 'Complex and performant web applications adapted to your specific business needs.',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Native and hybrid mobile applications for iOS and Android with optimal user experience.',
    'services.fullstack.title': 'Web & Mobile',
    'services.fullstack.description': 'Complete solutions combining web and mobile for a total and coherent digital presence.',
    
    // About Section
    'about.title': 'About TECHLAY HUB',
    'about.description1': 'Founded with the vision of democratizing access to cutting-edge web technologies, TECHLAY HUB is your trusted partner for all your digital projects. We combine creativity, technical expertise and client-centric approach to create exceptional digital experiences.',
    'about.description2': 'Our collaborative approach allows us to perfectly understand your needs and support you at every step of your digital transformation. From conception to maintenance, we are here to make your vision a reality.',
    'about.mission.title': 'Mission',
    'about.mission.description': 'Transform ideas into innovative digital solutions that propel your business to success.',
    'about.team.title': 'Team',
    'about.team.description': 'A passionate team of developers and designers expert in the latest web technologies.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'We stay at the forefront of technology to offer you modern and performant solutions.',
    'about.quality.title': 'Quality',
    'about.quality.description': 'Each project is treated with the greatest care to guarantee a result that meets your expectations.',
    
    // Portfolio Section
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover some of our recent projects that illustrate our expertise and ability to create innovative digital solutions.',
    'portfolio.viewAll': 'View all our projects',
    'portfolio.view': 'View',
    'portfolio.code': 'Code',
    
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
    'pricing.popular': 'Popular',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to bring your project to life? Let\'s discuss your needs together and discover how we can help you achieve your goals.',
    'contact.info.title': 'Let\'s stay in touch',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.info.follow': 'Follow us',
    'contact.form.name': 'Full name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Message subject',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Describe your project or ask your questions...',
    'contact.form.send': 'Send message',
    'contact.form.success.title': 'Message sent!',
    'contact.form.success.description': 'We will respond to you as soon as possible.',
    
    // Footer
    'footer.description': 'Your trusted partner for all your digital projects. We transform your ideas into innovative and performant web solutions.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.copyright': 'All rights reserved.',
    'footer.madeWith': 'Made with ❤️ in Paris',
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
    'hero.stats.projects': 'Projetos realizados',
    'hero.stats.satisfaction': 'Satisfação do cliente',
    'hero.stats.support': 'Suporte técnico',
    'hero.stats.experience': 'Anos de experiência',
    
    // Services Section
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Da concepção ao lançamento, acompanhamos seu projeto digital com expertise e paixão para criar soluções que excedem suas expectativas.',
    'services.portfolio.title': 'Sites Portfólio',
    'services.portfolio.description': 'Crie sua vitrine profissional com um design único que reflete sua personalidade e habilidades.',
    'services.web.title': 'Sites Dinâmicos',
    'services.web.description': 'Desenvolvimento de sites modernos com funcionalidades avançadas e experiência do usuário excepcional.',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description': 'Soluções completas de comércio eletrônico para desenvolver seu negócio online eficientemente.',
    'services.webapp.title': 'Aplicações Web',
    'services.webapp.description': 'Aplicações web complexas e performantes adaptadas às suas necessidades comerciais específicas.',
    'services.mobile.title': 'Aplicações Mobile',
    'services.mobile.description': 'Aplicações móveis nativas e híbridas para iOS e Android com experiência do usuário otimizada.',
    'services.fullstack.title': 'Web & Mobile',
    'services.fullstack.description': 'Soluções completas combinando web e mobile para uma presença digital total e coerente.',
    
    // About Section
    'about.title': 'Sobre TECHLAY HUB',
    'about.description1': 'Fundada com a visão de democratizar o acesso às tecnologias web de ponta, TECHLAY HUB é seu parceiro de confiança para todos os seus projetos digitais. Combinamos criatividade, expertise técnica e abordagem centrada no cliente para criar experiências digitais excepcionais.',
    'about.description2': 'Nossa abordagem colaborativa nos permite entender perfeitamente suas necessidades e acompanhá-lo em cada etapa de sua transformação digital. Da concepção à manutenção, estamos aqui para tornar sua visão realidade.',
    'about.mission.title': 'Missão',
    'about.mission.description': 'Transformar ideias em soluções digitais inovadoras que impulsionam seu negócio ao sucesso.',
    'about.team.title': 'Equipe',
    'about.team.description': 'Uma equipe apaixonada de desenvolvedores e designers especialistas nas mais recentes tecnologias web.',
    'about.innovation.title': 'Inovação',
    'about.innovation.description': 'Permanecemos na vanguarda da tecnologia para oferecer soluções modernas e performantes.',
    'about.quality.title': 'Qualidade',
    'about.quality.description': 'Cada projeto é tratado com o maior cuidado para garantir um resultado à altura de suas expectativas.',
    
    // Portfolio Section
    'portfolio.title': 'Nosso Portfólio',
    'portfolio.subtitle': 'Descubra alguns de nossos projetos recentes que ilustram nossa expertise e capacidade de criar soluções digitais inovadoras.',
    'portfolio.viewAll': 'Ver todos os nossos projetos',
    'portfolio.view': 'Ver',
    'portfolio.code': 'Código',
    
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
    'pricing.popular': 'Popular',
    
    // Contact Section
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para dar vida ao seu projeto? Vamos discutir suas necessidades juntos e descobrir como podemos ajudá-lo a alcançar seus objetivos.',
    'contact.info.title': 'Vamos manter contato',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefone',
    'contact.info.address': 'Endereço',
    'contact.info.follow': 'Siga-nos',
    'contact.form.name': 'Nome completo',
    'contact.form.namePlaceholder': 'Seu nome',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'seu@email.com',
    'contact.form.subject': 'Assunto',
    'contact.form.subjectPlaceholder': 'Assunto da sua mensagem',
    'contact.form.message': 'Mensagem',
    'contact.form.messagePlaceholder': 'Descreva seu projeto ou faça suas perguntas...',
    'contact.form.send': 'Enviar mensagem',
    'contact.form.success.title': 'Mensagem enviada!',
    'contact.form.success.description': 'Responderemos o mais breve possível.',
    
    // Footer
    'footer.description': 'Seu parceiro de confiança para todos os seus projetos digitais. Transformamos suas ideias em soluções web inovadoras e performantes.',
    'footer.services': 'Serviços',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com ❤️ em Paris',
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
    'hero.stats.projects': 'Proyectos realizados',
    'hero.stats.satisfaction': 'Satisfacción del cliente',
    'hero.stats.support': 'Soporte técnico',
    'hero.stats.experience': 'Años de experiencia',
    
    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Desde la concepción hasta el lanzamiento, acompañamos tu proyecto digital con experiencia y pasión para crear soluciones que superen tus expectativas.',
    'services.portfolio.title': 'Sitios Portafolio',
    'services.portfolio.description': 'Crea tu escaparate profesional con un diseño único que refleje tu personalidad y habilidades.',
    'services.web.title': 'Sitios Web Dinámicos',
    'services.web.description': 'Desarrollo de sitios web modernos con funcionalidades avanzadas y experiencia de usuario excepcional.',
    'services.ecommerce.title': 'E-commerce',
    'services.ecommerce.description': 'Soluciones completas de comercio electrónico para desarrollar tu negocio en línea eficientemente.',
    'services.webapp.title': 'Aplicaciones Web',
    'services.webapp.description': 'Aplicaciones web complejas y performantes adaptadas a tus necesidades comerciales específicas.',
    'services.mobile.title': 'Aplicaciones Móviles',
    'services.mobile.description': 'Aplicaciones móviles nativas e híbridas para iOS y Android con experiencia de usuario óptima.',
    'services.fullstack.title': 'Web y Móvil',
    'services.fullstack.description': 'Soluciones completas que combinan web y móvil para una presencia digital total y coherente.',
    
    // About Section
    'about.title': 'Acerca de TECHLAY HUB',
    'about.description1': 'Fundada con la visión de democratizar el acceso a las tecnologías web de vanguardia, TECHLAY HUB es tu socio de confianza para todos tus proyectos digitales. Combinamos creatividad, experiencia técnica y enfoque centrado en el cliente para crear experiencias digitales excepcionales.',
    'about.description2': 'Nuestro enfoque colaborativo nos permite entender perfectamente tus necesidades y acompañarte en cada paso de tu transformación digital. Desde la concepción hasta el mantenimiento, estamos aquí para hacer realidad tu visión.',
    'about.mission.title': 'Misión',
    'about.mission.description': 'Transformar ideas en soluciones digitales innovadoras que impulsen tu negocio hacia el éxito.',
    'about.team.title': 'Equipo',
    'about.team.description': 'Un equipo apasionado de desarrolladores y diseñadores expertos en las últimas tecnologías web.',
    'about.innovation.title': 'Innovación',
    'about.innovation.description': 'Permanecemos a la vanguardia de la tecnología para ofrecerte soluciones modernas y performantes.',
    'about.quality.title': 'Calidad',
    'about.quality.description': 'Cada proyecto se trata con el mayor cuidado para garantizar un resultado a la altura de tus expectativas.',
    
    // Portfolio Section
    'portfolio.title': 'Nuestro Portafolio',
    'portfolio.subtitle': 'Descubre algunos de nuestros proyectos recientes que ilustran nuestra experiencia y capacidad para crear soluciones digitales innovadoras.',
    'portfolio.viewAll': 'Ver todos nuestros proyectos',
    'portfolio.view': 'Ver',
    'portfolio.code': 'Código',
    
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
    'pricing.popular': 'Popular',
    
    // Contact Section
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para dar vida a tu proyecto? Hablemos juntos sobre tus necesidades y descubramos cómo podemos ayudarte a alcanzar tus objetivos.',
    'contact.info.title': 'Mantengámonos en contacto',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Teléfono',
    'contact.info.address': 'Dirección',
    'contact.info.follow': 'Síguenos',
    'contact.form.name': 'Nombre completo',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.subject': 'Asunto',
    'contact.form.subjectPlaceholder': 'Asunto de tu mensaje',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Describe tu proyecto o haz tus preguntas...',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.success.title': '¡Mensaje enviado!',
    'contact.form.success.description': 'Te responderemos lo antes posible.',
    
    // Footer
    'footer.description': 'Tu socio de confianza para todos tus proyectos digitales. Transformamos tus ideas en soluciones web innovadoras y performantes.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con ❤️ en París',
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
    'hero.stats.projects': '完成的项目',
    'hero.stats.satisfaction': '客户满意度',
    'hero.stats.support': '技术支持',
    'hero.stats.experience': '年经验',
    
    // Services Section
    'services.title': '我们的服务',
    'services.subtitle': '从概念到部署，我们以专业知识和热情陪伴您的数字项目，创造超越您期望的解决方案。',
    'services.portfolio.title': '作品集网站',
    'services.portfolio.description': '创建反映您个性和技能的独特设计的专业展示。',
    'services.web.title': '动态网站',
    'services.web.description': '开发具有先进功能和卓越用户体验的现代网站。',
    'services.ecommerce.title': '电子商务',
    'services.ecommerce.description': '完整的电子商务解决方案，高效发展您的在线业务。',
    'services.webapp.title': 'Web应用程序',
    'services.webapp.description': '适应您特定业务需求的复杂高性能Web应用程序。',
    'services.mobile.title': '移动应用程序',
    'services.mobile.description': 'iOS和Android的原生和混合移动应用程序，具有最佳用户体验。',
    'services.fullstack.title': 'Web和移动',
    'services.fullstack.description': '结合Web和移动的完整解决方案，实现全面一致的数字存在。',
    
    // About Section
    'about.title': '关于 TECHLAY HUB',
    'about.description1': 'TECHLAY HUB成立时怀着普及尖端Web技术的愿景，是您所有数字项目的可信赖合作伙伴。我们结合创造力、技术专长和以客户为中心的方法来创造卓越的数字体验。',
    'about.description2': '我们的协作方法使我们能够完美理解您的需求，并在数字化转型的每个步骤中为您提供支持。从概念到维护，我们在这里让您的愿景成为现实。',
    'about.mission.title': '使命',
    'about.mission.description': '将想法转化为推动您的业务走向成功的创新数字解决方案。',
    'about.team.title': '团队',
    'about.team.description': '一支热情的开发人员和设计师团队，专精于最新的Web技术。',
    'about.innovation.title': '创新',
    'about.innovation.description': '我们保持技术前沿，为您提供现代高性能的解决方案。',
    'about.quality.title': '质量',
    'about.quality.description': '每个项目都得到最大的关注，以确保达到您期望的结果。',
    
    // Portfolio Section
    'portfolio.title': '我们的作品集',
    'portfolio.subtitle': '发现我们一些最近的项目，展示我们的专业知识和创造创新数字解决方案的能力。',
    'portfolio.viewAll': '查看我们所有的项目',
    'portfolio.view': '查看',
    'portfolio.code': '代码',
    
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
    'pricing.popular': '热门',
    
    // Contact Section
    'contact.title': '联系我们',
    'contact.subtitle': '准备让您的项目变为现实？让我们一起讨论您的需求，发现我们如何帮助您实现目标。',
    'contact.info.title': '保持联系',
    'contact.info.email': '邮箱',
    'contact.info.phone': '电话',
    'contact.info.address': '地址',
    'contact.info.follow': '关注我们',
    'contact.form.name': '全名',
    'contact.form.namePlaceholder': '您的姓名',
    'contact.form.email': '邮箱',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subject': '主题',
    'contact.form.subjectPlaceholder': '消息主题',
    'contact.form.message': '消息',
    'contact.form.messagePlaceholder': '描述您的项目或提出问题...',
    'contact.form.send': '发送消息',
    'contact.form.success.title': '消息已发送！',
    'contact.form.success.description': '我们将尽快回复您。',
    
    // Footer
    'footer.description': '您所有数字项目的可信赖合作伙伴。我们将您的想法转化为创新高性能的Web解决方案。',
    'footer.services': '服务',
    'footer.company': '公司',
    'footer.legal': '法律',
    'footer.copyright': '版权所有。',
    'footer.madeWith': '在巴黎用❤️制作',
  },
};
