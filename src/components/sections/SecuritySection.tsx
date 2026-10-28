const itens = [
  {
    titulo: "Isolamento por escritório",
    texto: "Clientes, processos e convites ficam dentro da organização. Outro escritório não lê essa carteira.",
  },
  {
    titulo: "Papel de cada pessoa",
    texto: "Quem administra convida a equipe. Quem assiste não treina modelo nem abre a jurimetria.",
  },
  {
    titulo: "Sessão do sistema",
    texto: "O acesso do escritório usa a conta criada no Nomos. O painel interno da equipe é outro login.",
  },
];

export function SecuritySection() {
  return (
    <section id="acesso" className="scroll-mt-20 border-t border-nm-line bg-nm-card py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nm-accent">Acesso</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl">Cada escritório no seu espaço.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {itens.map((item) => (
            <article key={item.titulo}>
              <h3 className="text-base font-semibold">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-nm-muted">{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
