import Image from "next/image";
import ProjectCard from "./project-card";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const splitHeading = SplitText.create(headingRef.current, {
      type: "chars",
    });

    gsap.set(splitHeading.chars, { opacity: 0 });

    gsap.to(splitHeading.chars, {
      scrollTrigger: headingRef.current,
      stagger: {
        each: 0.08,
        from: "start",
      },
      duration: 0.9,
      ease: "expo.out",
      delay: 0.2,
      opacity: 1,
    });
  });

  return (
    <div className="flex flex-col justify-center items-center gap-9 xl:gap-15 xl:pt-50">
      <h2
        ref={headingRef}
        className="text-[clamp(3rem,5vw,8rem)] font-semibold"
      >
        PROJECTS
      </h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 px-5 xl:w-[75vw]">
        <ProjectCard
          imgSrc={"/chiikawa.PNG"}
          title={"Chiikawa Pomodoro"}
          tech={["HTML/CSS", "TypeScript", "React"]}
          link={"https://chiikawa-pomodoro.vercel.app/"}
        ></ProjectCard>
        <ProjectCard
          imgSrc={"/lamp.PNG"}
          title={"Lyrics From Lamp"}
          tech={["HTML", "Tailwind CSS", "TypeScript", "Next.js"]}
          link={"https://lyrics-from-lamp.vercel.app/"}
        ></ProjectCard>
        <ProjectCard
          imgSrc={"/pokedex.PNG"}
          title={"Pokedex"}
          tech={["HTML/CSS", "JavaScript"]}
          link={"https://nihatran.github.io/pokedex-v1/"}
        ></ProjectCard>
        <ProjectCard
          imgSrc={"/triplesprofiles.PNG"}
          title={"tripleS Profiles"}
          tech={["HTML/CSS", "JavaScript", "React"]}
          link={"https://triples-profiles.vercel.app/"}
        ></ProjectCard>
        <ProjectCard
          imgSrc={"/stockanalyzer.png"}
          title={"Stock Analyzer"}
          tech={["C#", "Windows Forms"]}
          link={"https://github.com/nihatran/Stock-Analyzer"}
        ></ProjectCard>
        <ProjectCard
          imgSrc={"/pikachu-robot.png"}
          title={"Pikachu Robot"}
          tech={["Arduino"]}
          link={"https://github.com/nihatran/Pikachu-Robot"}
        ></ProjectCard>
      </div>
    </div>
  );
}
