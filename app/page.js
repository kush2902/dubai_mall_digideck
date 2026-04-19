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
      <section
        id="hero"
        className="h-screen snap-start relative flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dv8ywrti6/video/upload/v1776364998/Untitled_design-2_f6y0ig.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay (IMPORTANT for premium look) */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center px-6">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
            Dubai Mall
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The World’s Most Visited Destination for Retail, Luxury & Experience
          </p>
        </div>
      </section>

      {/* WHY */}
      <Section id="why" bg="bg-white text-black">
        <h2 className="text-6xl font-bold">100M+ Visitors</h2>
        <p className="mt-4 text-lg">
          Located in Downtown Dubai with unmatched global reach
        </p>
      </Section>

      {/* RETAIL */}
      <Section id="retail" bg="bg-gray-100 text-black">
        <h2 className="text-6xl font-bold">1200+ Retail Stores</h2>
        <p className="mt-4 text-lg">
          Home to global brands, flagship stores, and premium retail experiences
        </p>
      </Section>

      {/* LUXURY */}
      <Section id="luxury" bg="bg-black text-white">
        <h2 className="text-6xl font-bold">Luxury Redefined</h2>
        <p className="mt-4 text-lg text-gray-300">
          Fashion Avenue and ultra-premium brand presence
        </p>
      </Section>

      {/* DINING */}
      <Section id="dining" bg="bg-white text-black">
        <h2 className="text-6xl font-bold">Dining as Lifestyle</h2>
        <p className="mt-4 text-lg">
          200+ dining destinations from casual to fine dining
        </p>
      </Section>

      {/* ENTERTAINMENT */}
      <Section id="entertainment" bg="bg-gray-900 text-white">
        <h2 className="text-6xl font-bold">Entertainment Hub</h2>
        <p className="mt-4 text-lg text-gray-300">
          Aquarium, Ice Rink, VR Park and immersive attractions
        </p>
      </Section>

      {/* EVENTS */}
      <Section id="events" bg="bg-white text-black">
        <h2 className="text-6xl font-bold">Events & Partnerships</h2>

        <p className="mt-4 text-lg">
          A global platform for brand activations, concerts, and experiences
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-8 py-3 bg-black text-white hover:bg-gray-800 transition"
        >
          Explore Events
        </button>
      </Section>

    </main>
  );
}
