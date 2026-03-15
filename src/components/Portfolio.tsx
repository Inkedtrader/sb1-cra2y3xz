import React, { useState, useCallback, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { getAllPortfolioItems, PortfolioItem } from '../data/portfolioData';

const ImageModal = lazy(() => import('./ImageModal'));

const portfolioItems = getAllPortfolioItems();

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCloseModal = useCallback(() => setSelectedImage(null), []);
  const handleExpandClick = useCallback(() => setIsExpanded(true), []);

  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = portfolioItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    setSelectedImage(portfolioItems[nextIndex]);
  }, [selectedImage]);

  const handlePrevious = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = portfolioItems.findIndex(item => item.id === selectedImage.id);
    const previousIndex = currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
    setSelectedImage(portfolioItems[previousIndex]);
  }, [selectedImage]);

  const getCurrentIndex = useCallback(() => {
    if (!selectedImage) return -1;
    return portfolioItems.findIndex(item => item.id === selectedImage.id);
  }, [selectedImage]);

  return (
 <section id="portafolio" className="relative z-30 py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-stylish mb-6 text-white">
            Mi <span className="text-secondary">Portafolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-alta tracking-wide">
            Cada diseño nace de una conversación y se convierte en una pieza pensada para durar.
          </p>
        </div>

        {/* The Grid: We render ALL items, but hide extra ones via CSS classes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            // CSS Logic: 
            // - Always show first 3. 
            // - On Desktop (md:), show first 9.
            // - If isExpanded is true, show everything.
            const hideClass = isExpanded 
              ? "block" 
              : index >= 9 
                ? "hidden" 
                : index >= 3 
                  ? "hidden md:block" 
                  : "block";

            return (
              <motion.div
                key={item.id}
                className={`portfolio-item group cursor-pointer ${hideClass}`}
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          {!isExpanded && (
            <button
              onClick={handleExpandClick}
              className="text-gray-300 font-alta hover:text-secondary transition-colors duration-300 underline decoration-secondary decoration-2 underline-offset-8 text-2xl mb-12"
            >
              Ver portafolio completo
            </button>
          )}

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <a href="#reservar" className="floating-button bg-secondary text-black px-8 py-4 rounded-full font-stylish w-full md:w-auto text-center">
              Reservar Sesión
            </a>
<button 
  onClick={() => {
    // 1. Set the signal for the Footer
    sessionStorage.setItem('highlightSocial', Date.now().toString());
    
    // 2. Force the "Direct Ping" event
    window.dispatchEvent(new Event('forceSocialHighlight'));
    
    // 3. FORCE the scroll even if the URL is already #contacto
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 4. Update the hash without triggering a "jump" (for SEO/Consistency)
    window.history.replaceState(null, '', '#contacto');
  }} 
  className="floating-button border border-secondary text-secondary px-8 py-4 rounded-full font-stylish w-full md:w-auto text-center"
>
  Ver más en redes
</button>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <ImageModal
          isOpen={selectedImage !== null}
          onClose={handleCloseModal}
          imageSrc={selectedImage?.image || ''}
          imageAlt={selectedImage?.alt || ''}
          title={selectedImage?.title || ''}
          category={selectedImage?.category || ''}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={getCurrentIndex()}
          totalImages={portfolioItems.length}
        />
      </Suspense>
    </section>
  );
};

export default Portfolio;