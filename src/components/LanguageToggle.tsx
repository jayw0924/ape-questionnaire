"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function LanguageToggle() {
  const { t, locale, setLocale } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 shadow-sm transition-colors hover:bg-navy-50"
    >
      {t("lang.toggle")}
    </button>
  );
}
