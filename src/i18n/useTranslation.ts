"use client";

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./translations";

export function useTranslation() {
  const { locale, setLocale } = useContext(LanguageContext);

  function t(key: string): string {
    return translations[locale]?.[key] ?? key;
  }

  return { t, locale, setLocale };
}
