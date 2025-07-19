import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from './LanguageProvider';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '500+', label: 'Empresas Atendidas' },
    { icon: Globe, value: '15+', label: 'Países' },
    { icon: TrendingUp, value: '200%', label: 'Crescimento Anual' },
    { icon: Award, value: '5+', label: 'Anos de Experiência' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {t('about.content')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground/80">Inovação constante em tecnologia</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground/80">Suporte 24/7 especializado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground/80">Soluções personalizadas</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}