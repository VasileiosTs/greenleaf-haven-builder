import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'el';

type Translations = {
  [key in Language]: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      benefits: {
        title: string;
        items: {
          title: string;
          description: string;
        }[];
      };
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      environmentalImpact: string;
    };
    howItWorks: {
      title: string;
      subtitle: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    services: {
      title: string;
      items: {
        title: string;
        description: string;
        features: string[];
        cta: string;
      }[];
    };
    subscriptions: {
      title: string;
      subtitle: string;
      annualDiscount: string;
      plans: {
        small: {
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
        medium: {
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
        large: {
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
        enterprise: {
          title: string;
          description: string;
          cta: string;
        };
      };
    };
    contact: {
      title: string;
      subtitle: string;
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

const translations: Translations = {
  en: {
    hero: {
      title: "Green Spaces Made Simple",
      subtitle: "Transform your space with hassle-free, sustainable plant solutions tailored for offices, hotels, restaurants, and more.",
      cta: "Explore Our Packages",
      benefits: {
        title: "Why Choose Us",
        items: [
          {
            title: "Professional Care",
            description: "Expert maintenance and care for your plants"
          },
          {
            title: "Sustainable Solutions",
            description: "Eco-friendly practices and plant selections"
          },
          {
            title: "Tailored Designs",
            description: "Custom plant arrangements for your space"
          }
        ]
      }
    },
    about: {
      title: "About Us",
      subtitle: "Bringing Nature to Your Workspace",
      description: "At BloominTales, we bring nature to your workspace with our hassle-free plant leasing services. Whether you're looking to enhance your office, restaurant, or commercial space, we provide beautifully curated plants with professional maintenance – so you can enjoy a greener environment without the effort.",
      benefits: [
        "Hassle-Free Maintenance: We take care of everything from watering to replacements",
        "Flexible Plans: Choose from small, medium, and large packages to suit your needs",
        "Sustainable Solutions: Eco-friendly and cost-effective plant leasing for your business",
        "Fresh Look, Always: Regular plant refreshes to keep your space vibrant and inviting"
      ],
      environmentalImpact: "We help businesses meet their sustainability goals through biophilic design and carbon-reducing plant solutions, demonstrating corporate environmental responsibility"
    },
    howItWorks: {
      title: "Simple Steps to a Greener Space",
      subtitle: "Transform your workspace with our hassle-free plant leasing service",
      steps: [
        {
          title: "Choose Your Plan",
          description: "Select from our flexible plant leasing packages tailored to your space and needs."
        },
        {
          title: "We Deliver & Maintain",
          description: "Our experts handle delivery, installation, and regular maintenance of your plants."
        },
        {
          title: "Enjoy a Greener Space",
          description: "Transform your workspace with thriving, professionally maintained plants."
        }
      ]
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "Plant Rentals for Offices & Workspaces",
          description: "Boost productivity and employee well-being with biophilic design. Our office plant rental service brings greenery into your workspace with minimal effort on your end.",
          features: [
            "Selection of air-purifying plants",
            "Regular maintenance and replacements",
            "Custom styling to match your office aesthetic"
          ],
          cta: "Request a Quote",
        },
        {
          title: "Airbnb & Short-Term Rental Plant Styling",
          description: "Give your Airbnb or vacation rental a fresh, inviting look with professionally styled plants. First impressions matter—let your guests enjoy a cozy, green retreat.",
          features: [
            "Stylish plant arrangements that elevate your decor",
            "Hassle-free maintenance for long-term hosts",
            "Affordable rental plans for short stays"
          ],
          cta: "Get a Free Design Consultation",
        },
        {
          title: "Green Touch for Restaurants & Cafés",
          description: "Create an inviting, nature-infused ambiance that enhances your guests' dining experience. Our expertly curated plant installations complement your space's style.",
          features: [
            "Indoor & outdoor seating areas",
            "Seasonal plant styling",
            "Statement green walls & centerpieces"
          ],
          cta: "Let's Make Your Space Stand Out!",
        },
        {
          title: "Plant Solutions for Hotels & Hospitality",
          description: "Enhance your hotel's lobby, suites, and common areas with beautiful, low-maintenance greenery. Our flexible rental service ensures your space remains fresh and welcoming year-round.",
          features: [
            "Luxurious plant designs for upscale appeal",
            "Full maintenance service included",
            "Scalable solutions for multi-location properties"
          ],
          cta: "Book a Consultation",
        },
        {
          title: "Healthcare Facility Plant Solutions",
          description: "Create a healing environment with carefully selected plants for hospitals, doctors' offices, and health departments. Our solutions focus on promoting wellness and maintaining strict hygiene standards.",
          features: [
            "Antimicrobial plant selections",
            "Healthcare-compliant maintenance protocols",
            "Evidence-based biophilic design"
          ],
          cta: "Schedule Healthcare Consultation",
        },
        {
          title: "Event & Special Occasion Greenery",
          description: "Transform your events with stunning plant arrangements and living decor. Perfect for corporate gatherings, weddings, conferences, and special celebrations.",
          features: [
            "Custom event-specific designs",
            "Short-term and long-term rental options",
            "Professional setup and removal"
          ],
          cta: "Plan Your Event",
        }
      ]
    },
    subscriptions: {
      title: "Subscription Plans",
      subtitle: "Choose the perfect plant subscription plan for your space. All plans include professional maintenance and care.",
      annualDiscount: "Save 10% with annual subscription",
      plans: {
        small: {
          name: "Small Space",
          price: "50",
          description: "Perfect for small offices and retail spaces up to 50 m²",
          features: [
            "3-5 carefully selected plants",
            "Monthly maintenance visits",
            "Plant health monitoring",
            "Free replacements if needed",
            "Basic plant care consultation"
          ],
          spaceSize: "Up to 50 m²",
          extraOptions: {
            name: "Seasonal Flowering Package",
            description: "Add seasonal flowers and bouquets"
          }
        },
        medium: {
          name: "Medium Space",
          price: "100",
          description: "Ideal for medium-sized spaces between 50-100 m²",
          features: [
            "6-10 curated plants",
            "Bi-weekly maintenance visits",
            "Plant health monitoring",
            "Free replacements if needed",
            "Advanced plant care consultation",
            "Seasonal rotations"
          ],
          spaceSize: "50-100 m²",
          extraOptions: {
            name: "Premium Flowering Package",
            description: "Add premium seasonal flowers and custom bouquets"
          }
        },
        large: {
          name: "Large Space",
          price: "200",
          description: "Designed for large commercial spaces over 100 m²",
          features: [
            "10-15 premium plants",
            "Weekly maintenance visits",
            "Plant health monitoring",
            "Priority replacements",
            "Expert plant care consultation",
            "Seasonal rotations",
            "Custom plant installations"
          ],
          spaceSize: "100+ m²",
          extraOptions: {
            name: "Luxury Flowering Package",
            description: "Add luxury seasonal flowers and weekly custom bouquets"
          }
        },
        enterprise: {
          title: "Enterprise Solutions",
          description: "Need a custom solution for your large business with multiple offices and locations? We offer tailored enterprise plans to meet your specific needs.",
          cta: "Contact Enterprise Sales"
        }
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch to discuss your plant leasing needs",
      form: {
        name: "Full Name",
        businessType: "Business Type",
        spaceSize: "Space Size",
        email: "Email",
        phone: "Phone Number",
        message: "Additional Information",
        submit: "Send Message",
        success: "We'll get back to you as soon as possible."
      }
    },
    menu: {
      services: "Services",
      about: "About",
      contact: "Contact",
      language: "Language",
      plants: "Plants",
      accessories: "Accessories",
      community: "Community",
      shop: "Shop"
    }
  },
  el: {
    hero: {
      title: "Πράσινοι Χώροι με Απλότητα",
      subtitle: "Μεταμορφώστε το χώρο σας με εύκολες, βιώσιμες λύσεις φυτών για γραφεία, ξενοδοχεία, εστιατόρια και άλλα.",
      cta: "Εξερευνήστε τα Πακέτα μας",
      benefits: {
        title: "Γιατί να μας Επιλέξετε",
        items: [
          {
            title: "Επαγγελματική Φροντίδα",
            description: "Εξειδικευμένη συντήρηση και φροντίδα των φυτών σας"
          },
          {
            title: "Βιώσιμες Λύσεις",
            description: "Οικολογικές πρακτικές και επιλογές φυτών"
          },
          {
            title: "Προσαρμοσμένα Σχέδια",
            description: "Εξατομικευμένες διατάξεις φυτών για το χώρο σας"
          }
        ]
      }
    },
    about: {
      title: "Σχετικά με Εμάς",
      subtitle: "Φέρνουμε τη Φύση στο Χώρο Εργασίας σας",
      description: "Στην BloominTales, φέρνουμε τη φύση στο χώρο εργασίας σας με τις υπηρεσίες ενοικίασης φυτών χωρίς άγχος. Είτε θέλετε να βελτιώσετε το γραφείο, το εστιατόριο ή τον εμπορικό σας χώρο, παρέχουμε όμορφα επιμελημένα φυτά με επαγγελματική συντήρηση – ώστε να απολαμβάνετε ένα πιο πράσινο περιβάλλον χωρίς προσπάθεια.",
      benefits: [
        "Συντήρηση Χωρίς Άγχος: Αναλαμβάνουμε τα πάντα, από το πότισμα μέχρι τις αντικαταστάσεις",
        "Ευέλικτα Πακέτα: Επιλέξτε από μικρά, μεσαία και μεγάλα πακέτα που ταιριάζουν στις ανάγκες σας",
        "Βιώσιμες Λύσεις: Οικολογική και οικονομική ενοικίαση φυτών για την επιχείρησή σας",
        "Πάντα Φρέσκια Εμφάνιση: Τακτικές ανανεώσεις φυτών για να διατηρείται ο χώρος σας ζωντανός"
      ],
      environmentalImpact: "Βοηθάμε τις επιχειρήσεις να επιτύχουν τους στόχους βιωσιμότητάς τους μέσω βιοφιλικού σχεδιασμού και λύσεων μείωσης άνθρακα, επιδεικνύοντας εταιρική περιβαλλοντική ευθύνη"
    },
    howItWorks: {
      title: "Απλά Βήματα για έναν πιο Πράσινο Χώρο",
      subtitle: "Μεταμορφώστε το χώρο εργασίας σας με την υπηρεσία ενοικίασης φυτών χωρίς άγχος",
      steps: [
        {
          title: "Επιλέξτε το Πακέτο σας",
          description: "Διαλέξτε από τα ευέλικτα πακέτα ενοικίασης φυτών προσαρμοσμένα στο χώρο και τις ανάγκες σας."
        },
        {
          title: "Εμείς Παραδίδουμε & Συντηρούμε",
          description: "Οι ειδικοί μας αναλαμβάνουν την παράδοση, εγκατάσταση και τακτική συντήρηση των φυτών σας."
        },
        {
          title: "Απολαύστε έναν πιο Πράσινο Χώρο",
          description: "Μεταμορφώστε το χώρο εργασίας σας με ακμάζοντα, επαγγελματικά συντηρημένα φυτά."
        }
      ]
    },
    services: {
      title: "Οι Υπηρεσίες μας",
      items: [
        {
          title: "Ενοικιάσεις Φυτών για Γραφεία & Χώρους Εργασίας",
          description: "Αυξήστε την παραγωγικότητα και την ευημερία των υπαλλήλων με βιοφιλικό σχεδιασμό. Η υπηρεσία ενοικίασης φυτών γραφείου μας φέρνει πράσινο στο χώρο σας με ελάχιστη προσπάθεια από εσάς.",
          features: [
            "Επιλογή αεροκαθαριστικών φυτών",
            "Τακτική συντήρηση και αντικαταστάσεις",
            "Προσαρμοσμένο στυλ για να ταιριάζει με την αισθητική του γραφείου σας"
          ],
          cta: "Ζητήστε μια Προσφορά",
        },
        {
          title: "Φυτική Διακόσμηση για Airbnb & Βραχυχρόνιες Ενοικιάσεις",
          description: "Δώστε στο Airbnb ή τη βραχυχρόνια ενοικίασή σας μια φρέσκια, φιλόξενη εμφάνιση με επαγγελματικά διακοσμημένα φυτά. Οι πρώτες εντυπώσεις μετράνε—αφήστε τους επισκέπτες σας να απολαύσουν μια ζεστή, πράσινη απόδραση.",
          features: [
            "Στυλάτες φυτικές διατάξεις που αναβαθμίζουν τη διακόσμησή σας",
            "Χωρίς άγχος συντήρηση για μακροχρόνιους οικοδεσπότες",
            "Οικονομικά σχέδια ενοικίασης για βραχυχρόνιες διαμονές"
          ],
          cta: "Αποκτήστε μια Δωρεάν Σχεδίαση",
        },
        {
          title: "Πράσινη Επαφή για Εστιατόρια & Καφέ",
          description: "Δημιουργήστε μια φιλόξενη, φυσική ατμόσφαιρα που ενισχύει την εμπειρία φαγητού των επισκεπτών σας. Οι επιμελημένες φυτικές εγκαταστάσεις μας συμπληρώνουν το στυλ του χώρου σας.",
          features: [
            "Εσωτερικοί & εξωτερικοί χώροι καθιστικού",
            "Εποχιακή φυτική διακόσμηση",
            "Δηλωτικές πράσινες τοίχοι & κεντρικά κομμάτια"
          ],
          cta: "Ας Κάνουμε το Χώρο σας να Ξεχωρίσει!",
        },
        {
          title: "Λύσεις Φυτών για Ξενοδοχεία & Φιλοξενία",
          description: "Αυξήστε την υποδοχή, τις σουίτες και τους κοινόχρηστους χώρους του ξενοδοχείου σας με όμορφα, χαμηλής συντήρησης φυτά. Η ευέλικτη υπηρεσία ενοικίασής μας διασφαλίζει ότι ο χώρος σας παραμένει φρέσκος και φιλόξενος όλο το χρόνο.",
          features: [
            "Πολυτελή σχέδια φυτών για ανώτερη απήχηση",
            "Πλήρης υπηρεσία συντήρησης περιλαμβάνεται",
            "Κλιμακωτές λύσεις για πολυάριθμες τοποθεσίες"
          ],
          cta: "Κλείστε μια Συμβουλή",
        },
        {
          title: "Λύσεις Φυτών για Υγειονομικές Εγκαταστάσεις",
          description: "Δημιουργήστε ένα θεραπευτικό περιβάλλον με προσεκτικά επιλεγμένα φυτά για νοσοκομεία, ιατρεία και υγειονομικές υπηρεσίες. Οι λύσεις μας επικεντρώνονται στην προώθηση της ευημερίας και στη διατήρηση αυστηρών προτύπων υγιεινής.",
          features: [
            "Αντιμικροβιακές επιλογές φυτών",
            "Πρωτόκολλα συντήρησης συμβατά με την υγειονομική περίθαλψη",
            "Σχεδιασμός βιοφιλίας με βάση τα στοιχεία"
          ],
          cta: "Προγραμματίστε Συμβουλή Υγειονομικής Περίθαλψης",
        },
        {
          title: "Φυτική Διακόσμηση για Εκδηλώσεις & Ειδικές Περιστάσεις",
          description: "Μεταμορφώστε τις εκδηλώσεις σας με εκπληκτικές φυτικές διατάξεις και ζωντανή διακόσμηση. Ιδανικό για εταιρικές συγκεντρώσεις, γάμους, συνέδρια και ειδικές γιορτές.",
          features: [
            "Προσαρμοσμένα σχέδια για συγκεκριμένες εκδηλώσεις",
            "Επιλογές ενοικίασης βραχυχρόνιας και μακροχρόνιας διάρκειας",
            "Επαγγελματική εγκατάσταση και απομάκρυνση"
          ],
          cta: "Σχεδιάστε την Εκδήλωσή σας",
        }
      ]
    },
    subscriptions: {
      title: "Πακέτα Συνδρομών",
      subtitle: "Επιλέξτε το τέλειο πακέτο συνδρομής φυτών για το χώρο σας. Όλα τα πακέτα περιλαμβάνουν επαγγελματική συντήρηση και φροντίδα.",
      annualDiscount: "Εξοικονομήστε 10% με ετήσια συνδρομή",
      plans: {
        small: {
          name: "Μικρός Χώρος",
          price: "50",
          description: "Ιδανικό για μικρά γραφεία και εμπορικούς χώρους έως 50 τ.μ.",
          features: [
            "3-5 προσεκτικά επιλεγμένα φυτά",
            "Μηνιαίες επισκέψεις συντήρησης",
            "Παρακολούθηση υγείας φυτών",
            "Δωρεάν αντικαταστάσεις αν χρειαστεί",
            "Βασική συμβουλευτική φροντίδας φυτών"
          ],
          spaceSize: "Έως 50 τ.μ.",
          extraOptions: {
            name: "Πακέτο Εποχιακών Λουλουδιών",
            description: "Προσθέστε εποχιακά λουλούδια και μπουκέτα"
          }
        },
        medium: {
          name: "Μεσαίος Χώρος",
          price: "100",
          description: "Ιδανικό για μεσαίους χώρους μεταξύ 50-100 τ.μ.",
          features: [
            "6-10 επιμελημένα φυτά",
            "Δεκαπενθήμερες επισκέψεις συντήρησης",
            "Παρακολούθηση υγείας φυτών",
            "Δωρεάν αντικαταστάσεις αν χρειαστεί",
            "Προηγμένη συμβουλευτική φροντίδας φυτών",
            "Εποχιακές εναλλαγές"
          ],
          spaceSize: "50-100 τ.μ.",
          extraOptions: {
            name: "Premium Πακέτο Λουλουδιών",
            description: "Προσθέστε premium εποχιακά λουλούδια και προσαρμοσμένα μπουκέτα"
          }
        },
        large: {
          name: "Μεγάλος Χώρος",
          price: "200",
          description: "Σχεδιασμένο για μεγάλους εμπορικούς χώρους άνω των 100 τ.μ.",
          features: [
            "10-15 premium φυτά",
            "Εβδομαδιαίες επισκέψεις συντήρησης",
            "Παρακολούθηση υγείας φυτών",
            "Προτεραιότητα στις αντικαταστάσεις",
            "Εξειδικευμένη συμβουλευτική φροντίδας φυτών",
            "Εποχιακές εναλλαγές",
            "Προσαρμοσμένες εγκαταστάσεις φυτών"
          ],
          spaceSize: "100+ τ.μ.",
          extraOptions: {
            name: "Luxury Πακέτο Λουλουδιών",
            description: "Προσθέστε luxury εποχιακά λουλούδια και εβδομαδιαία προσαρμοσμένα μπουκέτα"
          }
        },
        enterprise: {
          title: "Εταιρικές Λύσεις",
          description: "Χρειάζεστε μια προσαρμοσμένη λύση για τη μεγάλη επιχείρησή σας με πολλαπλά γραφεία και τοποθεσίες; Προσφέρουμε προσαρμοσμένα εταιρικά πακέτα για να καλύψουμε τις συγκεκριμένες ανάγκες σας.",
          cta: "Επικοινωνήστε με τις Εταιρικές Πωλήσεις"
        }
      }
    },
    contact: {
      title: "Επικοινωνία",
      subtitle: "Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες ενοικίασης φυτών",
      form: {
        name: "Ονοματεπώνυμο",
        businessType: "Τύπος Επιχείρησης",
        spaceSize: "Μέγεθος Χώρου",
        email: "Email",
        phone: "Τηλέφωνο",
        message: "Επιπλέον Πληροφορίες",
        submit: "Αποστολή Μηνύματος",
        success: "Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό."
      }
    },
    menu: {
      services: "Υπηρεσίες",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      language: "Γλώσσα",
      plants: "Φυτά",
      accessories: "Αξεσουάρ",
      community: "Κοινότητα",
      shop: "Κατάστημα"
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
