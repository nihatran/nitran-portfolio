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
    <div className="flex justify-center items-center min-h-[calc(100svh-5rem)]">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10 xl:mb-20 mb-5">
        <div className="flex flex-col pb-5">
          <h1
            ref={nameRef}
            className="whitespace-nowrap text-[clamp(4rem,7vw,11rem)] md:mb-[-3.3vw] mb-[-8vw] z-10 font-semibold text-slate-400"
          >
            NI TRAN
          </h1>
          <div className="relative w-full aspect-[13/16] max-h-[70vh]">
            <Image
              src="/ni-hero.png"
              alt="profile picture sketch"
              fill
              loading="eager"
              className="object-contain"
            />
          </div>
        </div>
        <div
          ref={titleContainerRef}
          className="flex flex-col text-[clamp(2rem,4vw,6rem)] gap-1 lg:gap-2 xl:gap-5 font-semibold whitespace-nowrap lg:pt-30"
        >
          <h2 className="inline-block overflow-hidden leading-tight">
            /Web Developer
          </h2>
          <h2 className="inline-block overflow-hidden leading-tight">
            /Artist
          </h2>
          <h2 className="inline-block overflow-hidden leading-tight">
            /Thinker
          </h2>
        </div>
      </div>
    </div>
  );
}
