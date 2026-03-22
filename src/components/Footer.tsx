import React, { useEffect, useState } from 'react';
import { Snowflake, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TikTokIcon: React.FC<{ size: number; className: string }> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  const [highlightSocial, setHighlightSocial] = useState(false);

  // WhatsApp Configuration
  const phoneNumber = "593983813224";
  const footerMessage = "Hola Keren! Llegué al final de tu portafolio web y me decidí: quiero agendar una cita. ¿Me ayudas con info";
  const footerWaUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(footerMessage)}`;

  useEffect(() => {
    const triggerHighlight = () => {
      setHighlightSocial(false);
      const startTimer = setTimeout(() => {
        setHighlightSocial(true);
      }, 150);

      const endTimer = setTimeout(() => {
        setHighlightSocial(false);
        sessionStorage.removeItem('highlightSocial');
      }, 4000);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    };

    window.addEventListener('hashchange', triggerHighlight);
    window.addEventListener('forceSocialHighlight', triggerHighlight);

    if (sessionStorage.getItem('highlightSocial')) {
      triggerHighlight();
    }

    return () => {
      window.removeEventListener('hashchange', triggerHighlight);
      window.removeEventListener('forceSocialHighlight', triggerHighlight);
    };
  }, []);

  return (
    <footer id="contacto" className="relative z-30 bg-black text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <Snowflake className="text-secondary mr-2" size={24} />
              <h3 className="text-xl font-stylish">
                <span className="text-secondary">Frost</span> Studio
              </h3>
            </div>
            <div className="text-gray-400 font-alta space-y-1">
              <p>Arte permanente.</p>
              <p>Elegancia eterna.</p>
              <p>Atención de calidad.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-stylish mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 font-alta">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-secondary transition-colors">Inicio</button></li>
              <li><a href="#portafolio" className="text-gray-400 hover:text-secondary transition-colors">Portafolio</a></li>
              <li><a href="#sobre-mi" className="text-gray-400 hover:text-secondary transition-colors">Sobre Mí</a></li>
              <li><a href="#reservar" className="text-gray-400 hover:text-secondary transition-colors">Reservar</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-stylish mb-4">Contacto</h3>
            <ul className="space-y-3 font-alta">
              <li className="flex items-center">
                <Phone size={18} className="text-secondary mr-2" />
                <a 
                  href={footerWaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  098 381 3224
                </a>
              </li>
              <li>
               <a 
                href="https://www.google.com/maps?q=Luis+Coloma+N44-67+e+Isla+Isabela,+Quito" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start text-gray-400 hover:text-secondary transition-colors"
              >
                  <MapPin size={18} className="text-secondary mr-2 mt-1" />
                  <span>Luis Coloma N44-67 e Isla Isabela, Quito 170501</span>
                </a>
              </li>
            </ul>
            <div id="social-links" className="flex space-x-4 pt-4">
              <motion.a
                href="https://www.instagram.com/froststudio_ink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors relative"
                animate={highlightSocial ? {
                  scale: [1, 1.3, 1, 1.3, 1],
                  boxShadow: [
                    '0 0 0px rgba(127, 219, 255, 0)',
                    '0 0 20px rgba(127, 219, 255, 0.8)',
                    '0 0 0px rgba(127, 219, 255, 0)',
                    '0 0 20px rgba(127, 219, 255, 0.8)',
                    '0 0 0px rgba(127, 219, 255, 0)'
                  ]
                } : {}}
                transition={{ duration: 0.6, repeat: highlightSocial ? 2 : 0 }}
                style={{ display: 'inline-block', borderRadius: '8px', padding: '8px' }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/Kerenfrost.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors relative"
                animate={highlightSocial ? {
                  scale: [1, 1.3, 1, 1.3, 1],
                  boxShadow: [
                    '0 0 0px rgba(127, 219, 255, 0)',
                    '0 0 20px rgba(127, 219, 255, 0.8)',
                    '0 0 0px rgba(127, 219, 255, 0)',
                    '0 0 20px rgba(127, 219, 255, 0.8)',
                    '0 0 0px rgba(127, 219, 255, 0)'
                  ]
                } : {}}
                transition={{ duration: 0.6, repeat: highlightSocial ? 2 : 0, delay: 0.1 }}
                style={{ display: 'inline-block', borderRadius: '8px', padding: '8px' }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="http://www.tiktok.com/@keren_frost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors relative"
                animate={highlightSocial ? {
                  scale: [1, 1.3, 1, 1.3, 1],
                  boxShadow: [
                    '0 0 0px rgba(127, 219, 255, 0)',
                    '0 0 20px rgba(127, 219, 255, 0.8)',
                    '0 0 0px rgba(127, 219, 255, 0)',
                    '0 0 20px rgba(127, 219, 255, 0.8)',
                    '0 0 0px rgba(127, 219, 255, 0)'
                  ]
                } : {}}
                transition={{ duration: 0.6, repeat: highlightSocial ? 2 : 0, delay: 0.2 }}
                style={{ display: 'inline-block', borderRadius: '8px', padding: '8px' }}
              >
                <TikTokIcon size={20} className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-stylish mb-4">Horario</h3>
            <ul className="space-y-2 font-alta">
              <li className="text-gray-400">Lunes - Viernes: 9:00 - 21:00</li>
              <li className="text-gray-400">Sábado: 9:00 - 21:00</li>
              <li className="text-gray-400">Domingo: Bajo citas previas</li>
            </ul>
            <div className="pt-4">
              <a 
                href="#reservar" 
                className="floating-button inline-block bg-secondary text-black px-6 py-2 rounded-full font-stylish hover:bg-white transition-all duration-300"
              >
                Reservar Ahora
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm font-alta">
          <p>© {new Date().getFullYear()} Frost Studio.INK. Todos los derechos reservados.</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Link to="/politica-de-privacidad" className="text-secondary hover:text-white transition-colors underline">
              Política de Privacidad
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/politica-de-bioseguridad" className="text-secondary hover:text-white transition-colors underline">
              Política de Bioseguridad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
