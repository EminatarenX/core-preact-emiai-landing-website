import { useEffect } from 'preact/hooks';

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Condiciones del Servicio
          </h1>
          <p className="text-lg text-gray-500">
            Ultima actualizacion:{' '}
            {new Date().toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg prose-slate max-w-none hover:prose-a:text-blue-600 prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-600">

          <section>
            <h2>1. Partes del contrato</h2>
            <p>
              El presente contrato se celebra entre{' '}
              <strong>Emiliano Nataren Del Rivero</strong> (RFC NARE021227KI9), Persona Fisica
              con Actividad Empresarial, responsable de la plataforma EmiCorp, con domicilio
              fiscal en Calle de Chiapas null6 INT. Piso 2, Roma Norte, Cuauhtemoc, Ciudad de
              Mexico, Mexico, C.P. 06700 (en adelante "EmiCorp" o "el Proveedor"), y el negocio
              o persona que se registra y utiliza los servicios (en adelante "el Cliente" o
              "el Usuario").
            </p>
          </section>

          <section>
            <h2>2. Aceptacion de los Terminos</h2>
            <p>
              Al acceder y utilizar los servicios de EmiCorp, el Cliente acepta estar sujeto a
              estas Condiciones del Servicio y a la{' '}
              <a href="/privacy">Politica de Privacidad</a> de EmiCorp. Si no estas de acuerdo
              con alguna parte de estos terminos, no podras utilizar el servicio.
            </p>
          </section>

          <section>
            <h2>3. Descripcion del servicio</h2>
            <p>
              EmiCorp es una plataforma SaaS multitenant que permite a negocios conectar y
              administrar sus cuentas de WhatsApp Business mediante la API oficial de WhatsApp
              Business Platform de Meta Platforms, Inc. El servicio comprende:
            </p>
            <ul>
              <li>
                Onboarding de cuentas de WhatsApp Business exclusivamente mediante el flujo
                oficial de Embedded Signup de Meta.
              </li>
              <li>
                Envio y recepcion de mensajes a traves de la API de WhatsApp Business
                (permiso <code>whatsapp_business_messaging</code>).
              </li>
              <li>
                Creacion, gestion y envio de plantillas de mensajes aprobadas por Meta
                (permiso <code>whatsapp_business_management</code>).
              </li>
              <li>
                Automatizacion de respuestas mediante agentes de inteligencia artificial
                configurados por el propio Cliente.
              </li>
              <li>
                Panel de administracion para visualizacion de conversaciones, estadisticas y
                configuracion del agente conversacional.
              </li>
            </ul>
            <p>
              EmiCorp actua como intermediario tecnico entre el Cliente y la API de WhatsApp
              Business de Meta. EmiCorp no almacena tokens de acceso permanentes ni credenciales
              de autenticacion de WhatsApp.
            </p>
          </section>

          <section>
            <h2>4. Cumplimiento con Meta y WhatsApp Business</h2>
            <p>
              El uso de EmiCorp implica el uso de la API de WhatsApp Business Platform de Meta
              Platforms, Inc. Por lo tanto, el Cliente se compromete a:
            </p>
            <ul>
              <li>
                Cumplir en todo momento con las{' '}
                <a
                  href="https://www.whatsapp.com/legal/business-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politicas de WhatsApp Business
                </a>{' '}
                y los{' '}
                <a
                  href="https://www.facebook.com/legal/terms/businesstech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terminos de la Plataforma de Meta
                </a>.
              </li>
              <li>
                Obtener el consentimiento explicito de sus usuarios finales antes de enviarles
                mensajes de WhatsApp mediante EmiCorp.
              </li>
              <li>
                Utilizar unicamente plantillas de mensajes aprobadas por Meta para el envio
                de comunicaciones iniciadas por el negocio (mensajes de sesion activa o
                plantillas HSM).
              </li>
              <li>
                No utilizar EmiCorp para enviar mensajes no solicitados (spam), contenido
                ilegal, enganoso o que viole las politicas de mensajeria de WhatsApp.
              </li>
              <li>
                No intentar eludir los limites de tasa, politicas de calidad de numero o
                cualquier restriccion impuesta por Meta a traves de la API.
              </li>
            </ul>
            <p>
              El incumplimiento de estas obligaciones puede resultar en la suspension del
              acceso a la API de WhatsApp por parte de Meta y, en consecuencia, en la
              suspension del servicio de EmiCorp sin responsabilidad para el Proveedor.
            </p>
          </section>

          <section>
            <h2>5. Uso responsable de la plataforma</h2>
            <p>Adicionalmente, el Cliente se compromete a:</p>
            <ul>
              <li>Mantener la confidencialidad de sus credenciales de acceso a EmiCorp.</li>
              <li>No compartir su cuenta con terceros no autorizados.</li>
              <li>Notificar de inmediato a EmiCorp ante cualquier uso no autorizado de su cuenta.</li>
              <li>No intentar acceder a cuentas o datos de otros Clientes de EmiCorp.</li>
            </ul>
          </section>

          <section>
            <h2>6. Propiedad intelectual</h2>
            <p>
              Todo el software, algoritmos, disenos y materiales de la plataforma EmiCorp son
              propiedad intelectual de Emiliano Nataren Del Rivero o sus licenciantes. El uso
              del servicio no otorga al Cliente ningun derecho de propiedad sobre la tecnologia
              de EmiCorp. El Cliente conserva la propiedad de los datos de su negocio y de los
              contenidos que carga en la plataforma.
            </p>
          </section>

          <section>
            <h2>7. Limitacion de responsabilidad</h2>
            <p>
              EmiCorp se esfuerza por mantener un servicio confiable y disponible; sin embargo:
            </p>
            <ul>
              <li>
                No garantizamos disponibilidad ininterrumpida, ya que el servicio depende
                parcialmente de la API de WhatsApp Business de Meta, cuya disponibilidad es
                responsabilidad de Meta Platforms, Inc.
              </li>
              <li>
                No somos responsables por interrupciones, cambios de politica o suspensiones
                de cuenta causadas por Meta Platforms, Inc.
              </li>
              <li>
                La responsabilidad maxima de EmiCorp por cualquier dano directo se limita al
                importe pagado por el Cliente en los ultimos 3 meses de servicio.
              </li>
            </ul>
          </section>

          <section>
            <h2>8. Vigencia y terminacion</h2>
            <p>
              El servicio estara vigente mientras el Cliente mantenga una suscripcion activa.
              Cualquiera de las partes puede dar por terminado el contrato con 15 dias naturales
              de aviso previo via correo electronico. En caso de incumplimiento grave de estas
              Condiciones o de las politicas de Meta, EmiCorp podra suspender el acceso de
              forma inmediata.
            </p>
          </section>

          <section>
            <h2>9. Legislacion aplicable</h2>
            <p>
              Estas Condiciones del Servicio se rigen por las leyes de los Estados Unidos
              Mexicanos. Cualquier controversia se sometera a la jurisdiccion de los tribunales
              competentes de la Ciudad de Mexico, Mexico, renunciando expresamente a cualquier
              otro fuero que pudiera corresponder.
            </p>
          </section>

          <section>
            <h2>10. Modificaciones</h2>
            <p>
              Emiliano Nataren Del Rivero se reserva el derecho de modificar estas Condiciones
              en cualquier momento. Los cambios significativos seran notificados al Cliente
              mediante correo electronico con al menos 15 dias naturales de anticipacion. El
              uso continuo del servicio tras la notificacion implica la aceptacion de los nuevos
              terminos.
            </p>
          </section>

          <section>
            <h2>11. Contacto</h2>
            <p>
              Para preguntas sobre estas Condiciones del Servicio, contacta al Proveedor:
            </p>
            <ul>
              <li><strong>Nombre legal:</strong> Emiliano Nataren Del Rivero</li>
              <li>
                <strong>Correo electronico:</strong>{' '}
                <a href="mailto:enataren@emicorp.org">enataren@emicorp.org</a>
              </li>
              <li>
                <strong>Domicilio:</strong> Calle de Chiapas null6 INT. Piso 2, Roma Norte,
                Cuauhtemoc, Ciudad de Mexico, Mexico, C.P. 06700.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
