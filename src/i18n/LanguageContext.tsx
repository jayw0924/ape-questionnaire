"use client";

import { createContext, useState, ReactNode } from "react";

export type Locale = "es" | "en";

export const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({
  locale: "es",
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
