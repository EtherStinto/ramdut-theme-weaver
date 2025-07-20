import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code,
    titleKey: 'services.webDev.title',
    descKey: 'services.webDev.desc',
    features: ['services.webDev.feature1', 'services.webDev.feature2', 'services.webDev.feature3'],
    price: 'R$ 2.500'
  },
  {
    icon: Smartphone,
    titleKey: 'services.mobileDev.title',
    descKey: 'services.mobileDev.desc',
    features: ['services.mobileDev.feature1', 'services.mobileDev.feature2', 'services.mobileDev.feature3'],
    price: 'R$ 3.500'
  },
  {
    icon: Globe,
    titleKey: 'services.ecommerce.title',
    descKey: 'services.ecommerce.desc',
    features: ['services.ecommerce.feature1', 'services.ecommerce.feature2', 'services.ecommerce.feature3'],
    price: 'R$ 4.500'
  },
  {
    icon: Database,
    titleKey: 'services.database.title',
    descKey: 'services.database.desc',
    features: ['services.database.feature1', 'services.database.feature2', 'services.database.feature3'],
    price: 'R$ 1.800'
  },
  {
    icon: Shield,
    titleKey: 'services.security.title',
    descKey: 'services.security.desc',
    features: ['services.security.feature1', 'services.security.feature2', 'services.security.feature3'],
    price: 'R$ 2.200'
  },
  {
    icon: Zap,
    titleKey: 'services.automation.title',
    descKey: 'services.automation.desc',
    features: ['services.automation.feature1', 'services.automation.feature2', 'services.automation.feature3'],
    price: 'R$ 3.000'
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-accent/4 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-from-bottom">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('services.hero.title')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/20 hover:-translate-y-2 animate-fade-in opacity-0"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{t(service.titleKey)}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{t(service.descKey)}</CardDescription>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground/80">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group">
                    {t('services.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                {t('services.cta.contact')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                {t('services.cta.portfolio')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}