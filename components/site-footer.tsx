import Link from "next/link"
import { profile } from "@/lib/profile"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {profile.contact.website ? (
              <Link href={profile.contact.website} className="hover:underline underline-slide">
                Website
              </Link>
            ) : null}
            {profile.contact.linkedin ? (
              <Link href={profile.contact.linkedin} className="hover:underline underline-slide">
                LinkedIn
              </Link>
            ) : null}
            {profile.contact.github ? (
              <Link href={profile.contact.github} className="hover:underline underline-slide">
                GitHub
              </Link>
            ) : null}
            <a href={`mailto:${profile.contact.email}`} className="hover:underline underline-slide">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
