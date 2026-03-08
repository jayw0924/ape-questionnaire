"use client";

import { useTranslation } from "@/i18n/useTranslation";

interface Option {
  value: string;
  labelKey: string;
}

interface QuestionCheckboxProps {
  questionKey: string;
  options: Option[];
  values: string[];
  onChange: (values: string[]) => void;
  max: number;
}

export default function QuestionCheckbox({
  questionKey,
  options,
  values,
  onChange,
  max,
}: QuestionCheckboxProps) {
  const { t } = useTranslation();

  function handleToggle(optValue: string) {
    if (values.includes(optValue)) {
      onChange(values.filter((v) => v !== optValue));
    } else if (values.length < max) {
      onChange([...values, optValue]);
    }
  }

  return (
    <fieldset>
      <legend className="text-base font-medium text-gray-900">
        {t(`${questionKey}.title`)}
      </legend>
      <p className="mt-1 text-sm text-gray-500">
        {t(`${questionKey}.hint`)}
      </p>
      <div className="mt-3 space-y-2">
        {options.map((opt) => {
          const checked = values.includes(opt.value);
          const disabled = !checked && values.length >= max;
          return (
            <label
              key={opt.value}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                disabled
                  ? "border-gray-100 bg-gray-50 cursor-not-allowed opacity-50"
                  : "border-gray-200 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50"
              }`}
            >
              <input
                type="checkbox"
                value={opt.value}
                checked={checked}
                disabled={disabled}
                onChange={() => handleToggle(opt.value)}
                className="h-4 w-4 accent-gray-800"
              />
              <span className="text-sm text-gray-700">{t(opt.labelKey)}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
