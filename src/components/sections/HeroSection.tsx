import { APP_URL } from "@/lib/brand";

export function HeroSection() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgb(138_98_50/0.16),transparent_62%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nm-accent">Gestão jurídica</p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            O escritório inteiro, com o tempo do processo à vista.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-nm-muted">
            Clientes, processos e equipe no mesmo lugar. A jurimetria lê o DataJud e estima quanto a tramitação ainda deve durar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={APP_URL} className="inline-flex min-h-12 items-center rounded-xl bg-nm-accent px-6 text-sm font-semibold text-white hover:bg-nm-accent-hover">
              Acessar o sistema
            </a>
            <a href="#modulos" className="inline-flex min-h-12 items-center rounded-xl border border-nm-line bg-nm-card px-6 text-sm font-semibold text-nm-ink hover:border-nm-accent">
              Ver os módulos
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-nm-line bg-nm-card p-6 shadow-[0_24px_60px_-36px_rgb(26_23_20/0.55)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nm-muted">Previsão de tramitação</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-tight">184 dias restantes</p>
          <p className="mt-2 text-sm text-nm-muted">Tempo total estimado de 420 dias. Já se passaram 236.</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl bg-nm-subtle px-3 py-3">
              <dt className="text-[11px] uppercase tracking-[0.12em] text-nm-muted">Total</dt>
              <dd className="mt-1 font-semibold tabular-nums">420</dd>
            </div>
            <div className="rounded-2xl bg-nm-subtle px-3 py-3">
              <dt className="text-[11px] uppercase tracking-[0.12em] text-nm-muted">Decorrido</dt>
              <dd className="mt-1 font-semibold tabular-nums">236</dd>
            </div>
            <div className="rounded-2xl bg-nm-subtle px-3 py-3">
              <dt className="text-[11px] uppercase tracking-[0.12em] text-nm-muted">Restante</dt>
              <dd className="mt-1 font-semibold tabular-nums">184</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-nm-muted">Exemplo ilustrativo. A estimativa real sai do modelo treinado com processos encerrados.</p>
        </div>
      </div>
    </section>
  );
}
