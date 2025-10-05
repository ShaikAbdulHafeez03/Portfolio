import { Hero } from "@/components/hero"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsGrid } from "@/components/projects-grid"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Publications } from "@/components/publications"
import { ContactCard } from "@/components/contact-card"

export default function Page() {
  return (
    <main>
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Hero />
      <div id="content" />
      <ExperienceTimeline />
      <ProjectsGrid />
      <Skills />
      <Education />
      <Publications />
      <ContactCard />
    </main>
  )
}
