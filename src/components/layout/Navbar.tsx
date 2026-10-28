"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/layout/BrandMark";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { APP_URL } from "@/lib/brand";

const links = [
  { label: "Módulos", href: "#modulos" },
  { label: "Como funciona", href: "#jornada" },
  { label: "Acesso", href: "#acesso" },
  { label: "Perguntas", href: "#faq" },
];

export function Navbar() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 bg-nm-brand text-white ${rolou ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]" : ""}`}>
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" aria-label="Nomos — início">
          <BrandMark clara />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center px-3.5 text-[13px] font-medium text-white/70 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <ThemeToggle />
          <a href={APP_URL} className="inline-flex min-h-11 items-center rounded-xl bg-nm-accent px-5 text-[13px] font-semibold text-white hover:bg-nm-accent-hover">
            Entrar
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="sm:hidden">
            <ThemeToggle />
          </div>
          <button type="button" onClick={() => setAberto((valor) => !valor)} aria-label={aberto ? "Fechar menu" : "Abrir menu"} className="inline-flex size-11 items-center justify-center rounded-xl text-white">
            {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {aberto && (
        <div className="border-t border-white/10 px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setAberto(false)} className="block py-3 text-sm text-white/80">
              {link.label}
            </a>
          ))}
          <a href={APP_URL} className="mt-2 inline-flex min-h-11 items-center rounded-xl bg-nm-accent px-5 text-sm font-semibold text-white">
            Entrar
          </a>
        </div>
      )}
    </header>
  );
}
