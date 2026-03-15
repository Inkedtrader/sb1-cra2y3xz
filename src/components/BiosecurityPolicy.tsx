import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Droplets, UserCheck, Sparkles } from 'lucide-react';

const BiosecurityPolicy: React.FC = () => {
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
        <title>Protocolos de Bioseguridad - Frost Studio | Seguridad y Esterilización</title>
        <meta name="description" content="Protocolos de bioseguridad certificados en Frost Studio. Estándares de asepsia clínica, esterilización y seguridad para tatuajes profesionales en Quito." />
        <link rel="canonical" href="https://froststudio.ink/politica-de-bioseguridad" />
        <meta property="og:title" content="Protocolos de Bioseguridad - Frost Studio" />
        <meta property="og:description" content="Protocolos de bioseguridad certificados con estándares de asepsia clínica para tatuajes profesionales en Quito." />
        <meta property="og:url" content="https://froststudio.ink/politica-de-bioseguridad" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Protocolos de Bioseguridad - Frost Studio" />
        <meta name="twitter:description" content="Protocolos de bioseguridad certificados con estándares de asepsia clínica para tatuajes profesionales en Quito." />
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
              Protocolos de Bioseguridad – Frost Studio
            </h1>
            <p className="text-lg text-gray-400">
              En Frost Studio, la bioseguridad es nuestra prioridad absoluta. Operamos bajo estándares de asepsia clínica para garantizar que tu experiencia estética sea tan segura como profesional.
            </p>
          </header>

          <div className="space-y-12">
            {/* Sección 1: Gestión de Espacios */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-2">
                <Sparkles className="text-secondary" size={24} />
                <h2 className="text-2xl font-stylish text-white">1. Higiene del Entorno de Trabajo</h2>
              </div>
              <p>
                Mantenemos un control estricto de la asepsia en todas nuestras instalaciones en Quito, siguiendo normativas locales e internacionales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-900/40 p-4 rounded-sm border border-zinc-800">
                  <p className="text-sm font-bold text-white mb-1 uppercase">Sanitización Quirúrgica</p>
                  <p className="text-sm">Desinfección de alto nivel de superficies antes y después de cada procedimiento.</p>
                </div>
                <div className="bg-zinc-900/40 p-4 rounded-sm border border-zinc-800">
                  <p className="text-sm font-bold text-white mb-1 uppercase">Residuos Biológicos</p>
                  <p className="text-sm">Manejo y eliminación técnica de materiales contaminados mediante guardianes de bioseguridad.</p>
                </div>
              </div>
            </section>

            {/* Sección 2: Materiales */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-2">
                <Droplets className="text-secondary" size={24} />
                <h2 className="text-2xl font-stylish text-white">2. Insumos y Equipamiento</h2>
              </div>
              <p>Utilizamos exclusivamente materiales de grado profesional y empaques de fábrica sellados:</p>
              <ul className="list-none space-y-3 ml-2">
                <li className="flex gap-3">
                  <span className="text-secondary text-xl">•</span>
                  <span><strong className="text-white">Agujas y Cartuchos:</strong> 100% estériles, desechables y abiertos en presencia del cliente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary text-xl">•</span>
                  <span><strong className="text-white">Pigmentos Certificados:</strong> Tintas de marcas líderes mundiales, aptas para uso humano y libres de metales pesados prohibidos.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary text-xl">•</span>
                  <span><strong className="text-white">Barreras de Protección:</strong> Uso de campos, fundas de máquina y protecciones de un solo uso para evitar la contaminación cruzada.</span>
                </li>
              </ul>
            </section>

            {/* Sección 3: Procedimientos */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-2">
                <UserCheck className="text-secondary" size={24} />
                <h2 className="text-2xl font-stylish text-white">3. Protocolo del Artista</h2>
              </div>
              <p>
                El rigor técnico de Keren asegura un campo de trabajo estéril durante toda la sesión:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 ml-4 list-disc">
                <li>Lavado clínico de manos (Protocolo OMS).</li>
                <li>Uso obligatorio de guantes de nitrilo grado médico.</li>
                <li>Protección facial y vestimenta adecuada.</li>
                <li>Preparación antiséptica de la zona dérmica del cliente.</li>
              </ul>
            </section>

            {/* Sección 4: Salud y Aftercare */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-gray-800 pb-2">
                <ShieldCheck className="text-secondary" size={24} />
                <h2 className="text-2xl font-stylish text-white">4. Evaluación de Salud y Cuidados</h2>
              </div>
              <p>
                La bioseguridad se extiende más allá del estudio. Nos reservamos el derecho de posponer sesiones ante condiciones dermatológicas que comprometan la seguridad.
              </p>
              <div className="bg-zinc-900/60 p-5 border-l-2 border-secondary italic">
                <p className="text-white font-bold mb-2">Compromiso Frost Aftercare:</p>
                Al finalizar, recibirás una guía técnica de cuidados posteriores. El éxito y la salud de tu tatuaje dependen en un 50% de la ejecución en el estudio y un 50% de tu cuidado responsable.
              </div>
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

export default BiosecurityPolicy;