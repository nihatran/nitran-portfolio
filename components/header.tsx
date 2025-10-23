"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-700 ease-in ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-end p-5">
        {/* Desktop Nav */}
        <ul className="hidden md:flex w-full justify-between text-lg md:text-4xl font-semibold px-6 py-2">
          <li>
            <a href="#home" className="hover:text-slate-300 transition-colors">
              &#091; Home &#093;
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              &#091; About &#093;
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-slate-300 transition-colors"
            >
              &#091; Projects &#093;
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-slate-300 transition-colors"
            >
              &#091; Contact &#093;
            </a>
          </li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[60] flex flex-col justify-between w-8 h-6 focus:outline-none"
        >
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-slate-400 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-8 text-3xl font-semibold">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
