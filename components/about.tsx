"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutSelfRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const aboutMainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!aboutSelfRef.current) return;
    if (!headingRef.current) return;
    if (!aboutMainRef.current) return;

    const aboutSelf = aboutSelfRef.current.querySelectorAll("p");
    const master = gsap.timeline({
      delay: 0.3,
      scrollTrigger: { trigger: aboutSelf, start: "top 90%" },
    });

    aboutSelf.forEach((line, i) => {
      const splitAboutSelf = SplitText.create(line, {
        type: "lines",
        mask: "lines",
      });

      gsap.set(splitAboutSelf.lines, { yPercent: 100 });

      master.to(
        splitAboutSelf.lines,
        {
          yPercent: 0,
          duration: 0.9,
          ease: "power4",
          stagger: 0.2,
        },
        i * 0.3
      );
    });

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
    <div className="flex xl:flex-col flex-col-reverse justify-end md:justify-between xl:h-svh p-6">
      <div
        ref={aboutSelfRef}
        className="flex flex-col xl:items-end text-2xl lg:text-4xl xl:text-4xl font-medium xl:font-semibold gap-1 xl:gap-5 xl:p-5 p-3 md:px-0 mb-5"
      >
        <p>Take on challenges without fear of failure.</p>
        <p>Live each day to the fullest.</p>
        <p>Keep learning.</p>
      </div>
      <div className="border-1 md:invisible visible"></div>
      <div className="flex flex-col gap-9 xl:gap-14 xl:items-start items-center mb-5 px-3 xl:p-5 md:px-0">
        <h2 ref={headingRef} className="xl:text-8xl text-5xl font-semibold">
          ABOUT
        </h2>
        <div
          ref={aboutMainRef}
          className="xl:w-[40vw] w-full xl:leading-19 text-2xl lg:text-4xl xl:text-6xl font-medium"
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
