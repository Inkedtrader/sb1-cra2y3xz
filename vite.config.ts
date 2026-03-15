import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      // Canonical root domain
      hostname: 'https://froststudio.ink',

      // We remove the '/' from here to stop the duplication
      dynamicRoutes: [
        '/politica-de-privacidad',
        '/politica-de-bioseguridad',
      ],

      generateRobotsTxt: false,

      // Keep readable false to ensure zero whitespace errors
      readable: false,

      changefreq: 'weekly',

      priority: {
        '/': 1.0,
        '/politica-de-bioseguridad': 0.8,
        '/politica-de-privacidad': 0.5
      }
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
});