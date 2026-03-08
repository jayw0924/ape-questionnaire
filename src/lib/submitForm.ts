import { FormData } from "./types";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwIgKQ2dgl02MkheE8m4qcOLiaNxE3RCIo15yXj0UD90puCiCfLhGPoP0maZrbvJRjEQg/exec";

export async function submitForm(data: FormData): Promise<{ success: boolean }> {
  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return { success: true };
}
