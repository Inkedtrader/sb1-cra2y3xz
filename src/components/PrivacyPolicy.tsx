import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17910454656"></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17910454656');
          `}
        </script>
        <title>Política de Privacidad - Frost Studio | Protección de Datos Ecuador</title>
        <meta name="description" content="Política de privacidad y protección de datos personales de Frost Studio. Cumplimiento con la LOPDP de Ecuador. Conoce cómo protegemos tu información." />
        <link rel="canonical" href="https://froststudio.ink/politica-de-privacidad" />
        <meta property="og:title" content="Política de Privacidad - Frost Studio" />
        <meta property="og:description" content="Política de privacidad y protección de datos personales de Frost Studio en cumplimiento con la LOPDP de Ecuador." />
        <meta property="og:url" content="https://froststudio.ink/politica-de-privacidad" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Política de Privacidad - Frost Studio" />
        <meta name="twitter:description" content="Política de privacidad y protección de datos personales de Frost Studio en cumplimiento con la LOPDP de Ecuador." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-secondary hover:text-white transition-colors mb-12 font-alta"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver al inicio
        </Link>

        <article className="space-y-12 font-alta text-gray-300 leading-relaxed">
          <header>
            <h1 className="text-4xl md:text-5xl font-stylish text-white mb-6">
              Política de Privacidad - Frost Studio
            </h1>
            <p className="text-lg text-gray-400">
              En Frost Studio, valoramos la confianza que depositas en nosotros al elegirnos para tu arte corporal. Esta política detalla cómo gestionamos tus datos personales en cumplimiento con la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.
            </p>
          </header>

          <div className="space-y-10">
            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">1. Responsable del Tratamiento</h2>
              <p>
                El responsable de tus datos es Frost Studio, ubicado en Quito, Ecuador. Para cualquier consulta sobre tu privacidad, puedes contactarnos directamente a nuestro canal oficial de atención.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">2. Información que recopilamos y finalidad</h2>
              <p>
                Tratamos los datos que nos proporcionas (nombre, contacto, descripción del tatuaje y zona del cuerpo) con las siguientes bases legales:
              </p>
              <ul className="list-none space-y-3 ml-2 text-gray-400">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span><strong className="text-white">Gestión Pre-contractual:</strong> Para asesorarte, cotizar tu diseño y agendar tu cita.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span><strong className="text-white">Seguridad y Salud:</strong> Para asegurar que el procedimiento sea seguro según la zona del cuerpo y condiciones informadas (tratamiento de datos sensibles con consentimiento explícito).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span><strong className="text-white">Interés Legítimo:</strong> Para mejorar nuestra atención y medir el rendimiento de nuestra web mediante cookies analíticas.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">3. Conservación de datos</h2>
              <p>
                Mantendremos tu información únicamente durante el tiempo necesario para cumplir con la finalidad de tu tatuaje y por los plazos legales requeridos por las normativas tributarias (RIMPE) y de salud vigentes en Ecuador.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">4. Tus Derechos (ARCO+)</h2>
              <p>Como titular de tus datos, tienes derecho a:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-2">
                <div className="bg-zinc-900/50 p-3 rounded-sm border border-zinc-800">
                  <strong className="text-white block">Acceso</strong>
                  <span className="text-sm">Saber qué datos tenemos de ti.</span>
                </div>
                <div className="bg-zinc-900/50 p-3 rounded-sm border border-zinc-800">
                  <strong className="text-white block">Rectificación</strong>
                  <span className="text-sm">Actualizar o corregir tu información.</span>
                </div>
                <div className="bg-zinc-900/50 p-3 rounded-sm border border-zinc-800">
                  <strong className="text-white block">Eliminación</strong>
                  <span className="text-sm">Solicitar que borremos tus datos.</span>
                </div>
                <div className="bg-zinc-900/50 p-3 rounded-sm border border-zinc-800">
                  <strong className="text-white block">Oposición y Portabilidad</strong>
                  <span className="text-sm">Oponerte al uso o recibir tus datos en formato compatible.</span>
                </div>
              </div>
              <p className="mt-4 italic text-sm text-secondary">
                Para ejercer estos derechos, solo necesitas enviarnos una solicitud por nuestros canales oficiales.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">5. Herramientas de Terceros</h2>
              <p>
                Utilizamos herramientas como Meta Pixel para entender cómo interactúas con nuestra web. Estas herramientas procesan datos de navegación de forma segura. No compartimos ni vendemos tu información personal con terceros para fines comerciales ajenos a Frost Studio.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">6. Seguridad</h2>
              <p>
                Tus datos son almacenados en entornos digitales seguros con acceso restringido. Implementamos medidas técnicas para evitar cualquier pérdida o acceso no autorizado.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-stylish text-white border-b border-gray-800 pb-2">7. Consentimiento</h2>
              <p className="bg-zinc-900/30 p-4 border-l-2 border-secondary italic">
                Al enviarnos un formulario o contactarnos por canales digitales, declaras conocer esta política y aceptas el tratamiento de tus datos para los fines aquí descritos.
              </p>
            </section>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-secondary hover:text-white transition-colors font-alta uppercase tracking-widest text-sm"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;