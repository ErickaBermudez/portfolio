"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "leadership", label: "Leadership" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("ericka-theme", next);
    } catch {
      // localStorage may be unavailable (private browsing, etc.) — theme just won't persist.
    }
    setTheme(next);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main"
      className="sticky font-bold top-0 z-50 flex items-center gap-4 px-5 sm:px-8 lg:px-[52px] py-3.5 bg-bg border-b-2 border-ink"
    >
      <a
        href="#top"
        aria-label="Home"
        onClick={(e) => scrollToSection(e, "top")}
        className="font-display text-2xl text-ink no-underline inline-block -rotate-6 hover:rotate-0 transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        e<span className="text-accent">.</span>
      </a>

      <div className="hidden lg:flex flex-wrap gap-0.5 ml-2">
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className="px-3.5 py-2 rounded-full text-ink font-semibold text-[15px] no-underline hover:bg-nav-pill focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
          className="w-10 h-10 rounded-full border-2 border-ink bg-card text-ink text-base shadow-[2px_2px_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_var(--ink)] transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <span className={theme === null ? "opacity-0" : undefined}>
            {theme === "dark" ? "☀" : "🌙"}
          </span>
        </button>

        <a
          href="/docs/ErickaBermudez.pdf"
          download
          className="hidden lg:inline-flex text-[15px] font-extrabold text-accent-ink bg-accent px-5 py-[11px] rounded-full no-underline shadow-[3px_3px_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--ink)] transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Download CV
        </a>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden w-10 h-10 rounded-xl border-2 border-ink bg-card text-ink text-lg shadow-[2px_2px_0_var(--ink)] focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 flex flex-col gap-0.5 px-5 sm:px-8 pt-2.5 pb-4 bg-bg border-b-2 border-ink">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="px-3.5 py-3 rounded-xl text-ink font-extrabold text-[17px] no-underline hover:bg-nav-pill focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {label}
            </a>
          ))}
          <a
            href="/docs/ErickaBermudez.pdf"
            download
            className="mt-2 text-center text-base font-extrabold text-accent-ink bg-accent px-5 py-[13px] rounded-full no-underline shadow-[3px_3px_0_var(--ink)] focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
