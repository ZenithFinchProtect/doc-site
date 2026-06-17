import type { DocPage } from "./docs";

const KV_KEY = "doc_overrides";

type Overrides = Record<string, Partial<DocPage>>;

async function getKV(): Promise<any | null> {
  try {
    // Dynamic import with webpackIgnore to prevent build-time resolution
    const mod = await import(/* webpackIgnore: true */ "@cloudflare/next-on-pages");
    const { env } = mod.getRequestContext();
    return env?.DOC_OVERRIDES || null;
  } catch {
    return null;
  }
}

function readFileOverrides(): Overrides {
  try {
    // Use eval to prevent webpack from analyzing these requires
    const _require = eval("require");
    const fs = _require("fs");
    const path = _require("path");
    const filePath = path.join(process.cwd(), "data", "overrides.json");
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
  } catch {}
  return {};
}

function writeFileOverrides(data: Overrides): void {
  try {
    const _require = eval("require");
    const fs = _require("fs");
    const path = _require("path");
    const dir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(path.join(dir, "overrides.json"), JSON.stringify(data, null, 2), "utf-8");
  } catch {}
}

export async function loadOverrides(): Promise<Overrides> {
  // Try Cloudflare KV first (production)
  const kv = await getKV();
  if (kv) {
    try {
      const data = await kv.get(KV_KEY, "json") as Overrides | null;
      return data || {};
    } catch {}
  }

  // Fallback to filesystem (local development)
  return readFileOverrides();
}

export async function saveOverrides(overrides: Overrides): Promise<void> {
  // Try Cloudflare KV first (production)
  const kv = await getKV();
  if (kv) {
    await kv.put(KV_KEY, JSON.stringify(overrides));
    return;
  }

  // Fallback to filesystem (local development)
  writeFileOverrides(overrides);
}
