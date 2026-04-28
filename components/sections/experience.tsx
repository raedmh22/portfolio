import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "Jan 2024 — Present",
    description:
      "Brief description of your role, responsibilities, and key achievements. Replace with real experience.",
  },
  {
    role: "Job Title",
    company: "Company Name",
    period: "Jun 2023 — Dec 2023",
    description:
      "Brief description of your role, responsibilities, and key achievements. Replace with real experience.",
  },
  {
    role: "Intern / Working Student",
    company: "Company Name",
    period: "Mar 2022 — May 2023",
    description:
      "Brief description of your role, responsibilities, and key achievements. Replace with real experience.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Experience
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="relative space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-10 last:pb-0">
              <div className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-foreground bg-background" />
              {index < experiences.length - 1 && (
                <div className="absolute left-[5px] top-4 bottom-0 w-px bg-border" />
              )}

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
