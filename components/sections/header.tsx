"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "𝐇𝐨𝐦𝐞", href: "#home" },
  { label: "𝐒𝐤𝐢𝐥𝐥𝐬", href: "#skills" },
  { label: "𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞", href: "#experience" },
  { label: "𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧", href: "#education" },
  { label: "𝐂𝐨𝐧𝐭𝐚𝐜𝐭", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="grid h-12 grid-cols-3 items-center px-4">
        <a href="#home" className="inline-flex items-center justify-center size-10 rounded-full bg-foreground text-background text-base font-extrabold tracking-tight justify-self-start italic font-serif">
          NS
        </a>

        <nav className="hidden md:flex items-center justify-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-base font-medium transition-colors duration-300 tracking-wide after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:bg-foreground after:transition-transform after:duration-300 after:ease-out after:origin-left ${
                activeSection === link.href
                  ? "text-foreground after:scale-x-100"
                  : "text-foreground/70 hover:text-foreground/90 after:scale-x-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex justify-self-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="size-8"
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-1 justify-self-end col-start-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="size-8"
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 pb-4 pt-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-sm font-extrabold transition-colors tracking-wide ${
                  activeSection === link.href
                    ? "text-foreground border-l-2 border-foreground pl-3"
                    : "text-foreground hover:text-highlight"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
