import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Trophy, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    titleKey: 'about.values.passion.title',
    descKey: 'about.values.passion.desc'
  },
  {
    icon: Users,
    titleKey: 'about.values.collaboration.title',
    descKey: 'about.values.collaboration.desc'
  },
  {
    icon: Trophy,
    titleKey: 'about.values.excellence.title',
    descKey: 'about.values.excellence.desc'
  },
  {
    icon: Lightbulb,
    titleKey: 'about.values.innovation.title',
    descKey: 'about.values.innovation.desc'
  }
];

const team = [
  {
    name: 'Carlos Silva',
    role: 'about.team.ceo.role',
    bio: 'about.team.ceo.bio',
    image: '/placeholder.svg'
  },
  {
    name: 'Ana Santos',
    role: 'about.team.cto.role',
    bio: 'about.team.cto.bio',
    image: '/placeholder.svg'
  },
  {
    name: 'Pedro Costa',
    role: 'about.team.lead.role',
    bio: 'about.team.lead.bio',
    image: '/placeholder.svg'
  },
  {
    name: 'Maria Oliveira',
    role: 'about.team.designer.role',
    bio: 'about.team.designer.bio',
    image: '/placeholder.svg'
  }
];

const achievements = [
  { number: '50+', labelKey: 'about.stats.projects' },
  { number: '10k+', labelKey: 'about.stats.users' },
  { number: '99.9%', labelKey: 'about.stats.uptime' },
  { number: '5', labelKey: 'about.stats.years' }
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-16 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-8 w-96 h-96 bg-accent/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-from-bottom">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('about.hero.title')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {t('about.story.p1')}
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                {t('about.story.p2')}
              </p>
              <Button size="lg" className="group">
                {t('about.story.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="animate-scale-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Nossa História"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-muted/20 hover:border-primary/20 transition-colors animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{t('about.mission.title')}</h3>
              <p className="text-foreground/80">{t('about.mission.desc')}</p>
            </Card>
            
            <Card className="text-center p-8 border-muted/20 hover:border-primary/20 transition-colors animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{t('about.vision.title')}</h3>
              <p className="text-foreground/80">{t('about.vision.desc')}</p>
            </Card>
            
            <Card className="text-center p-8 border-muted/20 hover:border-primary/20 transition-colors animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{t('about.values.title')}</h3>
              <p className="text-foreground/80">{t('about.values.desc')}</p>
            </Card>
          </div>

          {/* Values Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 border-muted/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-fade-in opacity-0"
                style={{ 
                  animationDelay: `${0.7 + index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{t(value.titleKey)}</h4>
                      <p className="text-foreground/80">{t(value.descKey)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              {t('about.stats.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-fade-in opacity-0"
                  style={{ 
                    animationDelay: `${0.8 + index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-foreground/80">{t(achievement.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center p-6 border-muted/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in opacity-0"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{t(member.role)}</p>
                <p className="text-sm text-foreground/80">{t(member.bio)}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                {t('about.cta.contact')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                {t('about.cta.services')}
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