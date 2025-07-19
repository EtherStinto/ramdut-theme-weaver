import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en' | 'es' | 'ko' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.features': 'Recursos',
    'nav.about': 'Sobre',
    'nav.pricing': 'Preços',
    'nav.testimonials': 'Depoimentos',
    'nav.contact': 'Contato',
    'nav.shop': 'Loja RAMDUT',
    
    // Hero Section
    'hero.title': 'Ramdut - Soluções Digitais de Nova Geração',
    'hero.subtitle': 'Transforme seu negócio com nossas soluções SaaS inovadoras. Automação inteligente, análise de dados e ferramentas poderosas para o futuro.',
    'hero.cta': 'Começar Agora',
    'hero.demo': 'Ver Demo',
    
    // Features
    'features.title': 'Recursos Poderosos',
    'features.subtitle': 'Tudo que você precisa para transformar seu negócio',
    'features.automation.title': 'Automação Inteligente',
    'features.automation.desc': 'Automatize processos complexos com IA avançada',
    'features.analytics.title': 'Análise Avançada',
    'features.analytics.desc': 'Insights em tempo real para decisões inteligentes',
    'features.security.title': 'Segurança Máxima',
    'features.security.desc': 'Proteção de dados com criptografia de nível militar',
    
    // About
    'about.title': 'Sobre a Ramdut',
    'about.content': 'Somos uma empresa de tecnologia dedicada a criar soluções SaaS inovadoras que transformam a maneira como os negócios operam. Nossa missão é democratizar o acesso a ferramentas avançadas de automação e análise.',
    
    // Pricing
    'pricing.title': 'Planos e Preços',
    'pricing.basic': 'Básico',
    'pricing.pro': 'Profissional',
    'pricing.enterprise': 'Empresarial',
    'pricing.month': '/mês',
    'pricing.choose': 'Escolher Plano',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para transformar seu negócio?',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.whatsapp': 'Falar no WhatsApp',
    
    // Footer
    'footer.rights': '© 2025 Ramdut. Todos os direitos reservados.',
    'footer.terms': 'Termos de Serviço',
    'footer.privacy': 'Política de Privacidade',
    
    // Theme Selector
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.green': 'Verde',
    'theme.blue': 'Azul',
  },
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.shop': 'RAMDUT Shop',
    
    'hero.title': 'Ramdut - Next-Gen Digital Solutions',
    'hero.subtitle': 'Transform your business with our innovative SaaS solutions. Smart automation, data analytics, and powerful tools for the future.',
    'hero.cta': 'Get Started',
    'hero.demo': 'View Demo',
    
    'features.title': 'Powerful Features',
    'features.subtitle': 'Everything you need to transform your business',
    'features.automation.title': 'Smart Automation',
    'features.automation.desc': 'Automate complex processes with advanced AI',
    'features.analytics.title': 'Advanced Analytics',
    'features.analytics.desc': 'Real-time insights for smart decisions',
    'features.security.title': 'Maximum Security',
    'features.security.desc': 'Military-grade encryption data protection',
    
    'about.title': 'About Ramdut',
    'about.content': 'We are a technology company dedicated to creating innovative SaaS solutions that transform how businesses operate. Our mission is to democratize access to advanced automation and analytics tools.',
    
    'pricing.title': 'Plans & Pricing',
    'pricing.basic': 'Basic',
    'pricing.pro': 'Professional',
    'pricing.enterprise': 'Enterprise',
    'pricing.month': '/month',
    'pricing.choose': 'Choose Plan',
    
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your business?',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'Chat on WhatsApp',
    
    'footer.rights': '© 2025 Ramdut. All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.green': 'Green',
    'theme.blue': 'Blue',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.about': 'Acerca de',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.shop': 'Tienda RAMDUT',
    
    'hero.title': 'Ramdut - Soluciones Digitales de Nueva Generación',
    'hero.subtitle': 'Transforma tu negocio con nuestras soluciones SaaS innovadoras. Automatización inteligente, análisis de datos y herramientas poderosas para el futuro.',
    'hero.cta': 'Comenzar Ahora',
    'hero.demo': 'Ver Demo',
    
    'features.title': 'Características Poderosas',
    'features.subtitle': 'Todo lo que necesitas para transformar tu negocio',
    'features.automation.title': 'Automatización Inteligente',
    'features.automation.desc': 'Automatiza procesos complejos con IA avanzada',
    'features.analytics.title': 'Análisis Avanzado',
    'features.analytics.desc': 'Insights en tiempo real para decisiones inteligentes',
    'features.security.title': 'Seguridad Máxima',
    'features.security.desc': 'Protección de datos con cifrado de nivel militar',
    
    'about.title': 'Acerca de Ramdut',
    'about.content': 'Somos una empresa de tecnología dedicada a crear soluciones SaaS innovadoras que transforman la forma en que operan los negocios. Nuestra misión es democratizar el acceso a herramientas avanzadas de automatización y análisis.',
    
    'pricing.title': 'Planes y Precios',
    'pricing.basic': 'Básico',
    'pricing.pro': 'Profesional',
    'pricing.enterprise': 'Empresarial',
    'pricing.month': '/mes',
    'pricing.choose': 'Elegir Plan',
    
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para transformar tu negocio?',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.whatsapp': 'Chatear en WhatsApp',
    
    'footer.rights': '© 2025 Ramdut. Todos los derechos reservados.',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.green': 'Verde',
    'theme.blue': 'Azul',
  },
  ko: {
    'nav.home': '홈',
    'nav.features': '기능',
    'nav.about': '회사소개',
    'nav.pricing': '요금제',
    'nav.testimonials': '고객후기',
    'nav.contact': '연락처',
    'nav.shop': 'RAMDUT 상점',
    
    'hero.title': 'Ramdut - 차세대 디지털 솔루션',
    'hero.subtitle': '혁신적인 SaaS 솔루션으로 비즈니스를 변화시키세요. 스마트 자동화, 데이터 분석, 미래를 위한 강력한 도구.',
    'hero.cta': '시작하기',
    'hero.demo': '데모 보기',
    
    'features.title': '강력한 기능',
    'features.subtitle': '비즈니스 변화에 필요한 모든 것',
    'features.automation.title': '스마트 자동화',
    'features.automation.desc': '고급 AI로 복잡한 프로세스 자동화',
    'features.analytics.title': '고급 분석',
    'features.analytics.desc': '스마트한 의사결정을 위한 실시간 인사이트',
    'features.security.title': '최고 보안',
    'features.security.desc': '군사급 암호화 데이터 보호',
    
    'about.title': 'Ramdut 소개',
    'about.content': '우리는 비즈니스 운영 방식을 변화시키는 혁신적인 SaaS 솔루션 개발에 전념하는 기술 회사입니다. 우리의 사명은 고급 자동화 및 분석 도구에 대한 접근을 민주화하는 것입니다.',
    
    'pricing.title': '요금제 및 가격',
    'pricing.basic': '기본',
    'pricing.pro': '프로페셔널',
    'pricing.enterprise': '기업',
    'pricing.month': '/월',
    'pricing.choose': '플랜 선택',
    
    'contact.title': '연락하기',
    'contact.subtitle': '비즈니스 변화 준비되셨나요?',
    'contact.name': '이름',
    'contact.email': '이메일',
    'contact.message': '메시지',
    'contact.send': '메시지 보내기',
    'contact.whatsapp': '왓츠앱으로 채팅',
    
    'footer.rights': '© 2025 Ramdut. 모든 권리 보유.',
    'footer.terms': '서비스 약관',
    'footer.privacy': '개인정보 정책',
    
    'theme.light': '밝음',
    'theme.dark': '어둠',
    'theme.green': '녹색',
    'theme.blue': '파랑',
  },
  zh: {
    'nav.home': '首页',
    'nav.features': '功能',
    'nav.about': '关于我们',
    'nav.pricing': '价格',
    'nav.testimonials': '客户评价',
    'nav.contact': '联系我们',
    'nav.shop': 'RAMDUT 商店',
    
    'hero.title': 'Ramdut - 下一代数字解决方案',
    'hero.subtitle': '用我们创新的SaaS解决方案改变您的业务。智能自动化、数据分析和面向未来的强大工具。',
    'hero.cta': '立即开始',
    'hero.demo': '查看演示',
    
    'features.title': '强大功能',
    'features.subtitle': '转型业务所需的一切',
    'features.automation.title': '智能自动化',
    'features.automation.desc': '使用先进AI自动化复杂流程',
    'features.analytics.title': '高级分析',
    'features.analytics.desc': '智能决策的实时洞察',
    'features.security.title': '最高安全性',
    'features.security.desc': '军用级加密数据保护',
    
    'about.title': '关于Ramdut',
    'about.content': '我们是一家专注于创建创新SaaS解决方案的技术公司，这些解决方案改变企业运营方式。我们的使命是使先进的自动化和分析工具民主化。',
    
    'pricing.title': '计划和价格',
    'pricing.basic': '基础版',
    'pricing.pro': '专业版',
    'pricing.enterprise': '企业版',
    'pricing.month': '/月',
    'pricing.choose': '选择计划',
    
    'contact.title': '联系我们',
    'contact.subtitle': '准备好改变您的业务了吗？',
    'contact.name': '姓名',
    'contact.email': '邮箱',
    'contact.message': '消息',
    'contact.send': '发送消息',
    'contact.whatsapp': '在WhatsApp上聊天',
    
    'footer.rights': '© 2025 Ramdut. 版权所有。',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    
    'theme.light': '浅色',
    'theme.dark': '深色',
    'theme.green': '绿色',
    'theme.blue': '蓝色',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('ramdut-language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ramdut-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}