import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Leaf, Waves, Globe } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LANGUAGES = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const THEMES = [
  { value: 'light', icon: Sun, label: 'theme.light' },
  { value: 'dark', icon: Moon, label: 'theme.dark' },
  { value: 'green', icon: Leaf, label: 'theme.green' },
  { value: 'blue', icon: Waves, label: 'theme.blue' },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '/', isRoute: true },
    { key: 'nav.services', href: '/services', isRoute: true },
    { key: 'nav.about', href: '/about', isRoute: true },
    { key: 'nav.blog', href: '/blog', isRoute: true },
    { key: 'nav.contact', href: '#contact' },
  ];

  const handleNavigation = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const currentLanguage = LANGUAGES.find(lang => lang.code === language);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ramdut
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group px-2 py-1"
                >
                  {t(item.key)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme and Language Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  {React.createElement(THEMES.find(t => t.value === theme)?.icon || Sun, {
                    className: "h-4 w-4"
                  })}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {THEMES.map((themeOption) => (
                  <DropdownMenuItem
                    key={themeOption.value}
                    onClick={() => setTheme(themeOption.value)}
                    className="flex items-center gap-2"
                  >
                    <themeOption.icon className="h-4 w-4" />
                    {t(themeOption.label)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{currentLanguage?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className="flex items-center gap-2"
                  >
                    <span>{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shop Button */}
            <Button
              onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
              variant="default"
              size="sm"
            >
              {t('nav.shop')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 p-0"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Mobile Theme Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">Tema:</span>
                </div>
                <div className="flex gap-2">
                  {THEMES.map((themeOption) => (
                    <Button
                      key={themeOption.value}
                      variant={theme === themeOption.value ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setTheme(themeOption.value)}
                      className="p-2"
                    >
                      <themeOption.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">Idioma:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={language === lang.code ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage(lang.code as any)}
                      className="justify-start gap-2"
                    >
                      <span>{lang.flag}</span>
                      <span className="text-xs">{lang.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mobile Shop Button */}
              <div className="px-3 py-2">
                <Button
                  onClick={() => window.open('https://ramdut.lojavirtualnuvem.com.br/admin/v2/products', '_blank')}
                  variant="default"
                  className="w-full"
                >
                  {t('nav.shop')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}