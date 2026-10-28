import { PERGUNTAS } from "@/lib/conteudo";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nm-accent">Perguntas</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Antes de entrar.</h2>
        <div className="mt-8 divide-y divide-nm-line rounded-3xl border border-nm-line bg-nm-card">
          {PERGUNTAS.map((item) => (
            <details key={item.pergunta} className="group px-6 py-4">
              <summary className="cursor-pointer list-none text-base font-semibold [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.pergunta}
                  <span className="text-nm-muted group-open:rotate-45" aria-hidden="true">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-nm-muted">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
