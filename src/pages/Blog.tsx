import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/components/LanguageProvider';
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    titleKey: 'blog.post1.title',
    excerptKey: 'blog.post1.excerpt',
    category: 'blog.category.tech',
    date: '2025-01-15',
    readTime: '5 min',
    author: 'Equipe Ramdut',
    image: '/placeholder.svg'
  },
  {
    titleKey: 'blog.post2.title',
    excerptKey: 'blog.post2.excerpt',
    category: 'blog.category.business',
    date: '2025-01-12',
    readTime: '8 min',
    author: 'Equipe Ramdut',
    image: '/placeholder.svg'
  },
  {
    titleKey: 'blog.post3.title',
    excerptKey: 'blog.post3.excerpt',
    category: 'blog.category.design',
    date: '2025-01-10',
    readTime: '6 min',
    author: 'Equipe Ramdut',
    image: '/placeholder.svg'
  },
  {
    titleKey: 'blog.post4.title',
    excerptKey: 'blog.post4.excerpt',
    category: 'blog.category.security',
    date: '2025-01-08',
    readTime: '7 min',
    author: 'Equipe Ramdut',
    image: '/placeholder.svg'
  },
  {
    titleKey: 'blog.post5.title',
    excerptKey: 'blog.post5.excerpt',
    category: 'blog.category.mobile',
    date: '2025-01-05',
    readTime: '9 min',
    author: 'Equipe Ramdut',
    image: '/placeholder.svg'
  },
  {
    titleKey: 'blog.post6.title',
    excerptKey: 'blog.post6.excerpt',
    category: 'blog.category.ai',
    date: '2025-01-03',
    readTime: '12 min',
    author: 'Equipe Ramdut',
    image: '/placeholder.svg'
  }
];

const categories = [
  'blog.category.all',
  'blog.category.tech',
  'blog.category.business',
  'blog.category.design',
  'blog.category.security',
  'blog.category.mobile',
  'blog.category.ai'
];

export default function Blog() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('blog.category.all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'blog.category.all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      t(post.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(post.excerptKey).toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-32 left-8 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 right-12 w-80 h-80 bg-accent/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-in-from-bottom">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('blog.hero.title')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              {t('blog.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={t('blog.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {t(category)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/20 hover:-translate-y-2 animate-fade-in opacity-0 overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={t(post.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {t(post.category)}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {t(post.titleKey)}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {t(post.excerptKey)}
                  </CardDescription>
                  <Button variant="outline" className="w-full group">
                    {t('blog.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">{t('blog.noResults')}</p>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('blog.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1"
              />
              <Button>
                {t('blog.newsletter.cta')}
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