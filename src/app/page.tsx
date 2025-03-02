"use client";

import { About, Contact, Intro, Stack } from "./components/templates";
import { Navbar, ScrollToTop } from "./components/organisms";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden my-3">
      <Navbar />
      <section id="intro" className="min-h-screen">
        <Intro />
      </section>
      <section id="about" className="min-h-screen my-5">
        <About />
      </section>
      <section id="stack" className="min-h-screen my-5">
        <Stack />
      </section>
      <section id="contact" className="min-h-screen my-5">
        <Contact />
      </section>
      <ScrollToTop />
    </main>
  );
}
