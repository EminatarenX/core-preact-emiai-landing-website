import { Link } from 'preact-router';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold tracking-tight text-primary mb-4">EmiCorp</h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Plataforma de agentes conversacionales inteligentes para WhatsApp.
              Operado por Emiliano Nataren Del Rivero.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">Producto</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <a href="#casos-uso" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Casos de Uso
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary mb-4">Legal & Contacto</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <a
                  href="/privacy#eliminacion-datos"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Eliminación de datos
                </a>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  Condiciones del Servicio
                </Link>
              </li>
              <li>
                <a
                  href="mailto:enataren@emicorp.org"
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  enataren@emicorp.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Emiliano Nataren Del Rivero. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Sistemas operativos
          </p>
        </div>
      </div>
    </footer>
  );
}

