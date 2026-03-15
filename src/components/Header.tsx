import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-secondary/20 ${
        scrolled ? 'bg-black bg-opacity-95 py-2 shadow-2xl backdrop-blur-md' : 'bg-black bg-opacity-90 py-3 md:py-4 shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative z-10">
        <button
          onClick={scrollToTop}
          className="flex items-center group transition-all duration-300 hover:opacity-80"
          title="Frost Studio - Tatuajes y Piercings en Quito"
          aria-label="Ir a inicio - Frost Studio"
        >
          <img
          src="/assets/LogoFrostStudioWebF.webp"
            alt="Frost Studio KRN - Tatuadora Profesional en Quito Centro Norte"
            className="h-[70px] sm:h-[86px] md:h-[115px] w-auto"
          />
        </button>
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#portafolio" title="Ver portafolio de tatuajes realizados en Quito" className="nav-link font-cursive text-2xl text-white">
            Portafolio
          </a>
          <a href="#sobre-mi" title="Sobre Keren Frost y Frost Studio RIMPE" className="nav-link font-cursive text-2xl text-white">
            Sobre Mí
          </a>
          <a href="#contacto" title="Ubicación y contacto del estudio en Quito" className="nav-link font-cursive text-2xl text-white">
            Contacto
          </a>
          <a
            href="#reservar"
            title="Reservar cita de tatuaje o piercing"
            className="ml-5 floating-button bg-secondary text-black px-5 py-2 rounded-full font-cursive text-2xl transition-all duration-300 hover:bg-white"
          >
            Reservar
          </a>
        </nav>

        <a
          href="#reservar"
          className="md:hidden floating-button bg-secondary text-black px-5 py-2 rounded-full font-cursive text-2xl transition-all duration-300 hover:bg-white"
        >
          Reservar
        </a>
      </div>
    </header>
  );
};

export default Header;