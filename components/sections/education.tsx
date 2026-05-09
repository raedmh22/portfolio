import { GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const educationItems = [
  {
    degree: "Master's Degree in Finance",
    institution: "EPI Business School",
    period: "",
    description: "",
  },
  {
    degree: "Licence Degree in Business",
    institution: "EPI Business School",
    period: "",
    description: "",
  },
];

export function Education() {
  return (
    <section id="education" className="flex flex-col justify-center min-h-[calc(100vh-3rem)] px-6 scroll-mt-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground text-center sm:text-4xl lg:text-5xl font-sans">
          𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧
        </h2>
        <Separator className="mt-4 mb-10" />

        <div className="grid gap-6 sm:grid-cols-2">
          {educationItems.map((item, index) => (
            <div key={index} className="rounded-xl border border-border p-6 transition-all hover:border-highlight/30 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-highlight/10">
                  <GraduationCap className="size-6 text-highlight" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {item.degree}
                </h3>
              </div>
              <p className="text-base font-semibold text-highlight mb-2">
                {item.institution}
              </p>
              {item.period && (
                <span className="text-xs font-bold tracking-wider uppercase text-highlight bg-highlight/10 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              )}
              {item.description && (
                <p className="text-base text-muted-foreground leading-relaxed mt-3">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
