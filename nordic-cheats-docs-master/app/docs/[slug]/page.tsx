import { notFound } from "next/navigation";
import Link from "next/link";
import { getDocBySlug, getAllSlugs, docs } from "@/lib/docs";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);
  if (!doc) return {};
  return {
    title: `${doc.title} — Docs`,
    description: doc.description,
  };
}

function parseMarkdown(content: string): string {
  return content
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*<\/li>)/, '<ul>$1</ul>')
    .replace(/^\> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split("|").filter(Boolean).map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) return "";
      const tag = "td";
      return `<tr>${cells.map((c) => `<${tag}>${c}</${tag}>`).join("")}</tr>`;
    })
    .replace(/(<tr>[\s\S]*?<\/tr>)/g, '<table>$1</table>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hupoltb])/gm, "");

  return content;
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);
  if (!doc) notFound();

  const currentIndex = docs.findIndex((d) => d.slug === slug);
  const prev = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const next = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <span>/</span>
        <span className="text-foreground">{doc.title}</span>
      </div>

      {/* Content */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(doc.content) }}
      />

      {/* Pagination */}
      <div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/docs/${prev.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <div>
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-medium text-foreground">{prev.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Next</div>
              <div className="font-medium text-foreground">{next.title}</div>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
