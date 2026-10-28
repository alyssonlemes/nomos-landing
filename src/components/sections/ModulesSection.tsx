import { MODULOS } from "@/lib/conteudo";

export function ModulesSection() {
  return (
    <section id="modulos" className="scroll-mt-20 border-t border-nm-line bg-nm-card py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nm-accent">Módulos</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">O que o escritório passa a ver junto.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {MODULOS.map((modulo) => (
            <article key={modulo.titulo} className="rounded-3xl border border-nm-line bg-nm-surface p-6">
              <h3 className="text-lg font-semibold">{modulo.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-nm-muted">{modulo.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
