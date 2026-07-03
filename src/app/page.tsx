"use client";

import {
  About,
  Contact,
  Education,
  Intro,
  Leadership,
  Projects,
  Research,
  Stack,
} from "./components/templates";
import { Navbar, ScrollToTop } from "./components/organisms";

const SECTION_PADDING = "px-5 sm:px-8 lg:px-[52px] py-11 sm:py-14 lg:py-[68px]";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-bg text-ink">
      <Navbar />

      <section id="top" className="scroll-mt-20">
        <Intro />
      </section>

      <section
        id="about"
        className={`scroll-mt-20 bg-bg-soft border-y-2 border-ink ${SECTION_PADDING}`}
      >
        <About />
      </section>

      <section id="stack" className={`scroll-mt-20 ${SECTION_PADDING}`}>
        <Stack />
      </section>

      <section
        id="leadership"
        className={`scroll-mt-20 bg-bg-rose border-y-2 border-ink ${SECTION_PADDING}`}
      >
        <Leadership />
      </section>

      <section id="projects" className={`scroll-mt-20 ${SECTION_PADDING}`}>
        <Projects />
      </section>

      <section
        id="research"
        className={`scroll-mt-20 bg-bg-soft border-y-2 border-ink ${SECTION_PADDING}`}
      >
        <Research />
      </section>

      <section id="education" className={`scroll-mt-20 ${SECTION_PADDING}`}>
        <Education />
      </section>

      <section
        id="contact"
        className={`scroll-mt-20 bg-bg-soft border-t-2 border-ink px-5 sm:px-8 lg:px-[52px] py-11 sm:py-14 lg:pt-[68px] lg:pb-[76px]`}
      >
        <Contact />
        <footer className="max-w-[1080px] mx-auto mt-[56px] pt-7 border-t-2 border-dashed border-dash flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <p className="m-0 font-mono text-xs leading-relaxed text-muted2">
            © 2026 Ericka Bermúdez · made with 🧡 and my cat Gordo as supervisor.
          </p>
          <div className="flex flex-col gap-2.5 items-start">
            <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted2">
              Credits &amp; sources
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://picrew.me/en/image_maker/2288696"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] text-[13px] font-extrabold text-chip-ink no-underline bg-rose border-2 border-ink rounded-full px-[15px] py-[7px] shadow-[3px_3px_0_var(--ink)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)] focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <span aria-hidden="true">🎨</span> Profile picture · Picrew
              </a>
              <a
                href="https://www.etsy.com/es/shop/HoneyBloomGraphics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] text-[13px] font-extrabold text-chip-ink no-underline bg-sage border-2 border-ink rounded-full px-[15px] py-[7px] shadow-[3px_3px_0_var(--ink)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)] focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <span aria-hidden="true">🐾</span> Cat doodles · HoneyBloomGraphics
              </a>
              <a
                href="https://www.linkedin.com/pulse/basics-graph-databases-part-1-benjamin-prescott/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[7px] text-[13px] font-extrabold text-chip-ink no-underline bg-peach border-2 border-ink rounded-full px-[15px] py-[7px] shadow-[3px_3px_0_var(--ink)] transition-[transform,box-shadow] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)] focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <span aria-hidden="true">🕸️</span> Graph diagram · Benjamin Prescott
              </a>
            </div>
          </div>
        </footer>
      </section>

      <ScrollToTop />
    </main>
  );
}
