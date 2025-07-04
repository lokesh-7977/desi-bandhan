"use client";

import React from 'react';
import { Languages } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage, Language } from '@/contexts/language-context';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'te' as Language, name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'kn' as Language, name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'ml' as Language, name: 'Malayalam', nativeName: 'മലയാളം' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="flex items-center space-x-2">
      <Languages className="w-4 h-4 text-slate-600" />
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className="w-auto border-none shadow-none bg-transparent p-0 h-auto focus:ring-0">
          <SelectValue className="text-slate-600 font-medium">
            {currentLanguage?.nativeName}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white border border-slate-200 shadow-lg z-50">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50"
            >
              <div className="flex flex-col">
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-xs text-slate-500">{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
