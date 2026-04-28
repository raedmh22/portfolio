import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Business & Analysis",
    skills: [
      "Business Process Modeling",
      "Requirements Engineering",
      "Data Analysis",
      "Project Management",
      "Agile / Scrum",
      "Strategic Planning",
    ],
  },
  {
    title: "Technical",
    skills: [
      "SQL",
      "Python",
      "ERP Systems (SAP)",
      "UML / BPMN",
      "Data Visualization",
      "Excel / VBA",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "Power BI",
      "Tableau",
      "Git",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Problem Solving",
      "Team Leadership",
      "Critical Thinking",
      "Stakeholder Management",
      "Presentation",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Skills
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
