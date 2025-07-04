

import { UserPlus, Heart, MessageCircle, CheckCircle, Coffee } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and create an authentic profile with your preferences, interests, and what you're looking for"
    },
    {
      icon: Heart,
      title: "Smart Matching", 
      description: "Our algorithm connects you with compatible people based on shared values, interests, and relationship goals"
    },
    {
      icon: MessageCircle,
      title: "Start Conversations",
      description: "Break the ice with meaningful conversations and get to know your matches better"
    },
    {
      icon: CheckCircle,
      title: "Build Trust",
      description: "Establish genuine connections through verified profiles and honest communication"
    },
    {
      icon: Coffee,
      title: "Meet in Person",
      description: "When you're both ready, take your connection to the next level with real-world meetings"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your journey to meaningful connections in 5 simple steps
          </p>
        </div>

        {/* Desktop View - Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full opacity-20"></div>
            <div className="absolute top-20 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full animate-[width-grow_3s_ease-out] opacity-60" style={{width: '80%'}}></div>
            
            <div className="flex justify-between items-start relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center max-w-[200px] group animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-brand-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    {/* Connecting dots */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 -right-12 w-24 h-0.5 bg-brand-primary/30"></div>
                    )}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {/* Progress indicator for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-4">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-brand-primary to-brand-secondary opacity-30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
