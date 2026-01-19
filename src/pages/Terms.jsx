import { useEffect } from 'preact/hooks';

export function Terms() {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Condiciones del Servicio
                    </h1>
                    <p className="text-lg text-gray-500">
                        Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Content with Tailwind Typography (prose) */}
                <div className="prose prose-lg prose-slate max-w-none hover:prose-a:text-blue-600 prose-headings:text-primary prose-headings:font-bold prose-p:text-gray-600">
                    <section>
                        <h2>1. Aceptación de los Términos</h2>
                        <p>
                            Al acceder y utilizar los servicios de EmiCorp (Emiliano Nataren Del Rivero), aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no podrás utilizar nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2>2. Descripción del Servicio</h2>
                        <p>
                            EmiCorp proporciona una plataforma de automatización de conversaciones para WhatsApp Business utilizando inteligencia artificial. El servicio permite la gestión de mensajes, programación de citas y respuestas automatizadas.
                        </p>
                    </section>

                    <section>
                        <h2>3. Uso Responsable</h2>
                        <p>
                            Como usuario, te comprometes a:
                        </p>
                        <ul>
                            <li>Cumplir con las Políticas de Mensajería de WhatsApp Business y Meta.</li>
                            <li>No utilizar la plataforma para enviar spam o contenido ilegal.</li>
                            <li>Mantener la seguridad de tus credenciales de acceso.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Propiedad Intelectual</h2>
                        <p>
                            Todo el software, algoritmos y materiales proporcionados por EmiCorp son propiedad intelectual de Emiliano Nataren Del Rivero o sus licenciantes. El uso del servicio no otorga propiedad sobre ninguna parte de la tecnología.
                        </p>
                    </section>

                    <section>
                        <h2>5. Limitación de Responsabilidad</h2>
                        <p>
                            EmiCorp se esfuerza por mantener un servicio ininterrumpido; sin embargo, no garantizamos que el servicio esté libre de errores o interrupciones. No somos responsables por pérdidas de datos resultantes de interrupciones en los servicios de terceros (como API de WhatsApp o Meta).
                        </p>
                    </section>

                    <section>
                        <h2>6. Modificaciones de los Términos</h2>
                        <p>
                            Nos reservamos el derecho de modificar estos términos en cualquier momento. Notificaremos cambios significativos a través de nuestra plataforma o vía correo electrónico.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contacto</h2>
                        <p>
                            Si tienes preguntas sobre estas Condiciones, contáctanos en: <a href="mailto:enataren@emicorp.org">enataren@emicorp.org</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
