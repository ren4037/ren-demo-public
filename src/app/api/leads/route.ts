import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  if (!payload.name || !payload.email || !payload.goal) {
    return NextResponse.json({ error: "Missing required lead fields" }, { status: 400 });
  }

  return NextResponse.json({
    status: "accepted",
    noteId: "seo_note_001",
    received: payload
  });
}
