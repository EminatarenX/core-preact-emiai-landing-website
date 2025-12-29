import { Link } from 'preact-router';

export function Header() {
  return (
    <header className="w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            EMI
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <a
              href="mailto:enataren@emicorp.org"
              className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

