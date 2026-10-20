/**
 * Conversación de ejemplo dibujada con HTML. `messages`: { from: 'in' | 'out', text, buttons?, meta? }.
 * `in` es el cliente; `out` es el asistente.
 */
export function ChatMock({ title, subtitle, icon, messages, caption }) {
  return (
    <figure className="mx-auto w-full max-w-[360px]">
      <div className="overflow-hidden rounded-[28px] border border-line bg-white text-ink">
        <div className="flex items-center gap-3 border-b border-line bg-white px-4 py-3">
          <img src={icon} alt="" width="36" height="36" className="h-9 w-9 rounded-xl" />
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold leading-tight">{title}</p>
            <p className="truncate text-xs text-ink-muted">{subtitle}</p>
          </div>
        </div>
        <ol className="space-y-2 bg-chat-bg px-3 py-4" aria-label={`Conversación de ejemplo con ${title}`}>
          {messages.map((m, i) => (
            <li key={i} className={`flex ${m.from === 'in' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-[85%]">
                <div
                  className={`rounded-2xl px-3 py-2 text-[14px] leading-snug ${
                    m.from === 'in' ? 'rounded-tr-md bg-chat-out' : 'rounded-tl-md bg-white'
                  }`}
                >
                  {m.meta && <p className="mb-1 text-[12px] font-medium text-sky-700">{m.meta}</p>}
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
                {m.buttons && (
                  <div className="mt-1 grid gap-1" style={{ gridTemplateColumns: `repeat(${m.buttons.length}, minmax(0, 1fr))` }}>
                    {m.buttons.map((b) => (
                      <span key={b} className="rounded-xl bg-white px-2 py-1.5 text-center text-[13px] font-medium text-sky-700">
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
      {caption && <figcaption className="mt-3 text-center text-xs text-ink-muted">{caption}</figcaption>}
    </figure>
  );
}
