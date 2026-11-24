export function BrandMark({ clara = false, className = "" }: { clara?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={clara ? "/white_logo.png" : "/black_logo.png"} alt="" className="size-10 object-contain" />
      <span className="text-sm font-semibold tracking-tight">Nomos</span>
    </span>
  );
}
