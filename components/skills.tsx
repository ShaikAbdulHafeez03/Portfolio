import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/lib/profile"

export function Skills() {
  const groups = [
    { key: "languages", title: "Languages", items: profile.skills.languages },
    { key: "frameworks", title: "Frameworks", items: profile.skills.frameworks },
    { key: "tools", title: "Tools", items: profile.skills.tools },
    { key: "technical", title: "Technical", items: profile.skills.technical },
    { key: "editing", title: "Editing", items: profile.skills.editing },
    { key: "soft", title: "Soft Skills", items: profile.skills.soft },
  ]

  return (
    <section id="skills" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
        <Tabs defaultValue="languages" className="mt-6">
          <TabsList className="flex flex-wrap gap-2 bg-muted/50 p-1">
            {groups.map((g) => (
              <TabsTrigger
                key={g.key}
                value={g.key}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {g.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {groups.map((g) => (
            <TabsContent key={g.key} value={g.key}>
              <Card className="mt-4 card-hover">
                <CardContent className="flex flex-wrap gap-2 p-4">
                  {g.items.map((item, i) => (
                    <Badge
                      key={item}
                      variant={i % 3 === 0 ? "secondary" : i % 3 === 1 ? "outline" : "default"}
                      className={
                        i % 3 === 0
                          ? "bg-accent text-accent-foreground"
                          : i % 3 === 2
                            ? "bg-primary text-primary-foreground"
                            : ""
                      }
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
