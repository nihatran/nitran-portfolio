"use client";

import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

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
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
