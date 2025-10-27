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

    const splitName = SplitText.create(nameRef.current, {
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
      const splitTitle = SplitText.create(title, {
        type: "words",
        mask: "words",
      });

      gsap.set(splitTitle.words, { y: 100 });

      master.to(
        splitTitle.words,
        {
          y: 0,
          duration: 0.9,
          delay: 0.45,
          ease: "power4",
        },
        i * 0.3
      );
    });
  });

  return (
    <div className="flex justify-center items-center h-[calc(100svh-6rem)] pb-24">
      <div className="flex flex-col md:gap-10 gap-5 lg:flex-row justify-center items-center h-[80%] w-[80%] lg:w-[50%]">
        <div className="flex flex-col items-center items-center">
          <h1
            ref={nameRef}
            className="whitespace-nowrap text-[clamp(4.5rem,10vw,11rem)] lg:mb-[-5rem] mb-[-35] z-10 font-semibold text-slate-400"
          >
            NI TRAN
          </h1>
          <div className="relative w-full aspect-[13/16]">
            <Image
              src="/ni-hero.png"
              alt="profile picture sketch"
              fill
              loading="eager"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div
          ref={titleContainerRef}
          className="flex flex-col text-[clamp(2rem,5vw,6rem)] gap-1 md:gap-5 font-semibold whitespace-nowrap lg:pt-50"
        >
          <h2 className="inline-block overflow-hidden leading-tight">
            /Web Developer
          </h2>
          <h2 className="inline-block overflow-hidden leading-tight">
            /Artist
          </h2>
          <h2 className="inline-block overflow-hidden leading-tight">
            /Friend
          </h2>
        </div>
      </div>
    </div>
  );
}
