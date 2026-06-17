import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Wrench, ExternalLink, ChevronRight } from "lucide-react";
import { getHomeConfig } from "@/lib/homepage";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { productsTitle, productsSubtitle, products } = await getHomeConfig();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow" />
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-20 sm:py-28 lg:py-36 text-center">
            <div className="animate-fade-in mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Nordic Cheats — Documentation
              </span>
            </div>

            <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]">
              Nordic{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cheats
              </span>
            </h1>

            <p className="animate-fade-in mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Setup guides, troubleshooting, loader downloads, and support for all products.
            </p>

            <div className="animate-fade-in mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/docs"
                className="group flex items-center gap-2 h-12 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
              >
                Browse All Guides
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://discord.com/invite/nordiccheat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-12 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-6 text-sm font-medium hover:bg-accent transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {productsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {productsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/docs/${product.slug}`}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Gradient top bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundImage: `linear-gradient(to right, ${product.colorFrom}, ${product.colorTo})` }}
                />

                <div className="p-5">
                  <h3 className="font-semibold text-[15px] mb-1.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Guide
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://support.nordiccheats.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-0.5">Support Tool</h3>
                <p className="text-xs text-muted-foreground">Run the tool and send your NORDIC-XXXXXXXX ID</p>
              </div>
            </a>
            <a
              href="https://discord.com/invite/nordiccheat"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-0.5">Discord</h3>
                <p className="text-xs text-muted-foreground">Join for live support and announcements</p>
              </div>
            </a>
            <Link
              href="/docs"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-0.5">All Docs</h3>
                <p className="text-xs text-muted-foreground">Full documentation index by category</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Nordic Cheats Documentation</p>
          <div className="flex items-center gap-6">
            <a href="https://discord.com/invite/nordiccheat" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Discord</a>
            <a href="https://support.nordiccheats.net/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
