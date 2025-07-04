"use client";

import { Heart, Shield, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">FAQs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Community Guidelines</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Help Center</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Safety Tips</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Report Issues</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Feedback</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Success Stories</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Events</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Groups</a></li>
              <li><a href="#" className="text-slate-300 hover:text-brand-accent transition-colors text-sm md:text-base">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold mb-4">Trust & Safety</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-sm text-slate-300">Consent Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-400" />
                <span className="text-sm text-slate-300">LGBTQ+ Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                <span className="text-sm text-slate-300">24/7 Safety Team</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                <span className="text-sm text-slate-300">Verified Couples</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center space-y-4">
          <p className="text-slate-300 text-sm md:text-base">
            {t('footer.copyright')}
          </p>
          <p className="text-xs md:text-sm text-slate-400">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
