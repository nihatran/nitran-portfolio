"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col gap-5 lg:flex-row justify-center items-center h-[80%] w-[80%] lg:w-[50%]">
        <div className="flex flex-col items-center items-center">
          <h1 className="whitespace-nowrap text-[clamp(4.5rem,10vw,11rem)] lg:mb-[-5rem] mb-[-35] z-10 font-semibold text-slate-400">
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
        <div className="flex flex-col text-3xl gap-1 md:gap-5 md:text-6xl lg:text-8xl w-full font-semibold whitespace-nowrap lg:pt-50">
          <h2>/Web Developer</h2>
          <h2>/Artist</h2>
          <h2>/Friend</h2>
        </div>
      </div>
    </div>
  );
}
