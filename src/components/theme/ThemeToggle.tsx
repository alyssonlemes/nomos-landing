"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle({ variante = "escuro" }: { variante?: "escuro" | "claro" }) {
  const { theme, toggleTheme } = useTheme();
  const escuro = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={escuro ? "Ativar tema claro" : "Ativar tema escuro"}
      className={`inline-flex size-11 items-center justify-center rounded-xl transition-colors ${
        variante === "escuro" ? "text-white/80 hover:bg-white/10 hover:text-white" : "border border-nm-line text-nm-ink hover:bg-nm-subtle"
      }`}
    >
      {escuro ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
