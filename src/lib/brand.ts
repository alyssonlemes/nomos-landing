export const BRAND = {
  name: "Nomos",
  product: "Gestão jurídica",
  tagline: "Escritório organizado. Prazo visível. Tramitação estimada.",
} as const;

export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000").replace(/\/$/, "");
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
