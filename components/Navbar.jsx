"use client";

export default function Navbar() {
  const sections = [
    "hero",
    "why",
    "retail",
    "luxury",
    "dining",
    "entertainment",
    "events",
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="flex justify-between items-center px-10 py-4 text-white">

        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          Dubai Mall
        </h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className="capitalize hover:text-gray-300 transition"
            >
              {sec}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
