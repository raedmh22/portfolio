import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    role: "Business Analyst",
    company: "EX-ACCENTURE",
    period: "2025 — Present",
    description:
      "As a Business Analyst, I analyze projects and requirements, and work closely with stakeholders to identify and define business needs.",
  },
  {
    role: "Job Title",
    company: "SPORTMASTER",
    period: "2024 — 2025",
    description:
      "",
  },
  {
    role: "Business Analyser",
    company: "EX-ENEL",
    period: "2023 — 2024",
    description:
      "Worked as a Business Analyst alongside my studies, contributing to requirement analysis and supporting business processes to enhance clarity and enable effective decision-making.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="flex flex-col justify-center min-h-[calc(100vh-3rem)] px-6 bg-background scroll-mt-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground text-center sm:text-4xl lg:text-5xl font-sans">
          𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞
        </h2>
        <Separator className="mt-4 mb-10" />

        <div className="relative space-y-0 pl-6">
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-highlight/30" />
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              <div className="absolute left-0 top-2 size-[14px] rounded-full bg-highlight ring-4 ring-highlight/20" />

              <div className="rounded-xl border border-border p-4 transition-all hover:border-highlight/30 hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-bold tracking-wider uppercase text-highlight bg-highlight/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-base font-semibold text-highlight mb-2">
                  {exp.company}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
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
