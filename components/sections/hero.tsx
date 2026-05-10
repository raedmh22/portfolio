"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";

const roles = [
  "Business Analyst",
  "Requirements Analyst",
  "Process Thinker",
  "Problem Solver",
  "Strategic Planner",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] px-6 pl-24 scroll-mt-12">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="size-48 shrink-0 rounded-full border border-border overflow-hidden">
            <Image
              src="/photo-v2.png"
              alt="Azer Haj Ali"
              width={192}
              height={192}
              className="size-full object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-sans">
              𝐇𝐞𝐥𝐥𝐨, 𝐈&apos;𝐦{" "}
              <span className="text-highlight">𝐀𝐳𝐞𝐫</span>{" "}
              <span className="text-highlight">𝐇𝐚𝐣 𝐀𝐥𝐢</span>
            </h1>
            <div className="mt-4 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  className="text-sm font-semibold tracking-widest uppercase text-highlight"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="mt-6 max-w-md">
              <div className="w-8 h-[2px] bg-foreground mb-4" />
              <p className="text-lg leading-8 text-foreground font-medium italic font-serif">
                I work as a Business Analyst where I analyze project
                requirements, support business decisions, and help bridge the gap
                between technical teams and business needs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="mailto:azerhajjj@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact">
            <Button>Get in Touch</Button>
          </a>
          <a href="#skills">
            <Button variant="outline">View Skills</Button>
          </a>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
