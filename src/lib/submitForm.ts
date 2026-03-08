import { FormData } from "./types";

export async function submitForm(data: FormData): Promise<{ success: boolean }> {
  const res = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return res.json();
}
