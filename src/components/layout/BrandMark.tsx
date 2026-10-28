export function BrandMark({ clara = false, className = "" }: { clara?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={clara ? "rgb(255 255 255 / 0.12)" : "#1a1714"} />
        <path d="M10 22V10h2.2l3.8 7.2L19.8 10H22v12h-2.1v-7.3L16.4 19h-.8l-3.5-4.3V22H10Z" fill={clara ? "#f6f3ee" : "#f3ead8"} />
      </svg>
      <span className="text-sm font-semibold tracking-tight">Nomos</span>
    </span>
  );
}
