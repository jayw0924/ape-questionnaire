import { FormData } from "./types";
import translations from "@/i18n/translations";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwIgKQ2dgl02MkheE8m4qcOLiaNxE3RCIo15yXj0UD90puCiCfLhGPoP0maZrbvJRjEQg/exec";

const es = translations.es;

function label(key: string, value: string): string {
  return es[`${key}.opt.${value}`] || value;
}

export async function submitForm(data: FormData): Promise<{ success: boolean }> {
  const payload = {
    respondentName: data.respondentName,
    respondentEmail: data.respondentEmail,
    respondentPhone: data.respondentPhone,
    childAge: label("q1", data.childAge),
    timeline: label("q2", data.timeline),
    currentCare: label("q3", data.currentCare),
    currentCareOther: data.currentCareOther,
    mainConcern: label("q4", data.mainConcern),
    mainConcernOther: data.mainConcernOther,
    programPrefs: data.programPrefs.map((v) => label("q5", v)),
    schedule: label("q6", data.schedule),
    priceRange: label("q7", data.priceRange),
    pricingModel: label("q8", data.pricingModel),
    interest: label("q9", data.interest),
    comments: data.comments,
  };

  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return { success: true };
}
