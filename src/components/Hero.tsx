import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import heroImage from '@/assets/hero-bg.jpg';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/8 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Scattered Text Elements - Cluttered Design */}
      <div className="absolute top-10 left-4 z-20 text-xs text-primary/60 rotate-12 animate-pulse">
        💡 Inovação
      </div>
      <div className="absolute top-20 right-8 z-20 text-sm text-accent/70 -rotate-6 animate-bounce">
        🚀 Tecnologia
      </div>
      <div className="absolute bottom-40 left-8 z-20 text-xs text-secondary/60 rotate-45 animate-pulse">
        ⭐ Qualidade
      </div>
      <div className="absolute top-1/3 right-16 z-20 text-xs text-primary/50 -rotate-12 animate-fade-in">
        🎯 Precisão
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Scattered Subtitle - Top Right */}
          <div className="absolute -top-20 right-0 z-30 text-sm text-foreground/60 transform rotate-6 bg-background/80 backdrop-blur p-2 rounded-lg animate-float">
            Transforme seu negócio
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-from-bottom">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          {/* Scattered Text - Left Side */}
          <div className="absolute top-40 -left-20 z-30 text-lg text-foreground/70 transform -rotate-12 bg-card/80 backdrop-blur p-3 rounded-lg animate-pulse-slow">
            com nossas soluções
          </div>

          {/* Scattered Promotional Text */}
          <div className="absolute bottom-20 right-10 z-30 text-xs text-accent/60 transform rotate-12 bg-accent/10 backdrop-blur p-2 rounded-full animate-bounce">
            💎 Premium
          </div>
          
          {/* Main Subtitle - Repositioned */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="group bg-gradient-primary hover:shadow-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              {t('nav.shop')}
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* More Scattered Elements */}
          <div className="absolute top-60 left-20 z-30 text-sm text-primary/50 transform -rotate-6 bg-primary/5 backdrop-blur p-2 rounded-lg animate-pulse">
            🌟 Exclusivo
          </div>

          {/* Stats or Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10k+</div>
              <div className="text-sm text-foreground/60">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm text-foreground/60">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-foreground/60">Suporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}