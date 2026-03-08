"use client";

import { useTranslation } from "@/i18n/useTranslation";

interface SubmitButtonProps {
  status: "idle" | "submitting" | "submitted";
}

export default function SubmitButton({ status }: SubmitButtonProps) {
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      disabled={status !== "idle"}
      className="w-full rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {status === "submitting" && (
        <svg
          className="mr-2 inline h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {status === "submitting" ? t("submit.sending") : t("submit")}
    </button>
  );
}
