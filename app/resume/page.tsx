import { profile } from "@/lib/profile"
import { PrintButton } from "@/components/print-button"

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
          <div className="mt-2 text-sm">
            <a className="underline" href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>{" "}
            •{" "}
            <a className="underline" href={`tel:${profile.contact.phone.replaceAll(" ", "")}`}>
              {profile.contact.phone}
            </a>
          </div>
        </div>
        <PrintButton />
      </div>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Summary</h2>
        <p className="mt-2 text-sm text-muted-foreground">{profile.summary}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Experience</h2>
        <div className="mt-2 space-y-4">
          {profile.experience.map((exp) => (
            <div key={`${exp.company}-${exp.start}`}>
              <p className="font-medium">
                {exp.role} · {exp.company}
              </p>
              <p className="text-xs text-muted-foreground">
                {exp.location} • {exp.start} – {exp.end}
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Projects</h2>
        <div className="mt-2 space-y-3">
          {profile.projects.map((p) => (
            <div key={p.name}>
              <p className="font-medium">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.type}</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Education</h2>
        <ul className="mt-2 space-y-2">
          {profile.education.map((e) => (
            <li key={e.school}>
              <p className="font-medium">{e.school}</p>
              <p className="text-xs text-muted-foreground">
                {e.credential} {e.start ? `• ${e.start} – ${e.end}` : `• ${e.end}`}
              </p>
              {e.gpa ? <p className="text-xs text-muted-foreground">GPA: {e.gpa}</p> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Publications</h2>
        <ul className="mt-2 space-y-2">
          {profile.publications.map((p) => (
            <li key={p.title}>
              <p className="font-medium">{p.title}</p>
              <p className="text-xs text-muted-foreground">
                {p.venue} • {p.year}
              </p>
              {p.doi ? (
                <p className="text-xs">
                  DOI:{" "}
                  <a className="underline" href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">
                    {p.doi}
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-medium">Skills</h2>
        <div className="mt-2 columns-2 gap-6 text-sm md:columns-3">
          <div>
            <p className="font-medium">Languages</p>
            <p className="text-muted-foreground">{profile.skills.languages.join(", ")}</p>
          </div>
          <div>
            <p className="font-medium">Frameworks</p>
            <p className="text-muted-foreground">{profile.skills.frameworks.join(", ")}</p>
          </div>
          <div>
            <p className="font-medium">Tools</p>
            <p className="text-muted-foreground">{profile.skills.tools.join(", ")}</p>
          </div>
          <div>
            <p className="font-medium">Technical</p>
            <p className="text-muted-foreground">{profile.skills.technical.join(", ")}</p>
          </div>
          <div>
            <p className="font-medium">Editing</p>
            <p className="text-muted-foreground">{profile.skills.editing.join(", ")}</p>
          </div>
          <div>
            <p className="font-medium">Soft Skills</p>
            <p className="text-muted-foreground">{profile.skills.soft.join(", ")}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
