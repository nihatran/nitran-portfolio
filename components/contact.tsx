"use client";
import { useState, useRef } from "react";
import { Tooltip } from "react-tooltip";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailCopy = "nihatran1@gmail.com";
  const headingRef = useRef<HTMLHeadingElement>(null);
  const commentRef = useRef<HTMLParagraphElement>(null);
  const emailRef = useRef<HTMLButtonElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(emailCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Could not copy: ", err));
  };

  useGSAP(() => {
    if (!headingRef.current) return;
    if (!commentRef.current) return;
    if (!emailRef.current) return;
    if (!contactsRef.current) return;

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

    gsap.set(commentRef.current, {
      opacity: 0,
    });

    gsap.to(commentRef.current, {
      scrollTrigger: commentRef.current,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      ease: "power4.in",
    });

    gsap.set(emailRef.current, {
      yPercent: 100,
      opacity: 0,
    });

    gsap.to(emailRef.current, {
      scrollTrigger: emailRef.current,
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4",
    });

    gsap.set(contactsRef.current, {
      yPercent: 100,
      opacity: 0,
    });

    gsap.to(contactsRef.current, {
      scrollTrigger: contactsRef.current,
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4",
      delay: 0.2,
    });
  });

  return (
    <div className="flex flex-col xl:h-[80svh] h-[25svh] gap-9 mt-20 xl:mt-0">
      <div className="flex flex-col justify-center items-center h-[100%] gap-4">
        <h2 ref={headingRef} className="xl:text-8xl text-5xl font-semibold">
          CONTACT
        </h2>
        <p ref={commentRef} className="text-2xl xl:text-3xl font-semibold">
          &#091; Let's Chat! &#093;
        </p>
      </div>
      <div className="flex w-full justify-center xl:justify-end items-center px-11 gap-4 ">
        <div className="flex flex-col gap-7 text-xl md:text-2xl xl:text-5xl font-semibold">
          <Tooltip anchorSelect="#email">{copied ? "Copied!" : "Copy"}</Tooltip>
          <button
            onClick={handleCopy}
            id="email"
            className="cursor-pointer rounded"
            ref={emailRef}
          >
            <p className="hover:underline">{emailCopy}</p>
          </button>
          <div className="flex justify-between gap-2" ref={contactsRef}>
            <div className="flex">
              <a
                href="https://github.com/nihatran"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
              <img
                src="arrow-outward.svg"
                alt="outward arrow"
                className="h-full"
              ></img>
            </div>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/ni-tran/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
              <img
                src="arrow-outward.svg"
                alt="outward arrow"
                className="h-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
