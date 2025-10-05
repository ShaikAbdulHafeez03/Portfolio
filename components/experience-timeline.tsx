import { profile } from "@/lib/profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">Experience</h2>
        <div className="mt-6 grid gap-6">
          {profile.experience.map((exp) => (
            <Card key={`${exp.company}-${exp.start}`} className="card-hover border-l-4 border-l-primary">
              <CardHeader className="space-y-1">
                <CardTitle className="text-lg">
                  {exp.role} · <span className="text-primary">{exp.company}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {exp.location} • {exp.start} – {exp.end}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
