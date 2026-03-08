"use client";

import { useTranslation } from "@/i18n/useTranslation";

interface QuestionTextProps {
  labelKey: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
}

export default function QuestionText({
  labelKey,
  value,
  onChange,
  type = "text",
}: QuestionTextProps) {
  const { t } = useTranslation();

  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{t(labelKey)}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
      />
    </label>
  );
}
