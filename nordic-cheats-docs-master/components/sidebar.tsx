"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocCategory } from "@/lib/docs";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function Sidebar({ categories }: { categories: DocCategory[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-border">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 pl-6 pr-4">
        <nav className="space-y-6">
          {categories.map((category) => (
            <div key={category.slug}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-2">
                {category.name}
              </h4>
              <ul className="space-y-0.5">
                {category.pages.map((page) => {
                  const href = `/docs/${page.slug}`;
                  const isActive = pathname === href;

                  return (
                    <li key={page.slug}>
                      <Link
                        href={href}
                        className={cn(
                          "group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        <ChevronRight
                          className={cn(
                            "h-3 w-3 transition-transform",
                            isActive ? "text-primary" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                          )}
                        />
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
