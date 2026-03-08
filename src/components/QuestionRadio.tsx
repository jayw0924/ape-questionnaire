"use client";

import { useTranslation } from "@/i18n/useTranslation";

interface Option {
  value: string;
  labelKey: string;
}

interface QuestionRadioProps {
  questionKey: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  hasOther?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}

export default function QuestionRadio({
  questionKey,
  options,
  value,
  onChange,
  hasOther,
  otherValue,
  onOtherChange,
}: QuestionRadioProps) {
  const { t } = useTranslation();

  return (
    <fieldset>
      <legend className="text-base font-medium text-gray-900">
        {t(`${questionKey}.title`)}
      </legend>
      <div className="mt-3 space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50 has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50"
          >
            <input
              type="radio"
              name={questionKey}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 accent-gray-800"
            />
            <span className="text-sm text-gray-700">{t(opt.labelKey)}</span>
          </label>
        ))}
      </div>
      {hasOther && value === "other" && (
        <input
          type="text"
          value={otherValue ?? ""}
          onChange={(e) => onOtherChange?.(e.target.value)}
          placeholder={t("other.placeholder")}
          className="mt-2 ml-7 w-[calc(100%-1.75rem)] rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
        />
      )}
    </fieldset>
  );
}
