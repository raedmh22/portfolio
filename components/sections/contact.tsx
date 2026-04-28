import { Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Contact
        </h2>
        <Separator className="mt-4 mb-8" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Let&apos;s connect
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a conversation. Feel free to reach out.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:placeholder@email.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-background border border-border group-hover:border-foreground/20 transition-colors">
                <Mail className="size-4" />
              </div>
              <span>placeholder@email.com</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-background border border-border group-hover:border-foreground/20 transition-colors">
                <LinkedinIcon className="size-4" />
              </div>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-background border border-border group-hover:border-foreground/20 transition-colors">
                <GithubIcon className="size-4" />
              </div>
              <span>GitHub Profile</span>
            </a>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex size-10 items-center justify-center rounded-lg bg-background border border-border">
                <MapPin className="size-4" />
              </div>
              <span>City, Country</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="mailto:placeholder@email.com">
            <Button size="lg">Send me an email</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
