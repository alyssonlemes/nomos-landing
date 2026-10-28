import { BrandMark } from "@/components/layout/BrandMark";
import { APP_URL, BRAND, CONTACT_EMAIL } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-nm-line bg-nm-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandMark />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-nm-muted">{BRAND.tagline}</p>
        </div>
        <div className="text-sm text-nm-muted">
          <a href={APP_URL} className="font-medium text-nm-ink hover:text-nm-accent">
            Acessar o sistema
          </a>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block hover:text-nm-ink">
              {CONTACT_EMAIL}
            </a>
          )}
          <p className="mt-4 text-xs">© {new Date().getFullYear()} {BRAND.name}</p>
        </div>
      </div>
    </footer>
  );
}
