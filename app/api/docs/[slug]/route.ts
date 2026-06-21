import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { loadOverrides, saveOverrides } from "@/lib/storage";

export const runtime = "edge";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug } = await params;
    const body = await request.json() as { title?: string; description?: string; content?: string; category?: string };
    const { title, description, content, category } = body;

    const overrides = await loadOverrides();
    overrides[slug] = {
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
      ...(content !== undefined && { content }),
      ...(category !== undefined && { category }),
    };

    await saveOverrides(overrides);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const overrides = await loadOverrides();
  delete overrides[slug];
  await saveOverrides(overrides);

  return NextResponse.json({ success: true });
}
