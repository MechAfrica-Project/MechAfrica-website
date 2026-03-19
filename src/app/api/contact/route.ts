import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  organization?: unknown;
  topic?: unknown;
  message?: unknown;
  source?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as ContactPayload | null;

  if (!data) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!isNonEmptyString(data.name)) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!isNonEmptyString(data.email)) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!isNonEmptyString(data.topic)) {
    return NextResponse.json({ error: "Inquiry type is required." }, { status: 400 });
  }

  if (!isNonEmptyString(data.message)) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  // Placeholder endpoint: integrate with email/CRM later.
  return NextResponse.json({
    ok: true,
    received: {
      name: data.name,
      email: data.email,
      phone: typeof data.phone === "string" ? data.phone : undefined,
      organization: typeof data.organization === "string" ? data.organization : undefined,
      topic: data.topic,
      source: typeof data.source === "string" ? data.source : undefined,
    },
  });
}

