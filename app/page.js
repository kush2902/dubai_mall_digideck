"use client";

import Section from "../components/Section";
import SideNav from "../components/SideNav";
import EventModal from "../components/EventModal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">

      <SideNav />
      <EventModal open={open} setOpen={setOpen} />

      {/* HERO */}
      <section className="h-screen snap-start relative flex items-center justify-center">
        <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-50">
          <source src="https://res.cloudinary.com/dv8ywrti6/video/upload/v1776364998/Untitled_design-2_f6y0ig.mp4" type="video/mp4" />
        </video>

        <div className="relative text-center">
          <h1 className="text-6xl font-bold">Dubai Mall</h1>
          <p className="mt-4 text-xl">A Global Destination</p>
        </div>
      </section>

      <Section bg="bg-white text-black">
        <h2 className="text-5xl font-bold">100M+ Visitors</h2>
        <p className="mt-4">Located in Downtown Dubai</p>
      </Section>

      <Section bg="bg-gray-100 text-black">
        <h2 className="text-5xl font-bold">1200+ Retail Stores</h2>
      </Section>

      <Section bg="bg-black text-white">
        <h2 className="text-5xl font-bold">Luxury Experience</h2>
      </Section>

      <Section bg="bg-white text-black">
        <h2 className="text-5xl font-bold">Dining & Lifestyle</h2>
      </Section>

      <Section bg="bg-gray-900 text-white">
        <h2 className="text-5xl font-bold">Entertainment Hub</h2>
      </Section>

      <Section bg="bg-white text-black">
        <h2 className="text-5xl font-bold">Events & Partnerships</h2>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 px-6 py-3 bg-black text-white"
        >
          Explore Events
        </button>
      </Section>

    </main>
  );
}
