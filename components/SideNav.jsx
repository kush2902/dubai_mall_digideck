"use client";

export default function SideNav() {
  const sections = ["hero", "why", "retail", "luxury", "dining", "entertainment", "events"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {sections.map((sec) => (
          <div
            key={sec}
            onClick={() => scrollTo(sec)}
            className="w-3 h-3 bg-white/60 hover:bg-white rounded-full cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
