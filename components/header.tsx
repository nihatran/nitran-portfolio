"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-700 ease-in ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <nav className="flex flex-col items-end gap-4 md:justify-between h-auto md:h-20 w-full p-2 md:p-12 md:flex-row">
        {/* Hamburger toggle (mobile only) */}
        <button
          onClick={toggleNavbar}
          className={`
            block md:hidden cursor-pointer bg-transparent px-[10px]
            transition-colors duration-300 border-none p-3
            ${isOpen ? "bg-sky-200" : ""}
          `}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon anim*/}
          <div className="relative w-6 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Nav links */}
        <div
          className={`
            flex flex-col md:flex-row items-center w-full justify-between
            overflow-hidden md:overflow-visible
            transition-[max-height] duration-500 ease-in-out
            text-lg md:text-4xl gap-5 font-semibold
            ${isOpen ? "max-h-60" : "max-h-0"}
          `}
        >
          <a href="#home" className="hover:text-slate-300">
            &#091; Home &#093;
          </a>
          <a href="#about" className="hover:text-slate-300">
            &#091; About &#093;
          </a>
          <a href="#projects" className="hover:text-slate-300">
            &#091; Projects &#093;
          </a>
          <a href="#contact" className="hover:text-slate-300">
            &#091; Contact &#093;
          </a>
        </div>
      </nav>
    </header>
  );
}
