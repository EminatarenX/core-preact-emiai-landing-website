export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="EmiCorp, inicio">
          <img src="/brand/emicorp-mark.svg" alt="" width="28" height="28" className="h-7 w-7" />
          <span className="font-display text-xl font-semibold tracking-tight">EmiCorp</span>
        </a>
        <div className="flex items-center gap-1 text-[15px] sm:gap-2">
          <a href="/#emi" className="rounded-md px-2.5 py-2 text-ink-soft hover:text-ink">Emi</a>
          <a href="/#eko" className="rounded-md px-2.5 py-2 text-ink-soft hover:text-ink">Eko</a>
          <a href="/legal" native className="hidden rounded-md px-2.5 py-2 text-ink-soft hover:text-ink sm:block">Legal</a>
          <a
            href="mailto:enataren@emicorp.org"
            className="ml-1 rounded-full bg-ink px-4 py-2 font-medium text-paper hover:bg-ink-soft"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
