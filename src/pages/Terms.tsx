import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { FileText, Shield, Clock, Mail } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    titleKey: 'terms.acceptance.title',
    contentKey: 'terms.acceptance.content'
  },
  {
    icon: Shield,
    titleKey: 'terms.services.title',
    contentKey: 'terms.services.content'
  },
  {
    icon: Clock,
    titleKey: 'terms.obligations.title',
    contentKey: 'terms.obligations.content'
  },
  {
    icon: Mail,
    titleKey: 'terms.privacy.title',
    contentKey: 'terms.privacy.content'
  }
];

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-32 left-12 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-from-bottom">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('terms.hero.title')}
              </span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              {t('terms.hero.subtitle')}
            </p>
            <div className="text-sm text-muted-foreground">
              {t('terms.lastUpdated')}: 20 de Janeiro de 2025
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card 
                key={index}
                className="border-muted/20 hover:border-primary/20 transition-all duration-300 animate-fade-in opacity-0"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <section.icon className="h-6 w-6 text-primary" />
                    {t(section.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-foreground/80 leading-relaxed">
                      {t(section.contentKey)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Terms Sections */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('terms.liability.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('terms.liability.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>{t('terms.liability.item1')}</li>
                  <li>{t('terms.liability.item2')}</li>
                  <li>{t('terms.liability.item3')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('terms.intellectual.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {t('terms.intellectual.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('terms.termination.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {t('terms.termination.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('terms.changes.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {t('terms.changes.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('terms.contact.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('terms.contact.content')}
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p><strong>Email:</strong> ramdut2025@gmail.com</p>
                  <p><strong>WhatsApp:</strong> +55 51 98022-8329</p>
                  <p><strong>Website:</strong> www.ramdut.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}