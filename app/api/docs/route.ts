import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllDocs } from "@/lib/docs";

export const runtime = "edge";

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const docs = await getAllDocs();
  return NextResponse.json(docs);
}
