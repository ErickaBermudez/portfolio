"use client";

import { Intro, About } from "./components/templates";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Intro />
      <About />
    </div>
  );
}
