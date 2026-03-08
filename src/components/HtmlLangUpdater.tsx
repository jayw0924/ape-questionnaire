"use client";

import { useEffect } from "react";
import { useTranslation } from "@/i18n/useTranslation";

export default function HtmlLangUpdater() {
  const { locale } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
