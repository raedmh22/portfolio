import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Project Title One",
    description:
      "A brief description of the project, what problem it solves, and the impact it had. Replace this with real project details.",
    tags: ["Data Analysis", "Python", "Power BI"],
    link: "#",
  },
  {
    title: "Project Title Two",
    description:
      "A brief description of the project, what problem it solves, and the impact it had. Replace this with real project details.",
    tags: ["ERP", "SAP", "Process Optimization"],
    link: "#",
  },
  {
    title: "Project Title Three",
    description:
      "A brief description of the project, what problem it solves, and the impact it had. Replace this with real project details.",
    tags: ["Requirements Engineering", "UML", "Agile"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-base font-extrabold tracking-widest uppercase text-foreground">
          Projects
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="font-normal text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-1"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
