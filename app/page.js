"use client";

import { motion } from "framer-motion";

const Section = ({ children, bg }) => (
  <section className={`h-screen w-full snap-start flex items-center justify-center ${bg}`}>
    {children}
  </section>
);

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* HERO */}
      <Section bg="bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Dubai Mall</h1>
          <p className="mt-4 text-xl">More Than a Mall. A Global Destination.</p>
        </div>
      </Section>

      {/* WHY */}
      <Section bg="bg-white text-black">
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
          <h2 className="text-5xl font-bold">100M+ Visitors Annually</h2>
          <p className="mt-4 text-lg">Located in Downtown Dubai, global reach.</p>
        </motion.div>
      </Section>

      {/* RETAIL */}
      <Section bg="bg-gray-100">
        <h2 className="text-5xl font-bold">1200+ Retail Stores</h2>
      </Section>

      {/* LUXURY */}
      <Section bg="bg-black text-white">
        <h2 className="text-5xl font-bold">Luxury Redefined</h2>
      </Section>

      {/* DINING */}
      <Section bg="bg-white">
        <h2 className="text-5xl font-bold">Dining as an Experience</h2>
      </Section>

      {/* ENTERTAINMENT */}
      <Section bg="bg-gray-900 text-white">
        <h2 className="text-5xl font-bold">Aquarium. Ice Rink. VR Park.</h2>
      </Section>

      {/* EVENTS */}
      <Section bg="bg-white">
        <h2 className="text-5xl font-bold">Host Global Events</h2>
      </Section>

    </main>
  );
}
