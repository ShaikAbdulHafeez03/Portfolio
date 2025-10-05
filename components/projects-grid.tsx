import { profile } from "@/lib/profile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {profile.projects.map((p) => (
            <Card key={p.name} className="card-hover">
              <CardHeader className="border-b">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <CardDescription className="text-accent">{p.type}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <Badge
                      key={t}
                      variant={i % 2 === 0 ? "secondary" : "outline"}
                      className={i % 2 === 0 ? "bg-accent text-accent-foreground" : ""}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
