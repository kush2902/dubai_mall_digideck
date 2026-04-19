"use client";

export default function SideNav() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-white/70 hover:bg-white rounded-full cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
