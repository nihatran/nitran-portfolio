"use client";

import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Portfolio() {
  return (
    <div>
      <section id="home">
        <Header />
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
