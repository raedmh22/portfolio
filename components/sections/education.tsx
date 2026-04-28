import { GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const educationItems = [
  {
    degree: "M.Sc. Business Informatics",
    institution: "University Name",
    period: "2023 — Present",
    description: "Focus areas and relevant coursework. Replace with real details.",
  },
  {
    degree: "B.Sc. Business Informatics",
    institution: "University Name",
    period: "2019 — 2023",
    description: "Focus areas and relevant coursework. Replace with real details.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Education
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <GraduationCap className="size-5 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.institution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
