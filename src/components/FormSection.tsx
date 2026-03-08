"use client";

import { ReactNode } from "react";

interface FormSectionProps {
  number: number;
  children: ReactNode;
}

export default function FormSection({ number, children }: FormSectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-white">
          {number}
        </span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
