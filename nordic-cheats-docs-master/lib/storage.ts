import { getRequestContext } from "@cloudflare/next-on-pages";
import type { DocPage } from "./docs";
import type { HomeConfig } from "./homepage";
import type { KVNamespace } from "@cloudflare/workers-types";

const KV_KEY = "doc_overrides";
const HOME_KV_KEY = "home_config";

type Overrides = Record<string, Partial<DocPage>>;

async function getKV(): Promise<KVNamespace | null> {
  try {
    const { env } = getRequestContext();
    return (env as { DOC_OVERRIDES?: KVNamespace }).DOC_OVERRIDES ?? null;
  } catch {
    return null;
  }
}

function readFile<T>(fileName: string): T | null {
  try {
    // Use eval to prevent webpack from analyzing these requires
    const _require = eval("require");
    const fs = _require("fs");
    const path = _require("path");
    const filePath = path.join(process.cwd(), "data", fileName);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
    }
  } catch {}
  return null;
}

function writeFile(fileName: string, data: unknown): void {
  try {
    const _require = eval("require");
    const fs = _require("fs");
    const path = _require("path");
    const dir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(path.join(dir, fileName), JSON.stringify(data, null, 2), "utf-8");
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
  return readFile<Overrides>("overrides.json") || {};
}

export async function saveOverrides(overrides: Overrides): Promise<void> {
  // Try Cloudflare KV first (production)
  const kv = await getKV();
  if (kv) {
    await kv.put(KV_KEY, JSON.stringify(overrides));
    return;
  }

  // Fallback to filesystem (local development)
  writeFile("overrides.json", overrides);
}

export async function loadHomeConfig(): Promise<HomeConfig | null> {
  // Try Cloudflare KV first (production)
  const kv = await getKV();
  if (kv) {
    try {
      const data = await kv.get(HOME_KV_KEY, "json") as HomeConfig | null;
      return data || null;
    } catch {}
  }

  // Fallback to filesystem (local development)
  return readFile<HomeConfig>("home.json");
}

export async function saveHomeConfig(config: HomeConfig): Promise<void> {
  // Try Cloudflare KV first (production)
  const kv = await getKV();
  if (kv) {
    await kv.put(HOME_KV_KEY, JSON.stringify(config));
    return;
  }

  // Fallback to filesystem (local development)
  writeFile("home.json", config);
}

export async function clearHomeConfig(): Promise<void> {
  const kv = await getKV();
  if (kv) {
    await kv.delete(HOME_KV_KEY);
    return;
  }

  try {
    const _require = eval("require");
    const fs = _require("fs");
    const path = _require("path");
    const filePath = path.join(process.cwd(), "data", "home.json");
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch {}
}
