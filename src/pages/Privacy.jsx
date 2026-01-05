import { useEffect } from 'preact/hooks';

export function Privacy() {
  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #eliminacion-datos)
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Wait a small tick to ensure DOM is fully ready if needed, or scroll immediately
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Privacidad y Términos
          </h1>
          <p className="text-lg text-gray-500">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Meta Compliance Trust Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-900">Cumplimiento con Meta y WhatsApp</h3>
              <div className="mt-2 text-blue-700 text-sm leading-relaxed">
                <p>
                  EmiCorp opera en estricto cumplimiento con las Políticas de WhatsApp Business y los Términos de Servicio de Meta.
                  Tus datos y los de tus clientes están protegidos bajo estándares de seguridad de nivel empresarial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content with Tailwind Typography (prose) */}
        <div className="prose prose-lg prose-slate max-w-none hover:prose-a:text-blue-600 prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-600">
          <section>
            <h2>1. Introducción</h2>
            <p>
              En EmiCorp (Emiliano Nataren Del Rivero), nos tomamos muy en serio la confidencialidad de tu información.
              Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tus datos cuando utilizas
              nuestra plataforma de automatización para WhatsApp.
            </p>
          </section>

          <section>
            <h2>2. Información que recopilamos</h2>
            <p>
              Para facilitar la automatización de tus conversaciones, necesitamos acceder a ciertos datos técnicos y de negocio:
            </p>
            <ul>
              <li><strong>Información de la cuenta:</strong> Nombre de la empresa, número de WhatsApp Business, email de contacto.</li>
              <li><strong>Datos de mensajes:</strong> Contenido de las interacciones para procesar respuestas automáticas (procesado en tiempo real).</li>
              <li><strong>Metadatos:</strong> Estadísticas de uso, timestamps y registros de entrega.</li>
            </ul>
          </section>

          <section>
            <h2>3. Uso de la información</h2>
            <p>
              Tus datos tienen un único propósito: hacer que tu negocio funcione mejor. Los utilizamos para:
            </p>
            <ul>
              <li>Proveer el servicio de respuestas automáticas y gestión de citas.</li>
              <li>Mejorar nuestros modelos de lenguaje (de forma anonimizada).</li>
              <li>Facturación y notificaciones de servicio.</li>
            </ul>
            <p>
              <strong>Importante:</strong> No vendemos tus datos a terceros ni los utilizamos para publicidad externa.
            </p>
          </section>

          <section>
            <h2>4. Seguridad y Protección de Datos</h2>
            <p>
              Utilizamos encriptación en tránsito (TLS) y en reposo para todos los datos sensibles.
              Nuestros servidores están alojados en infraestructuras certificadas (AWS/Google Cloud) que cumplen con SOC2.
            </p>
          </section>

          <section>
            <h2>5. Tus derechos</h2>
            <p>
              Como usuario de EmiCorp, tienes control total sobre tus datos. Puedes solicitar:
            </p>
            <ul>
              <li>Una copia de todos los datos almacenados de tu empresa.</li>
              <li>La eliminación permanente de tu cuenta y datos asociados.</li>
              <li>La corrección de cualquier información inexacta.</li>
            </ul>
          </section>

          <section id="eliminacion-datos">
            <h2>6. Eliminación de Datos (Cumplimiento Meta)</h2>
            <p>
              De conformidad con las Políticas de Datos de Usuario de Meta, proporcionamos un mecanismo claro para que solicites la eliminación de tus datos.
            </p>
            <p>
              <strong>Instrucciones para eliminar tus datos:</strong>
            </p>
            <ol>
              <li>Envía un correo electrónico a <a href="mailto:enataren@emicorp.org">enataren@emicorp.org</a>.</li>
              <li>Utiliza el asunto: <strong>"Solicitud de Eliminación de Datos - [Nombre de tu Empresa]"</strong>.</li>
              <li>En el cuerpo del correo, confirma el número de WhatsApp Business asociado que deseas desvincular.</li>
            </ol>
            <p>
              Procesaremos tu solicitud y eliminaremos todos los registros asociados a tu cuenta en un plazo máximo de 30 días, confirmando la acción vía email.
            </p>
            <p>
              Para ejercer estos derechos generales, también puedes contactarnos en el mismo correo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
