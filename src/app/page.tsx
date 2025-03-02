"use client";

import { About, Contact, Intro, Stack } from "./components/templates";
import { Navbar, ScrollToTop } from "./components/organisms";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <section id="intro" className="min-h-screen">
        <Intro />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="stack" className="min-h-screen">
        <Stack />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      <ScrollToTop />
    </main>
  );
}
