"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function LanguageToggle() {
  const { t, locale, setLocale } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="rounded-full border border-cream-200 px-4 py-1.5 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-600"
    >
      {t("lang.toggle")}
    </button>
  );
}
