import { Button } from '../components/Button';

export function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary/20 selection:text-secondary">

      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:pt-32 md:pb-24 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-8 text-sm font-medium text-blue-800 rounded-full bg-blue-50 border border-blue-100">
            <span className="flex w-2 h-2 mr-2 bg-blue-600 rounded-full animate-pulse"></span>
            Nueva tecnología de IA Conversacional
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl leading-[1.1]">
            Automatiza tu negocio <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              por WhatsApp
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-gray-500 md:text-2xl">
            Agentes inteligentes que responden consultas, cierran ventas y agendan citas 24/7.
            Sin fricción, sin esperas, 100% automático.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full h-12 px-8 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Empezar ahora
              </Button>
            </a>
            <a href="#como-funciona" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full h-12 px-8 text-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-primary hover:border-gray-300 transition-all">
                Ver cómo funciona
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            No requiere tarjeta de crédito • Configuración en 5 minutos
          </p>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <p className="mb-6 text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Potenciando negocios modernos
          </p>
          {/* Placeholder for trusted companies - using text for generic/early stage feel */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using simple text representations for now to keep it clean without external assets */}
            <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-md"></div> BarberPro
            </span>
            <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div> RestoApp
            </span>
            <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-md"></div> DentalCare
            </span>
            <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div> ShopLocal
            </span>
          </div>
        </div>
      </section>

      {/* Value Proposition (Features) */}
      <section className="py-20 md:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Todo lo que necesitas para vender más
            </h2>
            <p className="text-lg text-gray-500">
              Una suite completa de herramientas de mensajería diseñada para crecer tu negocio
              sin aumentar tu carga operativa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="group p-8 transition-all bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-blue-100">
              <div className="flex items-center justify-center w-14 h-14 mb-6 text-blue-600 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">Respuestas Instantáneas</h3>
              <p className="leading-relaxed text-gray-500">
                Olvídate de dejar a tus clientes en "visto". EMI responde en segundos,
                cualquier día, a cualquier hora.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 transition-all bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-green-100">
              <div className="flex items-center justify-center w-14 h-14 mb-6 text-green-600 bg-green-50 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">Ventas Automáticas</h3>
              <p className="leading-relaxed text-gray-500">
                Detecta intenciones de compra, muestra tu catálogo y cierra ventas
                sin intervención humana.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 transition-all bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-purple-100">
              <div className="flex items-center justify-center w-14 h-14 mb-6 text-purple-600 bg-purple-50 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">Agendamiento Inteligente</h3>
              <p className="leading-relaxed text-gray-500">
                Sincroniza con tu calendario y permite que tus clientes agenden citas
                solo en tus horarios disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-primary text-white overflow-hidden relative">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500 blur-3xl"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-white">
              Puesta en marcha en 3 pasos
            </h2>
            <p className="text-lg text-gray-300">
              Sin integraciones complejas ni código. Estás listo en minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-700 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-6 text-2xl font-bold text-primary bg-white rounded-full shadow-xl border-4 border-blue-900 z-10">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Conecta tu WhatsApp</h3>
              <p className="text-sm text-gray-400 max-w-xs">
                Escanea el código QR o vincula tu número de WhatsApp Business API.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-6 text-2xl font-bold text-primary bg-white rounded-full shadow-xl border-4 border-blue-900 z-10">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Configura tu Agente</h3>
              <p className="text-sm text-gray-400 max-w-xs">
                Define tus horarios, sube tu catálogo o servicios y personaliza las respuestas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 mb-6 text-2xl font-bold text-primary bg-white rounded-full shadow-xl border-4 border-blue-900 z-10">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Activa el Piloto Automático</h3>
              <p className="text-sm text-gray-400 max-w-xs">
                Observa cómo EMI atiende clientes y genera ventas mientras tú duermes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
                Diseñado para todo tipo de servicios
              </h2>
              <p className="text-lg text-gray-500">
                Nuestra IA es flexible y se adapta a las necesidades específicas de tu industria.
              </p>
            </div>
            <div className="hidden md:block">
              <Button variant="secondary" className="bg-white">Ver todos los sectores</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Barberías & Spas', 'Restaurantes', 'Clínicas', 'Retail'].map((sector, i) => (
              <div key={i} className="group p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all cursor-default">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-4 group-hover:w-20 transition-all"></div>
                <h3 className="text-lg font-bold text-primary mb-2">{sector}</h3>
                <p className="text-sm text-gray-500">
                  Desde agendamiento de citas hasta gestión de menús y toma de pedidos.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Empieza a automatizar hoy mismo
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Únete a los negocios que están transformando su atención al cliente con Inteligencia Artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" className="px-8 py-4 text-lg font-bold">
                Prueba Gratuita
              </Button>
              <Button variant="secondary" className="px-8 py-4 text-lg bg-transparent text-white border-white hover:bg-white/10 hover:text-white border-opacity-30">
                Hablar con Ventas
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
