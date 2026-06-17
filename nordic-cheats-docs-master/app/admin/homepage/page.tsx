"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  LogOut,
  Check,
  AlertCircle,
  RotateCcw,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  FileText,
  LayoutGrid,
  ExternalLink,
} from "lucide-react";

type CardStyle = "classic" | "rounded" | "compact" | "banner" | "minimal";

const cardStyleOptions: { value: CardStyle; label: string; desc: string }[] = [
  { value: "classic", label: "Classic", desc: "Gradient top bar" },
  { value: "rounded", label: "Rounded", desc: "Pill shape, centered" },
  { value: "compact", label: "Compact", desc: "Side accent bar" },
  { value: "banner", label: "Banner", desc: "Gradient header" },
  { value: "minimal", label: "Minimal", desc: "No border, underline" },
];

interface HomeProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  colorFrom: string;
  colorTo: string;
  cardStyle?: CardStyle;
}

interface HomeConfig {
  productsTitle: string;
  productsSubtitle: string;
  products: HomeProduct[];
}

function newId(): string {
  return `product-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export default function HomepageEditorPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [products, setProducts] = useState<HomeProduct[]>([]);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");
  const [dirty, setDirty] = useState(false);

  // Auth check
  useEffect(() => {
    fetch("/api/auth/check")
      .then((r) => r.json() as Promise<{ authenticated: boolean }>)
      .then((data) => {
        if (!data.authenticated) {
          router.push("/admin");
        } else {
          setAuthenticated(true);
        }
      })
      .catch(() => router.push("/admin"))
      .finally(() => setLoading(false));
  }, [router]);

  const loadConfig = useCallback(async () => {
    try {
      const res = await fetch("/api/homepage");
      if (res.ok) {
        const data: HomeConfig = await res.json();
        setTitle(data.productsTitle);
        setSubtitle(data.productsSubtitle);
        setProducts(data.products);
        setDirty(false);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (authenticated) loadConfig();
  }, [authenticated, loadConfig]);

  function updateProduct(id: string, patch: Partial<HomeProduct>) {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
    setDirty(true);
  }

  function addProduct() {
    setProducts((prev) => [
      ...prev,
      {
        id: newId(),
        name: "New Product",
        description: "Short description",
        slug: "",
        colorFrom: "#3b82f6",
        colorTo: "#06b6d4",
        cardStyle: "classic" as CardStyle,
      },
    ]);
    setDirty(true);
  }

  function removeProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setDirty(true);
  }

  function move(id: string, dir: -1 | 1) {
    setProducts((prev) => {
      const idx = prev.findIndex((p) => p.id === id);
      const target = idx + dir;
      if (idx < 0 || target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[idx], next[target]] = [next[target], next[idx]];
      return next;
    });
    setDirty(true);
  }

  async function handleSave() {
    setSaving(true);
    setSaveStatus("idle");
    try {
      const res = await fetch("/api/homepage", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productsTitle: title, productsSubtitle: subtitle, products }),
      });
      if (res.ok) {
        setSaveStatus("saved");
        setDirty(false);
        setTimeout(() => setSaveStatus("idle"), 3000);
      } else {
        setSaveStatus("error");
      }
    } catch {
      setSaveStatus("error");
    } finally {
      setSaving(false);
    }
  }

  async function handleReset() {
    if (!confirm("Reset the homepage to its original products and text? This removes all edits.")) return;
    try {
      await fetch("/api/homepage", { method: "DELETE" });
      await loadConfig();
      setSaveStatus("idle");
    } catch {}
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-primary/20 bg-card/60 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-1 rounded-lg border border-border overflow-hidden">
          <Link
            href="/admin/editor"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
          >
            <FileText className="h-3 w-3" />
            Docs
          </Link>
          <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground">
            <LayoutGrid className="h-3 w-3" />
            Homepage
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {dirty && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Unsaved
            </span>
          )}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border text-xs font-medium hover:bg-muted transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            View site
          </a>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border text-xs font-medium hover:bg-muted transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !dirty}
            className="flex items-center gap-1.5 h-8 px-4 rounded-lg bg-primary text-primary-foreground text-xs font-medium shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {saving ? (
              <div className="h-3 w-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : saveStatus === "saved" ? (
              <Check className="h-3.5 w-3.5" />
            ) : saveStatus === "error" ? (
              <AlertCircle className="h-3.5 w-3.5" />
            ) : (
              <Save className="h-3.5 w-3.5" />
            )}
            {saveStatus === "saved" ? "Saved!" : saveStatus === "error" ? "Error" : "Save"}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-1"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </div>

      {/* Editor area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 space-y-8">
          {/* Section heading */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold">Section heading</h2>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setDirty(true);
                }}
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subtitle</label>
              <textarea
                value={subtitle}
                onChange={(e) => {
                  setSubtitle(e.target.value);
                  setDirty(true);
                }}
                rows={2}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
              />
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold">Product cards ({products.length})</h2>
              <button
                onClick={addProduct}
                className="flex items-center gap-1.5 h-9 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium shadow-sm hover:shadow-md transition-all"
              >
                <Plus className="h-3.5 w-3.5" />
                Add product
              </button>
            </div>

            {products.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground text-sm">
                No products yet. Click &quot;Add product&quot; to create one.
              </div>
            ) : (
              <div className="space-y-3">
                {products.map((product, idx) => (
                  <div
                    key={product.id}
                    className="glass-card-sm overflow-hidden"
                  >
                    <div
                      className="h-1.5 w-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${product.colorFrom}, ${product.colorTo})`,
                      }}
                    />
                    <div className="p-4">
                      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-medium text-muted-foreground mb-1">Name</label>
                              <input
                                type="text"
                                value={product.name}
                                onChange={(e) => updateProduct(product.id, { name: e.target.value })}
                                className="w-full h-9 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-medium text-muted-foreground mb-1">
                                Link slug (/docs/&hellip;)
                              </label>
                              <input
                                type="text"
                                value={product.slug}
                                onChange={(e) => updateProduct(product.id, { slug: e.target.value })}
                                placeholder="rust-internal-plus"
                                className="w-full h-9 rounded-lg border border-border bg-background px-3 text-sm font-mono outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-medium text-muted-foreground mb-1">Description</label>
                            <input
                              type="text"
                              value={product.description}
                              onChange={(e) => updateProduct(product.id, { description: e.target.value })}
                              className="w-full h-9 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                          </div>
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                              <label className="text-[11px] font-medium text-muted-foreground">Color from</label>
                              <input
                                type="color"
                                value={product.colorFrom}
                                onChange={(e) => updateProduct(product.id, { colorFrom: e.target.value })}
                                className="h-8 w-10 rounded border border-border bg-background cursor-pointer"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <label className="text-[11px] font-medium text-muted-foreground">Color to</label>
                              <input
                                type="color"
                                value={product.colorTo}
                                onChange={(e) => updateProduct(product.id, { colorTo: e.target.value })}
                                className="h-8 w-10 rounded border border-border bg-background cursor-pointer"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <label className="text-[11px] font-medium text-muted-foreground">Card style</label>
                              <select
                                value={product.cardStyle ?? "classic"}
                                onChange={(e) => updateProduct(product.id, { cardStyle: e.target.value as CardStyle })}
                                className="h-8 rounded-lg border border-border bg-background px-2 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                              >
                                {cardStyleOptions.map((opt) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label} — {opt.desc}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="flex lg:flex-col items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => move(product.id, -1)}
                            disabled={idx === 0}
                            title="Move up"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-30 disabled:pointer-events-none"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => move(product.id, 1)}
                            disabled={idx === products.length - 1}
                            title="Move down"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-30 disabled:pointer-events-none"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => removeProduct(product.id)}
                            title="Delete"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
