import { PASSOS } from "@/lib/conteudo";

export function JourneySection() {
  return (
    <section id="jornada" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nm-accent">Como funciona</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">Da conta ao prazo estimado.</h2>
        <ol className="mt-10 grid gap-4 lg:grid-cols-3">
          {PASSOS.map((passo) => (
            <li key={passo.numero} className="rounded-3xl border border-nm-line bg-nm-card p-6">
              <p className="font-display text-2xl text-nm-accent">{passo.numero}</p>
              <h3 className="mt-4 text-lg font-semibold">{passo.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-nm-muted">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
