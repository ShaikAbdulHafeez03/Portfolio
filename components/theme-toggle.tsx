"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem("theme")
      if (stored === "light" || stored === "dark") {
        setTheme(stored)
        document.documentElement.classList.toggle("dark", stored === "dark")
        return
      }
    } catch {}
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
    const initial = prefersDark ? "dark" : "light"
    setTheme(initial)
    document.documentElement.classList.toggle("dark", initial === "dark")
  }, [])

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    try {
      localStorage.setItem("theme", next)
    } catch {}
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  if (!mounted) {
    return <button aria-label="Toggle theme" className="h-9 w-9 rounded-md border border-border bg-card" />
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-2 hover:ring-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      <svg
        className="h-5 w-5 transition-transform group-active:scale-95"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === "dark" ? (
          <g>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </g>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        )}
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
