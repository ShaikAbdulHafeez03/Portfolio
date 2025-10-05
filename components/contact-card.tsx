import Link from "next/link"
import { profile } from "@/lib/profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactCard() {
  const { email, phone, website, linkedin, github } = profile.contact
  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={`mailto:${email}`}>Email</a>
            </Button>
            <Button variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={`tel:${phone.replaceAll(" ", "")}`}>Call</a>
            </Button>
            {website ? (
              <Button variant="outline" asChild>
                <Link href={website} target="_blank" rel="noreferrer">
                  Website
                </Link>
              </Button>
            ) : null}
            {linkedin ? (
              <Button variant="outline" asChild>
                <Link href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              </Button>
            ) : null}
            {github ? (
              <Button variant="outline" asChild>
                <Link href={github} target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
