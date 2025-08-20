import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Menu, X, CreditCard } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [practiceInfo, setPracticeInfo] = useState({});
  const [services, setServices] = useState([]);
  const [pricingData, setPricingData] = useState([]);
  const [articles, setArticles] = useState([]);

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
        const servicesRes = await fetch('/data/services.json');
        const pricingRes = await fetch('/data/pricing.json');
        const articlesRes = await fetch('/data/articles.json');
        
        setPracticeInfo(await practiceInfoRes.json());
        setServices(await servicesRes.json());
        setPricingData(await pricingRes.json());
        setArticles(await articlesRes.json());
      } catch (error) {
        console.error('Error loading data:', error);
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
      footerBg: '#415ea3',
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
      backgroundColor: '#fdba74',
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
    },
    // New themes with turquoise buttons
    peaGreen1T: {
      primary: 'peaGreen',
      primaryColor: '#06b6d4', // turquoise color
      secondaryColor: '#0e7490', // turquoise secondary
      backgroundColor: '#fff7ed',
      textColor: '#1a2e05',
      accentColor: '#67e8f9',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
      buttonStyle: 'solid'
    },
    peaGreen2T: {
      primary: 'peaGreen',
      primaryColor: '#06b6d4', // turquoise color
      secondaryColor: '#0e7490', // turquoise secondary
      backgroundColor: '#ffedd5',
      textColor: '#1a2e05',
      accentColor: '#67e8f9',
      headerBg: 'white',
      cardBg: 'white',
      footerBg: '#1a2e05',
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
      backgroundImage: `url("data:image/svg+xml,${flowerSVG}")`,
      backgroundSize: '150px 150px',
      backgroundAttachment: 'fixed'
    };
  };

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
            {['Home', 'Services', 'About', 'Pricing', 'Contact', 'Blog'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                style={{
                  color: activeSection === item.toLowerCase() ? theme.primaryColor : (theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor),
                  backgroundColor: activeSection === item.toLowerCase() ? `${theme.primaryColor}20` : 'transparent'
                }}
              >
                {item}
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
            {['Home', 'Services', 'About', 'Pricing', 'Contact', 'Blog'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                style={{
                  color: activeSection === item.toLowerCase() ? theme.primaryColor : (theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor),
                  backgroundColor: activeSection === item.toLowerCase() ? `${theme.primaryColor}20` : 'transparent'
                }}
              >
                {item}
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
      {/* Background image gallery */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 grid-rows-2 h-full w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="relative overflow-hidden"
              style={{ opacity: 0.3 }}
            >
              <img
                src={`https://placehold.co/600x400/${theme.primaryColor.replace('#', '')}/ffffff?text=Speech+Therapy+${item}`}
                alt={`Speech therapy ${item}`}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  backgroundColor: theme.primaryColor,
                  opacity: 0.2
                }}
              ></div>
            </div>
          ))}
        </div>
        {/* Overlay gradient for better text visibility */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${theme.backgroundColor}ee 0%, ${theme.primaryColor}44 50%, ${theme.secondaryColor}44 100%)`
          }}
        ></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: theme.textColor }}
          >
            {practiceInfo.name}
          </h1>
          <p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: `${theme.textColor}cc` }}
          >
            {practiceInfo.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('contact')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                theme.buttonStyle === 'solid' 
                  ? 'text-white' 
                  : 'border-2'
              }`}
              style={{
                backgroundColor: theme.buttonStyle === 'solid' ? theme.primaryColor : 'transparent',
                borderColor: theme.buttonStyle === 'outline' ? theme.primaryColor : 'transparent',
                color: theme.buttonStyle === 'outline' ? theme.primaryColor : 'white'
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
              Schedule Consultation
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
    </div>
  );

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
            Comprehensive speech therapy services tailored to meet the unique needs of each client
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
            Všechny naše služby jsou poskytovány v soukromé praxi. Logoped nemá smlouvu s pojišťovnami, 
            proto je nutné platit v hotovosti nebo bankovním převodem.
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
                {pricingData.map((item, index) => (
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
              <span className="font-semibold">Platba:</span> Platby jsou přijímány v hotovosti nebo bankovním převodem. 
              Faktury jsou k dispozici na vyžádání. V případě zrušení nebo změny termínu prosím kontaktujte nás 
              nejméně 24 hodin předem, jinak bude účtován plný poplatek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

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
            Hours & Location
          </h2>
          <p 
            className="text-lg"
            style={{ color: `${theme.textColor}cc` }}
          >
            We're here to support your communication journey
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
                <span style={{ color: theme.textColor }}>Location</span>
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
        {/* Pricing table on home page */}
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
                  {pricingData.slice(0, 3).map((item, index) => (
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
                  {pricingData.slice(3).map((item, index) => (
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
              onClick={() => setActiveSection('pricing')}
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
              Latest Articles
            </h2>
            <p 
              className="text-lg"
              style={{ color: `${theme.textColor}cc` }}
            >
              Insights and resources for communication wellness
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
                <div 
                  className="h-48"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.primaryColor}40, ${theme.secondaryColor}40)` 
                  }}
                ></div>
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
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
            About Us
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ color: `${theme.textColor}cc` }}
          >
            Dedicated to helping individuals of all ages achieve their communication goals
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
                <img
                  src="https://placehold.co/300x400/e2e8f0/64748b?text=Professional+Headshot"
                  alt="Speech Therapist Headshot"
                  className="rounded-lg shadow-md w-full max-w-sm"
                />
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
                >
                  At {practiceInfo.name}, we believe that effective communication is fundamental to human connection and personal success. 
                  Our licensed speech-language pathologists are committed to providing compassionate, evidence-based care tailored to each 
                  individual's unique needs and goals.
                </p>
                <p 
                  className="mb-6"
                  style={{ color: `${theme.textColor}cc` }}
                >
                  With over 15 years of combined experience, our team specializes in treating a wide range of communication disorders 
                  including articulation delays, language disorders, voice disorders, and fluency disorders. We work collaboratively 
                  with families, educators, and healthcare professionals to ensure comprehensive care.
                </p>
                <p 
                  style={{ color: `${theme.textColor}cc` }}
                >
                  Our approach combines clinical expertise with a deep understanding of the emotional and social aspects of communication. 
                  We create a supportive environment where clients feel empowered to develop their communication skills and build confidence.
                </p>
                <div 
                  className="mt-8 pt-6 border-t"
                  style={{ borderColor: `${theme.accentColor}20` }}
                >
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.textColor }}
                  >
                    Meet Our Lead Therapist
                  </h3>
                  <p style={{ color: `${theme.textColor}cc` }}>
                    Sarah Johnson, M.S., CCC-SLP is a certified speech-language pathologist with over 15 years of experience. 
                    She specializes in pediatric speech therapy and has helped hundreds of children achieve their communication goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
            Contact Us
          </h2>
          <p 
            className="text-lg"
            style={{ color: `${theme.textColor}cc` }}
          >
            We'd love to hear from you
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
                Get in Touch
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
                      Address
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
                      Phone
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
                Office Location
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
              Pro objednání stačí zavolat na naše telefonní číslo a domluvit si termín. První návštěva trvá hodinu a následné 30 minut.
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

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <HoursAndLocation />
          </>
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing />;
      case 'hours':
        return <HoursAndLocation />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
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
                Quick Links
              </h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'About', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveSection(item.toLowerCase())}
                      className="transition-colors"
                      style={{ color: '#cbd5e1' }}
                      onMouseOver={(e) => {
                        e.target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = '#cbd5e1';
                      }}
                    >
                      {item}
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
                Contact Info
              </h3>
              <div className="space-y-2" style={{ color: '#cbd5e1' }}>
                <p>{practiceInfo.address}</p>
                <p>{practiceInfo.city}</p>
                <p>{practiceInfo.phone}</p>
                <p>{practiceInfo.email}</p>
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