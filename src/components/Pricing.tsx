import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const plans = [
  {
    name: 'pricing.basic',
    price: 'R$ 99',
    period: 'pricing.month',
    popular: false,
    features: [
      'Até 1.000 transações/mês',
      'Dashboards básicos',
      'Suporte por email',
      'Integrações básicas',
      'Armazenamento 10GB',
    ],
  },
  {
    name: 'pricing.pro',
    price: 'R$ 299',
    period: 'pricing.month',
    popular: true,
    features: [
      'Até 10.000 transações/mês',
      'Dashboards avançados',
      'Suporte prioritário',
      'Todas as integrações',
      'Armazenamento 100GB',
      'API personalizada',
      'Automações avançadas',
    ],
  },
  {
    name: 'pricing.enterprise',
    price: 'Personalizado',
    period: '',
    popular: false,
    features: [
      'Transações ilimitadas',
      'Dashboards personalizados',
      'Suporte dedicado 24/7',
      'Integrações personalizadas',
      'Armazenamento ilimitado',
      'SLA garantido',
      'Consultoria especializada',
      'Implementação assistida',
    ],
  },
];

export function Pricing() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'scale-105 shadow-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold mb-4">{t(plan.name)}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-foreground/60 ml-1">{t(plan.period)}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-primary' 
                      : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                  } transition-all duration-300`}
                >
                  {t('pricing.choose')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">
            Todos os planos incluem teste gratuito de 14 dias
          </p>
          <div className="flex justify-center space-x-8 text-sm text-foreground/60">
            <span>✓ Sem taxa de setup</span>
            <span>✓ Cancele quando quiser</span>
            <span>✓ Migração gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
}