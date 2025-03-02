"use client";

import { Intro, About, Stack } from "./components/templates";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Intro />
      <About />
      <Stack />
    </div>
  );
}
