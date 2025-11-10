"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const aboutMainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;
    if (!aboutMainRef.current) return;

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

    const splitAboutMain = SplitText.create(aboutMainRef.current, {
      type: "lines",
      mask: "lines",
    });

    gsap.set(splitAboutMain.lines, { yPercent: 100 });

    gsap.to(splitAboutMain.lines, {
      scrollTrigger: aboutMainRef.current,
      yPercent: 0,
      duration: 0.9,
      ease: "power4",
      stagger: 0.2,
    });
  });

  return (
    <div className="flex justify-center items-center mb-14 mt-20">
      <div className="flex flex-col gap-9 xl:gap-14 items-center md:w-[75vw]">
        <h2 ref={headingRef} className="xl:text-8xl text-5xl font-semibold">
          ABOUT
        </h2>
        <div
          ref={aboutMainRef}
          className="xl:leading-26 lg:leading-14 leading-10 tracking-tight text-3xl lg:text-4xl xl:text-7xl font-medium px-5"
        >
          <p>Hello! My name is Ni.</p>
          <p>
            I'm a web developer that loves to bring thoughtful designs to life!
            With a mission to amaze, I'm focused on building intuitive and
            engaging digital experiences for all.
          </p>
        </div>
      </div>
    </div>
  );
}
