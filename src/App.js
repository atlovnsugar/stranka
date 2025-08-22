import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { MapPin, Phone, Mail, Clock, Menu, X, CreditCard, ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Použijeme anglické klíče pro interní logiku
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [practiceInfo, setPracticeInfo] = useState({});
  const [services, setServices] = useState([]); // Přejmenováno z Služby
  const [pricingData, setPricingData] = useState([]); // Přejmenováno z CeníkData
  const [articles, setArticles] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  // THEME SELECTION - Change this line to switch themes:
  // Options: 'professional', 'minimalist', 'colorful', 'warm', 'modern', 'warmBlue', 'turquoise', 'peaGreen', 'rainbow'
  // Add 'Contrast' suffix for high contrast versions: 'professionalContrast', 'minimalistContrast', etc.
  // Add 1/2/3/4 suffix for darker background variations: 'peaGreen1', 'rainbow2', etc.
  const currentTheme = 'peaGreen';

  // FLOWER PATTERN - Set to true to enable flower pattern background
  const enableFlowerPattern = false;

  // BLUE INTENSITY - Only affects peaGreen1 and peaGreen2 themes (values 1-10)
  const blueIntensity = 9;

  // Load data from JSON files
  useEffect(() => {
    const loadData = async () => {
      try {
        const practiceInfoRes = await fetch('/data/practiceInfo.json');
        const servicesRes = await fetch('/data/services.json'); // Upraveno
        const pricingRes = await fetch('/data/pricing.json'); // Upraveno
        const articlesRes = await fetch('/data/articles.json');
        const galleryRes = await fetch('/data/gallery.json');
        setPracticeInfo(await practiceInfoRes.json());
        setServices(await servicesRes.json()); // Upraveno
        setPricingData(await pricingRes.json()); // Upraveno
        setArticles(await articlesRes.json());
        setGalleryImages(await galleryRes.json());
      } catch (error) {
        console.error('Error loading ', error);
      }
    };
    loadData();
  }, []);

  // Theme definitions
  const themes = {
    // Original themes
    professional: {
      primary: 'blue',
      primaryColor: '#3b82f6',
      secondaryColor: '#1e40af',
      backgroundColor: '#f8fafc',
      textColor: '#1e293b',
      accentColor: '#60a5fa',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#0f172a',
      buttonStyle: 'solid'
    },
    minimalist: {
      primary: 'gray',
      primaryColor: '#64748b',
      secondaryColor: '#334155',
      backgroundColor: '#ffffff',
      textColor: '#0f172a',
      accentColor: '#94a3b8',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#0f172a',
      buttonStyle: 'outline'
    },
    colorful: {
      primary: 'purple',
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      backgroundColor: '#f5f3ff',
      textColor: '#1e1b4b',
      accentColor: '#c4b5fd',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#312e81',
      buttonStyle: 'solid'
    },
    warm: {
      primary: 'amber',
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      backgroundColor: '#fffbeb',
      textColor: '#7c2d12',
      accentColor: '#fcd34d',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#7c2d12',
      buttonStyle: 'solid'
    },
    modern: {
      primary: 'teal',
      primaryColor: '#0d9488',
      secondaryColor: '#115e59',
      backgroundColor: '#f0fdfa',
      textColor: '#0f172a',
      accentColor: '#5eead4',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#0f172a',
      buttonStyle: 'solid'
    },
    warmBlue: {
      primary: 'warmBlue',
      primaryColor: '#60a5fa',
      secondaryColor: '#1d4ed8',
      backgroundColor: '#eff6ff',
      textColor: '#1e3a8a',
      accentColor: '#93c5fd',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1e3a8a',
      buttonStyle: 'solid'
    },
    turquoise: {
      primary: 'turquoise',
      primaryColor: '#06b6d4',
      secondaryColor: '#0e7490',
      backgroundColor: '#f0fdfa',
      textColor: '#083344',
      accentColor: '#67e8f9',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#083344',
      buttonStyle: 'solid'
    },
    peaGreen: {
      primary: 'peaGreen',
      primaryColor: '#84cc16',
      secondaryColor: '#3f6212',
      backgroundColor: '#f7fee7',
      textColor: '#1a2e05',
      accentColor: '#bef264',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
      buttonStyle: 'solid'
    },
    rainbow: {
      primary: 'rainbow',
      primaryColor: '#ec4899',
      secondaryColor: '#7e22ce',
      backgroundColor: '#fdf2f8',
      textColor: '#581c87',
      accentColor: '#f472b6',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#581c87',
      buttonStyle: 'solid'
    },
    // High contrast versions
    professionalContrast: {
      primary: 'blue',
      primaryColor: '#1d4ed8',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#3b82f6',
      headerBg: '#000000',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    minimalistContrast: {
      primary: 'gray',
      primaryColor: '#000000',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#64748b',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'outline'
    },
    colorfulContrast: {
      primary: 'purple',
      primaryColor: '#6b21a8',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#8b5cf6',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    warmContrast: {
      primary: 'amber',
      primaryColor: '#b45309',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#f59e0b',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    modernContrast: {
      primary: 'teal',
      primaryColor: '#0f766e',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#0d9488',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    warmBlueContrast: {
      primary: 'warmBlue',
      primaryColor: '#1d4ed8',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#60a5fa',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    turquoiseContrast: {
      primary: 'turquoise',
      primaryColor: '#0891b2',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#06b6d4',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    peaGreenContrast: {
      primary: 'peaGreen',
      primaryColor: '#365314',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#84cc16',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    rainbowContrast: {
      primary: 'rainbow',
      primaryColor: '#be185d',
      secondaryColor: '#000000',
      backgroundColor: '#ffffff',
      textColor: '#000000',
      accentColor: '#ec4899',
      headerBg: '#ffffff',
      cardBg: '#ffffff',
      footerBg: '#000000',
      buttonStyle: 'solid'
    },
    // Darker background variations
    peaGreen1: {
      primary: 'peaGreen',
      primaryColor: '#84cc16',
      secondaryColor: '#3f6212',
      backgroundColor: '#e6fcc0',
      textColor: '#1a2e05',
      accentColor: '#bef264',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
      buttonStyle: 'solid'
    },
    peaGreen2: {
      primary: 'peaGreen',
      primaryColor: '#84cc16',
      secondaryColor: '#3f6212',
      backgroundColor: '#ffedd5',
      textColor: '#1a2e05',
      accentColor: '#bef264',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
      buttonStyle: 'solid'
    },
    peaGreen3: {
      primary: 'peaGreen',
      primaryColor: '#84cc16',
      secondaryColor: '#3f6212',
      backgroundColor: '#d9f99d',
      textColor: '#1a2e05',
      accentColor: '#84cc16',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
      buttonStyle: 'solid'
    },
    peaGreen4: {
      primary: 'peaGreen',
      primaryColor: '#84cc16',
      secondaryColor: '#3f6212',
      backgroundColor: '#bef264',
      textColor: '#1a2e05',
      accentColor: '#84cc16',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
      buttonStyle: 'solid'
    },
    rainbow1: {
      primary: 'rainbow',
      primaryColor: '#ec4899',
      secondaryColor: '#7e22ce',
      backgroundColor: '#fce7f3',
      textColor: '#581c87',
      accentColor: '#f472b6',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#581c87',
      buttonStyle: 'solid'
    },
    rainbow2: {
      primary: 'rainbow',
      primaryColor: '#ec4899',
      secondaryColor: '#7e22ce',
      backgroundColor: '#fbcfe8',
      textColor: '#581c87',
      accentColor: '#f472b6',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#581c87',
      buttonStyle: 'solid'
    },
    rainbow3: {
      primary: 'rainbow',
      primaryColor: '#ec4899',
      secondaryColor: '#7e22ce',
      backgroundColor: '#f9a8d4',
      textColor: '#581c87',
      accentColor: '#f472b6',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#581c87',
      buttonStyle: 'solid'
    },
    rainbow4: {
      primary: 'rainbow',
      primaryColor: '#ec4899',
      secondaryColor: '#7e22ce',
      backgroundColor: '#f472b6',
      textColor: '#581c87',
      accentColor: '#ec4899',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#581c87',
      buttonStyle: 'solid'
    },
    warm1: {
      primary: 'amber',
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      backgroundColor: '#fff7ed',
      textColor: '#7c2d12',
      accentColor: '#fcd34d',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#7c2d12',
      buttonStyle: 'solid'
    },
    warm2: {
      primary: 'amber',
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      backgroundColor: '#ffedd5',
      textColor: '#7c2d12',
      accentColor: '#fcd34d',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#7c2d12',
      buttonStyle: 'solid'
    },
    warm3: {
      primary: 'amber',
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      backgroundColor: '#fed7aa',
      textColor: '#7c2d12',
      accentColor: '#f59e0b',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#7c2d12',
      buttonStyle: 'solid'
    },
    warm4: {
      primary: 'amber',
      primaryColor: '#f59e0b',
      secondaryColor: '#d97706',
      backgroundColor: '#fcd34d',
      textColor: '#7c2d12',
      accentColor: '#f59e0b',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#7c2d12',
      buttonStyle: 'solid'
    },
    colorful1: {
      primary: 'purple',
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      backgroundColor: '#ede9fe',
      textColor: '#1e1b4b',
      accentColor: '#c4b5fd',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#312e81',
      buttonStyle: 'solid'
    },
    colorful2: {
      primary: 'purple',
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      backgroundColor: '#ddd6fe',
      textColor: '#1e1b4b',
      accentColor: '#c4b5fd',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#312e81',
      buttonStyle: 'solid'
    },
    colorful3: {
      primary: 'purple',
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      backgroundColor: '#c4b5fd',
      textColor: '#1e1b4b',
      accentColor: '#8b5cf6',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#312e81',
      buttonStyle: 'solid'
    },
    colorful4: {
      primary: 'purple',
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      backgroundColor: '#a78bfa',
      textColor: '#1e1b4b',
      accentColor: '#8b5cf6',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#312e81',
      buttonStyle: 'solid'
    }
  };

  // Get theme with blue intensity adjustment for peaGreen1 and peaGreen2
  const getAdjustedTheme = () => {
    const baseTheme = themes[currentTheme];
    // Only apply blue intensity to peaGreen1 and peaGreen2
    if ((currentTheme === 'peaGreen1' || currentTheme === 'peaGreen2' || currentTheme === 'peaGreen') && blueIntensity >= 1 && blueIntensity <= 10) {
      // Calculate blue shift: 1 = greenish blue, 10 = deep blue
      const blueValue = Math.min(255, 50 + (blueIntensity * 20));
      const greenValue = Math.max(0, 200 - (blueIntensity * 15));
      const redValue = Math.max(0, 132 - (blueIntensity * 10));
      const adjustedColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      return {
        ...baseTheme,
        primaryColor: adjustedColor,
        secondaryColor: `rgb(${Math.max(0, redValue - 50)}, ${Math.max(0, greenValue - 50)}, ${Math.max(0, blueValue - 50)})`,
        accentColor: `rgb(${Math.min(255, redValue + 50)}, ${Math.min(255, greenValue + 50)}, ${Math.min(255, blueValue + 50)})`
      };
    }
    return baseTheme;
  };

  const theme = getAdjustedTheme();

  // Generate flower pattern CSS
  const getFlowerPattern = () => {
    if (!enableFlowerPattern) return {};
    const flowerSVG = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="8" fill="${theme.primaryColor}" opacity="0.3"/>
        <circle cx="50" cy="35" r="5" fill="${theme.primaryColor}" opacity="0.3"/>
        <circle cx="65" cy="50" r="5" fill="${theme.primaryColor}" opacity="0.3"/>
        <circle cx="50" cy="65" r="5" fill="${theme.primaryColor}" opacity="0.3"/>
        <circle cx="35" cy="50" r="5" fill="${theme.primaryColor}" opacity="0.3"/>
        <circle cx="58" cy="42" r="4" fill="${theme.accentColor}" opacity="0.3"/>
        <circle cx="58" cy="58" r="4" fill="${theme.accentColor}" opacity="0.3"/>
        <circle cx="42" cy="58" r="4" fill="${theme.accentColor}" opacity="0.3"/>
        <circle cx="42" cy="42" r="4" fill="${theme.accentColor}" opacity="0.3"/>
      </svg>
    `);
    return {
      backgroundImage: `url("image/svg+xml,${flowerSVG}")`,
      backgroundSize: '150px 150px',
      backgroundAttachment: 'fixed'
    };
  };

  // Cycle hero images
  useEffect(() => {
    if (practiceInfo.heroImages && practiceInfo.heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentHeroImageIndex((prevIndex) => 
          (prevIndex + 1) % practiceInfo.heroImages.length
        );
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [practiceInfo.heroImages]);

  const Navigation = () => (
    <nav className={`shadow-lg sticky top-0 z-50`} style={{ backgroundColor: theme.headerBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.primaryColor }}
              >
                <span className="text-white font-bold text-lg">PT</span>
              </div>
              <span 
                className="ml-3 text-xl font-bold" 
                style={{ color: theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor }}
              >
                {practiceInfo.name}
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Mapujeme pole objektů se čtyřmi vlastnostmi: label (zobrazení), key (interní identifikátor) */}
            {[
              { label: 'Hlavní stránka', key: 'home' },
              { label: 'Služby', key: 'services' },
              { label: 'O mě', key: 'about' },
              { label: 'Ceník', key: 'pricing' },
              { label: 'Kontakt', key: 'contact' },
              { label: 'Blog', key: 'blog' },
              { label: 'Galerie', key: 'gallery' }
            ].map((item) => (
              <button
                key={item.key} // Použijeme unikátní klíč
                onClick={() => setActiveSection(item.key)} // Nastavujeme interní klíč
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                style={{
                  color: activeSection === item.key ? theme.primaryColor : (theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor),
                  backgroundColor: activeSection === item.key ? `${theme.primaryColor}20` : 'transparent'
                }}
              >
                {item.label} {/* Zobrazujeme český štítek */}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={{ color: theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: theme.headerBg, borderTop: `1px solid ${theme.accentColor}20` }}>
            {/* Stejná logika pro mobilní menu */}
            {[
              { label: 'Hlavní stránka', key: 'home' },
              { label: 'Služby', key: 'services' },
              { label: 'O mě', key: 'about' },
              { label: 'Ceník', key: 'pricing' },
              { label: 'Kontakt', key: 'contact' },
              { label: 'Blog', key: 'blog' },
              { label: 'Galerie', key: 'gallery' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveSection(item.key); // Nastavujeme interní klíč
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                style={{
                  color: activeSection === item.key ? theme.primaryColor : (theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor),
                  backgroundColor: activeSection === item.key ? `${theme.primaryColor}20` : 'transparent'
                }}
              >
                {item.label} {/* Zobrazujeme český štítek */}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <div 
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
    >
      {/* Background images with fade transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {practiceInfo.heroImages && practiceInfo.heroImages.length > 0 && (
          <>
            {practiceInfo.heroImages.map((image, index) => (
              <img 
                key={index}
                src={`/images/${image}`} 
                alt={`Hero Background ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentHeroImageIndex ? 'opacity-20' : 'opacity-0'
                }`}
              />
            ))}
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ color: theme.textColor }}
        >
          {practiceInfo.title || 'Logopedie Petra Tabačíková'}
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style={{ color: `${theme.textColor}cc` }}
        >
          {practiceInfo.subtitle || 'Specializovaná logopedická péče pro děti i dospělé'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('contact')}
            className="px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{
              backgroundColor: theme.primaryColor,
              color: 'white'
            }}
            onMouseOver={(e) => {
              if (theme.buttonStyle === 'solid') {
                e.target.style.backgroundColor = theme.secondaryColor;
              } else {
                e.target.style.backgroundColor = `${theme.primaryColor}20`;
              }
            }}
            onMouseOut={(e) => {
              if (theme.buttonStyle === 'solid') {
                e.target.style.backgroundColor = theme.primaryColor;
              } else {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Objednejte se na návštěvu
          </button>
          <button
            onClick={() => setActiveSection('services')}
            className="border-2 px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{
              borderColor: theme.primaryColor,
              color: theme.primaryColor,
              backgroundColor: 'transparent'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = `${theme.primaryColor}20`;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Služby
          </button>
        </div>
      </div>
    </div>
  );

  // Přejmenováno z Sluzby na Services
  const Services = () => (
    <div 
      className="py-16"
      style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Služby
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.servicesDescription || 'Sem něco napsat o službách. Nebo o něčem jiném.'}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => ( // Použijeme přejmenovaný stav
            <div 
              key={index} 
              className="p-8 rounded-lg transition-shadow hover:shadow-lg"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: theme.textColor }}
              >
                {service.title}
              </h3>
              <p style={{ color: `${theme.textColor}cc` }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Přejmenováno z Ceník na Pricing
  const Pricing = () => (
    <div 
      className="py-16"
      style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Ceník
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto mb-8"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.pricingDescription || 'Všechny naše služby jsou poskytovány v soukromé praxi. Logoped nemá smlouvu s pojišťovnami, proto je nutné platit v hotovosti nebo bankovním převodem.'}
          </p>
        </div>
        <div className="flex justify-center">
          <div 
            className="rounded-lg shadow-sm overflow-hidden w-full max-w-2xl"
            style={{ 
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.primaryColor}`
            }}
          >
            <table className="w-full">
              <thead>
                <tr 
                  style={{ backgroundColor: `${theme.primaryColor}20` }}
                >
                  <th 
                    className="py-4 px-6 text-left font-semibold"
                    style={{ color: theme.textColor }}
                  >
                    Služba
                  </th>
                  <th 
                    className="py-4 px-6 text-right font-semibold"
                    style={{ color: theme.textColor }}
                  >
                    Cena
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => ( // Použijeme přejmenovaný stav
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? '' : 'bg-opacity-50'}
                    style={{ 
                      backgroundColor: index % 2 === 0 ? 'transparent' : `${theme.accentColor}10`,
                      borderBottom: `1px solid ${theme.accentColor}20`
                    }}
                  >
                    <td 
                      className="py-4 px-6"
                      style={{ color: theme.textColor }}
                    >
                      {item.service}
                    </td>
                    <td 
                      className="py-4 px-6 text-right font-medium"
                      style={{ color: theme.textColor }}
                    >
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div 
          className="mt-8 p-6 rounded-lg max-w-3xl mx-auto"
          style={{ 
            backgroundColor: `${theme.primaryColor}10`,
            border: `1px solid ${theme.primaryColor}`
          }}
        >
          <div className="flex items-start">
            <CreditCard 
              className="mr-3 mt-1 flex-shrink-0" 
              size={20} 
              style={{ color: theme.primaryColor }}
            />
            <p style={{ color: theme.textColor }}>
              <span className="font-semibold">Platba:</span> {practiceInfo.paymentInfo || 'Platby jsou přijímány v hotovosti nebo bankovním převodem. Faktury jsou k dispozici na vyžádání. V případě zrušení nebo změny termínu prosím kontaktujte nás nejméně 24 hodin předem, jinak bude účtován plný poplatek.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Přejmenováno z HoursAndLocation na HoursAndLocation
  const HoursAndLocation = () => (
    <div 
      className="py-16"
      style={{ backgroundColor: `${theme.backgroundColor}cc`, ...getFlowerPattern() }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Ordinační hodiny a poloha
          </h2>
          <p 
            className="text-lg"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.hoursLocationDescription || 'Něco něco něco'}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div 
              className="p-8 rounded-lg shadow-sm"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <h3 
                className="text-2xl font-semibold mb-6 flex items-center"
              >
                <Clock 
                  className="mr-3" 
                  size={24} 
                  style={{ color: theme.primaryColor }}
                />
                <span style={{ color: theme.textColor }}>Otevírací doba</span>
              </h3>
              <div className="space-y-4">
                {practiceInfo.hours && practiceInfo.hours.map((hour, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between py-2 border-b"
                    style={{ borderColor: `${theme.accentColor}20` }}
                  >
                    <span 
                      className="font-medium"
                      style={{ color: theme.textColor }}
                    >
                      {hour.day}
                    </span>
                    <span style={{ color: `${theme.textColor}cc` }}>
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="p-8 rounded-lg shadow-sm mt-8"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <h3 
                className="text-2xl font-semibold mb-6 flex items-center"
              >
                <MapPin 
                  className="mr-3" 
                  size={24} 
                  style={{ color: theme.primaryColor }}
                />
                <span style={{ color: theme.textColor }}>Lokace</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin 
                    className="mr-3 mt-1" 
                    size={20} 
                    style={{ color: `${theme.textColor}80` }}
                  />
                  <div>
                    <p 
                      className="font-medium"
                      style={{ color: theme.textColor }}
                    >
                      {practiceInfo.address}
                    </p>
                    <p style={{ color: `${theme.textColor}cc` }}>
                      {practiceInfo.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone 
                    className="mr-3" 
                    size={20} 
                    style={{ color: `${theme.textColor}80` }}
                  />
                  <span style={{ color: `${theme.textColor}cc` }}>
                    {practiceInfo.phone}
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail 
                    className="mr-3" 
                    size={20} 
                    style={{ color: `${theme.textColor}80` }}
                  />
                  <span style={{ color: `${theme.textColor}cc` }}>
                    {practiceInfo.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Fixed map container - now properly sized */}
          <div 
            className="rounded-lg shadow-sm"
            style={{ 
              backgroundColor: theme.cardBg, 
              height: 'fit-content',
              border: `1px solid ${theme.primaryColor}`
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=49.965444,14.380778&z=15&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
        {/* Ceník table on Hlavní stránka page */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 
              className="text-2xl font-bold"
              style={{ color: theme.textColor }}
            >
              Ceník
            </h3>
            <p 
              className="text-lg mt-2"
              style={{ color: `${theme.textColor}cc` }}
            >
              Všechny naše služby jsou poskytovány v soukromé praxi
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="rounded-lg shadow-sm overflow-hidden"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <table className="w-full">
                <thead>
                  <tr 
                    style={{ backgroundColor: `${theme.primaryColor}20` }}
                  >
                    <th 
                      className="py-3 px-4 text-left font-semibold"
                      style={{ color: theme.textColor }}
                    >
                      Služba
                    </th>
                    <th 
                      className="py-3 px-4 text-right font-semibold"
                      style={{ color: theme.textColor }}
                    >
                      Cena
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.slice(0, 3).map((item, index) => ( // Použijeme přejmenovaný stav
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? '' : 'bg-opacity-50'}
                      style={{ 
                        backgroundColor: index % 2 === 0 ? 'transparent' : `${theme.accentColor}10`,
                        borderBottom: `1px solid ${theme.accentColor}20`
                      }}
                    >
                      <td 
                        className="py-3 px-4"
                        style={{ color: theme.textColor }}
                      >
                        {item.service}
                      </td>
                      <td 
                        className="py-3 px-4 text-right font-medium"
                        style={{ color: theme.textColor }}
                      >
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div 
              className="rounded-lg shadow-sm overflow-hidden"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <table className="w-full">
                <thead>
                  <tr 
                    style={{ backgroundColor: `${theme.primaryColor}20` }}
                  >
                    <th 
                      className="py-3 px-4 text-left font-semibold"
                      style={{ color: theme.textColor }}
                    >
                      Služba
                    </th>
                    <th 
                      className="py-3 px-4 text-right font-semibold"
                      style={{ color: theme.textColor }}
                    >
                      Cena
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.slice(3).map((item, index) => ( // Použijeme přejmenovaný stav
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? '' : 'bg-opacity-50'}
                      style={{ 
                        backgroundColor: index % 2 === 0 ? 'transparent' : `${theme.accentColor}10`,
                        borderBottom: `1px solid ${theme.accentColor}20`
                      }}
                    >
                      <td 
                        className="py-3 px-4"
                        style={{ color: theme.textColor }}
                      >
                        {item.service}
                      </td>
                      <td 
                        className="py-3 px-4 text-right font-medium"
                        style={{ color: theme.textColor }}
                      >
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setActiveSection('pricing')} // Použijeme interní klíč
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors"
              style={{
                color: theme.primaryColor,
                backgroundColor: `${theme.primaryColor}20`
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = `${theme.primaryColor}30`;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = `${theme.primaryColor}20`;
              }}
            >
              Zobrazit kompletní ceník
              <svg className="ml-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Blog = () => {
    if (selectedArticle) {
      return (
        <div 
          className="py-16"
          style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
              style={{ color: theme.primaryColor }}
            >
              ← Back to Blog
            </button>
            <article 
              className="rounded-lg shadow-sm p-8"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <h1 
                className="text-3xl font-bold mb-4"
                style={{ color: theme.textColor }}
              >
                {selectedArticle.title}
              </h1>
              <div className="flex items-center text-sm mb-6" style={{ color: `${theme.textColor}cc` }}>
                <span>{selectedArticle.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              
              {/* Zobrazení obrázku článku, pokud existuje */}
              {selectedArticle.image && (
                <div className="mb-6">
                  <img 
                    src={`/images/articles/${selectedArticle.image}`} 
                    alt={selectedArticle.title} 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: theme.textColor }}
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        </div>
      );
    }
    return (
      <div 
        className="py-16"
        style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: theme.textColor }}
            >
              Nedávné články
            </h2>
            <p 
              className="text-lg"
              style={{ color: `${theme.textColor}cc` }}
            >
              {practiceInfo.blogDescription || 'Sem něco napsat'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="rounded-lg overflow-hidden transition-shadow hover:shadow-lg cursor-pointer"
                style={{ 
                  backgroundColor: theme.cardBg,
                  border: `1px solid ${theme.primaryColor}`
                }}
                onClick={() => setSelectedArticle(article)}
              >
                {/* Zobrazení náhledového obrázku článku, pokud existuje */}
                {article.previewImage ? (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`/images/articles/${article.previewImage}`} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div 
                    className="h-48"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.primaryColor}40, ${theme.secondaryColor}40)` 
                    }}
                  ></div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3" style={{ color: `${theme.textColor}80` }}>
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: theme.textColor }}
                  >
                    {article.title}
                  </h3>
                  <p 
                    className="mb-4"
                    style={{ color: `${theme.textColor}cc` }}
                  >
                    {article.excerpt}
                  </p>
                  <button 
                    className="font-medium transition-colors"
                    style={{ color: theme.primaryColor }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArticle(article);
                    }}
                  >
                    Přečtěte si více →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Přejmenováno z Omě na About
  const About = () => (
    <div 
      className="py-16"
      style={{ backgroundColor: `${theme.backgroundColor}cc`, ...getFlowerPattern() }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            O mně
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.aboutDescription || 'Sem něco napsat'}
          </p>
        </div>
        <div 
          className="rounded-lg shadow-sm p-8"
          style={{ 
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.primaryColor}`
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                {/* Obrázek z JSON */}
                {practiceInfo.aboutImage ? (
                  <img
                    src={`/images/${practiceInfo.aboutImage}`}
                    alt={practiceInfo.aboutImageAlt || "O mně - Logoped"}
                    className="rounded-lg shadow-md w-full max-w-sm object-cover h-auto"
                  />
                ) : (
                  <div 
                    className="rounded-lg shadow-md w-full max-w-sm h-64 flex items-center justify-center"
                    style={{ backgroundColor: theme.accentColor }}
                  >
                    <span style={{ color: theme.textColor }}>Obrázek není k dispozici</span>
                  </div>
                )}
                <div 
                  className="absolute inset-0 rounded-lg"
                  style={{ 
                    boxShadow: `0 0 0 2px ${theme.primaryColor}30` 
                  }}
                ></div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p 
                  className="mb-6"
                  style={{ color: `${theme.textColor}cc` }}
                  dangerouslySetInnerHTML={{ __html: practiceInfo.aboutContent || 'Obsah sekce O mně není k dispozici.' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Přejmenováno z Kontakt na Contact
  const Contact = () => (
    <div 
      className="py-16"
      style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Kontaktujte mě
          </h2>
          <p 
            className="text-lg"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.contactDescription || 'Něco sem napsat'}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div 
              className="rounded-lg p-8"
              style={{ 
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ color: theme.textColor }}
              >
                Kontaktní informace
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin 
                    className="mr-4 mt-1" 
                    size={24} 
                    style={{ color: theme.primaryColor }}
                  />
                  <div>
                    <h4 
                      className="font-medium"
                      style={{ color: theme.textColor }}
                    >
                      Adresa
                    </h4>
                    <p style={{ color: `${theme.textColor}cc` }}>
                      {practiceInfo.address}<br />
                      {practiceInfo.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone 
                    className="mr-4" 
                    size={24} 
                    style={{ color: theme.primaryColor }}
                  />
                  <div>
                    <h4 
                      className="font-medium"
                      style={{ color: theme.textColor }}
                    >
                      Telefon
                    </h4>
                    <p style={{ color: `${theme.textColor}cc` }}>
                      {practiceInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail 
                    className="mr-4" 
                    size={24} 
                    style={{ color: theme.primaryColor }}
                  />
                  <div>
                    <h4 
                      className="font-medium"
                      style={{ color: theme.textColor }}
                    >
                      Email
                    </h4>
                    <p style={{ color: `${theme.textColor}cc` }}>
                      {practiceInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Fixed map container - now properly sized */}
            <div 
              className="rounded-lg p-0 mt-8"
              style={{ 
                backgroundColor: theme.cardBg, 
                height: 'fit-content',
                border: `1px solid ${theme.primaryColor}`
              }}
            >
              <h3 
                className="text-2xl font-semibold mb-4 p-6 pb-0"
                style={{ color: theme.textColor }}
              >
                Lokace kanceláře
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=49.965444,14.380778&z=15&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div 
            className="rounded-lg p-8"
            style={{ 
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.primaryColor}`
            }}
          >
            <h3 
              className="text-2xl font-semibold mb-6"
              style={{ color: theme.textColor }}
            >
              Objednejte se k nám
            </h3>
            <p 
              className="mb-6"
              style={{ color: `${theme.textColor}cc` }}
            >
              {practiceInfo.bookingInfo || 'Pro objednání stačí zavolat na naše telefonní číslo a domluvit si termín. První návštěva trvá hodinu a následné 30 minut.'}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone 
                  className="mr-3" 
                  size={20} 
                  style={{ color: theme.primaryColor }}
                />
                <span 
                  className="font-medium"
                  style={{ color: theme.textColor }}
                >
                  {practiceInfo.phone}
                </span>
              </div>
              <div className="flex items-center">
                <Mail 
                  className="mr-3" 
                  size={20} 
                  style={{ color: theme.primaryColor }}
                />
                <span 
                  className="font-medium"
                  style={{ color: theme.textColor }}
                >
                  {practiceInfo.email}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h4 
                className="text-lg font-semibold mb-4"
                style={{ color: theme.textColor }}
              >
                Otevírací doba
              </h4>
              <div className="space-y-2">
                {practiceInfo.hours && practiceInfo.hours.map((hour, index) => (
                  <div key={index} className="flex justify-between">
                    <span style={{ color: `${theme.textColor}80` }}>
                      {hour.day}:
                    </span>
                    <span 
                      className="font-medium"
                      style={{ color: theme.textColor }}
                    >
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Gallery component
  const Gallery = () => (
    <div 
      className="py-16"
      style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: theme.textColor }}
          >
            Galerie
          </h2>
          <p 
            className="text-lg"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.galleryDescription || 'Prohlédněte si naše obrázky'}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => {
                setSelectedGalleryImage(image);
                setIsGalleryOpen(true);
              }}
            >
              <img 
                src={`/images/gallery/${image.filename}`} 
                alt={image.alt || `Galerie obrázek ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for gallery image viewer */}
      {isGalleryOpen && selectedGalleryImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white z-10"
              onClick={() => setIsGalleryOpen(false)}
            >
              <CloseIcon size={32} />
            </button>
            <img 
              src={`/images/gallery/${selectedGalleryImage.filename}`} 
              alt={selectedGalleryImage.alt || 'Galerie obrázek'}
              className="max-w-full max-h-full object-contain"
            />
            {selectedGalleryImage.caption && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
                {selectedGalleryImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    // Nyní porovnáváme interní klíče (anglicky)
    switch (activeSection) {
      case 'home': // Interní klíč pro Hlavní stránka
        return (
          <>
            <Hero />
            <Services />
            <About />
            <HoursAndLocation />
          </>
        );
      case 'services': // Interní klíč pro Služby
        return <Services />;
      case 'about': // Interní klíč pro O mě
        return <About />;
      case 'pricing': // Interní klíč pro Ceník
        return <Pricing />;
      case 'hoursandlocation': // Interní klíč pro Ordinační hodiny a poloha (pokud by byla samostatná sekce)
        return <HoursAndLocation />;
      case 'contact': // Interní klíč pro Kontakt
        return <Contact />;
      case 'blog': // Interní klíč pro Blog
        return <Blog />;
      case 'gallery': // Interní klíč pro Galerie
        return <Gallery />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <HoursAndLocation />
          </>
        );
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
    >
      <Navigation />
      <main>
        {renderContent()}
      </main>
      <footer 
        className="py-12"
        style={{ backgroundColor: theme.footerBg }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <span className="text-white font-bold text-lg">PT</span>
                </div>
                <span 
                  className="ml-3 text-xl font-bold"
                  style={{ color: theme.footerBg === '#000000' || theme.footerBg === 'black' ? 'white' : 'white' }}
                >
                  {practiceInfo.name}
                </span>
              </div>
              <p 
                className="mb-4"
                style={{ color: '#cbd5e1' }}
              >
                {practiceInfo.tagline}
              </p>
            </div>
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'white' }}
              >
                Odkazy
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Hlavní stránka', key: 'home' },
                  { label: 'Služby', key: 'services' },
                  { label: 'O mě', key: 'about' },
                  { label: 'Ceník', key: 'pricing' },
                  { label: 'Kontakt', key: 'contact' },
                  { label: 'Blog', key: 'blog' },
                  { label: 'Galerie', key: 'gallery' }
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => setActiveSection(item.key)} // Nastavujeme interní klíč
                      className="transition-colors"
                      style={{ color: '#cbd5e1' }}
                      onMouseOver={(e) => {
                        e.target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = '#cbd5e1';
                      }}
                    >
                      {item.label} {/* Zobrazujeme český štítek */}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: 'white' }}
              >
                Kontaktní informace
              </h3>
              <div className="space-y-2" style={{ color: '#cbd5e1' }}>
                <p>{practiceInfo.address}</p>
                <p>{practiceInfo.city}</p>
                <p>{practiceInfo.phone}</p>
                <p>{practiceInfo.email}</p>
                <P>IČO: </P>
              </div>
            </div>
          </div>
          <div 
            className="border-t mt-8 pt-8 text-center"
            style={{ borderColor: '#334155', color: '#94a3b8' }}
          >
            <p>&copy; 2025 {practiceInfo.name}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;