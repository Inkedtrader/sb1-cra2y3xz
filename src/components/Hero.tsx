import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllPortfolioItems, shuffleArray } from '../data/portfolioData';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [imageLoadError, setImageLoadError] = useState<{ [key: number]: boolean }>({});
  const [preloadedImages, setPreloadedImages] = useState<{ [key: number]: boolean }>({});

  const tattooImages = useMemo(() => {
    const allItems = getAllPortfolioItems();
    const shuffled = shuffleArray(allItems);

    return shuffled.map(item => ({
      src: item.image,
      alt: item.alt,
      title: item.title
    }));
  }, []);

  const handleImageError = useCallback((index: number) => {
    setImageLoadError(prev => ({ ...prev, [index]: true }));
  }, []);
  
  useEffect(() => {
    const mainBg = new Image();
    mainBg.src = '/assets/herobackground.frost.webp';

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setOffset(scrollY);
      const newOpacity = Math.max(0, 1 - (scrollY / window.innerHeight));
      setHeroOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AUTO-PLAY LOGIC: Resets every time currentImageIndex changes (manual or auto)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % tattooImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tattooImages.length, currentImageIndex]);

  useEffect(() => {
    const preloadNextImages = () => {
      const nextIndex1 = (currentImageIndex + 1) % tattooImages.length;
      const nextIndex2 = (currentImageIndex + 2) % tattooImages.length;

      [nextIndex1, nextIndex2].forEach((index) => {
        if (!preloadedImages[index] && !imageLoadError[index]) {
          const img = new Image();
          img.onload = () => {
            setPreloadedImages(prev => ({ ...prev, [index]: true }));
          };
          img.src = tattooImages[index].src;
        }
      });
    };
    preloadNextImages();
  }, [currentImageIndex, tattooImages, preloadedImages, imageLoadError]);

  const carouselContainerStyle = useMemo(() => ({
    willChange: 'transform, opacity',
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden' as const,
    contain: 'layout style paint' as const,
  }), []);

  return (
    <section
      id="inicio"
      role="img"
      aria-label="Frost Studio - Estudio de tatuajes personalizados y piercings profesionales en Quito"
      className="relative min-h-screen md:min-h-[110vh] flex items-center justify-center overflow-hidden z-0 pt-24 md:pt-32 md:pb-16"
      style={{
        backgroundImage: `url('/assets/herobackground.frost.webp')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: `translateY(${offset * 0.5}px)`,
        isolation: 'isolate' as const,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" style={{ opacity: heroOpacity }}></div>

      <div className="absolute inset-0" style={{ opacity: heroOpacity }}>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent1/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 z-10 transition-opacity duration-500" style={{ opacity: heroOpacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-12rem)] py-8 md:py-12 md:pb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left px-2 md:px-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-stylish mb-4 md:mb-6 text-white leading-tight">
              Frost Studio
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-gray-200 font-alta tracking-wide">
              Estudio de tatuajes y piercings privado en Quito.
            </p>
<div className="space-y-2 mb-6 md:mb-8">
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-stylish text-secondary italic leading-tight">
    <span className="block">Técnica sólida y diseños personalizados.</span>
    <span className="block">Arte consciente para la piel desde el corazón de la ciudad.</span>
  </h2>
</div>
            <motion.a
              href="#portafolio"
              className="floating-button inline-block bg-secondary text-black px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-stylish hover:bg-white transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(127, 219, 255, 0.6)' 
              }}
            >
              Ver Portafolio
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-none pb-8 md:pb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent1 rounded-2xl blur-xl opacity-30 scale-110"></div>

              <motion.div
                layout="position"
                className="relative"
                style={carouselContainerStyle}
              >
                <AnimatePresence mode="wait">
                  {!imageLoadError[currentImageIndex] ? (
                    <motion.img
                      key={currentImageIndex}
                      src={tattooImages[currentImageIndex].src}
                      alt={tattooImages[currentImageIndex].alt}
                      title={tattooImages[currentImageIndex].title}
                      onError={() => handleImageError(currentImageIndex)}
                      loading="eager"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-2xl shadow-2xl w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[341px] xl:max-w-[409px] h-auto object-cover border-2 border-secondary border-opacity-30 mx-auto"
                      style={{
                        filter: 'brightness(1.1) contrast(1.05)',
                        boxShadow: '0 20px 40px rgba(127, 219, 255, 0.3)',
                      }}
                    />
                  ) : (
                    <div className="h-[300px] bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500">Imagen no disponible</div>
                  )}
                </AnimatePresence>
                
                {/* INTERACTIVE PAGINATION DOTS */}
                <div className="flex justify-center gap-2 mt-6 lg:mt-8 relative z-20">
                  {tattooImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer pointer-events-auto ${
                        currentImageIndex === index 
                          ? 'bg-secondary w-6 shadow-[0_0_10px_rgba(182,155,125,0.8)]' 
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={currentImageIndex === index ? 'true' : 'false'}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);