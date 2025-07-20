import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { Shield, Eye, Lock, Database, Trash2, UserCheck, AlertTriangle, Mail } from 'lucide-react';

const sections = [
  {
    icon: Database,
    titleKey: 'privacy.collection.title',
    contentKey: 'privacy.collection.content'
  },
  {
    icon: Eye,
    titleKey: 'privacy.usage.title',
    contentKey: 'privacy.usage.content'
  },
  {
    icon: Lock,
    titleKey: 'privacy.protection.title',
    contentKey: 'privacy.protection.content'
  },
  {
    icon: UserCheck,
    titleKey: 'privacy.rights.title',
    contentKey: 'privacy.rights.content'
  }
];

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-8 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-12 w-72 h-72 bg-accent/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-from-bottom">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('privacy.hero.title')}
              </span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              {t('privacy.hero.subtitle')}
            </p>
            <div className="text-sm text-muted-foreground">
              {t('privacy.lastUpdated')}: 20 de Janeiro de 2025
            </div>
          </div>
        </section>

        {/* Privacy Content */}
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

            {/* Data Types Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('privacy.dataTypes.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('privacy.dataTypes.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>{t('privacy.dataTypes.personal')}</li>
                  <li>{t('privacy.dataTypes.contact')}</li>
                  <li>{t('privacy.dataTypes.usage')}</li>
                  <li>{t('privacy.dataTypes.technical')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  {t('privacy.cookies.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('privacy.cookies.content')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t('privacy.cookies.essential.title')}</h4>
                    <p className="text-sm text-foreground/80">{t('privacy.cookies.essential.desc')}</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t('privacy.cookies.analytics.title')}</h4>
                    <p className="text-sm text-foreground/80">{t('privacy.cookies.analytics.desc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third Party Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('privacy.thirdParty.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('privacy.thirdParty.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>{t('privacy.thirdParty.analytics')}</li>
                  <li>{t('privacy.thirdParty.payment')}</li>
                  <li>{t('privacy.thirdParty.hosting')}</li>
                  <li>{t('privacy.thirdParty.communication')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Retention Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Trash2 className="h-6 w-6 text-primary" />
                  {t('privacy.retention.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {t('privacy.retention.content')}
                </p>
              </CardContent>
            </Card>

            {/* Your Rights Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('privacy.yourRights.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('privacy.yourRights.content')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t('privacy.yourRights.access')}</h4>
                    <p className="text-sm text-foreground/80">{t('privacy.yourRights.accessDesc')}</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t('privacy.yourRights.correction')}</h4>
                    <p className="text-sm text-foreground/80">{t('privacy.yourRights.correctionDesc')}</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t('privacy.yourRights.deletion')}</h4>
                    <p className="text-sm text-foreground/80">{t('privacy.yourRights.deletionDesc')}</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-semibold mb-2">{t('privacy.yourRights.portability')}</h4>
                    <p className="text-sm text-foreground/80">{t('privacy.yourRights.portabilityDesc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t('privacy.changes.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  {t('privacy.changes.content')}
                </p>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="border-muted/20 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Mail className="h-6 w-6 text-primary" />
                  {t('privacy.contact.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {t('privacy.contact.content')}
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