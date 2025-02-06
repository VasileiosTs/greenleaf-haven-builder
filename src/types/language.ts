export type Language = 'en' | 'el';

export type TranslationSection = {
  title: string;
  subtitle?: string;
  description?: string;
  [key: string]: any;
};

export type Translations = {
  [key in Language]: {
    hero: TranslationSection & {
      cta: string;
      benefits: {
        title: string;
        items: {
          title: string;
          description: string;
        }[];
      };
    };
    about: TranslationSection & {
      benefits: string[];
      environmentalImpact: string;
    };
    howItWorks: TranslationSection & {
      steps: {
        title: string;
        description: string;
      }[];
    };
    services: TranslationSection & {
      items: {
        title: string;
        description: string;
        features: string[];
        cta: string;
      }[];
    };
    subscriptions: TranslationSection & {
      annualDiscount: string;
      plans: {
        small: PlanType;
        medium: PlanType;
        large: PlanType;
        enterprise: {
          title: string;
          description: string;
          cta: string;
        };
      };
    };
    contact: TranslationSection & {
      form: {
        name: string;
        businessType: string;
        spaceSize: string;
        email: string;
        phone: string;
        message: string;
        submit: string;
        success: string;
      };
    };
    menu: {
      services: string;
      about: string;
      contact: string;
      language: string;
      plants: string;
      accessories: string;
      community: string;
      shop: string;
    };
  };
};

type PlanType = {
  name: string;
  price: string;
  description: string;
  features: string[];
  spaceSize: string;
  extraOptions: {
    name: string;
    description: string;
  };
};