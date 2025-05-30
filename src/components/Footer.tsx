
import { Code } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: t('footer.portfolioLink'), href: '#' },
      { label: t('footer.webLink'), href: '#' },
      { label: t('footer.ecommerceLink'), href: '#' },
      { label: t('footer.webappLink'), href: '#' }
    ],
    company: [
      { label: t('footer.aboutLink'), href: '#about' },
      { label: t('footer.portfolioPageLink'), href: '#portfolio' },
      { label: t('footer.contactLink'), href: '#contact' },
      { label: t('footer.blogLink'), href: '#' }
    ],
    legal: [
      { label: t('footer.legalLink'), href: '#' },
      { label: t('footer.privacyLink'), href: '#' },
      { label: t('footer.termsLink'), href: '#' },
      { label: t('footer.conditionsLink'), href: '#' }
    ]
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TECHLAY HUB
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            {/* <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-xs"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} TECHLAY HUB. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
