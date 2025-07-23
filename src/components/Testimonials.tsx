import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'TechBrasil Corp',
    role: 'Empresa de Tecnologia',
    content: 'A Ramdut transformou completamente nossa operação. Em 6 meses, aumentamos nossa eficiência em 300%.',
    rating: 5,
    flag: '🇧🇷',
    icon: '💼',
  },
  {
    name: 'GlobalTech Solutions',
    role: 'Consultoria Internacional',
    content: 'Incredible automation capabilities. Ramdut helped us scale our operations without increasing our team size.',
    rating: 5,
    flag: '🇺🇸',
    icon: '🌐',
  },
  {
    name: 'InnovaSpain',
    role: 'Startup Inovadora',
    content: 'La plataforma más intuitiva que hemos usado. El soporte técnico es excepcional y siempre disponible.',
    rating: 5,
    flag: '🇪🇸',
    icon: '🚀',
  },
  {
    name: 'SeoulTech',
    role: 'Desenvolvimento de Software',
    content: '놀라운 자동화 기능으로 우리 팀의 생산성이 크게 향상되었습니다. 한국 시장에 완벽하게 맞습니다.',
    rating: 5,
    flag: '🇰🇷',
    icon: '⚡',
  },
  {
    name: '北京创新科技',
    role: 'Empresa de Inovação',
    content: '优秀的SaaS平台，帮助我们实现了数字化转型。客户服务团队非常专业。',
    rating: 5,
    flag: '🇨🇳',
    icon: '🎯',
  },
  {
    name: 'PortoTech',
    role: 'Consultoria em TI',
    content: 'Interface intuitiva e recursos avançados. A Ramdut nos ajudou a economizar milhares de horas mensais.',
    rating: 5,
    flag: '🇧🇷',
    icon: '💎',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Mais de 10.000 empresas confiam na Ramdut para transformar seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Company Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <span className="text-2xl">{testimonial.icon}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs">{testimonial.flag}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <div className="text-sm text-foreground/60">Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-sm text-foreground/60">Avaliação Média</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-sm text-foreground/60">Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-foreground/60">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}