"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { FormData, initialFormData } from "@/lib/types";
import { submitForm } from "@/lib/submitForm";
import { useTranslation } from "@/i18n/useTranslation";
import LanguageToggle from "@/components/LanguageToggle";
import FormSection from "@/components/FormSection";
import QuestionRadio from "@/components/QuestionRadio";
import QuestionCheckbox from "@/components/QuestionCheckbox";
import QuestionText from "@/components/QuestionText";
import SubmitButton from "@/components/SubmitButton";

export default function Home() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    // Validate respondent info
    if (!form.respondentName.trim() || !form.respondentPhone.trim()) {
      setError(t("validation.required"));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Validate required fields
    const requiredRadios: (keyof FormData)[] = [
      "childAge",
      "timeline",
      "currentCare",
      "mainConcern",
      "schedule",
      "priceRange",
      "pricingModel",
      "interest",
    ];

    for (const key of requiredRadios) {
      if (!form[key]) {
        setError(t("validation.required"));
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    if (form.programPrefs.length === 0) {
      setError(t("validation.required"));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setStatus("submitting");
    try {
      await submitForm(form);
      setStatus("submitted");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Error submitting form. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "submitted") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream-50 px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
          <Image
            src="/LogoAPE.png"
            alt="Academia Panamá Este"
            width={80}
            height={80}
            className="mx-auto mb-4 rounded-full"
          />
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-navy-100">
            <svg className="h-8 w-8 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-navy-800">{t("submit.success.title")}</h2>
          <p className="mt-2 text-sm text-gray-600">{t("submit.success.message")}</p>
        </div>
      </div>
    );
  }

  function formatPanamaPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length > 4) {
      return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    }
    return digits;
  }

  function handlePhoneChange(value: string) {
    const formatted = formatPanamaPhone(value);
    update("respondentPhone", formatted);
  }

  return (
    <div className="relative min-h-screen bg-cream-50 px-4 py-8 sm:py-12">
      {/* Language toggle — top right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <LanguageToggle />
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 rounded-xl bg-navy-700 p-6 text-center shadow-sm">
          <Image
            src="/LogoAPE.png"
            alt="Academia Panamá Este"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full"
            priority
          />
          <h1 className="text-2xl font-bold text-cream-100">{t("title")}</h1>
          <p className="mt-1 text-sm text-cream-200">{t("subtitle")}</p>
        </div>

        {/* Form card */}
        <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-2 text-sm text-gray-600">{t("intro")}</p>
          <p className="mb-8 text-xs text-gray-400">{t("required")}</p>

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Respondent info */}
            <fieldset className="rounded-lg border border-navy-200 p-5">
              <legend className="px-2 text-base font-semibold text-navy-700">
                {t("respondent.title")}
              </legend>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">{t("respondent.name")}</span>
                  <input
                    type="text"
                    value={form.respondentName}
                    onChange={(e) => update("respondentName", e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">{t("respondent.email")}</span>
                  <input
                    type="email"
                    value={form.respondentEmail}
                    onChange={(e) => update("respondentEmail", e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">{t("respondent.phone")}</span>
                  <input
                    type="tel"
                    value={form.respondentPhone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder={t("respondent.phone.placeholder")}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                  />
                </label>
              </div>
            </fieldset>

            {/* Q1: Child age */}
            <FormSection number={1}>
              <QuestionRadio
                questionKey="q1"
                options={[
                  { value: "0-11m", labelKey: "q1.opt.0-11m" },
                  { value: "1-2y", labelKey: "q1.opt.1-2y" },
                  { value: "2-3y", labelKey: "q1.opt.2-3y" },
                  { value: "no", labelKey: "q1.opt.no" },
                ]}
                value={form.childAge}
                onChange={(v) => update("childAge", v)}
              />
            </FormSection>

            {/* Q2: Timeline */}
            <FormSection number={2}>
              <QuestionRadio
                questionKey="q2"
                options={[
                  { value: "now", labelKey: "q2.opt.now" },
                  { value: "3m", labelKey: "q2.opt.3m" },
                  { value: "6m", labelKey: "q2.opt.6m" },
                  { value: "later", labelKey: "q2.opt.later" },
                  { value: "none", labelKey: "q2.opt.none" },
                ]}
                value={form.timeline}
                onChange={(v) => update("timeline", v)}
              />
            </FormSection>

            {/* Q3: Current care */}
            <FormSection number={3}>
              <QuestionRadio
                questionKey="q3"
                options={[
                  { value: "home", labelKey: "q3.opt.home" },
                  { value: "nanny", labelKey: "q3.opt.nanny" },
                  { value: "daycare", labelKey: "q3.opt.daycare" },
                  { value: "family", labelKey: "q3.opt.family" },
                  { value: "other", labelKey: "q3.opt.other" },
                ]}
                value={form.currentCare}
                onChange={(v) => update("currentCare", v)}
                hasOther
                otherValue={form.currentCareOther}
                onOtherChange={(v) => update("currentCareOther", v)}
              />
            </FormSection>

            {/* Q4: Main concern */}
            <FormSection number={4}>
              <QuestionRadio
                questionKey="q4"
                options={[
                  { value: "stimulation", labelKey: "q4.opt.stimulation" },
                  { value: "work", labelKey: "q4.opt.work" },
                  { value: "trust", labelKey: "q4.opt.trust" },
                  { value: "language", labelKey: "q4.opt.language" },
                  { value: "social", labelKey: "q4.opt.social" },
                  { value: "other", labelKey: "q4.opt.other" },
                ]}
                value={form.mainConcern}
                onChange={(v) => update("mainConcern", v)}
                hasOther
                otherValue={form.mainConcernOther}
                onOtherChange={(v) => update("mainConcernOther", v)}
              />
            </FormSection>

            {/* Q5: Program preferences (max 3) */}
            <FormSection number={5}>
              <QuestionCheckbox
                questionKey="q5"
                options={[
                  { value: "stimulation", labelKey: "q5.opt.stimulation" },
                  { value: "personalized", labelKey: "q5.opt.personalized" },
                  { value: "safe", labelKey: "q5.opt.safe" },
                  { value: "english", labelKey: "q5.opt.english" },
                  { value: "routines", labelKey: "q5.opt.routines" },
                  { value: "flexible", labelKey: "q5.opt.flexible" },
                  { value: "proximity", labelKey: "q5.opt.proximity" },
                ]}
                values={form.programPrefs}
                onChange={(v) => update("programPrefs", v)}
                max={3}
              />
            </FormSection>

            {/* Q6: Schedule */}
            <FormSection number={6}>
              <QuestionRadio
                questionKey="q6"
                options={[
                  { value: "am", labelKey: "q6.opt.am" },
                  { value: "pm", labelKey: "q6.opt.pm" },
                  { value: "full", labelKey: "q6.opt.full" },
                  { value: "flexible", labelKey: "q6.opt.flexible" },
                ]}
                value={form.schedule}
                onChange={(v) => update("schedule", v)}
              />
            </FormSection>

            {/* Q7: Price range */}
            <FormSection number={7}>
              <QuestionRadio
                questionKey="q7"
                options={[
                  { value: "under100", labelKey: "q7.opt.under100" },
                  { value: "100-150", labelKey: "q7.opt.100-150" },
                  { value: "over150", labelKey: "q7.opt.over150" },
                ]}
                value={form.priceRange}
                onChange={(v) => update("priceRange", v)}
              />
            </FormSection>

            {/* Q8: Pricing model */}
            <FormSection number={8}>
              <QuestionRadio
                questionKey="q8"
                options={[
                  { value: "allin", labelKey: "q8.opt.allin" },
                  { value: "extras", labelKey: "q8.opt.extras" },
                  { value: "indifferent", labelKey: "q8.opt.indifferent" },
                ]}
                value={form.pricingModel}
                onChange={(v) => update("pricingModel", v)}
              />
            </FormSection>

            {/* Q9: Interest */}
            <FormSection number={9}>
              <QuestionRadio
                questionKey="q9"
                options={[
                  { value: "yes", labelKey: "q9.opt.yes" },
                  { value: "maybe", labelKey: "q9.opt.maybe" },
                  { value: "no", labelKey: "q9.opt.no" },
                ]}
                value={form.interest}
                onChange={(v) => update("interest", v)}
              />
            </FormSection>

            {/* Q10: Comments */}
            <FormSection number={10}>
              <label className="block">
                <span className="text-base font-medium text-gray-900">{t("q10.comments.title")}</span>
                <textarea
                  value={form.comments}
                  onChange={(e) => update("comments", e.target.value)}
                  placeholder={t("q10.comments.placeholder")}
                  rows={4}
                  className="mt-3 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600"
                />
              </label>
            </FormSection>

            <SubmitButton status={status} />
          </form>
        </div>
      </div>
    </div>
  );
}
