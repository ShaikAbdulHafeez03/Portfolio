import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Shaik Abdul Hafeez — Portfolio",
  description:
    "Portfolio of Shaik Abdul Hafeez: Software Engineer specializing in AI agents, multimodal RAG, and full‑stack development.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              var s = localStorage.getItem('theme');
              var m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              var d = s ? (s === 'dark') : m;
              var el = document.documentElement;
              if (d) el.classList.add('dark'); else el.classList.remove('dark');
            } catch (e) {}
          `,
          }}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
