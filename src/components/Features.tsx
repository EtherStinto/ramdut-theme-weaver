import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, BarChart3, Shield, Zap, Cloud, Users } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const features = [
  {
    icon: Bot,
    titleKey: 'features.automation.title',
    descKey: 'features.automation.desc',
  },
  {
    icon: BarChart3,
    titleKey: 'features.analytics.title',
    descKey: 'features.analytics.desc',
  },
  {
    icon: Shield,
    titleKey: 'features.security.title',
    descKey: 'features.security.desc',
  },
  {
    icon: Zap,
    titleKey: 'Integração Rápida',
    descKey: 'Configure em minutos, não horas',
  },
  {
    icon: Cloud,
    titleKey: 'Cloud Nativo',
    descKey: 'Escalabilidade automática e confiável',
  },
  {
    icon: Users,
    titleKey: 'Colaboração em Equipe',
    descKey: 'Trabalhe junto de forma eficiente',
  },
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.titleKey.includes('.') ? t(feature.titleKey) : feature.titleKey}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.descKey.includes('.') ? t(feature.descKey) : feature.descKey}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}