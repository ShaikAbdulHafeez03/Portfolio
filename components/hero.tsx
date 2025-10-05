import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { profile } from "@/lib/profile"

export function Hero() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6">
          <div>
            <p className="chip bg-secondary text-secondary-foreground">Based in {profile.location}</p>
            <h1 className="text-pretty text-3xl font-bold tracking-tight md:text-5xl mt-3">
              <span className="text-primary">{profile.name}</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">{profile.title}</p>
          </div>
          <p className="max-w-3xl text-pretty text-muted-foreground">{profile.summary}</p>
          <TooltipProvider>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/resume">View Resume</Link>
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" asChild>
                    <a href={`mailto:${profile.contact.email}`}>Email me</a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Open your email app</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" asChild>
                    <a href={`tel:${profile.contact.phone.replaceAll(" ", "")}`}>Call</a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Dial my number</TooltipContent>
              </Tooltip>
              {profile.contact.linkedin ? (
                <Button variant="secondary" asChild>
                  <Link href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </Link>
                </Button>
              ) : null}
              {profile.contact.github ? (
                <Button variant="secondary" asChild>
                  <Link href={profile.contact.github} target="_blank" rel="noreferrer">
                    GitHub
                  </Link>
                </Button>
              ) : null}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
