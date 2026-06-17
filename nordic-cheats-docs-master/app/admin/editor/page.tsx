"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  LogOut,
  FileText,
  ChevronRight,
  Check,
  AlertCircle,
  RotateCcw,
  Eye,
  Pencil,
  Search,
} from "lucide-react";

interface DocPage {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  order: number;
}

export default function EditorPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [docs, setDocs] = useState<DocPage[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [searchQuery, setSearchQuery] = useState("");
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

  // Load docs
  const loadDocs = useCallback(async () => {
    try {
      const res = await fetch("/api/docs");
      if (res.ok) {
        const data: DocPage[] = await res.json();
        setDocs(data);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (authenticated) loadDocs();
  }, [authenticated, loadDocs]);

  // Select doc
  function selectDoc(slug: string) {
    const doc = docs.find((d) => d.slug === slug);
    if (!doc) return;
    setSelected(slug);
    setEditTitle(doc.title);
    setEditDescription(doc.description);
    setEditContent(doc.content);
    setEditCategory(doc.category);
    setDirty(false);
    setSaveStatus("idle");
    setMode("edit");
  }

  // Save
  async function handleSave() {
    if (!selected) return;
    setSaving(true);
    setSaveStatus("idle");

    try {
      const res = await fetch(`/api/docs/${selected}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editTitle,
          description: editDescription,
          content: editContent,
          category: editCategory,
        }),
      });

      if (res.ok) {
        setSaveStatus("saved");
        setDirty(false);
        await loadDocs();
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

  // Reset
  async function handleReset() {
    if (!selected) return;
    if (!confirm("Reset this page to its original content? This removes all edits.")) return;

    try {
      await fetch(`/api/docs/${selected}`, { method: "DELETE" });
      await loadDocs();
      // Re-select to refresh editor
      const updatedDoc = docs.find((d) => d.slug === selected);
      if (updatedDoc) {
        setEditTitle(updatedDoc.title);
        setEditDescription(updatedDoc.description);
        setEditContent(updatedDoc.content);
        setEditCategory(updatedDoc.category);
      }
      setDirty(false);
      setSaveStatus("idle");
    } catch {}
  }

  // Logout
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  // Filter docs
  const filteredDocs = docs.filter(
    (d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group by category
  const grouped = filteredDocs.reduce<Record<string, DocPage[]>>((acc, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {});

  const selectedDoc = docs.find((d) => d.slug === selected);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-72 border-r border-border bg-card flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-sm">Doc Editor</h2>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pages..."
              className="w-full h-9 rounded-lg border border-border bg-background pl-9 pr-3 text-xs outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {Object.entries(grouped).map(([category, pages]) => (
            <div key={category} className="mb-3">
              <p className="px-2 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                {category}
              </p>
              {pages
                .sort((a, b) => a.order - b.order)
                .map((doc) => (
                  <button
                    key={doc.slug}
                    onClick={() => selectDoc(doc.slug)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left text-sm transition-colors ${
                      selected === doc.slug
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <FileText className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{doc.title}</span>
                  </button>
                ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {!selected ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">Select a page to edit</p>
              <p className="text-sm mt-1">Choose from the sidebar on the left</p>
            </div>
          </div>
        ) : (
          <>
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-card shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs text-muted-foreground">{selectedDoc?.category}</span>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm font-medium truncate">{editTitle}</span>
                {dirty && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    Unsaved
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setMode("edit")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                      mode === "edit" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <Pencil className="h-3 w-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => setMode("preview")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
                      mode === "preview" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <Eye className="h-3 w-3" />
                    Preview
                  </button>
                </div>

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
              </div>
            </div>

            {/* Editor area */}
            <div className="flex-1 overflow-y-auto">
              {mode === "edit" ? (
                <div className="max-w-4xl mx-auto p-6 space-y-5">
                  {/* Title & Description */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Title
                      </label>
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => {
                          setEditTitle(e.target.value);
                          setDirty(true);
                        }}
                        className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Category
                      </label>
                      <input
                        type="text"
                        value={editCategory}
                        onChange={(e) => {
                          setEditCategory(e.target.value);
                          setDirty(true);
                        }}
                        className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Description
                    </label>
                    <input
                      type="text"
                      value={editDescription}
                      onChange={(e) => {
                        setEditDescription(e.target.value);
                        setDirty(true);
                      }}
                      className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  {/* Markdown editor */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Content (Markdown)
                    </label>
                    <textarea
                      value={editContent}
                      onChange={(e) => {
                        setEditContent(e.target.value);
                        setDirty(true);
                      }}
                      spellCheck={false}
                      className="w-full min-h-[500px] rounded-xl border border-border bg-background p-4 text-sm font-mono leading-relaxed outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                    />
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto p-6">
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight">{editTitle}</h1>
                    <p className="mt-2 text-muted-foreground">{editDescription}</p>
                  </div>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: simpleMarkdownToHtml(editContent),
                    }}
                  />
                </div>
              )}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-6 py-2 border-t border-border bg-card text-xs text-muted-foreground shrink-0">
              <span>
                Editing: <code className="text-[11px]">/docs/{selected}</code>
              </span>
              <div className="flex items-center gap-4">
                <span>{editContent.length.toLocaleString()} characters</span>
                <Link
                  href={`/docs/${selected}`}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  View live page →
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function simpleMarkdownToHtml(md: string): string {
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold & italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>");

  // List items
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>");

  // Paragraphs — wrap non-tag lines
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (/^<(h[1-6]|li|blockquote|ul|ol|pre|hr)/.test(trimmed)) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  // Clean up line breaks within paragraphs
  html = html.replace(/\n/g, "<br>");

  return html;
}
