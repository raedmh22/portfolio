import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const topCategories = [
  {
    title: "Business & Analysis",
    icon: "/icons/business-analysis-v4.png",
    iconSize: "size-14",
    skills: [
      "Requirement Analysis",
      "Problem Analysis",
      "Business Process Understanding",
      "Project Management",
    ],
  },
  {
    title: "Technical",
    icon: "/icons/technical-v2.png",
    iconSize: "size-8",
    skills: [
      "Technical Understanding",
      "Basic SQL",
      "Data Analysis (Excel)",
      "API Concepts",
      "Database Fundamentals",
    ],
  },
];

const softSkills = {
  title: "Soft Skills",
  icon: "/icons/soft-skills.png",
  iconSize: "",
  skills: [
    "Communication",
    "Critical Thinking",
    "Problem Solving",
    "Attention to Detail",
    "Adaptability",
    "Team Leadership",
  ],
};

export function Skills() {
  return (
    <section id="skills" className="flex flex-col justify-center min-h-[calc(100vh-3rem)] px-6 bg-background scroll-mt-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground text-center sm:text-4xl lg:text-5xl font-sans">
          𝐒𝐤𝐢𝐥𝐥𝐬
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="grid gap-8 sm:grid-cols-2">
          {topCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border p-7 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                {category.icon && (
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={64}
                    height={64}
                    className={`${category.iconSize || "size-10"} object-contain dark:invert`}
                    unoptimized
                  />
                )}
                <h3 className="text-xl font-black text-highlight tracking-tight uppercase">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="font-semibold text-sm text-foreground/80 border border-border px-4 py-2 rounded-full transition-all duration-300 cursor-default hover:bg-foreground/5 hover:text-foreground hover:border-foreground/30 hover:scale-105">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="rounded-xl border border-border p-7 transition-all hover:border-foreground/20 hover:shadow-lg max-w-lg w-full">
            <div className="flex items-center justify-center gap-3 mb-5">
              {softSkills.icon && (
                <Image
                  src={softSkills.icon}
                  alt={softSkills.title}
                  width={64}
                  height={64}
                  className="size-8 object-contain dark:invert"
                  unoptimized
                />
              )}
              <h3 className="text-xl font-black text-highlight tracking-tight uppercase">
                {softSkills.title}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.skills.map((skill) => (
                <span key={skill} className="font-semibold text-sm text-foreground/80 border border-border px-4 py-2 rounded-full transition-all duration-300 cursor-default hover:bg-foreground/5 hover:text-foreground hover:border-foreground/30 hover:scale-105">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
