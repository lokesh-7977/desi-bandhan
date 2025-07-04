
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import LanguageSelector from "./language-selector";
import Link from "next/link";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">DesiBandhan</h1>
              <p className="text-xs md:text-sm text-slate-600 -mt-1 hidden sm:block">{t('hero.tagline')}</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden sm:flex items-center space-x-4 md:space-x-6">
              <a href="#how-it-works" className="text-sm md:text-base text-slate-600 hover:text-brand-primary transition-colors font-medium">{t('nav.howItWorks')}</a>
              <a href="#about" className="text-sm md:text-base text-slate-600 hover:text-brand-primary transition-colors font-medium">{t('nav.about')}</a>
            </div>
            <LanguageSelector />
          </nav>
        </div>
      </header>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 w-48 h-48 md:w-72 md:h-72 bg-brand-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 w-64 h-64 md:w-96 md:h-96 bg-brand-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-brand-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-brand-primary/20 shadow-lg">
              <Sparkles className="w-4 h-4 text-brand-primary mr-2" />
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-slate-700 font-medium text-sm">{t('hero.trustIndicator')}</span>
            </div>
            
            {/* Mobile-optimized Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
              {t('hero.headline')}
            </h1>
            
            {/* Mobile-optimized Subtext */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
              {t('hero.subtext')}
            </p>
          </div>

          {/* Single CTA Section - Join Waitlist Only */}
          <div className="space-y-6 md:space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href="/waitlist">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white px-12 md:px-16 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  {t('hero.getStarted')}
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </Link>
              
              <p className="text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                🎉 Join 1000+ people waiting for early access
              </p>
            </div>
          </div>

          {/* Mobile-optimized Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center space-y-3 p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-center">{t('hero.verifiedCouples')}</h3>
              <p className="text-sm text-slate-600 text-center leading-relaxed">{t('hero.verifiedCouplesDesc')}</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-center">{t('hero.lgbtqFriendly')}</h3>
              <p className="text-sm text-slate-600 text-center leading-relaxed">{t('hero.lgbtqFriendlyDesc')}</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800 text-center">{t('hero.consentFirst')}</h3>
              <p className="text-sm text-slate-600 text-center leading-relaxed">{t('hero.consentFirstDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;