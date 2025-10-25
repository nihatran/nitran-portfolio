"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Home() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!nameRef.current) return;
    if (!titleContainerRef.current) return;

    const titles = titleContainerRef.current.querySelectorAll("h2");
    const master = gsap.timeline({ delay: 0.3 });

    const splitName = new SplitText(nameRef.current, {
      type: "chars",
    });

    gsap.set(splitName.chars, { opacity: 0.25 });

    gsap.to(splitName.chars, {
      opacity: 1,
      stagger: 0.08,
      duration: 0.9,
      delay: 0.2,
      ease: "expo",
    });

    titles.forEach((title, i) => {
      const splitTitle = new SplitText(title, {
        type: "words",
      });

      gsap.set(splitTitle.words, { y: 100 });

      master.to(
        splitTitle.words,
        {
          y: 0,
          stagger: 0.05,
          duration: 0.9,
          delay: 0.45,
          ease: "power4",
        },
        i * 0.3
      );
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col gap-5 lg:flex-row justify-center items-center h-[80%] w-[80%] lg:w-[50%]">
        <div className="flex flex-col items-center items-center">
          <h1
            ref={nameRef}
            className="whitespace-nowrap text-[clamp(4.5rem,10vw,11rem)] lg:mb-[-5rem] mb-[-35] z-10 font-semibold text-slate-400"
          >
            NI TRAN
          </h1>
          <Image
            src="/ni-hero.png"
            height={800}
            width={650}
            alt="profile picture sketch"
            loading="eager"
          />
        </div>
        <div
          ref={titleContainerRef}
          className="flex flex-col text-[clamp(2rem,5vw,6rem)] gap-1 md:gap-5 w-full font-semibold whitespace-nowrap lg:pt-50"
        >
          <h2 className="text-clip-path inline-block overflow-hidden leading-tight">
            /Web Developer
          </h2>
          <h2 className="text-clip-path inline-block overflow-hidden leading-tight">
            /Artist
          </h2>
          <h2 className="text-clip-path inline-block overflow-hidden leading-tight">
            /Friend
          </h2>
        </div>
      </div>
    </div>
  );
}
