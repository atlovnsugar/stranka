import React, { useState, useEffect, useCallback  } from 'react';
import { MapPin, Phone, Mail, Clock, Menu, X, CreditCard, ChevronLeft, ChevronRight, X as CloseIcon } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [practiceInfo, setPracticeInfo] = useState({});
  const [services, setServices] = useState([]);
  const [pricingData, setPricingData] = useState([]);
  const [articles, setArticles] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const currentTheme = 'peaGreen';
  const enableFlowerPattern = false;
  const blueIntensity = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const practiceInfoRes = await fetch('/data/practiceInfo.json');
        const servicesRes = await fetch('/data/services.json');
        const pricingRes = await fetch('/data/pricing.json');
        const articlesRes = await fetch('/data/articles.json');
        const galleryRes = await fetch('/data/gallery.json');
        setPracticeInfo(await practiceInfoRes.json());
        setServices(await servicesRes.json());
        setPricingData(await pricingRes.json());
        setArticles(await articlesRes.json());
        setGalleryImages(await galleryRes.json());
      } catch (error) {
        console.error('Error loading ', error);
      }
    };
    loadData();
  }, []);

  // Theme definitions (zůstávají stejné)
  const themes = {
    // ... (váš stávající kód pro themes)
    // (Pro stručnost nejsou zde znovu zahrnuty, předpokládá se, že jsou přítomny)
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

  const getAdjustedTheme = () => {
    const baseTheme = themes[currentTheme];
    if ((currentTheme === 'peaGreen1' || currentTheme === 'peaGreen2' || currentTheme === 'peaGreen') && blueIntensity >= 1 && blueIntensity <= 10) {
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

  useEffect(() => {
    if (practiceInfo.heroImages && practiceInfo.heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentHeroImageIndex((prevIndex) =>
          (prevIndex + 1) % practiceInfo.heroImages.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [practiceInfo.heroImages]);

  // --- POMOCNÁ FUNKCE PRO TVORBU URL ---
  // Tato funkce vytvoří správnou URL pro obrázek v public složce
  const getImageUrl = (imageName, basePath = '/images/') => {
    if (!imageName) return '';
    // Zajistí, že cesta začíná lomítkem a neobsahuje dvojité lomítka
    const normalizedBasePath = basePath.startsWith('/') ? basePath : `/${basePath}`;
    const normalizedImageName = imageName.startsWith('/') ? imageName.substring(1) : imageName;
    return `${normalizedBasePath}${normalizedImageName}`;
  };

  // --- KOMPONENTY ---
  // Zde jsou pouze změněné části, které se týkají obrázků
  // Ostatní komponenty (Navigation, Services, Pricing, atd.) zůstávají stejné

  const Hero = () => {
    // Použití getImageUrl místo require.context
    const currentHeroImageName = practiceInfo.heroImages?.[currentHeroImageIndex];
    const currentHeroImageUrl = currentHeroImageName ? getImageUrl(currentHeroImageName) : '';

    return (
      <div
        className="relative py-16 overflow-hidden"
        style={{ backgroundColor: theme.backgroundColor, ...getFlowerPattern() }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          {practiceInfo.heroImages && practiceInfo.heroImages.length > 0 && (
            <>
              {practiceInfo.heroImages.map((imageName, index) => {
                // Použití getImageUrl místo require.context
                const imageUrl = getImageUrl(imageName);
                return (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Hero Background ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentHeroImageIndex ? 'opacity-60' : 'opacity-0'}`}
                  />
                );
              })}
            </>
          )}
          {/* Fade Overlay for smooth transition at the bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-12 pointer-events-none" // h-32 = 128px fade height, adjust as needed
            style={{
              // Gradient goes from theme background color at the bottom to transparent at the top
              background: `linear-gradient(to top, ${theme.backgroundColor}, transparent)`,
            }}
          ></div>
        </div>
        {/* ... zbytek Hero komponenty zůstává stejný ... */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: theme.textColor }}
          >
            {practiceInfo.title || 'Logopedie Petra Tabačíková'}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl font-bold mx-auto"
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
  };

  const Blog = () => {
    if (selectedArticle) {
      // Použití getImageUrl pro obrázek článku
      const articleImageUrl = selectedArticle.image ? getImageUrl(selectedArticle.image, '/images/articles/') : '';
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
              ← Zpět na Blog
            </button>
            <article
              id={`article-content-${selectedArticle.id || selectedArticle.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="rounded-lg shadow-sm p-8 article-content-wrapper"
              style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.primaryColor}` }}
            >
              {/* Correctly Injected CSS using a <style> tag with a template string */}
              <style>
                {`
                  /* Injected CSS for article images - using ID for maximum specificity */
                  #article-content-${selectedArticle.id || selectedArticle.title.replace(/\s+/g, '-').toLowerCase()} .prose img,
                  #article-content-${selectedArticle.id || selectedArticle.title.replace(/\s+/g, '-').toLowerCase()} img {
                    max-width: 100% !important;
                    width: 100% !important;
                    height: 300px !important; /* <<< Adjust this fixed height value as needed */
                    object-fit: contain !important; /* Ensures the entire image is visible */
                    display: block !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                    margin-top: 1.5rem !important;
                    margin-bottom: 1.5rem !important;
                    border-radius: 0.5rem !important;
                  }
                `}
              </style>
              <h1 className="text-3xl font-bold mb-4" style={{ color: theme.textColor }}>
                {selectedArticle.title}
              </h1>
              <div className="flex items-center text-sm mb-6" style={{ color: `${theme.textColor}cc` }}>
                <span>{selectedArticle.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              {selectedArticle.image && (
                <div className="mb-6">
                  <img
                    src={articleImageUrl} // Assuming articleImageUrl is defined earlier
                    alt={selectedArticle.title}
                    className="w-full h-auto rounded-lg shadow-md" // This main image styling can stay as is
                  />
                </div>
              )}
              {/* Apply the 'prose' class here for the content */}
              <div
                className="prose prose-lg max-w-none" // Removed 'article-content' class, relying on ID and injected CSS
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
              {practiceInfo.blogDescription || ''}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              // Použití getImageUrl pro náhledový obrázek
              const previewImageUrl = article.previewImage ? getImageUrl(article.previewImage, '/images/articles/') : '';
              return (
                <div
                  key={article.id}
                  className="rounded-lg overflow-hidden transition-shadow hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: theme.cardBg,
                    border: `1px solid ${theme.primaryColor}`
                  }}
                  onClick={() => setSelectedArticle(article)}
                >
                  {article.previewImage ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={previewImageUrl}
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
                  {/* ... zbytek karty článku zůstává stejný ... */}
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
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const About = () => {
    // Použití getImageUrl pro obrázek "O mně"
    const aboutImageUrl = practiceInfo.aboutImage ? getImageUrl(practiceInfo.aboutImage) : '';

    return (
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
              {practiceInfo.aboutDescription || ''}
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
                  {practiceInfo.aboutImage ? (
                    <img
                      src={aboutImageUrl}
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
              {/* ... textová část "O mně" zůstává stejná ... */}
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
  };

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
          {galleryImages.map((image, index) => {
            // Použití getImageUrl pro obrázky galerie
            const galleryImageUrl = getImageUrl(image.filename, '/images/gallery/');
            return (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => {
                  setSelectedGalleryImage(image);
                  setIsGalleryOpen(true);
                }}
              >
                <img
                  src={galleryImageUrl}
                  alt={image.alt || `Galerie obrázek ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

      {isGalleryOpen && selectedGalleryImage && (
        <GalleryModal
          images={galleryImages}
          initialImage={selectedGalleryImage}
          onClose={() => setIsGalleryOpen(false)}
          getImageUrl={getImageUrl} // Pass the getImageUrl function
        />
      )}
    </div>
  );
  // --- Add this new component ---
const GalleryModal = ({ images, initialImage, onClose, getImageUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(images.findIndex(img => img.filename === initialImage.filename));
  const [zoomed, setZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const currentImage = images[currentIndex];

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setZoomed(false); // Reset zoom when navigating
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setZoomed(false); // Reset zoom when navigating
  }, [images.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  }, [goToNext, goToPrev, onClose]);

  const handleWheel = useCallback((e) => {
    // Optional: Use Ctrl+Scroll to zoom if desired, or just prevent page scroll
    // if (e.ctrlKey) {
    //   e.preventDefault();
    //   setZoomed(prev => !prev); // Example: Ctrl+Scroll toggles zoom
    // }
    // Prevent background scrolling
    e.preventDefault();
  }, []);

  useEffect(() => {
    // Ensure currentIndex is valid if images change (less likely here, but good practice)
    if (currentIndex >= images.length || currentIndex < 0) {
       setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Add wheel listener to the modal content to prevent background scroll
    const modalContent = document.querySelector('.gallery-modal-content');
    if (modalContent) {
        modalContent.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (modalContent) {
        modalContent.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleKeyDown, handleWheel]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Adjust the threshold as needed
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - Next image
        goToNext();
      } else {
        // Swipe right - Previous image
        goToPrev();
      }
    }
  };

  const imageUrl = getImageUrl(currentImage.filename, '/images/gallery/');

  // --- Determine image display style based on zoom state ---
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: zoomed ? 'auto' : '100%', // 'auto' allows potential overflow for large images if zoomed
    height: zoomed ? 'auto' : '100%', // 'auto' allows potential overflow for large images if zoomed
    objectFit: 'contain', // Crucial for keeping aspect ratio within container
    cursor: zoomed ? 'zoom-out' : 'zoom-in', // Visual cue for zoom state
    transition: 'transform 0.2s ease, width 0.3s ease, height 0.3s ease', // Smooth transition for zoom
    transform: zoomed ? 'scale(1)' : 'scale(1)', // Ensure initial scale is 1
    // Allow image to overflow container when zoomed, but stay centered
    // The parent container will handle scrolling if needed
  };

  // --- Style for the container that holds the image ---
  // This container will manage the scrollable area when zoomed
  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 120px)', // Adjust height to leave space for caption/buttons
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: zoomed ? 'auto' : 'hidden', // Allow scrolling when zoomed
    // Ensure the container itself doesn't cause horizontal scroll on the body
    scrollbarWidth: 'thin', // For Firefox
    scrollbarColor: 'rgba(255, 255, 255, 0.5) transparent', // For Firefox
  };

  // Custom scrollbar styles for Webkit browsers
  const customScrollbarStyle = `
    .gallery-modal-content::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .gallery-modal-content::-webkit-scrollbar-track {
      background: transparent;
    }
    .gallery-modal-content::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 4px;
    }
    .gallery-modal-content::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  `;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4">
      {/* Inject custom scrollbar styles */}
      <style>{customScrollbarStyle}</style>
      <div
        className="gallery-modal-content relative w-full h-full flex flex-col items-center justify-center" // Added class for scrollbar targeting
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
          onClick={goToPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white z-20 p-2 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <CloseIcon size={32} />
        </button>

        {/* Image Container */}
        <div style={imageContainerStyle}>
           {/* Clickable Image */}
          <img
            src={imageUrl}
            alt={currentImage.alt || 'Galerie obrázek'}
            style={imageStyle}
            onClick={() => setZoomed(!zoomed)} // Toggle zoom on click
            className={zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} // Ensure cursor updates
          />
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2 z-10 text-sm md:text-base">
            {currentImage.caption} {/* Display current image caption */}
          </div>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 left-4 text-white bg-black bg-opacity-30 px-2 py-1 rounded text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
// --- End of new component ---
  // --- renderContent a další části zůstávají stejné ---
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
             <div
                className="py-4" // Nastaví vertikální odsazení. Můžete upravit (např. py-6, py-8) podle potřeby.
                style={{
                  backgroundColor: theme.backgroundColor, // Použije aktuální barvu pozadí motivu
                  ...getFlowerPattern(), // Pokud chcete, aby se vzor zobrazil i zde (pokud je povolen)
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Stejné jako v jiných sekcích */}
                  <div className="text-center"> {/* Centrování textu */}
                    <p
                      className="text-lg md:text-xl font-medium italic" // Základní styl pro tagline. Upravte podle potřeby (např. text-xl, font-semibold, normal-case).
                      style={{ color: `${theme.textColor}cc` }} // Použije barvu textu motivu s průhledností (cc = 80% opacity). Můžete odstranit 'cc' pro plnou neprůhlednost.
                    >
                      {practiceInfo.tagline || 'Default Tagline'} {/* Zobrazí tagline z practiceInfo, nebo výchozí text, pokud není tagline nastavena */}
                    </p>
                  </div>
                </div>
              </div>
            <Services />
            <About />
            <HoursAndLocation />
            <Blog />
          </>
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing />;
      case 'hoursandlocation':
        return <HoursAndLocation />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'gallery':
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

  // --- Services, Pricing, HoursAndLocation, Contact, Navigation, Footer ---
  // Tyto komponenty jsou stejné jako ve vašem původním kódu
  // Pouze pro úplnost je zde zahrnuji, ale neměly by být změněny

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
            {practiceInfo.servicesDescription || ''}
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
            {practiceInfo.hoursLocationDescription || ''}
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
                <span style={{ color: theme.textColor }}>Lokace a kontakt</span>
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
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
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
            {practiceInfo.contactDescription || ''}
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
                Kontaktujte mě
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
                Lokace ordinace
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
            <div className="mt-6 flex justify-center"> {/* Flex container pro vycentrování */}
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-2" // Jednoduchý rámček a padding
                   style={{ borderColor: theme.primaryColor }}> // Rámček použije primární barvu motivu
                <img
                  src="/images/QR.png" // Uprav cestu podle skutečného umístění a názvu souboru
                  alt="QR kód pro objednání"
                  className="w-32 h-32 object-contain" // Uprav velikost podle potřeby (např. w-32 = 8rem, h-32 = 8rem)
                />
              </div>
            </div>
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

const Navigation = () => (
  <nav className={`shadow-lg sticky top-0 z-50`} style={{ backgroundColor: theme.headerBg }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main flex container: Distribute space between logo/name block and menu button(s) */}
      <div className="flex justify-between h-16 min-w-0">
        
        {/* Left Block: Logo, PT Circle, Company Name */}
        <div className="flex items-center min-w-0">
          {/* Inner Flex Container for Logo, PT, Name */}
          <div className="flex items-center flex-nowrap min-w-0 flex-shrink">
            {/* SVG Logo */}
            <img
              src="/local_3.svg"
              alt="Logo"
              className="inline-block align-middle mr-2 w-14 h-14 flex-shrink-0"
              style={{
                filter: 'brightness(0) saturate(100%) invert(19%) sepia(84%) saturate(1916%) hue-rotate(204deg) brightness(95%) contrast(92%)',
              }}
            />

            {/* PT Circle */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <span className="text-white font-bold text-lg">PT</span>
            </div>

            {/* Company Name - Kept from your previous version for footer consistency, adjust as needed */}
            <span
              className="ml-3 text-lg sm:text-xl font-bold truncate" // Example size adjustment
              style={{
                color: theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor,
              }}
            >
              {practiceInfo.name}
            </span>
          </div> 
          {/* --- Closing tag for the inner flex container was missing --- */}
        </div> 
        {/* --- Closing tag for the left block --- */}

        {/* Desktop Menu - This needs to be a sibling of the 'Left Block' div, not nested inside it */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
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
              onClick={() => setActiveSection(item.key)}
              className={`px-2 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap`}
              style={{
                color: activeSection === item.key ? theme.primaryColor : (theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor),
                backgroundColor: activeSection === item.key ? `${theme.primaryColor}20` : 'transparent'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            style={{ color: theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor }}
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div> 
      {/* --- Closing tag for the main flex container --- */}
    </div> 
    {/* --- Closing tag for the max-w-7xl container --- */}

    {/* Mobile Dropdown Menu - This is outside the main nav structure, which is correct */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          style={{
            backgroundColor: theme.headerBg,
            borderTop: `1px solid ${theme.accentColor}20`,
            maxWidth: '100vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
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
                setActiveSection(item.key);
                setIsMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              style={{
                color: activeSection === item.key ? theme.primaryColor : (theme.headerBg === '#000000' || theme.headerBg === 'black' ? 'white' : theme.textColor),
                backgroundColor: activeSection === item.key ? `${theme.primaryColor}20` : 'transparent'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

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
                <img
                  src="/local_3.svg"
                  alt="Logo"
                  // Added inline-block and align-middle for better control, kept mr-2 for spacing, w-10 h-10 for size
                  className="inline-block align-middle mr-2 w-14 h-14 flex-shrink-0"
                  // Apply filter to change black (#000) to white (#FFF). Assumes the SVG paths are filled with #000.
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                {/* Container for PT circle and logo */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative" // Added 'relative' for positioning context
                >
                  {/* Background circle for PT */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center absolute" style={{ backgroundColor: theme.primaryColor }}></div>
                  {/* PT Text - Ensure it's above the background */}
                  <span className="text-white font-bold text-lg relative z-10">PT</span>
                </div>
                {/* Logo Image - Placed here, next to PT */}
                {/* Make sure '/your-logo.svg' is the correct path to your SVG in the 'public' folder */}
                {/* Adjust ml-2, w-6, h-6 as needed */}
                <span
                  className="ml-3 text-xl font-bold"
                  style={{ color: theme.footerBg === '#000000' || theme.footerBg === 'black' ? 'white' : 'white', wordWrap: 'break-word', overflowWrap: 'break-word' }}
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
                <p>IČO: 75086301</p>
              </div>
              <div className="mt-4 flex justify-end"> {/* Flex container pro zarovnání vpravo */}
                 <div className="border border-gray-600 rounded p-1" // Jednoduchý rámček a padding
                      style={{ borderColor: theme.primaryColor }}>
                   <img
                     src="/images/QR.png" // Upravená cesta podle skutečného umístění a názvu souboru
                     alt="QR kód pro kontakt"
                     className="w-16 h-16 object-contain" // Menší velikost pro footer (např. w-16 = 4rem, h-16 = 4rem)
                   />
                 </div>
               </div>
            </div>
          </div>
          <div
            className="border-t mt-8 pt-8 text-center"
            style={{ borderColor: '#334155', color: '#94a3b8' }}
          >
            <p>&copy; 2025 {practiceInfo.name}</p>
            <p>Všechna práva vyhrazena.</p>
            <p>Vytvořil Vojtěch Tabačík</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;