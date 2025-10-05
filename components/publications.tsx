import { profile } from "@/lib/profile"

export function Publications() {
  return (
    <section id="publications" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          <span className="text-primary">Publications</span>
        </h2>
        <ul className="mt-6 grid gap-4">
          {profile.publications.map((p) => (
            <li
              key={p.title}
              className="rounded-lg border p-4 transition-all hover:-translate-y-1 hover:ring-2 hover:ring-accent/30"
            >
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-muted-foreground">
                {p.venue} • {p.year}
              </p>
              {p.doi ? (
                <p className="mt-1 text-sm">
                  DOI:{" "}
                  <a
                    className="underline text-accent"
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.doi}
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
