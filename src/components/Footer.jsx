const linkClass = 'text-ink-soft hover:text-ink hover:underline underline-offset-4';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="/" className="flex items-center gap-2.5">
            <img src="/brand/emicorp-mark.svg" alt="" width="28" height="28" className="h-7 w-7" />
            <span className="font-display text-xl font-semibold">EmiCorp</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            EmiCorp es la marca comercial de <strong className="font-semibold text-ink">Emiliano Nataren Del Rivero</strong>,
            persona física con actividad empresarial, RFC NARE021227KI9.
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-ink-muted">
            Domicilio fiscal: Calle de Chiapas null6 INT. Piso 2, Roma Norte, Cuauhtemoc, Ciudad de Mexico, Mexico, C.P. 06700.
          </p>
          <p className="mt-3 text-sm">
            <a href="mailto:enataren@emicorp.org" className={linkClass}>enataren@emicorp.org</a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Emi</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://app.emicorp.org" className={linkClass}>Entrar a Emi</a></li>
            <li><a href="/privacy" native className={linkClass}>Política de privacidad</a></li>
            <li><a href="/terms" native className={linkClass}>Condiciones del servicio</a></li>
            <li><a href="/privacy#eliminacion-datos" native className={linkClass}>Eliminación de datos</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Eko</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://eko.emicorp.org" className={linkClass}>Conocer Eko</a></li>
            <li><a href="/eko/privacy" native className={linkClass}>Política de privacidad</a></li>
            <li><a href="/eko/terms" native className={linkClass}>Términos y condiciones</a></li>
            <li><a href="/eko/privacy#eliminacion-datos" native className={linkClass}>Eliminación de datos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink-muted sm:flex-row sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} Emiliano Nataren Del Rivero. Todos los derechos reservados.</p>
          <p>EmiCorp no está afiliada a Meta Platforms, Inc. WhatsApp es una marca de Meta Platforms, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
