import { useEffect } from 'preact/hooks';

export function Privacy() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            Politica de Privacidad
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

        {/* Responsable del tratamiento */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-blue-900">Responsable del tratamiento de datos</h3>
              <div className="mt-2 text-blue-800 text-sm leading-relaxed space-y-1">
                <p><strong>Nombre legal:</strong> Emiliano Nataren Del Rivero</p>
                <p><strong>Marca comercial:</strong> EmiCorp</p>
                <p><strong>RFC:</strong> NARE021227KI9</p>
                <p><strong>Domicilio fiscal:</strong> Calle de Chiapas null6 INT. Piso 2, Roma Norte, Cuauhtemoc, Ciudad de Mexico, Mexico, C.P. 06700.</p>
                <p><strong>Correo de contacto:</strong>{' '}
                  <a href="mailto:enataren@emicorp.org" className="underline">enataren@emicorp.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none hover:prose-a:text-blue-600 prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-600">

          <section>
            <h2>1. Introduccion</h2>
            <p>
              La presente Politica de Privacidad describe como Emiliano Nataren Del Rivero,
              responsable de la plataforma EmiCorp (en adelante "EmiCorp", "nosotros" o "el
              Responsable"), recopila, usa, almacena y protege los datos personales de sus
              usuarios y de los clientes finales que interactuan con los negocios que utilizan
              nuestra plataforma de automatizacion de mensajeria para WhatsApp Business.
            </p>
            <p>
              EmiCorp opera como plataforma SaaS multitenant que permite a negocios (personas
              fisicas o morales) conectar sus cuentas de WhatsApp Business mediante el flujo
              oficial de Embedded Signup de Meta y gestionar mensajes y plantillas a traves de
              la API oficial de WhatsApp Business Platform de Meta Platforms, Inc.
            </p>
          </section>

          <section>
            <h2>2. Datos que recopilamos</h2>
            <p>Para prestar el servicio, EmiCorp recopila y procesa las siguientes categorias de datos:</p>

            <h3>2.1 Datos del negocio suscrito (operador)</h3>
            <ul>
              <li>Nombre o razon social del negocio y nombre del representante legal.</li>
              <li>Correo electronico de registro y de contacto.</li>
              <li>Numero de WhatsApp Business y WABA ID (WhatsApp Business Account ID) proporcionados por Meta.</li>
              <li>Phone Number IDs asociados a la cuenta de WhatsApp Business.</li>
              <li>Datos de facturacion necesarios para la prestacion del servicio.</li>
            </ul>

            <h3>2.2 Datos de mensajeria de WhatsApp Business</h3>
            <ul>
              <li>Contenido de los mensajes entrantes y salientes gestionados a traves de la API oficial de WhatsApp Business Platform.</li>
              <li>Numeros de telefono de los usuarios finales que interactuan con el negocio via WhatsApp.</li>
              <li>Metadatos de entrega: timestamps, estados de lectura y confirmaciones de envio.</li>
              <li>Plantillas de mensajes (message templates) creadas y administradas por el negocio dentro de EmiCorp.</li>
            </ul>

            <h3>2.3 Datos de uso de la plataforma</h3>
            <ul>
              <li>Estadisticas de conversaciones, volumenes de mensajes y metricas de rendimiento.</li>
              <li>Registros de acceso (logs) para auditoria de seguridad.</li>
            </ul>

            <p>
              <strong>Importante:</strong> EmiCorp NO almacena tokens de acceso permanentes ni
              credenciales de WhatsApp. El acceso a la API de WhatsApp se gestiona mediante
              tokens de corta duracion o tokens de sistema administrados por Meta a traves del
              flujo oficial de Embedded Signup. Las credenciales de autenticacion de Meta nunca
              son visibles ni almacenadas por EmiCorp.
            </p>
          </section>

          <section>
            <h2>3. Base legal del tratamiento</h2>
            <p>El tratamiento de tus datos se sustenta en las siguientes bases legales:</p>
            <ul>
              <li>
                <strong>Ejecucion de contrato (Art. 7 LFPDPPP):</strong> El tratamiento es
                necesario para prestar el servicio de automatizacion de mensajeria contratado
                por el negocio suscrito a EmiCorp.
              </li>
              <li>
                <strong>Consentimiento informado:</strong> Para el tratamiento de datos de
                usuarios finales de WhatsApp, el negocio suscrito es responsable de obtener el
                consentimiento de sus clientes conforme a las Politicas de Mensajeria de
                WhatsApp Business de Meta.
              </li>
              <li>
                <strong>Interes legitimo:</strong> Para el procesamiento de datos de uso,
                estadisticas anonimizadas y registros de seguridad destinados a mejorar la
                estabilidad y seguridad del servicio.
              </li>
              <li>
                <strong>Cumplimiento de obligacion legal:</strong> En caso de requerimiento por
                autoridad competente conforme a la legislacion mexicana vigente.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Finalidades del tratamiento</h2>
            <p>Los datos recopilados se utilizan exclusivamente para:</p>
            <ul>
              <li>Proveer el servicio de automatizacion de mensajes via WhatsApp Business API.</li>
              <li>Gestionar y enviar plantillas de mensajes aprobadas por Meta en nombre del negocio suscrito.</li>
              <li>Generar respuestas automaticas mediante inteligencia artificial en tiempo real.</li>
              <li>Emitir facturas y notificaciones relacionadas con el servicio.</li>
              <li>Mejorar los modelos de lenguaje de forma anonimizada y agregada, sin identificar personas fisicas.</li>
            </ul>
            <p>
              <strong>EmiCorp no vende, alquila ni cede datos personales a terceros</strong> con
              fines comerciales o publicitarios.
            </p>
          </section>

          <section>
            <h2>5. Retencion de datos</h2>
            <p>Los datos se conservan durante los siguientes plazos:</p>
            <ul>
              <li>
                <strong>Contenido de mensajes de WhatsApp:</strong> maximo 90 dias desde la
                fecha de la conversacion, salvo que el negocio solicite eliminacion anticipada.
              </li>
              <li>
                <strong>Datos de cuenta del negocio suscrito:</strong> durante la vigencia del
                contrato de servicio y hasta 3 anos posteriores a su terminacion, conforme a
                obligaciones fiscales mexicanas.
              </li>
              <li>
                <strong>Logs de auditoria y seguridad:</strong> 12 meses desde su generacion.
              </li>
              <li>
                <strong>Datos de facturacion:</strong> 5 anos conforme al Codigo Fiscal de la
                Federacion (CFF) de Mexico.
              </li>
            </ul>
            <p>
              Transcurridos estos plazos, los datos seran eliminados de forma segura o
              anonimizados de manera irreversible.
            </p>
          </section>

          <section>
            <h2>6. Seguridad de datos</h2>
            <p>
              Aplicamos medidas tecnicas y organizativas adecuadas para proteger los datos
              contra acceso no autorizado, perdida o destruccion, incluyendo:
            </p>
            <ul>
              <li>Cifrado en transito mediante TLS 1.2 o superior.</li>
              <li>Cifrado en reposo para bases de datos que contienen informacion sensible.</li>
              <li>Infraestructura alojada en proveedores certificados bajo estandares SOC 2.</li>
              <li>Control de acceso basado en roles (RBAC) para el personal interno de EmiCorp.</li>
            </ul>
          </section>

          <section>
            <h2>7. Cumplimiento con Meta y WhatsApp Business Platform</h2>
            <p>
              EmiCorp opera en cumplimiento con las Politicas de la Plataforma de Meta, los
              Terminos del Servicio de WhatsApp Business y las Politicas de Mensajeria de
              WhatsApp Business. El uso de los permisos{' '}
              <code>whatsapp_business_messaging</code> y{' '}
              <code>whatsapp_business_management</code> se limita estrictamente a las
              finalidades descritas en esta Politica y a las permitidas por Meta.
            </p>
            <p>
              Los negocios suscritos son responsables de cumplir con las Politicas de
              Mensajeria de WhatsApp al momento de comunicarse con sus usuarios finales a
              traves de la plataforma EmiCorp.
            </p>
          </section>

          <section>
            <h2>8. Tus derechos (ARCO)</h2>
            <p>
              Conforme a la Ley Federal de Proteccion de Datos Personales en Posesion de los
              Particulares (LFPDPPP) de Mexico, tienes derecho a:
            </p>
            <ul>
              <li><strong>Acceso:</strong> conocer que datos tuyos conservamos.</li>
              <li><strong>Rectificacion:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Cancelacion:</strong> solicitar la eliminacion de tus datos.</li>
              <li><strong>Oposicion:</strong> oponerte al tratamiento de tus datos para fines especificos.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, contacta a{' '}
              <a href="mailto:enataren@emicorp.org">enataren@emicorp.org</a> con el asunto
              "Derechos ARCO".
            </p>
          </section>

          <section id="eliminacion-datos">
            <h2>9. Instrucciones para la Eliminacion de Datos (Meta)</h2>
            <p>
              De conformidad con las Politicas de Datos de Usuario de Meta, proporcionamos
              un mecanismo claro para solicitar la eliminacion de tus datos.
            </p>
            <p><strong>Pasos para eliminar tus datos:</strong></p>
            <ol>
              <li>
                Envia un correo electronico a{' '}
                <a href="mailto:enataren@emicorp.org">enataren@emicorp.org</a>.
              </li>
              <li>
                Usa el asunto: <strong>"Solicitud de Eliminacion de Datos - [Nombre de tu empresa]"</strong>.
              </li>
              <li>
                En el cuerpo del correo, indica el numero de WhatsApp Business y el WABA ID
                asociados a la cuenta que deseas eliminar.
              </li>
            </ol>
            <p>
              Procesaremos tu solicitud y eliminaremos todos los registros asociados a tu
              cuenta en un plazo maximo de 30 dias naturales, notificando la accion via correo
              electronico al remitente de la solicitud.
            </p>
          </section>

          <section>
            <h2>10. Cambios a esta Politica</h2>
            <p>
              Emiliano Nataren Del Rivero se reserva el derecho de actualizar esta Politica de
              Privacidad. Los cambios significativos se notificaran a los negocios suscritos
              mediante correo electronico con al menos 15 dias naturales de anticipacion. La
              version vigente siempre estara disponible en{' '}
              <a href="https://emicorp.org/privacy">emicorp.org/privacy</a>.
            </p>
          </section>

          <section>
            <h2>11. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con esta Politica de Privacidad o con el
              tratamiento de tus datos personales, contacta al Responsable:
            </p>
            <ul>
              <li><strong>Nombre legal:</strong> Emiliano Nataren Del Rivero</li>
              <li><strong>Correo electronico:</strong>{' '}
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
