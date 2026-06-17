import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { clearHomeConfig, saveHomeConfig } from "@/lib/storage";
import { getHomeConfig, cardStyles } from "@/lib/homepage";
import type { HomeConfig, HomeProduct, CardStyle } from "@/lib/homepage";

export const runtime = "edge";

export async function GET() {
  const config = await getHomeConfig();
  return NextResponse.json(config);
}

export async function PUT(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as Partial<HomeConfig>;

    if (!Array.isArray(body.products)) {
      return NextResponse.json({ error: "Invalid products" }, { status: 400 });
    }

    const validStyles = cardStyles.map((s) => s.value);
    const products: HomeProduct[] = body.products.map((p, i) => ({
      id: typeof p.id === "string" && p.id.length > 0 ? p.id : `product-${i}`,
      name: String(p.name ?? ""),
      description: String(p.description ?? ""),
      slug: String(p.slug ?? ""),
      colorFrom: String(p.colorFrom ?? "#3b82f6"),
      colorTo: String(p.colorTo ?? "#06b6d4"),
      cardStyle: validStyles.includes(p.cardStyle as CardStyle)
        ? (p.cardStyle as CardStyle)
        : "classic",
    }));

    const config: HomeConfig = {
      productsTitle: String(body.productsTitle ?? "All Products"),
      productsSubtitle: String(body.productsSubtitle ?? ""),
      products,
    };

    await saveHomeConfig(config);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await clearHomeConfig();
  return NextResponse.json({ success: true });
}
