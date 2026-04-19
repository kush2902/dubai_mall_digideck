"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import EventModal from "../components/EventModal";

const totalSections = 7;

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [open, setOpen] = useState(false);

  // 🔥 SCROLL + SWIPE CONTROL
  useEffect(() => {
    let locked = false;
    let touchStartY = 0;

    const next = () => {
      if (index < totalSections - 1) {
        setDirection(1);
        setIndex((i) => i + 1);
      }
    };

    const prev = () => {
      if (index > 0) {
        setDirection(-1);
        setIndex((i) => i - 1);
      }
    };

    const handleWheel = (e) => {
      if (locked) return;
      locked = true;

      if (e.deltaY > 0) next();
      else prev();

      setTimeout(() => (locked = false), 900);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(delta) > 50) {
        if (delta > 0) next();
        else prev();
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [index]);

  return (
    <main className="h-screen w-screen overflow-hidden">

      <Navbar />
      <SideNav current={index} setIndex={setIndex} total={totalSections} />
      <EventModal open={open} setOpen={setOpen} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {renderSection(index, setOpen)}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

// 🔥 DIRECTIONAL TRANSITIONS
const pageVariants = {
  enter: (direction) => ({
    y: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

// 🎬 STAGGERED TEXT
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// 🎬 SECTION RENDER
function renderSection(index, setOpen) {
  switch (index) {

    case 0:
      return (
        <section className="h-screen flex items-center justify-center relative text-white">
          <video autoPlay muted loop className="absolute w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dv8ywrti6/video/upload/v1776364998/Untitled_design-2_f6y0ig.mp4" />
          </video>

          <div className="absolute inset-0 bg-black/60" />

          <motion.div variants={textContainer} initial="hidden" animate="show" className="text-center relative">
            <motion.h1 variants={textItem} className="text-7xl font-bold">
              Dubai Mall
            </motion.h1>
            <motion.p variants={textItem} className="mt-4 text-xl text-gray-300">
              The World’s Most Visited Destination
            </motion.p>
          </motion.div>
        </section>
      );

    case 6:
      return (
        <section className="h-screen flex items-center justify-center bg-white text-black">
          <motion.div variants={textContainer} initial="hidden" animate="show" className="text-center">
            <motion.h2 variants={textItem} className="text-6xl font-bold">
              Events & Partnerships
            </motion.h2>

            <motion.button
              variants={textItem}
              onClick={() => setOpen(true)}
              className="mt-6 px-8 py-3 bg-black text-white"
            >
              Explore Events
            </motion.button>
          </motion.div>
        </section>
      );

    default:
      return baseSection(
        ["100M+ Visitors","1200+ Stores","Luxury Avenue","Dining Experience","Entertainment Hub"][index - 1]
      );
  }
}

function baseSection(title) {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div variants={textContainer} initial="hidden" animate="show" className="text-center">
        <motion.h2 variants={textItem} className="text-6xl font-bold">
          {title}
        </motion.h2>
      </motion.div>
    </section>
  );
}
