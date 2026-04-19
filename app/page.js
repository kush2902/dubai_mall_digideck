"use client";

import Section from "../components/Section";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import EventModal from "../components/EventModal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">

      <Navbar />
      <SideNav />
      <EventModal open={open} setOpen={setOpen} />

      {/* HERO */}
      <section id="hero" className="h-screen snap-start relative flex items-center justify-center">
        <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-50">
          <source src="/videos/hero.mp4" />
        </video>

        <div className="relative text-center">
          <h1 className="text-7xl font-bold">Dubai Mall</h1>
          <p className="mt-4 text-xl text-gray-300">A Global Destination</p>
        </div>
      </section>

      <Section id="why" bg="bg-white text-black">
        <h2 className="text-6xl font-bold">100M+ Visitors</h2>
        <p className="mt-4 text-lg">The world’s most visited retail destination</p>
      </Section>

      <Section id="retail" bg="bg-gray-100 text-black">
        <h2 className="text-6xl font-bold">1200+ Retail Stores</h2>
      </Section>

      <Section id="luxury" bg="bg-black text-white">
        <h2 className="text-6xl font-bold">Luxury Redefined</h2>
      </Section>

      <Section id="dining" bg="bg-white text-black">
        <h2 className="text-6xl font-bold">Dining as Lifestyle</h2>
      </Section>

      <Section id="entertainment" bg="bg-gray-900 text-white">
        <h2 className="text-6xl font-bold">Entertainment Hub</h2>
      </Section>

      <Section id="events" bg="bg-white text-black">
        <h2 className="text-6xl font-bold">Events & Partnerships</h2>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
        >
          Explore Events
        </button>
      </Section>

    </main>
  );
}
