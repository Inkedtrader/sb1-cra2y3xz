import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import HomePage from './components/HomePage';
import ScrollToTop from './components/ScrollToTop';

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const BiosecurityPolicy = lazy(() => import('./components/BiosecurityPolicy'));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      const scrollToSection = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      setTimeout(scrollToSection, 100); 
      const timer = setTimeout(scrollToSection, 400); 

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-secondary text-xl font-stylish">Cargando...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/politica-de-bioseguridad" element={<BiosecurityPolicy />} />
          
          {/* Catch-all: Commented out to prevent hidden redirect loops during testing */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </Suspense>
      <Analytics />
    </>
  );
}

export default App;
