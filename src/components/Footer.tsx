import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    'Produto': [
      'Recursos',
      'Integrações',
      'API',
      'Segurança',
    ],
    'Empresa': [
      'Sobre Nós',
      'Carreiras',
      'Blog',
      'Imprensa',
    ],
    'Suporte': [
      'Central de Ajuda',
      'Documentação',
      'Status',
      'Contato',
    ],
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Ramdut
            </h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Transformando negócios com soluções SaaS inovadoras. 
              Automação inteligente para o futuro digital.
            </p>
            
            {/* Shop Link */}
            <Button
              onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
              variant="outline"
              className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              {t('nav.shop')}
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-foreground/70 hover:text-primary transition-colors duration-200 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <button className="text-foreground/70 hover:text-primary transition-colors duration-200">
              LinkedIn
            </button>
            <button className="text-foreground/70 hover:text-primary transition-colors duration-200">
              Twitter
            </button>
            <button className="text-foreground/70 hover:text-primary transition-colors duration-200">
              GitHub
            </button>
            <button 
              onClick={() => window.open('https://wa.me/5551980228329', '_blank')}
              className="text-foreground/70 hover:text-green-600 transition-colors duration-200"
            >
              WhatsApp
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-4">
              <button className="hover:text-primary transition-colors">
                {t('footer.terms')}
              </button>
              <button className="hover:text-primary transition-colors">
                {t('footer.privacy')}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-foreground/60">
            <span>{t('footer.rights')}</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}