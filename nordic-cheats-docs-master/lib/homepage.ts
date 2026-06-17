import { loadHomeConfig } from "./storage";

export interface HomeProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  colorFrom: string;
  colorTo: string;
}

export interface HomeConfig {
  productsTitle: string;
  productsSubtitle: string;
  products: HomeProduct[];
}

export const defaultHomeConfig: HomeConfig = {
  productsTitle: "All Products",
  productsSubtitle:
    "Select a product below to view its full setup guide, loader download, and troubleshooting steps.",
  products: [
    { id: "rust-internal-plus", name: "Rust Internal Plus", slug: "rust-internal-plus", description: "USB flash drive injection method", colorFrom: "#f97316", colorTo: "#ef4444" },
    { id: "rust-internal-pro", name: "Rust Internal Pro", slug: "rust-internal-pro", description: "Syringe loader with Discord overlay", colorFrom: "#f97316", colorTo: "#ef4444" },
    { id: "rust-lite", name: "Rust Lite", slug: "rust-lite", description: "Syringe loader — lightweight build", colorFrom: "#f97316", colorTo: "#f59e0b" },
    { id: "rust-lite-alt", name: "Rust Lite (Orion)", slug: "rust-lite-alt", description: "Alternative Orion loader setup", colorFrom: "#f97316", colorTo: "#f59e0b" },
    { id: "rust-script-setup", name: "Rust Script Setup", slug: "rust-script-setup", description: "Recoil script with auto weapon detection", colorFrom: "#f59e0b", colorTo: "#eab308" },
    { id: "the-externals", name: "The Externals", slug: "the-externals", description: "External cheat with driver injection", colorFrom: "#3b82f6", colorTo: "#06b6d4" },
    { id: "bo7", name: "BO7 Internal", slug: "bo7", description: "Black Ops 7 internal with RivaTuner", colorFrom: "#2563eb", colorTo: "#6366f1" },
    { id: "bo6-warzone", name: "BO6 / Warzone", slug: "bo6-warzone", description: "Black Ops 6 and Warzone internal", colorFrom: "#6366f1", colorTo: "#3b82f6" },
    { id: "r6-external", name: "R6 External", slug: "r6-external", description: "Rainbow Six Siege external cheat", colorFrom: "#0ea5e9", colorTo: "#3b82f6" },
    { id: "r6-unlock-all", name: "R6 Unlock All", slug: "r6-unlock-all", description: "Rainbow Six Siege unlock all operators", colorFrom: "#0ea5e9", colorTo: "#06b6d4" },
    { id: "arc-raiders", name: "Arc Raiders (Syringe)", slug: "arc-raiders", description: "Arc Raiders via Syringe loader", colorFrom: "#14b8a6", colorTo: "#10b981" },
    { id: "arc-raiders-alt", name: "Arc Raiders (Ancient)", slug: "arc-raiders-alt", description: "Arc Raiders via Ancient loader", colorFrom: "#14b8a6", colorTo: "#22c55e" },
    { id: "abi-internal", name: "ABI Internal", slug: "abi-internal", description: "ABI internal cheat with Orion loader", colorFrom: "#10b981", colorTo: "#22c55e" },
    { id: "rl-ai", name: "RL AI", slug: "rl-ai", description: "Rocket League AI bot with Discord overlay", colorFrom: "#22c55e", colorTo: "#84cc16" },
    { id: "nfa-loader", name: "NFA Loader", slug: "nfa-loader", description: "NFA account loader (WebView2)", colorFrom: "#84cc16", colorTo: "#eab308" },
    { id: "beta-hwid-spoofer", name: "BETA HWID Spoofer", slug: "beta-hwid-spoofer", description: "Temporary HWID spoofer with cleaning system", colorFrom: "#a855f7", colorTo: "#ec4899" },
    { id: "perm-spoofer", name: "Perm Spoofer", slug: "perm-spoofer", description: "Permanent HWID spoofer for hardware bans", colorFrom: "#ec4899", colorTo: "#f43f5e" },
  ],
};

export async function getHomeConfig(): Promise<HomeConfig> {
  const stored = await loadHomeConfig();
  if (!stored) return defaultHomeConfig;
  return {
    productsTitle: stored.productsTitle ?? defaultHomeConfig.productsTitle,
    productsSubtitle: stored.productsSubtitle ?? defaultHomeConfig.productsSubtitle,
    products: Array.isArray(stored.products) ? stored.products : defaultHomeConfig.products,
  };
}
