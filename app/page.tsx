import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Wrench, ExternalLink, ChevronRight } from "lucide-react";
import { getHomeConfig, type CardStyle } from "@/lib/homepage";
import { ParticlesBackground } from "@/components/particles-background";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { productsTitle, productsSubtitle, products } = await getHomeConfig();

  return (
    <div className="relative">
      {/* Full-page particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow" />
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
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
      <section className="relative">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {productsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {productsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const style: CardStyle = product.cardStyle ?? "classic";

              if (style === "rounded") {
                return (
                  <Link key={product.id} href={`/docs/${product.slug}`}
                    className="glass-card group text-center"
                  >
                    <div className="relative z-10 px-6 py-7">
                      <h3 className="font-semibold text-[15px] mb-1.5 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Guide <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              }

              if (style === "compact") {
                return (
                  <Link key={product.id} href={`/docs/${product.slug}`}
                    className="glass-card-sm group flex"
                  >
                    <div className="relative z-10 p-4 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors truncate">{product.name}</h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>
                    </div>
                    <div className="relative z-10 flex items-center pr-3 shrink-0">
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                );
              }

              if (style === "banner") {
                return (
                  <Link key={product.id} href={`/docs/${product.slug}`}
                    className="glass-card group"
                  >
                    <div className="relative z-10 p-6">
                      <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Guide <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              }

              if (style === "minimal") {
                return (
                  <Link key={product.id} href={`/docs/${product.slug}`}
                    className="glass-card group p-6"
                  >
                    <div className="relative z-10">
                      <h3 className="font-semibold text-[15px] mb-1.5 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Guide <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              }

              // Classic (default)
              return (
                <Link key={product.id} href={`/docs/${product.slug}`}
                  className="glass-card group"
                >
                  <div className="relative z-10 p-6">
                    <h3 className="font-semibold text-[15px] mb-1.5 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Guide <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-primary/10">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://support.nordiccheats.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex items-center gap-4 p-7"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[14px] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <Wrench className="h-6 w-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-0.5">Support Tool</h3>
                <p className="text-xs text-muted-foreground">Run the tool and send your NORDIC-XXXXXXXX ID</p>
              </div>
            </a>
            <a
              href="https://discord.com/invite/nordiccheat"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex items-center gap-4 p-7"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[14px] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <Bot className="h-6 w-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-0.5">Discord</h3>
                <p className="text-xs text-muted-foreground">Join for live support and announcements</p>
              </div>
            </a>
            <Link
              href="/docs"
              className="glass-card group flex items-center gap-4 p-7"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[14px] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-0.5">All Docs</h3>
                <p className="text-xs text-muted-foreground">Full documentation index by category</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10">
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
