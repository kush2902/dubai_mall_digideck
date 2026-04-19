"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const sections = ["hero", "why", "retail", "luxury", "dining", "entertainment", "events"];
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="flex justify-between px-10 py-4">
        <h1 className="text-lg tracking-widest">Dubai Mall</h1>

        <div className="hidden md:flex gap-8 text-sm">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`relative uppercase ${
                active === sec ? "text-white" : "text-gray-400"
              }`}
            >
              {sec}

              <span
                className={`absolute left-0 bottom-0 h-[1px] bg-white transition-all ${
                  active === sec ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
