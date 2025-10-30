import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tech: Array<string>;
  link: string;
}

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({
  imgSrc,
  title,
  tech,
  link,
}: ProjectCardProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(projectRef.current, {
      scale: 1.05,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(projectRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  useGSAP(() => {
    if (!nameRef.current) return;

    const splitHeading = SplitText.create(nameRef.current, {
      type: "words",
      mask: "words",
    });

    gsap.set(splitHeading.words, { y: 100 });

    gsap.to(splitHeading.words, {
      scrollTrigger: nameRef.current,
      stagger: {
        each: 0.05,
        from: "start",
      },
      duration: 0.9,
      ease: "power4.out",
      y: 0,
    });
  });

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col gap-4 relative group">
          <div
            ref={projectRef}
            className="relative md:h-[400px] md:w-[400px] h-[300px] w-[300px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={imgSrc}
              alt="project thumbnail"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(min-width: 768px) 400px, 300px"
              className="object-cover transition-opacity duration-100 group-hover:opacity-60"
            />
            <div className="absolute inset-0 flex justify-between items-end bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="flex justify-between p-4">
                <ul className="flex flex-col text-white space-y-2 font-semibold">
                  {tech.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <img src="arrow-outward.svg" className="w-10"></img>
            </div>
          </div>
          <h4 ref={nameRef} className="text-2xl font-medium">
            {title}
          </h4>
        </div>
      </a>
    </>
  );
}
