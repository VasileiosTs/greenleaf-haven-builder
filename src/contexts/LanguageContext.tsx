import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'el';

type Translations = {
  [key in Language]: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    menu: {
      services: string;
      about: string;
      contact: string;
      language: string;
    };
  };
};

const translations: Translations = {
  en: {
    hero: {
      title: "Green Spaces Made Simple",
      subtitle: "Transform your space with hassle-free, sustainable plant solutions tailored for offices, hotels, restaurants, and more.",
      cta: "Explore Our Packages"
    },
    menu: {
      services: "Services",
      about: "About",
      contact: "Contact",
      language: "Language"
    }
  },
  el: {
    hero: {
      title: "Απλοί Πράσινοι Χώροι",
      subtitle: "Μεταμορφώστε το χώρο σας με εύκολες, βιώσιμες λύσεις φυτών για γραφεία, ξενοδοχεία, εστιατόρια και άλλα.",
      cta: "Εξερευνήστε τα Πακέτα μας"
    },
    menu: {
      services: "Υπηρεσίες",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      language: "Γλώσσα"
    }
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    for (const key of keys) {
      value = value[key];
    }
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};