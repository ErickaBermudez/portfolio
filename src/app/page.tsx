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
        <p className="max-w-[1080px] mx-auto mt-[52px] font-mono text-xs text-muted2">
          © 2026 Ericka Bermúdez · made with 🧡 and too much coffee
        </p>
        <p className="max-w-[1080px] mx-auto mt-2 font-mono text-xs text-muted2">
          Profile picture made with{" "}
          <a
            href="https://picrew.me/en/image_maker/2288696"
            className="underline underline-offset-2 hover:text-ink focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Picrew
          </a>
        </p>
        <p className="max-w-[1080px] mx-auto mt-2 font-mono text-xs text-muted2">
          Cat doodle icons by{" "}
          <a
            href="https://www.etsy.com/es/shop/HoneyBloomGraphics"
            className="underline underline-offset-2 hover:text-ink focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            HoneyBloomGraphics
          </a>
        </p>
      </section>

      <ScrollToTop />
    </main>
  );
}
