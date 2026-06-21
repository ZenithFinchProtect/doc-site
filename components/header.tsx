"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Search, BookOpen, Github, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-lg transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline">Nordic Cheats</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/docs" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
                Documentation
              </Link>
              <a href="https://discord.com/invite/nordiccheat" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
                Discord
              </a>
              <a href="https://support.nordiccheats.net/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
                Support
              </a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 h-9 w-64 rounded-lg border border-border bg-muted/50 px-3 text-sm text-muted-foreground hover:bg-muted transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Search docs...</span>
              <kbd className="ml-auto text-xs bg-background border border-border rounded px-1.5 py-0.5 font-mono">
                /
              </kbd>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              className="sm:hidden flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* GitHub */}
            <a
              href="https://discord.com/invite/nordiccheat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}

            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
          <div className="relative w-full max-w-lg mx-4 glass-card-static shadow-2xl">
            <div className="flex items-center gap-3 px-4 border-b border-primary/20">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 h-12 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <kbd className="text-xs bg-muted border border-border rounded px-1.5 py-0.5 font-mono text-muted-foreground">
                ESC
              </kbd>
            </div>
            <div className="p-4 text-sm text-muted-foreground text-center">
              Start typing to search...
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 border-b border-primary/10 bg-background/90 backdrop-blur-xl p-4 space-y-1">
            <Link href="/docs" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
              Documentation
            </Link>
            <a href="https://discord.com/invite/nordiccheat" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
              Discord
            </a>
            <a href="https://support.nordiccheats.net/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
              Support
            </a>
          </div>
        </div>
      )}
    </>
  );
}
