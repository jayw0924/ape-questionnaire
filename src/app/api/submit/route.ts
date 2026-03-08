import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Validate required fields
  const requiredFields = [
    "childAge",
    "timeline",
    "currentCare",
    "mainConcern",
    "schedule",
    "priceRange",
    "pricingModel",
    "interest",
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      return NextResponse.json(
        { success: false, error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!data.programPrefs || data.programPrefs.length === 0) {
    return NextResponse.json(
      { success: false, error: "Missing required field: programPrefs" },
      { status: 400 }
    );
  }

  // Log for now — future: send to Google Sheets
  console.log("--- Form Submission ---");
  console.log(JSON.stringify(data, null, 2));

  // Stubbed Google Sheets integration
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Failed to send to Google Sheets:", err);
    }
  }

  return NextResponse.json({ success: true });
}
