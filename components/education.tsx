import { profile } from "@/lib/profile"

export function Education() {
  return (
    <section id="education" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">Education</h2>
        <ul className="mt-6 grid gap-4">
          {profile.education.map((e) => (
            <li key={e.school} className="rounded-lg border p-4">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.credential}</p>
                </div>
                <div className="text-sm text-muted-foreground">{e.start ? `${e.start} – ${e.end}` : e.end}</div>
              </div>
              {e.gpa ? <p className="mt-2 text-sm text-muted-foreground">GPA: {e.gpa}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
