import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MessageCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os serviços da Ramdut.`
    );
    window.open(`https://wa.me/5552980228329?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'ramdut2025@gmail.com',
      action: () => window.open('mailto:ramdut2025@gmail.com'),
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+55 52 98022-8329',
      action: handleWhatsApp,
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Brasil • Global',
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <h3 className="text-2xl font-semibold">Envie uma mensagem</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.send')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="w-full border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 text-green-600"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t('contact.whatsapp')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className={`bg-gradient-card border-0 shadow-card ${
                      info.action ? 'cursor-pointer hover:shadow-primary transition-all duration-300' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground/70">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-primary font-medium">Suporte de emergência 24/7 disponível</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}