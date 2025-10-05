import Link from "next/link"
import { profile } from "@/lib/profile"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="flex h-14 items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            className="font-semibold tracking-tight underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
          >
            <span className="sr-only">Home</span>
            {profile.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#experience"
              className="text-sm underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="text-sm underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              Projects
            </Link>
            <Link
              href="/#skills"
              className="text-sm underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              Skills
            </Link>
            <Link
              href="/#education"
              className="text-sm underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              Education
            </Link>
            <Link
              href="/#publications"
              className="text-sm underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              Publications
            </Link>
            <Link
              href="/#contact"
              className="text-sm underline-slide focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-sm"
            >
              Contact
            </Link>
            <Button asChild size="sm" className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/resume">Resume</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile nav: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <details className="relative">
              <summary
                aria-label="Open menu"
                className="list-none inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-2 hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] cursor-pointer"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <span className="sr-only">Open navigation menu</span>
              </summary>

              <div
                className="absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-xs rounded-lg border border-border bg-popover text-popover-foreground shadow-xl ring-1 ring-[hsl(var(--ring))]/10"
                role="menu"
                aria-label="Mobile"
              >
                <div className="p-2 grid gap-1">
                  <Link
                    href="/#experience"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    role="menuitem"
                  >
                    Experience
                  </Link>
                  <Link
                    href="/#projects"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    role="menuitem"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#skills"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    role="menuitem"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/#education"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    role="menuitem"
                  >
                    Education
                  </Link>
                  <Link
                    href="/#publications"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    role="menuitem"
                  >
                    Publications
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    role="menuitem"
                  >
                    Contact
                  </Link>
                  <Button asChild className="mt-1">
                    <Link href="/resume" role="menuitem">
                      Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  )
}
