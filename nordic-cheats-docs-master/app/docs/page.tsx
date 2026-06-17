import Link from "next/link";
import { getDocsByCategory } from "@/lib/docs";
import { ArrowRight } from "lucide-react";

export default async function DocsPage() {
  const categories = await getDocsByCategory();

  return (
    <div className="prose">
      <h1>Documentation</h1>
      <p className="text-lg text-muted-foreground">
        Welcome to the docs. Browse by category or use the sidebar to find what you need.
      </p>

      <div className="not-prose mt-8 space-y-8">
        {categories.map((category) => (
          <div key={category.slug}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {category.name}
            </h2>
            <div className="grid gap-3">
              {category.pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/docs/${page.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border p-4 hover:border-primary/50 hover:bg-card transition-all"
                >
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {page.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
