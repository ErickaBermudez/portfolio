"use client";

import { Intro, About, Stack, Contact } from "./components/templates";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Intro />
      <About />
      <Stack />
      <Contact />
    </div>
  );
}
