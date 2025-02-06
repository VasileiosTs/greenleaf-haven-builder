import { Translations } from '../types/language';

export const englishTranslations: Translations['en'] = {
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
};
