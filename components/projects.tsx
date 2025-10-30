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
    <div className="flex flex-col justify-center items-center xl:h-[90svh] gap-9 xl:gap-15">
      <h2 ref={headingRef} className="xl:text-8xl text-5xl font-semibold">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 justify-items-center">
        <ProjectCard
          imgSrc={"/chiikawapomodoro.png"}
          title={"Chiikawa Pomodoro"}
          tech={["HTML/CSS", "TypeScript", "React"]}
          link={"https://chiikawa-pomodoro.vercel.app/"}
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
      </div>
    </div>
  );
}
