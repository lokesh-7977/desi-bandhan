

import { Shield, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

const USPSection = () => {
  const { t } = useLanguage();

  const usps = [
    {
      icon: Shield,
      title: t('usp.verifiedTitle'),
      description: t('usp.verifiedDesc'),
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Heart,
      title: t('usp.consentTitle'), 
      description: t('usp.consentDesc'),
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Users,
      title: t('usp.safeTitle'),
      description: t('usp.safeDesc'),
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4">
            {t('usp.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            {t('usp.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {usps.map((usp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6 md:p-8 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${usp.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <usp.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{usp.title}</h3>
                <p className="text-slate-600 leading-relaxed">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
