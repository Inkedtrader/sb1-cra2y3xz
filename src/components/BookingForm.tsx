import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

const CONFIRMATION_MESSAGE = 'Confirmado. Tu idea ya me llego, me pondre en contacto contigo pronto.';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    bodyArea: '',
    size: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pixelFired, setPixelFired] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (submitted || pixelFired) {
      setSubmitted(false);
      setPixelFired(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Map form fields to database columns
      const { error: insertError } = await supabase
        .from('booking_requests')
        .insert([
          {
            nombre: formData.name,
            telefono: formData.phone,
            fecha_preferida: formData.date,
            area_cuerpo: formData.bodyArea,
            descripcion: formData.description,
            tamano: formData.size
          }
        ]);

      if (insertError) throw insertError;

      // Fire Meta Pixel Lead event after successful database insert
      if (!pixelFired && typeof window.fbq === 'function') {
        try {
          window.fbq('track', 'Lead', {
            content_name: 'Booking Request',
            content_category: 'Tattoo Booking',
            body_area: formData.bodyArea,
            size: formData.size,
            preferred_date: formData.date,
            value: 1,
            currency: 'USD'
          });
          setPixelFired(true);
        } catch (pixelError) {
          console.error('Meta Pixel tracking error:', pixelError);
        }
      }

      // Success - show confirmation permanently
      setSubmitted(true);

      // Scroll to top of reservar section after confirmation appears
      setTimeout(() => {
        const reservarSection = document.getElementById('reservar');
        if (reservarSection) {
          reservarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservar" className="relative z-30 py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-stylish mb-6 text-white">
            Reserva tu <span className="text-secondary">Sesión</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-alta tracking-wide">
            Completa el formulario y me pondré en contacto contigo para coordinar los detalles de tu tatuaje personalizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900 bg-opacity-50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-800"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl text-gray-300 font-alta">{CONFIRMATION_MESSAGE}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-alta">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Dime cómo te llamas"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-alta">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Pásame tu WhatsApp"
                  />
                </div>
              </div>

              {/* Date + Body Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-gray-300 mb-2 font-alta">
                    Preferencia de fecha
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label htmlFor="bodyArea" className="block text-gray-300 mb-2 font-alta">
                    Área del cuerpo
                  </label>
                  <select
                    id="bodyArea"
                    name="bodyArea"
                    value={formData.bodyArea}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Brazo">Brazo</option>
                    <option value="Antebrazo">Antebrazo</option>
                    <option value="Espalda">Espalda</option>
                    <option value="Pecho">Pecho</option>
                    <option value="Pierna">Pierna</option>
                    <option value="Tobillo">Tobillo</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              {/* Size */}
              <div>
                <label htmlFor="size" className="block text-gray-300 mb-2 font-alta">
                  Tamaño aproximado
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Chiquito (menos de 8 cm)">Chiquito (menos de 8 cm)</option>
                  <option value="Mediano (8-15 cm)">Mediano (8–15 cm)</option>
                  <option value="Grande (15-25 cm)">Grande (15–25 cm)</option>
                  <option value="Muy grande (25+ cm)">Muy grande (25+ cm)</option>
                  <option value="Manga completa">Manga completa</option>
                  <option value="Espalda completa">Espalda completa</option>
                  <option value="Pierna completa">Pierna completa</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-gray-300 mb-2 font-alta">
                  Descripción del proyecto
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input"
                  placeholder="Descríbeme tu idea, estilo, referencias, colores… mientras más detalle, mejor."
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 text-red-200 text-center"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit */}
              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="floating-button bg-secondary text-black px-10 py-4 rounded-full text-lg font-stylish hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={loading ? {} : {
                    scale: 1.05,
                    boxShadow: '0 0 25px rgba(127, 219, 255, 0.6)',
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar Solicitud'
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
