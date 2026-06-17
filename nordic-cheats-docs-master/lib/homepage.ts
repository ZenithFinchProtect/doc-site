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
    { id: "rust-private", name: "Rust Private", slug: "rust-private", description: "Setup guide for Rust Private — driver injection via RivaTuner.", colorFrom: "#f97316", colorTo: "#ef4444" },
    { id: "rust-lite", name: "Rust Lite", slug: "rust-lite", description: "Setup guide for Rust Lite with Syringe loader.", colorFrom: "#f97316", colorTo: "#f59e0b" },
    { id: "rust-internal-plus", name: "Rust Internal Plus", slug: "rust-internal-plus", description: "Setup guide for Rust Internal Plus — USB injection method.", colorFrom: "#ef4444", colorTo: "#f97316" },
    { id: "rust-internal-pro", name: "Rust Internal Pro", slug: "rust-internal-pro", description: "Setup guide for Rust Internal Pro with Syringe loader.", colorFrom: "#f59e0b", colorTo: "#ef4444" },
    { id: "rust-script", name: "Rust Script", slug: "rust-script", description: "Recoil script setup with auto weapon detection.", colorFrom: "#f59e0b", colorTo: "#eab308" },
    { id: "fortnite-private", name: "Fortnite Private", slug: "fortnite-private", description: "Setup guide for Fortnite Private — driver injection via RivaTuner.", colorFrom: "#3b82f6", colorTo: "#8b5cf6" },
    { id: "fortnite-public", name: "Fortnite Public", slug: "fortnite-public", description: "Setup guide for Fortnite Public — driver injection via RivaTuner.", colorFrom: "#8b5cf6", colorTo: "#3b82f6" },
    { id: "r6-external", name: "R6 External", slug: "r6-external", description: "Setup guide for Rainbow Six Siege external.", colorFrom: "#0ea5e9", colorTo: "#3b82f6" },
    { id: "r6-unlock-all", name: "R6 Unlock All", slug: "r6-unlock-all", description: "Rainbow Six Siege unlock all operators.", colorFrom: "#0ea5e9", colorTo: "#06b6d4" },
    { id: "bo7", name: "BO7 Internal", slug: "bo7", description: "Black Ops 7 internal with RivaTuner injection.", colorFrom: "#2563eb", colorTo: "#6366f1" },
    { id: "apex-external", name: "Apex External", slug: "apex-external", description: "Setup guide for Apex Legends external — driver injection via RivaTuner.", colorFrom: "#ef4444", colorTo: "#f97316" },
    { id: "nfa-account", name: "NFA Account", slug: "nfa-account", description: "NFA account loader setup.", colorFrom: "#84cc16", colorTo: "#eab308" },
    { id: "beta-perm-spoofer", name: "BETA Perm Spoofer", slug: "beta-perm-spoofer", description: "Permanent HWID spoofer for hardware bans.", colorFrom: "#ec4899", colorTo: "#f43f5e" },
    { id: "arc-raiders", name: "Arc Raiders", slug: "arc-raiders", description: "Arc Raiders setup via Ancient loader.", colorFrom: "#14b8a6", colorTo: "#10b981" },
    { id: "temp-spoofer", name: "Temp Spoofer", slug: "temp-spoofer", description: "Temporary HWID spoofer with seeding system.", colorFrom: "#a855f7", colorTo: "#ec4899" },
    { id: "abi-internal", name: "ABI Internal", slug: "abi-internal", description: "ABI internal setup with custom loader.", colorFrom: "#10b981", colorTo: "#22c55e" },
    { id: "rl-ai", name: "RL AI", slug: "rl-ai", description: "Rocket League AI bot with Discord overlay.", colorFrom: "#22c55e", colorTo: "#84cc16" },
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
