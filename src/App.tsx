import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ScrollToTop from './components/ScrollToTop';

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const BiosecurityPolicy = lazy(() => import('./components/BiosecurityPolicy'));

function App() {
  const location = useLocation();

 useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    
    // 1. Function to handle the scroll
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        // We use scrollIntoView; your CSS 100px margin will handle the gap!
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // 2. The "Double Check"
    // First attempt: Quick jump
    setTimeout(scrollToSection, 100); 

    // Second attempt: After images/layout settle (Crucial for GBP)
    const timer = setTimeout(scrollToSection, 400); 

    return () => clearTimeout(timer);
  }
}, [location]); // Fires every time the URL changes

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;