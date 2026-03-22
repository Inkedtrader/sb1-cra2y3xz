import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import BookingForm from './BookingForm';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const HomePage: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-primary text-white overflow-hidden">
      <Helmet>
        <title>Frost Studio - Tatuajes Profesionales en Quito | Keren Frost</title>
        <meta name="description" content="Estudio de tatuajes profesional en Quito, Ecuador. Especializado en neotradicional, puntilismo, ilustrativo y más. Sesiones privadas con protocolos de bioseguridad certificados." />
        <link rel="canonical" href="https://froststudio.ink/" />
      </Helmet>

      {/* Cursor Effect */}
      <motion.div
        className="cursor-glow hidden md:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
          pointerEvents: 'none',
        }}
      />

      <Header />
      
      <main>
        <Hero />
        <Portfolio />

        {/* Section: Sobre Mi - Anti-Glitch & High Contrast Version */}
        <section id="sobre-mi" className="relative z-30 py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2 w-full">
                {/* GLITCH FIX: The aspect ratio container prevents the page 
                  from jumping when the image loads. 
                */}
                <div className="relative w-full aspect-[475/631] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/assets/Keren_Studio_Quito.webp"
                    alt="Keren Frost trabajando en su estudio de tatuajes profesional en Quito"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                    width="475"
                    height="631"
                    decoding="sync"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                {/* ACCESSIBILITY FIX: High contrast text colors (White and Gray-100) 
                  ensure the bot (and users) can see the content clearly.
                */}
                <h2 className="text-4xl md:text-5xl font-stylish mb-6 text-white">
                  Un poco sobre mí
                </h2>
                
                <p className="text-lg mb-6 text-gray-100 font-alta tracking-wide">
                  Soy <strong>tatuadora profesional en Quito</strong>, especializada en tatuajes personalizados hechos desde cero.
                </p>
                <p className="text-lg mb-6 text-gray-100 font-alta tracking-wide">
                  Cada diseño es único y trabajado con criterio técnico y estético en estilos como <strong>línea fina, neotradicional, acuarela y cover-ups</strong>, siempre bajo estándares de bioseguridad y legalidad (RIMPE).
                </p>
                
                <p className="text-lg mb-8 text-gray-100 font-alta tracking-wide">
                  Atiendo solo con cita previa, dedicando el tiempo necesario a cada sesión para que el proceso sea claro, seguro y sin apuros.
                </p>

                <div className="flex space-x-4">
                   <a 
                     href="#portafolio" 
                     aria-label="Ver el portafolio de tatuajes de Keren Frost"
                     className="floating-button bg-transparent border border-secondary text-secondary px-6 py-3 rounded-full font-stylish hover:bg-secondary hover:text-black transition-all duration-300"
                   >
                     Ver mi trabajo
                   </a>
                   <a 
                     href="#reservar" 
                     aria-label="Reservar una sesión de tatuaje en Frost Studio"
                     className="floating-button bg-secondary text-black px-6 py-3 rounded-full font-stylish hover:bg-white transition-all duration-300"
                   >
                     Reservar sesión
                   </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <BookingForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default HomePage;
