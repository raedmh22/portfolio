import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Business Informatics
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Sofya Nikulkina
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto">
          Bridging business strategy and technology to create impactful digital
          solutions.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact">
            <Button size="lg">Get in Touch</Button>
          </a>
          <a href="#projects">
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="mailto:placeholder@email.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
