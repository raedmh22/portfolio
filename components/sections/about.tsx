import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          About
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="size-32 rounded-full bg-muted flex items-center justify-center text-3xl font-semibold text-muted-foreground">
              SN
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Hello, I&apos;m Sofya
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a Business Informatics professional passionate about the
              intersection of technology and business strategy. I specialize in
              analyzing complex business processes, designing digital solutions,
              and leveraging data to drive informed decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both business administration and
              information systems, I bring a unique perspective to every project
              — translating business needs into technical requirements and vice
              versa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
