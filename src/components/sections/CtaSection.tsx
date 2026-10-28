import { APP_URL } from "@/lib/brand";

export function CtaSection() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-nm-brand px-6 py-14 text-white sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Sistema do escritório</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">Entre e monte a carteira.</h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
          O cadastro, os processos e a jurimetria ficam no sistema. Esta página só apresenta o Nomos.
        </p>
        <a href={APP_URL} className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-white px-6 text-sm font-semibold text-nm-brand">
          Acessar o sistema
        </a>
      </div>
    </section>
  );
}
