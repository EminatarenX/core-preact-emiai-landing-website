import { ChatMock } from '../components/ChatMock';

const EMI_CHAT = [
  { from: 'in', text: 'Hola, ¿tienen lugar mañana para corte?' },
  {
    from: 'out',
    text: 'Hola, claro. Mañana tengo libres estos horarios:',
    buttons: ['11:00', '13:30', '17:00'],
  },
  { from: 'in', text: '13:30 porfa' },
  { from: 'out', text: 'Listo, quedó tu cita mañana a las 13:30. Te recuerdo un rato antes.' },
];

const EKO_CHAT = [
  { from: 'in', text: 'Necesito una moto al centro' },
  { from: 'out', text: 'Claro. Compárteme tu ubicación para mandarte la unidad más cercana.' },
  { from: 'in', text: 'Ubicación compartida · Suchiapa' },
  { from: 'out', text: 'Al centro son aproximadamente $15. Ya va la unidad 14, llega en unos 4 minutos.' },
];

const EMI_POINTS = [
  'Responde con la información que tú escribes: precios, horarios, dirección y políticas. Si algo no está, no lo inventa.',
  'Agenda, mueve y cancela citas con tu Google Calendar, y las recuerda antes de la hora.',
  'Toma pedidos en el chat y te avisa a tu WhatsApp personal.',
  'Pasa la conversación a una persona cuando el cliente lo pide o hay una queja.',
];

const EKO_STEPS = [
  ['Pasajero', 'Escribe al WhatsApp de Eko y comparte su ubicación. No instala nada.'],
  ['Conductor', 'Entra a turno escribiendo ACTIVO y recibe viajes cercanos con un botón para tomarlos.'],
  ['Concesionaria', 'Da de alta sus unidades y ve sus viajes en un panel sencillo.'],
];

export function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
        <div className="grid items-end gap-12 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Hecho en México</p>
            <h1 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Apps que trabajan por WhatsApp.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              En EmiCorp hacemos herramientas para negocios y servicios locales. Tus clientes no descargan
              nada: todo pasa en el chat que ya usan todos los días.
            </p>
          </div>

          <nav aria-label="Nuestras apps" className="border-t border-ink">
            <a href="#emi" className="group flex items-center gap-4 border-b border-line py-5">
              <img src="/brand/emi-icon.svg" alt="" width="44" height="44" className="h-11 w-11 rounded-xl" />
              <span className="min-w-0 flex-1">
                <span className="block font-display text-2xl font-semibold">Emi</span>
                <span className="block text-sm text-ink-muted">Asistente de WhatsApp para negocios</span>
              </span>
              <span className="text-xs font-medium text-sky-700">Disponible</span>
            </a>
            <a href="#eko" className="group flex items-center gap-4 border-b border-line py-5">
              <img src="/brand/eko-icon.svg" alt="" width="44" height="44" className="h-11 w-11 rounded-xl" />
              <span className="min-w-0 flex-1">
                <span className="block font-display text-2xl font-semibold">Eko</span>
                <span className="block text-sm text-ink-muted">Mototaxi por WhatsApp</span>
              </span>
              <span className="text-xs font-medium text-ink-muted">Piloto en Suchiapa</span>
            </a>
          </nav>
        </div>
      </section>

      <section id="emi" aria-labelledby="emi-title" className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
          <div>
            <div className="flex items-center gap-3">
              <img src="/brand/emi-icon.svg" alt="" width="40" height="40" className="h-10 w-10 rounded-xl" />
              <p className="text-sm font-medium text-sky-700">Emi · para negocios</p>
            </div>
            <h2 id="emi-title" className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Tu negocio atiende por WhatsApp, aunque tú no estés.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Para barberías, estéticas, consultorios, restaurantes y tiendas. Configuras todo en unas
              cuantas pantallas y Emi responde a tus clientes en segundos.
            </p>
            <ul className="mt-8 space-y-4">
              {EMI_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-[16px] leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="https://app.emicorp.org" className="rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
                Probar 14 días gratis
              </a>
              <p className="text-sm text-ink-muted">Sin tarjeta. Planes desde $349 MXN al mes más IVA.</p>
            </div>
          </div>
          <ChatMock
            title="Barbería"
            subtitle="Atendido por Emi"
            icon="/brand/emi-icon.svg"
            messages={EMI_CHAT}
            caption="Conversación de ejemplo"
          />
        </div>
      </section>

      <section id="eko" aria-labelledby="eko-title" className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
          <div className="md:order-2">
            <div className="flex items-center gap-3">
              <img src="/brand/eko-icon.svg" alt="" width="40" height="40" className="h-10 w-10 rounded-xl" />
              <p className="text-sm font-medium text-sky-200">Eko · mototaxi</p>
            </div>
            <h2 id="eko-title" className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Pide tu mototaxi por WhatsApp.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-paper/80">
              Eko conecta a los pasajeros con los mototaxis en turno más cercanos. El pasajero le paga al
              conductor como siempre; Eko no le cobra nada.
            </p>
            <ol className="mt-8 divide-y divide-paper/15 border-y border-paper/15">
              {EKO_STEPS.map(([who, what]) => (
                <li key={who} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <span className="font-medium text-sky-200">{who}</span>
                  <span className="leading-relaxed text-paper/85">{what}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="https://eko.emicorp.org" className="rounded-full bg-paper px-6 py-3 font-medium text-ink hover:bg-paper-warm">
                Conocer Eko
              </a>
              <p className="text-sm text-paper/70">Piloto en Suchiapa, Chiapas.</p>
            </div>
          </div>
          <div className="md:order-1">
            <ChatMock
              title="Eko"
              subtitle="Mototaxi por WhatsApp"
              icon="/brand/eko-icon.svg"
              messages={EKO_CHAT}
              caption={<span className="text-paper/60">Conversación de ejemplo</span>}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="whatsapp-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 id="whatsapp-title" className="font-display text-3xl font-semibold tracking-tight">
            Cómo usamos WhatsApp Business Platform
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Todas nuestras apps usan la API oficial de WhatsApp Business de Meta. Esto es lo que hace
            cada permiso.
          </p>
        </div>
        <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          <div className="border-t border-ink pt-5">
            <dt><code className="text-[15px] font-semibold">whatsapp_business_messaging</code></dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Permite enviar y recibir mensajes de texto, plantillas aprobadas por Meta y notificaciones a
              los clientes finales de cada negocio suscrito a EmiCorp. Los mensajes se procesan en tiempo
              real y no se almacenan mas alla de lo necesario para generar la respuesta automatica.
            </dd>
          </div>
          <div className="border-t border-ink pt-5">
            <dt><code className="text-[15px] font-semibold">whatsapp_business_management</code></dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Permite gestionar cuentas de WhatsApp Business (WABA), crear y administrar plantillas de
              mensajes, y consultar el estado de los numeros de telefono asociados. El onboarding se
              realiza exclusivamente mediante Embedded Signup oficial de Meta. EmiCorp no almacena tokens
              de acceso permanentes.
            </dd>
          </div>
        </dl>
        <div className="mt-10 grid gap-6 text-sm leading-relaxed text-ink-muted md:grid-cols-2">
          <p>
            <strong className="font-semibold text-ink">Emi</strong> es una plataforma SaaS multitenant. Cada
            negocio suscrito gestiona su propia cuenta de WhatsApp Business a traves de EmiCorp como
            Proveedor de Soluciones de WhatsApp Business (BSP). Detalles en la{' '}
            <a href="/privacy" native className="text-ink underline underline-offset-4">Política de Privacidad de Emi</a>.
          </p>
          <p>
            <strong className="font-semibold text-ink">Eko</strong> usa una sola cuenta de WhatsApp Business,
            propiedad de EmiCorp, para hablar con pasajeros y conductores. No se conecta a cuentas de
            otros negocios. Detalles en la{' '}
            <a href="/eko/privacy" native className="text-ink underline underline-offset-4">Política de Privacidad de Eko</a>.
          </p>
        </div>
      </section>

      <section aria-labelledby="quien-title" className="border-t border-line bg-paper-warm">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.4fr]">
          <h2 id="quien-title" className="font-display text-3xl font-semibold tracking-tight">Quién está detrás</h2>
          <div className="space-y-4 text-[16px] leading-relaxed text-ink-soft">
            <p>
              EmiCorp es la marca comercial de <strong className="font-semibold text-ink">Emiliano Nataren Del Rivero</strong>,
              persona física con actividad empresarial (RFC NARE021227KI9). Es la persona responsable de
              Emi, de Eko y de los datos que tratan.
            </p>
            <p>
              ¿Quieres usar alguna de nuestras apps en tu negocio o tu pueblo? Escríbenos a{' '}
              <a href="mailto:enataren@emicorp.org" className="text-ink underline underline-offset-4">enataren@emicorp.org</a>.
            </p>
            <p>
              <a href="/legal" native className="text-ink underline underline-offset-4">Ver todos los documentos legales</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
